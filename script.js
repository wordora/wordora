document.addEventListener('DOMContentLoaded', function () {
    const toggleSubmenuLinks = document.querySelectorAll('.toggle-submenu');
    const dropdowns = document.querySelectorAll('.dropdown');

    toggleSubmenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;

            // Hide all other open submenus
            dropdowns.forEach(menu => {
                if (menu !== submenu) {
                    menu.style.display = 'none';
                }
            });

            // Toggle the clicked submenu
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            this.classList.toggle('active');
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
});
