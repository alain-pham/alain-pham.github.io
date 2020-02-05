"use strict";

/**
 * Loads functions when the page is loaded
 */

(function () {
    var d = document,
        mediaBig = window.matchMedia("(min-width: 768px)"),
        logoLoader = d.getElementById("logoLoader"),
        circleLoader = d.querySelector(".circle"),
        burgerBtn = d.getElementById("burger"),
        closeBtn = d.getElementById("close-btn"),
        sectionName = d.getElementsByClassName("section-name"),
        contentMenu = d.getElementById("menu-left");

    // Logo animation at start
    setTimeout(() => {
        logoLoader.style.animation = "lighten 1s forwards";
    }, 3000);

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
    }, 4000);


    circleLoader.addEventListener("animationend", () => {
        circleLoader.parentNode.removeChild(circleLoader);
        completeLoad();
        // remove EventListener
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
    }

    // 
    window.addEventListener("scroll", scrollNav);

    // var scrollIndicator = d.getElementById("scroll-indicator");
    // scrollIndicator.addEventListener("click", () => {

    // });

})();