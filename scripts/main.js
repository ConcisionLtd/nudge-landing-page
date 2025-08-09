import './components/DesktopNavbar.js';
import './components/MobileNavbar.js';
import './components/CallToActionWidget.js';
import './components/HeroSection.js';
import './components/HowSection.js';
import './components/WorkflowStep.js';
import './components/WhatSection.js';
import './components/BenefitItem.js';
import './components/WhoSection.js';
import './components/ChipItem.js';
import './components/PricingSection.js';
import './components/FaqSection.js';
import './components/FooterSection.js';
import { initScrollSpy } from './scrollSpy.js';
import { initRevealOnScroll } from './revealOnScroll.js';

// on load: show the hero section elements
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.hero').classList.add('visible');
  }, 100);

  // nav scroll spy
  initScrollSpy();
  // reveal on scroll
  initRevealOnScroll();
});

// on scroll: show the navbar, hide the Nudge logo (desktop only)
const navbar = document.querySelector('.desktop-navbar');
const heroLogo = document.querySelector('.hero-logo');

let hasScrolled = false;

window.addEventListener('scroll', () => {
  const shouldShow = window.scrollY > 10;

  if (shouldShow && !hasScrolled) {
    navbar.classList.add('visible');
    navbar.classList.remove('hidden');

    heroLogo.classList.add('hidden-on-scroll');
    heroLogo.classList.remove('visible-on-scroll');

    hasScrolled = true;
  } else if (!shouldShow && hasScrolled) {
    navbar.classList.remove('visible');
    navbar.classList.add('hidden');

    heroLogo.classList.remove('hidden-on-scroll');
    heroLogo.classList.add('visible-on-scroll');

    hasScrolled = false;
  }
});
