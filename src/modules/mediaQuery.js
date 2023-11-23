const mediaQueryTablet = window.matchMedia("(max-width: 1270px)");
const mediaQuerySmall = window.matchMedia("(max-width: 700px)");
// let inDeskView = false;
// let inMobileView = false;
// let inTabletView = true;

const mediaQuery = () => {
  if (mediaQuerySmall.matches) {
    return "mobile";
  } else if (mediaQueryTablet.matches) {
    return "tablet";
  } else {
    return "desktop";
  }
};

export { mediaQuery };
