// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// Optional emotion-detection demo (pulsing emoji)
const demoEmoji = document.createElement('div');
demoEmoji.innerHTML = '😊';
demoEmoji.style.position = 'fixed';
demoEmoji.style.bottom = '20px';
demoEmoji.style.right = '20px';
demoEmoji.style.fontSize = '2rem';
demoEmoji.style.animation = 'pulse 2s infinite';
document.body.appendChild(demoEmoji);

const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}`;
document.head.appendChild(style);