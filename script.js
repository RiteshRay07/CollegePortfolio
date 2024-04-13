document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY ;

        if (scrollPosition >= 165) {
            navbar.style.top = '0';
        } else {
            navbar.style.top = '-100%';
        }
    });
});
