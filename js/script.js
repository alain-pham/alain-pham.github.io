"use strict";

var d = document,
    mediaBig = window.matchMedia("(min-width: 768px)"),
    menu = d.getElementById("menu"),
    menuLeft = d.getElementById("menu-left"),
    pages = d.getElementsByClassName("page"),
    pageContent = d.getElementsByClassName("page-content"),
    scrollIndic = d.getElementById("scroll-indicator"),
    scrollDots = d.querySelectorAll("#nav li a"),
    pageName = d.getElementById("page-name"),
    viewportHeight = window.innerHeight;

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
    d.getElementById("actual-page").style.display = "block";
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
    // YEET AWAY THIS MESS LATER
    // Home
    if (window.pageYOffset < viewportHeight) {
        for (let i = 0; i < scrollDots.length; i++) {
            scrollDots[i].classList.remove("current");
        }

        scrollDots[0].classList.add("current");
        pageName.innerHTML = "home";
    }

    if (window.pageYOffset >= viewportHeight / 2) {
        scrollIndic.style.animation = "fadeOut 1s forwards";
    }

    else {
        scrollIndic.style.animation = " fadeIn25 1s forwards";
    }

    // About
    if (window.pageYOffset >= viewportHeight * 0.75) {
        for (let i = 0; i < scrollDots.length; i++) {
            scrollDots[i].classList.remove("current");
        }

        scrollDots[1].classList.add("current");
        pageName.innerHTML = "about";
    }

    // Portfolio
    if (window.pageYOffset >= viewportHeight * 1.75) {
        for (let i = 0; i < scrollDots.length; i++) {
            scrollDots[i].classList.remove("current");
        }

        scrollDots[2].classList.add("current");
        pageName.innerHTML = "portfolio";
    }

    // Contact
    if (window.pageYOffset >= viewportHeight * 2.75) {
        for (let i = 0; i < scrollDots.length; i++) {
            scrollDots[i].classList.remove("current");
        }

        scrollDots[3].classList.add("current");
        pageName.innerHTML = "contact";
    }
}