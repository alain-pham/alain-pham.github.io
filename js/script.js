"use strict";

const d = document,
    mediaBig = window.matchMedia("(min-width: 768px)"),
    menu = d.getElementById("menu"),
    menuLeft = d.getElementById("menu-left"),
    currentNum = d.getElementById("bg-num"),
    pages = d.getElementsByClassName("page"),
    pageContent = d.getElementsByClassName("page-content"),
    scrollIndic = d.getElementById("scroll-indicator"),
    scrollDots = d.querySelectorAll("#nav li a"),
    pageName = d.getElementById("page-name"),
    mainContent = d.querySelector("main"),
    diagLine = d.getElementsByClassName("diagonal-line"),
    viewportHeight = window.innerHeight;

const displayType = [
    "none", "block", "flex", "grid"
];

const sections = [
    "accueil", "à_propos", "jeux", "design", "contact"
];

/**
 * After logo animation stops
 */
function completeLoad() {
    d.querySelector("body").style.backgroundColor = "#191919";

    for (let i = 0; i < pages.length - 1; i++) {
        // Even = block
        if (i % 2 == 0) {
            pages[i].style.display = displayType[1];
        }

        // Odd = flex
        else {
            pages[i].style.display = displayType[2];
        }
    }

    // Contact page display flex
    d.getElementById("contact").style.display = displayType[2];

    // Homepage display flex
    pageContent[0].style.display = displayType[2];

    // UI elements are shown
    showDiagonal(0);
    d.getElementById("burger").style.display = displayType[2];
    d.getElementById("actual-page").style.display = displayType[1];
    d.getElementById("top-fade").style.display = displayType[1];

    // Navigation dots on desktop
    if (mediaBig.matches) {
        d.getElementById("nav").style.display = displayType[2];
    }
}

/**
 * Opening the menu
 */
function showMenu() {
    mainContent.style.filter = "blur(10px)";
    menu.style.display = displayType[2];
    menu.style.animation = "showMenu 0.25s forwards";

    if (mediaBig.matches) {
        menuLeft.style.animation = "menuLeftShow 0.1s forwards";
    }
}

/**
 * Closing the menu
 */
function hideMenu() {
    mainContent.style.filter = displayType[0];
    menu.style.animation = "hideMenu 0.25s forwards";

    setTimeout(() => {
        menu.style.display = displayType[0];
    }, 250);

    while (currentNum.lastChild) {
        currentNum.lastChild.remove();
    }
}

/**
 * Remove the current highlighted nav dot
 */
function removeDot() {
    for (let i = 0; i < scrollDots.length; i++) {
        scrollDots[i].classList.remove("current");
    }
}

/**
 * Behaviour when scrolling past sections
 */
function scrollNav() {
    // Home
    if (window.pageYOffset < viewportHeight) {
        removeDot();

        scrollDots[0].classList.add("current");
        pageName.innerText = sections[0];
    }

    // Hides the scroll indicator
    if (window.pageYOffset >= viewportHeight / 2) {
        scrollIndic.style.animation = "fadeOut 1s forwards";
    } 
    
    else {
        scrollIndic.style.animation = "fadeIn25 1s forwards";
    }

    // About
    if (window.pageYOffset >= viewportHeight * 0.75) {
        removeDot();
        showSection(1);
        showDiagonal(1);
    }

    // Portfolio
    if (window.pageYOffset >= viewportHeight * 1.75) {
        removeDot();
        showSection(2);
    }

    // Portfolio 2
    if (window.pageYOffset >= viewportHeight * 2.75) {
        removeDot();
        showSection(3);
        showDiagonal(2);
    }

    // Contact
    if (window.pageYOffset >= viewportHeight * 3.75) {
        removeDot();
        showSection(4);
    }
}

/**
 * Displays the current time
 */
function showTime() {
    const today = new Date();
    const currentTime = today.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    return (currentTime);
}

/**
 * Displays the section after scroll
 */
function showSection(iNum) {
    scrollDots[iNum].classList.add("current");
    pageName.innerText = sections[iNum];

    // Flex display
    pageContent[iNum].style.display = displayType[2];
}

/**
 * 
 */
function showDiagonal(iNum) {
    if (mediaBig.matches) {
        diagLine[iNum].style.display = "block";
    }
}