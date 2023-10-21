document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const $mainSection = document.querySelector(".main-section");

    /*************
     Navbar
     ***************/
    const $navbarSection = document.querySelector(".navbar-section");

    window.addEventListener("scroll", function () {
        const mainRect = $mainSection.getBoundingClientRect();
        if (mainRect.top <= 0) {
            $navbarSection.classList.remove("start-style");
            $navbarSection.classList.add("scroll-on");
        } else {
            $navbarSection.classList.remove("scroll-on");
            $navbarSection.classList.add("start-style");
        }
    });

    // Menu On Hover
    const $navItems = document.querySelectorAll(".nav-item");
    const isLargeScreen = window.innerWidth > 750;

    function toggleNavClass(e) {
        let $targetNavItem = e.target.closest(".nav-item");
        setTimeout(function () {
            $targetNavItem.classList.toggle("show");
        }, 1);
    }

    for (let i = 0; i < $navItems.length; i++) {
        if(isLargeScreen){
            $navItems[i].addEventListener("mouseenter", toggleNavClass);
            $navItems[i].addEventListener("mouseleave", toggleNavClass);
        }else {
            $navItems[i].addEventListener("click", toggleNavClass);
        }
    }

    /*************
     Categories
     ***************/
    let $categories = document.querySelectorAll(".categories-section .categories-container .option");

    $categories.forEach(function ($category) {
        $category.addEventListener("mouseover", function () {
            $categories.forEach(function ($cat) {
                $cat.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});