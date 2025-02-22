document.addEventListener("DOMContentLoaded", function () {
    // Select all menu items with submenus
    const dropdownToggles = document.querySelectorAll(".toggle-submenu");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Close all open menus first
            document.querySelectorAll(".dropdown").forEach(menu => {
                if (menu !== this.nextElementSibling) {
                    menu.classList.remove("active");
                }
            });

            // Toggle the clicked menu
            const submenu = this.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle("active");
            }
        });
    });

    // Close menus when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest("nav")) {
            document.querySelectorAll(".dropdown").forEach(menu => {
                menu.classList.remove("active");
            });
        }
    });
});
