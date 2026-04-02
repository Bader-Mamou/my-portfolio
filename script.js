// 1. Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Contact Form Submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Visual feedback
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert('Message sent! Thank you for reaching out.');
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
        form.reset();
    }, 1500);
});

// 3. Simple Header Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 8%';
    } else {
        nav.style.padding = '1.5rem 8%';
    }
});