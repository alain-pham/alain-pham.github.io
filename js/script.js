"use strict";

var d = document,
    mediaBig = window.matchMedia("(min-width: 768px)"),
    menu = d.getElementById("menu"),
    menuLeft = d.getElementById("menu-left"),
    pages = d.getElementsByClassName("page"),
    pageContent = d.getElementsByClassName("page-content"),
    viewportHeight = window.innerHeight,
    scrollAmount = d.documentElement.scrollTop;

/**
 * After logo animation stops
 */
function completeLoad() {
    d.querySelector("body").style.backgroundColor = "#191919";

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "block";
    }

    for (let i = 0; i < pageContent.length; i++) {
        pageContent[i].style.display = "flex";
    }

    d.getElementById("hexagons").style.display = "block";
    d.getElementById("interface").style.display = "block";
}

/**
 * Opening the menu
 */
function showMenu() {
    menu.style.display = "flex";
    menu.style.animation = "showMenu 0.5s forwards";

    if (mediaBig.matches) {
        menuLeft.style.animation = "menuLeftShow 0.5s 0.5s forwards";
    }
}

/**
 * Closing the menu
 */
function hideMenu() {
    menu.style.animation = "hideMenu 0.5s forwards";
    
    setTimeout(() => {
        menu.style.display = "none";
    }, 500);
}

/**
 * Behaviour when scrolling past sections
 */
function scrollNav() {
    if (scrollAmount >= viewportHeight / 2) {
        
    }
}