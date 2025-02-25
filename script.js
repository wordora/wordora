document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const mainMenu = document.getElementById('mainMenu');

    hamburgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
        mainMenu.classList.toggle('show');
    });

    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
