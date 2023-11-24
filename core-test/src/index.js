import "./compat.js";
import "../core/globals/index.js";
import { StackLayout, Application, Label } from "../core/index.js";

Application.run({
  create: () => {
    setTimeout(() => {
      alert("Hello World!");
    }, 1000);

    const stackLayout = new StackLayout();
    stackLayout.backgroundColor = "white";
    
    const label = new Label();
    label.text = "Hello World!";
    label.textAlignment = "center";
    label.fontSize = 24;
    label.color = "black";
    label.width = 200;
    label.height = 200;

    stackLayout.addChild(label);

    return stackLayout;
  },
});
