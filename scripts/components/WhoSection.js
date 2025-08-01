import template from '/templates/who-section.html?raw';

class WhoSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('who-section', WhoSection);
