const closeBtn = document.querySelector(".close");
const navBar = document.querySelector(".top_nav");

const navToogler = document.querySelector(".hambuger");
const navWrapper = document.querySelector(".ttt");

// function removenavbar() {
//   navBar.style.display = "none";
// }
// navBar.addEventListener("click", removenavbar);

// OR

// const removenavbar = () => {
//   navBar.style.display = "none";
//   console.log("Good Morning");
// };
// navBar.addEventListener("click", removenavbar);

// OR

const removenavbar = () => {
  navBar.classList.add("navbarRemover");
};
navBar.addEventListener("click", removenavbar);

// const hambugerbtn = document.querySelector(".hambuger");
// const opennav = document.querySelector(".ff_nav");

// const menuHambuger = () => {

// };
// opennav.addEventListener("click", menuHambuger);

navToogler.addEventListener("click", () => {
  console.log("Hello World");
  navWrapper.classList.toggle("active");
});
