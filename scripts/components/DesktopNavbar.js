import template from '/templates/desktop-navbar.html?raw';

class DesktopNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('desktop-navbar', DesktopNavbar);
