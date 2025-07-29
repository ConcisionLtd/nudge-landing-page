import template from '/templates/hero-section.html?raw';

class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('hero-section', HeroSection);
