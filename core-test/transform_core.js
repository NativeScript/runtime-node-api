const PLATFORM = Deno.args[0] ?? "ios";

function checkFile(path) {
  try {
    return Deno.lstatSync(path).isFile;
  } catch (_e) {
    return false;
  }
}

function readDir(path) {
  for (
    const { name, isDirectory, isFile } of Deno.readDirSync(
      new URL(`./${path}`, import.meta.url),
    )
  ) {
    if (isDirectory) {
      readDir(`${path}/${name}`);
    } else if (isFile) {
      if (!name.endsWith(".js")) {
        continue;
      }

      if (name.match(/\.[a-z]+\.js$/) && !name.endsWith(`.${PLATFORM}.js`)) {
        continue;
      }

      const url = new URL(`./${path}/${name}`, import.meta.url);

      let code = Deno.readTextFileSync(url);

      const transformModuleSpec = (path, baseURL = url) => {
        if (path.startsWith("~/")) {
          path = path.slice(2);
          path = `${new URL("./", import.meta.url).pathname}${path}`;
          return path;
        } else if (path.startsWith("@nativescript/core")) {
          path = path.slice("@nativescript/core".length);
          path = `${new URL("./core", import.meta.url).pathname}${path}`;
          return transformModuleSpec(path, baseURL);
        }

        const pathURL = new URL(path, baseURL);

        let stat;
        try {
          stat = Deno.statSync(pathURL);
        } catch (_e) {
          stat = {};
        }

        if (stat.isDirectory) {
          const pathAsFile = new URL(pathURL);
          pathAsFile.pathname += `/index.${PLATFORM}.js`;
          if (checkFile(pathAsFile)) {
            path += `/index.${PLATFORM}.js`;
          } else {
            pathAsFile.pathname = pathURL.pathname + `/index.js`;
            if (checkFile(pathAsFile)) {
              path += `/index.js`;
            } else {
              pathAsFile.pathname = pathURL.pathname + "/package.json";
              if (checkFile(pathAsFile)) {
                const pkg = JSON.parse(
                  Deno.readTextFileSync(pathAsFile),
                );
                if (pkg.main) {
                  path += transformModuleSpec(
                    `./${pkg.main}`,
                    new URL(path + "/", baseURL),
                  ).slice(
                    1,
                  );
                }
              }
            }
          }
        }

        const pathAsFile = new URL(pathURL);
        pathAsFile.pathname += `.${PLATFORM}.js`;
        if (checkFile(pathAsFile)) {
          path += `.${PLATFORM}.js`;
        } else {
          pathAsFile.pathname = pathURL.pathname + `.js`;
          if (checkFile(pathAsFile)) {
            path += `.js`;
          }
        }

        return path;
      };

      for (const match of code.matchAll(/from '([a-zA-Z\/\.0-9\-]+)';/g)) {
        const path = match[1];
        const newPath = transformModuleSpec(path);
        if (path === newPath) {
          continue;
        }

        code = code.replace(
          match[0],
          `from '${newPath}';`,
        );

        // console.log(`Updated ESM spec ${match[0]} to ${path}`);
      }

      for (
        const match of code.matchAll(/require\('([\@a-zA-Z\/\.0-9\-~]+)'\)/g)
      ) {
        const path = match[1];
        const newPath = transformModuleSpec(path);
        if (path === newPath) {
          continue;
        }

        code = code.replace(
          match[0],
          `require('${newPath}')`,
        );

        // console.log(`Updated CommonJS spec ${match[0]} to ${newPath}`);
      }

      Deno.writeTextFileSync(url, code);
    }
  }
}

readDir("core");
