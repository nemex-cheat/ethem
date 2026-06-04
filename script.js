document.addEventListener('DOMContentLoaded', () => {
    // Floating elements generator
    const heartsContainer = document.getElementById('hearts-container');
    const starsContainer = document.getElementById('stars-container');
    const flowersContainer = document.getElementById('flowers-container');

    const hearts = ['♥', '♡', '❤', '💖', '💕'];
    const stars = ['★', '✦', '✧', '⋆', '✨'];
    const flowers = ['❀', '✿', '❁', '🌸', '🌺'];

    function createFloatingElement(container, items, className) {
        const el = document.createElement('div');
        el.className = className;
        el.textContent = items[Math.floor(Math.random() * items.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.animationDuration = (Math.random() * 10 + 10) + 's';
        el.style.animationDelay = Math.random() * 5 + 's';
        el.style.fontSize = (Math.random() * 10 + 15) + 'px';
        container.appendChild(el);

        setTimeout(() => el.remove(), 20000);
    }

    setInterval(() => createFloatingElement(heartsContainer, hearts, 'heart'), 800);
    setInterval(() => createFloatingElement(starsContainer, stars, 'star'), 1200);
    setInterval(() => createFloatingElement(flowersContainer, flowers, 'flower'), 1500);

    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .section-header, .photo-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(15, 12, 41, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(15, 12, 41, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Photo placeholder click hint
    const photoPlaceholder = document.querySelector('.photo-placeholder');
    if (photoPlaceholder) {
        photoPlaceholder.addEventListener('click', () => {
            alert('GitHub Raw linkini HTML dosyasındaki img src kısmına yapıştırabilirsin!');
        });
    }
});
