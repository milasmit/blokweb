// JavaScript Document

var menu = document.querySelector("img");

menu.addEventListener("click", toggleMenu);

function toggleMenu(event){
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonMenu")
}
