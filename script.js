document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".toggle-submenu");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Close all other dropdowns before opening the clicked one
            document.querySelectorAll(".dropdown").forEach(menu => {
                if (menu !== this.nextElementSibling) {
                    menu.style.display = "none";
                }
            });

            // Toggle dropdown visibility
            let dropdown = this.nextElementSibling;
            dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
        });
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest("nav")) {
            document.querySelectorAll(".dropdown").forEach(menu => {
                menu.style.display = "none";
            });
        }
    });
});
