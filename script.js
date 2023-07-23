const primaryNav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector("#nav-toggle");

navToggle.addEventListener("click", (e) => {
  e.preventDefault();

  const visibility = primaryNav.getAttribute("data-visible", false);
  console.log(visibility);

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", false);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", true);
  }
});
