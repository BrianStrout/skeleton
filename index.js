console.log("index js running");
import { mediaQuery } from "./src/modules/mediaQuery";
import { clicker } from "./src/modules/clicker";

window.onload = () => {
  let view = mediaQuery();
  console.log(view);

  switch (view) {
    case "desktop":
      document.addEventListener("click", (e) => {
        e.preventDefault;
        clicker(e.target);
      });
      break;
    case "tablet":
      document.addEventListener("touchstart", (e) => {
        e.preventDefault;
        clicker(e.target);
      });
      break;
    case "mobile":
      document.addEventListener("touchstart", (e) => {
        e.preventDefault;
        clicker(e.target);
      });
  }
};
