document.addEventListener("DOMContentLoaded", function() {
    let categories = document.querySelectorAll(".categories-section .categories-container .option");

    categories.forEach(function(category) {

        category.addEventListener("mouseover", function() {
            categories.forEach(function (cat) {
                cat.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});