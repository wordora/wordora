document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        const button = item.querySelector(".toggle-submenu");
        const submenu = item.querySelector(".dropdown");

        button.addEventListener("click", function (event) {
            event.preventDefault();

            // Close all other menus
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            // Toggle the clicked menu
            item.classList.toggle("active");
        });
    });

    // Hide menus when clicking outside
    document.addEventListener("click", function (event) {
        let isClickInside = false;

        menuItems.forEach(item => {
            if (item.contains(event.target)) {
                isClickInside = true;
            }
        });

        if (!isClickInside) {
            menuItems.forEach(item => {
                item.classList.remove("active");
            });
        }
    });

    // Keyboard Accessibility (Pressing "Escape" closes the menu)
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            menuItems.forEach(item => {
                item.classList.remove("active");
            });
        }
    });
});
