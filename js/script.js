// Preloader - Loading Screen
window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-container").classList.add("active");
  /* Activate Preloader */
  document.querySelector(".preloader").classList.add("fadeOut");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});

// Navbar Toggler - Hamburger Menu
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNav();
  document.body.classList.toggle("hide-scroll");
});
function hideSection() {
  document.querySelector("section.active").classList.toggle("fadeOut");
}
function toggleNav() {
  document.querySelector(".header").classList.toggle("active");
}
/* Active Section in Hamburger Menu */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNav();
    } else {
      hideSection();
      document.body.classList.add("hide-scroll");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fadeOut");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scroll");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 400);
  }
});

// About Section -- Tabs
const tabContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// Portfolio Section -- Popup
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePopup();
    portfolioDetails(e.target.parentElement);
  }
});
function togglePopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scroll");
  document.querySelector(".main").classList.toggle("scale-up");
}
document.querySelector(".pp-close").addEventListener("click", togglePopup);
function portfolioDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}
/* Hide Popup */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePopup();
  }
});
