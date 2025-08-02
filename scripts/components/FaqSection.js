import template from '/templates/faq-section.html?raw';

class FaqSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('faq-section', FaqSection);
