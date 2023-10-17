const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");
const right_panel = document.querySelector(".right-panel");

sign_up_btn.addEventListener("click", () => {
  console.log("sign-up-mode added");
  container.classList.add("sign-up-mode");
  right_panel.classList.remove("d-none");
});

sign_in_btn.addEventListener("click", () => {
  console.log("sign-up-mode removed");
  container.classList.remove("sign-up-mode");
});


