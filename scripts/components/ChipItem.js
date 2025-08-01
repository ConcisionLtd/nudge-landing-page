import template from '/templates/chip-item.html?raw';

class ChipItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;

    this.querySelector('.chip-text').textContent = this.getAttribute('text') || '';
  }
}

customElements.define('chip-item', ChipItem);
