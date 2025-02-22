document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".toggle-submenu");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();

            // Close all other dropdowns
            document.querySelectorAll(".dropdown").forEach(menu => {
                if (menu !== this.nextElementSibling) {
                    menu.classList.remove("active");
                }
            });

            // Toggle clicked dropdown
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
