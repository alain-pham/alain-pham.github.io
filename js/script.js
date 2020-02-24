"use strict";

const d = document,
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

    for (let i = 0; i < pages.length - 1; i++) {
        pages[i].style.display = "block";
    }

    d.getElementById("contact").style.display = "flex";

    for (let i = 0; i < pageContent.length; i++) {
        pageContent[i].style.display = "flex";
    }

    d.getElementById("burger").style.display = "flex";
    d.getElementById("actual-page").style.display = "block";
    d.getElementById("top-fade").style.display = "block";

    if (mediaBig.matches) {
        d.getElementById("nav").style.display = "flex";
    }
}

/**
 * Opening the menu
 */
function showMenu() {
    menu.style.display = "flex";
    menu.style.animation = "showMenu 0.25s forwards";

    if (mediaBig.matches) {
        menuLeft.style.animation = "menuLeftShow 0.25s 0.25s forwards";
    }
}

/**
 * Closing the menu
 */
function hideMenu() {
    menu.style.animation = "hideMenu 0.25s forwards";
    
    setTimeout(() => {
        menu.style.display = "none";
    }, 500);
}

/**
 * Behaviour when scrolling past sections
 */
function scrollNav() {
    // YEET AWAY THIS MESS LATER
    const sections = [
        "home", "about", "portfolio", "contact"
    ];

    // Home
    if (window.pageYOffset < viewportHeight) {
        for (let i = 0; i < scrollDots.length; i++) {
            scrollDots[i].classList.remove("current");
        }

        scrollDots[0].classList.add("current");
        pageName.innerHTML = sections[0];
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
        pageName.innerHTML = sections[1];
    }

    // Portfolio
    if (window.pageYOffset >= viewportHeight * 1.75) {
        for (let i = 0; i < scrollDots.length; i++) {
            scrollDots[i].classList.remove("current");
        }

        scrollDots[2].classList.add("current");
        pageName.innerHTML = sections[2];
    }

    // Contact
    if (window.pageYOffset >= viewportHeight * 2.75) {
        for (let i = 0; i < scrollDots.length; i++) {
            scrollDots[i].classList.remove("current");
        }

        scrollDots[3].classList.add("current");
        pageName.innerHTML = sections[3];
    }
}