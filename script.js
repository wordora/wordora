document.addEventListener("DOMContentLoaded", function () {
    // Select all dropdown menu triggers
    const dropdownTriggers = document.querySelectorAll("nav ul li > a");

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener("click", function (e) {
            const submenu = this.nextElementSibling;

            // Toggle the clicked submenu
            if (submenu && submenu.classList.contains("submenu")) {
                e.preventDefault(); // Prevent default link behavior
                submenu.classList.toggle("show");

                // Close other open submenus
                document.querySelectorAll(".submenu").forEach(menu => {
                    if (menu !== submenu) {
                        menu.classList.remove("show");
                    }
                });
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest("nav ul li")) {
            document.querySelectorAll(".submenu").forEach(menu => menu.classList.remove("show"));
        }
    });
});
