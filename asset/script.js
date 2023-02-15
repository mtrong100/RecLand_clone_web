const toggle = document.querySelector(".toggle")
const menu = document.querySelector(".menu")
toggle.addEventListener("click", handleMenu)
function handleMenu() {
    menu.classList.add("active")
}
document.addEventListener("click", clickOutSide)
function clickOutSide(e) {
    if (!e.target.matches(".toggle") && !e.target.matches(".menu")) {
        menu.classList.remove("active")
    }
}