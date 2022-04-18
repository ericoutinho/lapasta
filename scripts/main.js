const btnMenu = document.querySelector(".menu-hamburguer")
const colapse = document.querySelector(".menu-links")

btnMenu.addEventListener("click", (event)=>{
    colapse.classList.toggle("show");
})