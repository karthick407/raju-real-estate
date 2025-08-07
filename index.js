// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ScrollReveal Core Settings
const scrollRevealOption = {
    distance: '60px',
    duration: 1200,
    easing: 'ease',
    reset: false
};

// ScrollReveal Targets
ScrollReveal().reveal('.heading1, .section_title', {
    ...scrollRevealOption,
    origin: 'top',
    delay: 200
});

ScrollReveal().reveal('.para, .subtext, .description', {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 300
});

ScrollReveal().reveal('.box, .feature_card, .service_card', {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 400,
    interval: 200
});

ScrollReveal().reveal('.icon_box, .list_box, .box_2', {
    ...scrollRevealOption,
    origin: 'left',
    delay: 400,
    interval: 150
});

ScrollReveal().reveal('.cta_btn, .primary_btn', {
    ...scrollRevealOption,
    origin: 'top',
    delay: 500
});

ScrollReveal().reveal('.left, .img_left', {
    ...scrollRevealOption,
    origin: 'left',
    delay: 300
});

ScrollReveal().reveal('.right, .img_right, .right_box', {
    ...scrollRevealOption,
    origin: 'right',
    delay: 400
});

ScrollReveal().reveal('.img_center, .logo_center', {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 500
});

ScrollReveal().reveal('.footer_col, .footer_center, .footer_socials, .footer_links', {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 300,
    interval: 100
});

ScrollReveal().reveal('.navbar, .nav_logo, .nav_links', {
    ...scrollRevealOption,
    origin: 'top',
    delay: 100
});

ScrollReveal().reveal('.gallery_item, .testimonial_card', {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 300,
    interval: 200
});

ScrollReveal().reveal('.line, .divider', {
    ...scrollRevealOption,
    origin: 'top',
    delay: 150
});

// Hamburger Toggle Menu
const menuBtn = document.getElementById('menu_btn');
const navLinks = document.getElementById('nav_links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('ri-menu-line');
            icon.classList.add('ri-close-line');
        } else {
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-line');
        }
    });
}
