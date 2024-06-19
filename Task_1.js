// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, #00a, #00f)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #00f, #00a)';
        }
    });
});
