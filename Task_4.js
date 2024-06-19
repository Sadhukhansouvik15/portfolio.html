document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight) {
            element.classList.add('visible');
        }
    });
});

document.querySelectorAll('.project, .certificate').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('hover');
    });
});
