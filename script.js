document.addEventListener('DOMContentLoaded', function () {
    const toggleSubmenuLinks = document.querySelectorAll('.toggle-submenu');
    const dropdowns = document.querySelectorAll('.dropdown');

    toggleSubmenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Stop direct navigation

            const submenu = this.nextElementSibling;

            // If submenu is already open, close it; otherwise, open it
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                // Hide all other open submenus
                dropdowns.forEach(menu => {
                    menu.style.display = 'none';
                });
                submenu.style.display = 'block';
            }
        });
    });

    // Hide submenu if clicked outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav')) {
            dropdowns.forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });

    // Allow clicking submenu items to navigate
    dropdowns.forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent submenu from closing when clicking inside it
        });
    });
});
