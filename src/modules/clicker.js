import { pageLoader } from "./pageLoader.js";
const clicker = (target) => {
  // console.log(target);

  if (target.classList.contains("header__link")) {
    // console.log("internal link", target.id);
    pageLoader(target.id);
  }
};

export { clicker };
