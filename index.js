console.log("index js running");
import { mediaQuery } from "./src/modules/mediaQuery";

let inDev = false;
inDev = true;
let view;
window.onload = () => {
  view = mediaQuery();
  console.log(view);
};
