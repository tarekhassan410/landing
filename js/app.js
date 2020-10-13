/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

//  Navigations links
const homeSelector = document.querySelector(".home-nav");
const locationSelector = document.querySelector(".location-nav");
const historySelector = document.querySelector(".history-nav");
const navbar = document.querySelector(".navbar__menu");

// Scetions selectors
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
homeSelector.addEventListener("click", () => {
  section1.scrollIntoView({ block: "center", behavior: "smooth" });
  homeSelector.classList.toggle("active-nav");
});
locationSelector.addEventListener("click", () => {
  section2.scrollIntoView({ block: "center", behavior: "smooth" });
  locationSelector.classList.toggle("active-nav");
});
historySelector.addEventListener("click", () => {
  section3.scrollIntoView({ block: "center", behavior: "smooth" });
  historySelector.classList.toggle("active-nav");
});

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

const sections = ["#section1", "#section2", "#section3"];
for (let section of sections) {
  document.querySelector(section).addEventListener("mouseover", function (e) {
    let classNameInsideNav = e.currentTarget.getAttribute("data-nav");

    if (
      !document
        .querySelector(`.${classNameInsideNav}`)
        .classList.contains("active-nav")
    ) {
      document
        .querySelector(`.${classNameInsideNav}`)
        .classList.toggle("active-nav");
    }
  });
}
for (let section of sections) {
  document.querySelector(section).addEventListener("mouseout", function (e) {
    let classNameInsideNav = e.currentTarget.getAttribute("data-nav");

    if (
      document
        .querySelector(`.${classNameInsideNav}`)
        .classList.contains("active-nav")
    ) {
      document
        .querySelector(`.${classNameInsideNav}`)
        .classList.toggle("active-nav");
    }
  });
}

// Set sections as active
