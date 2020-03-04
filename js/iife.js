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
        scrollIndicator = d.getElementById("scroll-indicator"),
        sectionTitle = d.getElementsByClassName("title-reveal"),
        portfolioTitle = d.getElementById("portfolio-title"),
        worksBtn = d.getElementsByClassName("btn-works");

    // Logo animation at start
    setTimeout(() => {
        logoLoader.style.animation = "lighten 1s forwards";
        d.getElementById("hexagons").style.display = displayType[1];
    }, 2100);

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
    }, 3000); /* 3000 */

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
            switch (i) {
                case 0:
                    // contentMenu.style.backgroundColor = "yellow";
                    break;

                case 1:
                    // contentMenu.style.backgroundColor = "green";
                    break;

                case 2:
                    // contentMenu.style.backgroundColor = "blue";
                    break;

                case 3:
                    // contentMenu.style.backgroundColor = "red";
                    break;
                default:
                    // contentMenu.style.backgroundColor = "transparent";
                    break;
            }
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
    portfolioTitle.addEventListener("animationend", () => {
        portfolioTitle.style.display = displayType[0];
        d.getElementById("projects").style.display = displayType[2];
    });

    //
    // HIDE #PROJECTS AND SHOW #PROJECTS-2
    // if (worksBtn) {

    // }

})();