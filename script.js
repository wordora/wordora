document.addEventListener('DOMContentLoaded', function () {
    const toggleSubmenuLinks = document.querySelectorAll('.toggle-submenu'); 
    const dropdowns = document.querySelectorAll('.dropdown');

    toggleSubmenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevents navigation if it's a link
            const submenu = this.nextElementSibling;

            // Hide all other open submenus before toggling the clicked one
            dropdowns.forEach(menu => {
                if (menu !== submenu) {
                    menu.style.display = 'none';
                }
            });

            // Toggle the clicked submenu
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Hide submenu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav')) {
            dropdowns.forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });

    // Prevent hiding submenu when clicking inside it
    dropdowns.forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
});
