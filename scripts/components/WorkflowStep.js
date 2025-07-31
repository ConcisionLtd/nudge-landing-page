import template from '/templates/workflow-step.html?raw';

class WorkflowStep extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;

    this.querySelector('.step-number').textContent = this.getAttribute('step') || '';
    this.querySelector('.step-heading').textContent = this.getAttribute('heading') || '';
    this.querySelector('.step-description').textContent = this.getAttribute('description') || '';
    this.querySelector('.step-image').src = this.getAttribute('image') || '';
  }
}

customElements.define('workflow-step', WorkflowStep);
