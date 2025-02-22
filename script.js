document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    hamburgerIcon.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Hide dropdown menu if clicked outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav')) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Prevent hiding dropdown menu when clicking inside
    dropdownMenu.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});
