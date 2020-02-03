"use strict";

var d = document;
var mediaBig = window.matchMedia("(min-width: 768px)");
var menu = d.getElementById("menu");
var menuLeft = d.getElementById("menu-left");
var viewportHeight = window.innerHeight;
var scrollAmount = d.documentElement.scrollTop;

/**
 * 
 */
function completeLoad() {
    d.querySelector("body").style.backgroundColor = "#191919";

    var pages = d.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "block";
    }

    d.getElementById("interface").style.display = "block";
}

/**
 * 
 */
function showMenu() {
    menu.style.display = "flex";
    menu.style.animation = "showMenu 0.5s forwards";

    if (mediaBig.matches) {
        menuLeft.style.animation = "menuLeftShow 0.5s 0.5s forwards";
    }
}

/**
 * 
 */
function hideMenu() {
    menu.style.animation = "hideMenu 0.5s forwards";
    
    setTimeout(() => {
        menu.style.display = "none";
    }, 500);
}

/**
 * 
 */
function scrollNav() {
    if (scrollAmount >= viewportHeight) {
        alert("uwu");
    }
}
