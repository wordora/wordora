document.addEventListener('DOMContentLoaded', function () {
    const toggleSubmenuLinks = document.querySelectorAll('.toggle-submenu');
    const dropdowns = document.querySelectorAll('.dropdown');

    toggleSubmenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default link behavior

            const submenu = this.nextElementSibling;

            // Check if the submenu is already visible
            const isVisible = submenu.style.display === 'block';

            // Hide all other open submenus
            dropdowns.forEach(menu => {
                menu.style.display = 'none';
            });

            toggleSubmenuLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Toggle the clicked submenu
            if (!isVisible) {
                submenu.style.display = 'block';
                this.classList.add('active');
            }
        });
    });

    // Hide submenu if clicked outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav')) {
            dropdowns.forEach(menu => {
                menu.style.display = 'none';
            });
            toggleSubmenuLinks.forEach(link => {
                link.classList.remove('active');
            });
        }
    });

    // Ensure submenus are hidden on page load
    dropdowns.forEach(menu => {
        menu.style.display = 'none';
    });
});
