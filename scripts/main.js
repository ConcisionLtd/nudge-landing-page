import './components/DesktopNavbar.js';
import './components/MobileNavbar.js';
import './components/HeroSection.js';

// on scroll: show the navbar, hide the Nudge logo (desktop only)
const navbar = document.querySelector('.desktop-navbar');
const heroLogo = document.querySelector('.hero-logo');

let hasScrolled = false;

window.addEventListener('scroll', () => {
  const shouldShow = window.scrollY > 10;

  if (shouldShow && !hasScrolled) {
    navbar.classList.add('visible');
    navbar.classList.remove('hidden');

    heroLogo.classList.add('hidden');
    heroLogo.classList.remove('visible');

    hasScrolled = true;
  } else if (!shouldShow && hasScrolled) {
    navbar.classList.remove('visible');
    navbar.classList.add('hidden');

    heroLogo.classList.remove('hidden');
    heroLogo.classList.add('visible');

    hasScrolled = false;
  }
});
