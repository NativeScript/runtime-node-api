import "./compat.js";
import "../core/globals/index.js";
import { StackLayout, Application, Label } from "../core/index.js";

Application.run({
  create: () => {
    const stackLayout = new StackLayout();
    stackLayout.backgroundColor = "yellow";
    stackLayout.width = 300;
    stackLayout.height = 300;
    
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
