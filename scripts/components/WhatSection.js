import template from '/templates/what-section.html?raw';

class WhatSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('what-section', WhatSection);
