const openMenubtn = document.getElementById("menu-bar");
const closeMenubtn = document.getElementById("close-btn");

const sideMenu = document.querySelector(".side-menu");

const openMenu = () => {
    sideMenu.style.display = "block";
    openMenubtn.style.display = "none";
    closeMenubtn.style.display = "block";
}

const closeMenu = () => {
    sideMenu.style.display = "none";
    openMenubtn.style.display = "block";
    closeMenubtn.style.display = "none";
}

openMenubtn.addEventListener("click", openMenu);
closeMenubtn.addEventListener("click", closeMenu);


