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
const sections = document.querySelectorAll("section");

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
const navbarList = document.querySelector("#navbar__list");
function buildMenu() {
  // for every section add nav link and get data-nav attribute
  // to add it as a class for navigation
  for (let section of sections) {
    let navItem = document.createElement("li");
    navItem.innerHTML = `<a class=${section.getAttribute("data-nav")}> ${
      section.querySelector("h2").textContent
    } </a>`;
    navbarList.appendChild(navItem);
  }
}

// Add class 'active' to section when near top of viewport
function addEventListenersToNav() {
  // This function runs after BuildMenu() function
  for (let nav of sections) {
    let item = nav.getAttribute("data-nav");
    document.querySelector(`.${item}`).addEventListener("click", () => {
      nav.scrollIntoView({ block: "start", behavior: "smooth" });
      document.querySelector(`.${item}`).classList.toggle("active");
      document.querySelectorAll("#navbar__list li a").forEach((navItem) => {
        if (navItem.classList.contains("active")) {
          navItem.classList.remove("active");
        }
      });
      if (!document.querySelector(`.${item}`).classList.contains("active")) {
        document.querySelector(`.${item}`).classList.toggle("active");
      }
    });
  }
}

// On scroll, get Y offset, comapre to Y offset of section and activate nav link
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  for (let section of sections) {
    if (
      window.pageYOffset >
      window.pageYOffset + section.getBoundingClientRect().top - 64
    ) {
      const item = section.getAttribute("data-nav");
      document.querySelector(`.${item}`).classList.toggle("active");
      document.querySelectorAll("#navbar__list li a").forEach((navItem) => {
        if (navItem.classList.contains("active")) {
          navItem.classList.remove("active");
        }
      });
      if (!document.querySelector(`.${item}`).classList.contains("active")) {
        document.querySelector(`.${item}`).classList.toggle("active");
      }
    }
  }
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Event listener after DOM loaded
window.addEventListener("DOMContentLoaded", () => {
  buildMenu();
  addEventListenersToNav();
});
