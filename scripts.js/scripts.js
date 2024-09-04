document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });

    // Background parallax effect
    const backgroundImgs = document.querySelectorAll('.background-img-container img');
    window.addEventListener('scroll', function () {
        backgroundImgs.forEach((img) => {
            const speed = 0.5;  // Adjust this value to change the parallax speed
            const yPos = -(window.scrollY * speed);
            img.style.transform = `translateY(${yPos}px)`;
        });
    });
});
