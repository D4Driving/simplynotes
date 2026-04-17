/**
 * SimplyNotes — main.js
 * Scroll-reveal animations and shared utilities
 */

(function () {
  'use strict';

  /**
   * Initialize scroll-reveal animations for elements
   * @param {string[]} selectors - CSS selectors to animate
   * @param {Object} options - Animation options
   */
  function initScrollReveal(selectors = ['.product-card', '.audio-card', '.watch-card', '.free-piece', '.book-card', '.stat'], options = {}) {
    const {
      translateY = 18,
      duration = 450,
      threshold = 0.1
    } = options;

    if (!('IntersectionObserver' in window)) return;

    const style = document.createElement('style');
    style.textContent = `.reveal{opacity:0;transform:translateY(${translateY}px);transition:opacity ${duration}ms ease,transform ${duration}ms ease}.reveal.visible{opacity:1;transform:none}`;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    document.querySelectorAll(selectors.join(', ')).forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // Expose to global scope for other modules
  window.SimplyNotesUtils = {
    initScrollReveal
  };

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
  });

})();
