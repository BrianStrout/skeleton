let page = 0;
let arrayOfPages = Array.from(document.querySelectorAll(".page__sheet"));
let currentPage;
let command;
const pageMap = new Map();
// pageMap.set( 0, );
pageMap.set(1, "pull__up-page1");
pageMap.set(2, "pull__up-page2");
pageMap.set(3, "pull__up-page3");

const bookMap = [
  { pageNumber: 1, link: "linkToPage1", pageDiv: "pull__up-page1" },
  { pageNumber: 2, link: "linkToPage2", pageDiv: "pull__up-page2" },
  { pageNumber: 3, link: "linkToPage3", pageDiv: "pull__up-page3" },
];

const pageLoader = (flipTo) => {
  // console.log(arrayOfPages);
  console.log("current:", currentPage);
  if (!flipTo) {
    flipTo = "error";
    return;
  }
  // if (flipTo === currentPage) {
  //   return;
  // }
  for (const page of bookMap) {
    console.log(page);
    if (page.link === flipTo) {
      if (page.pageDiv === currentPage) {
        console.log("same page bruh");
        return;
      } else {
        // console.log(
        //   "this page coing in?",
        //   document.getElementById(`${page.pageDiv}`).classList
        // );
        document.getElementById(`${page.pageDiv}`).classList.remove("in__view");
      }
    }
  }

  // take the page called and compare it to the page on the screen
  // if different take the page on the screen and remove the inview CSS
  // than call in the new page over it
  //  remove the page behind

  // arrayOfPages.forEach((page) => {
  //   console.log(page);
  //   page.classList.remove("in__view");
  // });

  console.log(flipTo);

  setTimeout(() => {
    if (flipTo === "linkToPage1") {
      page = 1;
      currentPage = "pull__up-page1";
      document.getElementById("pull__up-page1").classList.add("called");
      document.getElementById("pull__up-page1").classList.add("in__view");

      document.getElementById("pull__up-page2").classList.remove("called");
      document.getElementById("pull__up-page3").classList.remove("called");

      // document.getElementById("pull__up-page4").classList.remove("called");
      return;
    }
    if (flipTo === "linkToPage2") {
      page = 2;
      document.getElementById("pull__up-page2").classList.add("called");
      document.getElementById("pull__up-page2").classList.add("in__view");

      document.getElementById("pull__up-page1").classList.remove("called");
      document.getElementById("pull__up-page3").classList.remove("called");
      // document.getElementById("pull__up-page4").classList.remove("called");
      return;
    }
    if (flipTo === "linkToPage3") {
      page = 3;
      document.getElementById("pull__up-page3").classList.add("called");
      document.getElementById("pull__up-page3").classList.add("in__view");

      document.getElementById("pull__up-page1").classList.remove("called");
      document.getElementById("pull__up-page2").classList.remove("called");
      // document.getElementById("pull__up-page4").classList.remove("called");
      return;
    }
  }, 1500);
};
export { pageLoader };
