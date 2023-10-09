document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const mainSection = document.querySelector(".main-section");

    /*************
     Navbar
     ***************/
    const header = document.querySelector(".navbar-section");

    window.addEventListener("scroll", function () {
        const mainRect = mainSection.getBoundingClientRect();

        if (mainRect.top <= 0) {
            header.classList.remove("start-style");
            header.classList.add("scroll-on");
        } else {
            header.classList.remove("scroll-on");
            header.classList.add("start-style");
        }
    });

    // Menu On Hover
    const navItems = document.querySelectorAll(".nav-item");
    const isLargeScreen = window.innerWidth > 750;

    function toggleNavClass(e) {
        let targetNavItem = e.target.closest(".nav-item");
        if (isLargeScreen) {
            targetNavItem.classList.add("show");
            setTimeout(function () {
                targetNavItem.classList.toggle("show", targetNavItem.matches(":hover"));
            }, 1);
        }
    }

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("mouseenter", toggleNavClass);
        navItems[i].addEventListener("mouseleave", toggleNavClass);
    }
});