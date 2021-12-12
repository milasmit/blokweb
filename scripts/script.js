// JavaScript Document

var menu = document.querySelector("header nav button");

menu.addEventListener("click", toggleMenu);

function toggleMenu(event){
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonMenu")
}
