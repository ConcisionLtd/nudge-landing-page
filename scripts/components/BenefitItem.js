import template from '/templates/benefit-item.html?raw';

class BenefitItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;

    this.querySelector('.benefit-heading').textContent = this.getAttribute('heading') || '';
    this.querySelector('.benefit-description').textContent = this.getAttribute('description') || '';
    this.querySelector('.benefit-icon').classList.add(...(this.getAttribute('icon-class') || '').split(' ').filter(Boolean));
  }
}

customElements.define('benefit-item', BenefitItem);
