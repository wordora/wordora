document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".toggle-submenu");

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();

            // Close all dropdowns first
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                if (dropdown !== this.nextElementSibling) {
                    dropdown.style.display = "none";
                }
            });

            // Toggle the clicked one
            const submenu = this.nextElementSibling;
            submenu.style.display =
                submenu.style.display === "block" ? "none" : "block";
        });
    });

    // Close menu when clicking anywhere else
    document.addEventListener("click", function (event) {
        if (!event.target.closest("nav")) {
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                dropdown.style.display = "none";
            });
        }
    });
});
