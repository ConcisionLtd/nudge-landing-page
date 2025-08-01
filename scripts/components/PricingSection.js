import template from '/templates/pricing-section.html?raw';

class PricingSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('pricing-section', PricingSection);
