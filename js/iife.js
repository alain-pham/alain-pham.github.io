"use strict";

/**
 * Loads functions when the page is loaded
 */

(function () {
    const d = document,
        mediaBig = window.matchMedia("(min-width: 768px)"),
        logoLoader = d.getElementById("logo-loader"),
        circleLoader = d.querySelector(".circle"),
        burgerBtn = d.getElementById("burger"),
        closeBtn = d.getElementById("close-btn"),
        sectionName = d.getElementsByClassName("section-name"),
        sectionNum = d.querySelectorAll("#sections li"),
        contentMenu = d.getElementById("menu-left"),
        scrollIndicator = d.getElementById("scroll-indicator"),
        worksTitle = d.getElementsByClassName("title-reveal");

    // Logo animation at start
    setTimeout(() => {
        logoLoader.style.animation = "lighten 1s forwards";
        d.getElementById("hexagons").style.display = displayType[1];
    }, 1100);

    setTimeout(() => {
        if (mediaBig.matches) {
            logoLoader.style.animation = "moveUp 1s forwards";
        } else {
            logoLoader.style.animation = "moveUpMobile 1s forwards";
        }

        logoLoader.style.opacity = 1;

        logoLoader.addEventListener("animationend", () => {
            circleLoader.style.animation = "expand 0.5s forwards";
        });
    }, 2000); /* 3000 */

    // Click on logo returns home
    logoLoader.addEventListener("click", () => {
        location.hash = "#home";
    });

    // After screen changes colour
    circleLoader.addEventListener("animationend", () => {
        circleLoader.parentNode.removeChild(circleLoader);
        completeLoad();
    })

    // Menu behaviour
    burgerBtn.addEventListener("click", showMenu);
    closeBtn.addEventListener("click", hideMenu);
    contentMenu.addEventListener("click", hideMenu);

    for (let i = 0; i < sectionName.length; i++) {
        sectionName[i].addEventListener("mouseover", () => {
            currentNum.textContent = sectionNum[i].dataset.num;
        });
        
        sectionName[i].addEventListener("click", hideMenu);
    }

    // Displays time in menu
    setInterval(() => {
        d.querySelector("time").textContent = showTime();
    }, 1000);

    // Update current dot nav
    window.addEventListener("scroll", scrollNav);

    // Scrolls to about section
    scrollIndicator.addEventListener("click", () => {
        location.hash = "#about";
    });

    // Displays section content after title animation
    worksTitle[0].addEventListener("animationend", () => {
        worksTitle[0].style.display = displayType[0];
        d.getElementById("projects").style.display = displayType[2];
    });

    worksTitle[1].addEventListener("animationend", () => {
        worksTitle[1].style.display = displayType[0];
        d.getElementById("projects-2").style.display = displayType[3];
    });

})();