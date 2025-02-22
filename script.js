function toggleMenu() {
    let dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("dropdownMenu");
    let hamburger = document.querySelector(".hamburger");

    if (!dropdown.contains(event.target) && !hamburger.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});
