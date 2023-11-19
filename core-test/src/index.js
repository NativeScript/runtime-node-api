import "./compat.js";
import "../core/globals/index.js";
import { StackLayout, Application } from "../core/index.js";

Application.run({
  create: () => {
    const stackLayout = new StackLayout();
    stackLayout.backgroundColor = "yellow";
    return stackLayout;
  },
});
