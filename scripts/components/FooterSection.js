import template from '/templates/footer-section.html?raw';

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('footer-section', Footer);
