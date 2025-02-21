document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const menu = dropdown.querySelector('.dropdown-content');

        button.addEventListener('click', function (e) {
            e.preventDefault();
            const isOpen = dropdown.classList.contains('show');

            // Close all dropdowns
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));

            // Toggle the current dropdown
            if (!isOpen) {
                dropdown.classList.add('show');
            }
        });
    });

    // Close dropdowns if clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
        }
    });
});
