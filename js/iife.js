"use strict";

/**
 * Loads functions when the page is
 */

(function () {
    var d = document;
    var mediaBig = window.matchMedia("(min-width: 768px)");
    
    var logoLoader = d.getElementById("logoLoader");
    setTimeout(() => {
        logoLoader.style.animation = "lighten 1s forwards";
    }, 3000);

    setTimeout(() => {
        if (mediaBig.matches) {
            logoLoader.style.animation = "moveUp 1s forwards";
        }

        else {
            logoLoader.style.animation = "moveUpMobile 1s forwards";
        }
        
        logoLoader.style.opacity = 1;

        logoLoader.addEventListener("animationend", () => {
            circleLoader.style.animation = "expand 0.5s forwards";
        });
    }, 4000);

    var circleLoader = d.querySelector(".circle");
    circleLoader.addEventListener("animationend", () => {
        circleLoader.parentNode.removeChild(circleLoader);
        completeLoad();
        // remove EventListener
    })

    var burgerBtn = d.getElementById("burger");
    burgerBtn.addEventListener("click", showMenu);

    var closeBtn = d.getElementById("close-btn");
    closeBtn.addEventListener("click", hideMenu);

    var sectionName = d.getElementsByClassName("section-name");
    var contentMenu = d.getElementById("content-menu-left");
    for (let i = 0; i < sectionName.length; i++) {
        sectionName[i].addEventListener("mouseover", () => {
            switch (i) {
                case 0:
                    break;
                
                case 1:
                    break;

                case 2:
                    break;

                case 3:
                    break;
            }
        });
    }

    window.addEventListener("scroll", scrollNav);

})();