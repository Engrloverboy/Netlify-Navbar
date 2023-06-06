const closeBtn = document.querySelector(".close");
const navBar = document.querySelector(".top_nav");

const navToogler = document.querySelector(".hambuger");
const navWrapper = document.querySelector(".multi_step");

const removenavbar = () => {
  navBar.classList.add("navbarRemover");
};
navBar.addEventListener("click", removenavbar);

navToogler.addEventListener("click", () => {
  navWrapper.classList.toggle("active");
});
