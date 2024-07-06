const flexContainer = document.querySelector('.mbnav');

function flexClose(event) {
    if (event.target === flexContainer) closeMenu();
}

function openMenu() {
    const mobileNav = document.querySelector(".mobile-nav");
    const slideInText = document.querySelector(".mobile-nav .mbnav");
    slideInText.classList.add("slide-in");
    mobileNav.classList.add("fade-in");
    mobileNav.style.zIndex = 150;

    setTimeout(() => {
        flexContainer.addEventListener('click', flexClose);
    }, 500);
}

function closeMenu() {
    const mobileNav = document.querySelector(".mobile-nav");
    const slideInText = document.querySelector(".mobile-nav .mbnav");
    slideInText.classList.remove("slide-in");
    mobileNav.classList.remove("fade-in");

    flexContainer.removeEventListener('click', flexClose);
    setTimeout(() => {
        mobileNav.style.zIndex = -100;
    }, 500);
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

document.getElementById("menuButton").addEventListener("click", () => {
    openMenu();
});

document.getElementById("close").addEventListener("click", () => {
    closeMenu();
});

// Animation
const elements = document.querySelectorAll('.fadeInUp');

const options = {
    root: null,
    threshold: 0,
    rootMargin: '0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        };
    });
}, options);

elements.forEach(element => {
    observer.observe(element);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    };
});

const mobileNavs = document.querySelectorAll('.mobile-nav .mbnav nav ul li a');
mobileNavs.forEach((element) => {
    element.addEventListener("click", () => {
        closeMenu();
    });
});

document.getElementById("pageTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onload = function () {
    history.scrollRestoration = 'auto';
};