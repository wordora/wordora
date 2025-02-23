document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.getElementById("hamburgerMenu");
    let dropdown = document.getElementById("dropdownMenu");

    // ☰ Click Opens & Closes Dropdown
    hamburger.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdown.classList.toggle("show");
    });

    // Clicking Outside Closes ☰ Menu
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && !hamburger.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
});
