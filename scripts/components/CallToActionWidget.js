import template from '/templates/call-to-action-widget.html?raw';

class CallToActionWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;

    this.querySelector('.heading').textContent = this.getAttribute('heading') || '';
  }
}

customElements.define('call-to-action-widget', CallToActionWidget);
