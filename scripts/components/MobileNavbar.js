import template from '/templates/mobile-navbar.html?raw';

class MobileNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;

    const toggleButton = this.querySelector('.hamburger');
    const navPanel = this.querySelector('.offcanvas-panel');
    const navItems = navPanel.querySelectorAll('.nav-item');
    const overlay = this.querySelector('.overlay');

    // hamburger toggle
    if (toggleButton && navPanel) {
      toggleButton.addEventListener('click', () => {
        const isOpen = navPanel.hasAttribute('data-open');
        if (isOpen) {
          closeNavPanel();
        } else {
          openNavPanel();
        }
      });
    } else {
      console.error('MobileNavbar: missing .hamburger or .offcanvas-panel');
    }

    // close button
    const closeButton = this.querySelector('.close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        closeNavPanel();
      });
    } else {
      console.error('MobileNavbar: missing .close-button');
    }

    // close nav panel when clicking outside
    document.addEventListener('click', (e) => {
      const isOpen = navPanel.hasAttribute('data-open');
      if (!isOpen) return;

      const clickedInsidePanel = navPanel.contains(e.target);
      const clickedHamburger = toggleButton.contains(e.target);

      if (!clickedInsidePanel && !clickedHamburger) {
        closeNavPanel();
      }
    });

    // close nav panel when clicking on nav items
    navItems.forEach((item) => {
      item.addEventListener('click', () => closeNavPanel());
    });

    // functions
    const openNavPanel = () => {
      navPanel.setAttribute('data-open', '');
      toggleButton.setAttribute('aria-expanded', 'true');

      if (overlay) {
        overlay.hidden = false;
      }
    };

    const closeNavPanel = () => {
      navPanel.removeAttribute('data-open');
      toggleButton.setAttribute('aria-expanded', 'false');

      if (overlay) {
        overlay.hidden = true;
      }
    };
  }
}

customElements.define('mobile-navbar', MobileNavbar);
