document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const mainSection = document.querySelector(".main-section");

    /*************
     Navbar
     ***************/
    const header = document.querySelector(".start-style");
    const navbarNav = document.querySelector(".navbar-nav");
    const navbarBrand = document.querySelector(".navbar-brand");

    window.addEventListener("scroll", function () {
        const navbarRect = header.getBoundingClientRect();
        const mainRect = mainSection.getBoundingClientRect();
        //var scroll = window.pageYOffset || document.documentElement.scrollTop;

        if (navbarRect.top <= 0 && mainRect.top <= (navbarRect.height * -1)) {
            header.classList.remove("start-style");
            header.classList.add("scroll-on");
            navbarNav.classList.remove("m-auto");
            navbarNav.classList.add("ms-auto");
           // navbarBrand.classList.remove("d-none");
        } else {
            header.classList.remove("scroll-on");
            header.classList.add("start-style");
            navbarNav.classList.remove("ms-auto");
            navbarNav.classList.add("m-auto");
           /* setTimeout(function () {
                navbarBrand.classList.add("d-none");
            }, 0.3);*/
        }
    });

    // Animation
    const body = document.body;
    if (body.classList.contains("hero-anime")) {
        body.classList.remove("hero-anime");
    }

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