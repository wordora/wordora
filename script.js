document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".toggle-submenu");

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;

            // Close all dropdowns except the one being clicked
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                if (dropdown !== submenu) {
                    dropdown.style.display = "none";
                }
            });

            // Toggle the clicked submenu
            submenu.style.display =
                submenu.style.display === "block" ? "none" : "block";
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest("nav")) {
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                dropdown.style.display = "none";
            });
        }
    });

    // Ensure dropdowns close when clicking another main menu item
    document.querySelectorAll("nav > ul > li > a").forEach((menuItem) => {
        menuItem.addEventListener("click", function () {
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                dropdown.style.display = "none";
            });
        });
    });
});
