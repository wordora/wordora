document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.stopPropagation(); // Stop clicks from affecting other elements

            // Hide all dropdowns except the clicked one
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                if (dropdown !== item.querySelector(".dropdown")) {
                    dropdown.style.display = "none";
                }
            });

            // Toggle dropdown visibility
            let dropdown = item.querySelector(".dropdown");
            if (dropdown) {
                dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Hide dropdowns when clicking outside
    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown").forEach(dropdown => {
            dropdown.style.display = "none";
        });
    });
});
