/**
 * SimplyNotes — main.js
 * Mobile nav, scroll-reveal animations
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ── Mobile nav toggle ──────────────────────────── */
    const toggle = document.getElementById('nav-toggle');
    const nav    = document.getElementById('primary-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* ── Scroll-reveal ──────────────────────────────── */
    if ('IntersectionObserver' in window) {
      const style       = document.createElement('style');
      style.textContent = '.reveal{opacity:0;transform:translateY(18px);transition:opacity .45s ease,transform .45s ease}.reveal.visible{opacity:1;transform:none}';
      document.head.appendChild(style);

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll(
        '.product-card, .audio-card, .watch-card, .free-piece, .book-card, .stat'
      ).forEach(function (el) {
        el.classList.add('reveal');
        observer.observe(el);
      });
    }

  });

})();
