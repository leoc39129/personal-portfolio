function toggleMenu() {
    const menu = document.querySelector(".menu-links")  /* see menu links in html */
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}