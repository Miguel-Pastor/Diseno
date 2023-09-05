const sign_in_btn = document.querySelector("#ciudad-boton");
const sign_up_btn = document.querySelector("#ticket-boton");
const contenedor = document.querySelector(".contenedor");

sign_up_btn.addEventListener("click", () => {
  contenedor.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  contenedor.classList.remove("sign-up-mode");
});

