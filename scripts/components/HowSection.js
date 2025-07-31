import template from '/templates/how-section.html?raw';

class HowSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('how-section', HowSection);
