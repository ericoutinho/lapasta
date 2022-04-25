const btnMenu = document.querySelector(".menu-hamburguer")

btnMenu.addEventListener("click", (event) => {
    event.target.classList.toggle("open");
})