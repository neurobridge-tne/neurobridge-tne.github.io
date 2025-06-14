window.addEventListener('scroll', function() {
    const navBar = document.querySelector('table.fixed-nav');
    if (window.scrollY > 70) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});