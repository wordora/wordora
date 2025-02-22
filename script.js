document.addEventListener("DOMContentLoaded", function () {
    // Get all dropdown menu triggers
    const menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            let submenu = this.querySelector("ul");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector("ul");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});
