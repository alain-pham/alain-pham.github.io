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
        contentMenu = d.getElementById("menu-left"),
        scrollIndicator = d.getElementById("scroll-indicator");

    // Logo animation at start
    setTimeout(() => {
        logoLoader.style.animation = "lighten 1s forwards";
        d.getElementById("hexagons").style.display = "block";
    }, 3100);

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
    }, 4000); /* 4000 */

    logoLoader.addEventListener("click", () => {
        location.hash = "#home"
    });

    circleLoader.addEventListener("animationend", () => {
        circleLoader.parentNode.removeChild(circleLoader);
        completeLoad();
    })

    // Menu behaviour
    burgerBtn.addEventListener("click", showMenu);
    closeBtn.addEventListener("click", hideMenu);

    for (let i = 0; i < sectionName.length; i++) {
        sectionName[i].addEventListener("mouseover", () => {
            switch (i) {
                case 0:
                    contentMenu.style.backgroundColor = "yellow";
                    break;

                case 1:
                    contentMenu.style.backgroundColor = "green";
                    break;

                case 2:
                    contentMenu.style.backgroundColor = "blue";
                    break;

                case 3:
                    contentMenu.style.backgroundColor = "red";
                    break;
                default:
                    contentMenu.style.backgroundColor = "red";
                    break;
            }
        });

        sectionName[i].addEventListener("click", hideMenu);
    }

    // Update current dot nav
    window.addEventListener("scroll", scrollNav);

    // Scrolls to about section
    scrollIndicator.addEventListener("click", () => {
        location.hash = "#about";
    });

})();