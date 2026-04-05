/**
 * SimplyNotes — components.js
 * Injects shared header and footer into every page.
 * Update NAV_LINKS or FOOTER_HTML once to change all pages.
 */

(function () {
  'use strict';

  /* ── Navigation links ────────────────────────────── */
  const NAV_LINKS = [
    { href: '/',                 label: 'Home' },
    { href: '/about',            label: 'About' },
    { href: '/sheet-music',      label: 'Sheet Music' },
    { href: '/music-downloads',  label: 'Music Downloads' },
    { href: '/books',            label: 'Books' },
    { href: '/free-downloads',   label: 'Free Downloads' },
    { href: '/contact',          label: 'Contact' },
  ];

  const LOGO_SVG = `
    <svg width="28" height="32" viewBox="0 0 30 34" fill="none" aria-hidden="true">
      <path d="M3 1H19L27 9V32a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"
            stroke="#9E2424" stroke-width="1.8" stroke-linejoin="round"/>
      <polyline points="19,1 19,9 27,9"
                stroke="#9E2424" stroke-width="1.8" stroke-linejoin="round" fill="none"/>
      <line x1="10" y1="25" x2="10" y2="16" stroke="#9E2424" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="18" y1="23" x2="18" y2="14" stroke="#9E2424" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="10" y1="16" x2="18" y2="14" stroke="#9E2424" stroke-width="1.8" stroke-linecap="round"/>
      <ellipse cx="9.2"  cy="25.8" rx="2.7" ry="1.9" fill="#9E2424" transform="rotate(-12 9.2 25.8)"/>
      <ellipse cx="17.2" cy="23.8" rx="2.7" ry="1.9" fill="#9E2424" transform="rotate(-12 17.2 23.8)"/>
    </svg>`;

  /* ── Build header HTML ───────────────────────────── */
  function buildHeader() {
    const current = window.location.pathname.replace(/\/$/, '') || '/';
    const links   = NAV_LINKS.map(l => {
      const active = (l.href === '/' ? current === '' || current === '/' : current.startsWith(l.href));
      return `<a href="${l.href}"${active ? ' aria-current="page"' : ''}>${l.label}</a>`;
    }).join('');

    return `
      <header class="site-header">
        <div class="container">
          <a href="/" class="site-logo" aria-label="SimplyNotes — Home">
            <div class="site-logo__icon">${LOGO_SVG}</div>
            <div class="site-logo__text">
              <span class="site-logo__name">SimplyNotes</span>
              <span class="site-logo__tagline">Learn to Play, Play to Learn</span>
            </div>
          </a>
          <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation">
            ${links}
            <a href="/sheet-music" class="btn btn-red">Shop Now</a>
          </nav>
          <button class="nav-toggle" id="nav-toggle"
                  aria-controls="primary-nav" aria-expanded="false"
                  aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>`;
  }

  /* ── Build footer HTML ───────────────────────────── */
  function buildFooter() {
    const FOOTER_LOGO_SVG = `
      <svg width="20" height="24" viewBox="0 0 30 34" fill="none" aria-hidden="true">
        <path d="M3 1H19L27 9V32a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"
              stroke="#E87878" stroke-width="1.8" stroke-linejoin="round"/>
        <polyline points="19,1 19,9 27,9" stroke="#E87878" stroke-width="1.8" stroke-linejoin="round" fill="none"/>
        <line x1="10" y1="25" x2="10" y2="16" stroke="#E87878" stroke-width="1.6" stroke-linecap="round"/>
        <line x1="18" y1="23" x2="18" y2="14" stroke="#E87878" stroke-width="1.6" stroke-linecap="round"/>
        <line x1="10" y1="16" x2="18" y2="14" stroke="#E87878" stroke-width="1.8" stroke-linecap="round"/>
        <ellipse cx="9.2"  cy="25.8" rx="2.7" ry="1.9" fill="#E87878" transform="rotate(-12 9.2 25.8)"/>
        <ellipse cx="17.2" cy="23.8" rx="2.7" ry="1.9" fill="#E87878" transform="rotate(-12 17.2 23.8)"/>
      </svg>`;

    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer__top">
            <div class="footer__brand">
              <a href="/" class="footer__logo" aria-label="SimplyNotes Home">
                ${FOOTER_LOGO_SVG}
                <div>
                  <span class="footer__logo-name">SimplyNotes</span>
                  <span class="footer__logo-tagline">Learn to Play, Play to Learn</span>
                </div>
              </a>
              <p>Original music and teaching resources for piano teachers and students worldwide.</p>
              <div class="footer__social">
                <a href="https://www.youtube.com/@galemea" class="footer__social-link"
                   target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="13" height="10" viewBox="0 0 44 32" aria-hidden="true">
                    <rect width="44" height="32" rx="7" fill="#FF0000"/>
                    <path d="M18 9L32 16L18 23V9Z" fill="white"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/simplynotesuk" class="footer__social-link"
                   target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" fill="#5898D4">
                    <path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9V15.5H7v-3.5h3.1V9.5c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12H17l-.5 3.5h-2.9v8.4C19.6 23 24 18 24 12z"/>
                  </svg>
                </a>
                <a href="https://open.spotify.com/artist/0c6MjycQm4zUPJJF3plDsj" class="footer__social-link"
                   target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                  <svg width="14" height="14" viewBox="0 0 40 40" aria-hidden="true">
                    <circle cx="20" cy="20" r="20" fill="#1DB954"/>
                    <path d="M28 26.5c-.3 0-.5-.1-.7-.2-3.8-2.3-8.6-2.8-14.2-1.5-.5.1-1-.2-1.1-.7-.1-.5.2-1 .7-1.1 6.1-1.4 11.4-.8 15.6 1.7.4.3.6.8.3 1.2-.2.4-.4.6-.6.6z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
            <div class="footer__col">
              <span class="footer__col-title">Shop</span>
              <ul>
                <li><a href="/sheet-music">PDF Books</a></li>
                <li><a href="/music-downloads">Music Downloads</a></li>
                <li><a href="/free-downloads">Free Downloads</a></li>
                <li><a href="/sheet-music">Exam Pieces</a></li>
              </ul>
            </div>
            <div class="footer__col">
              <span class="footer__col-title">Levels</span>
              <ul>
                <li><a href="/sheet-music">Beginner</a></li>
                <li><a href="/sheet-music">Elementary</a></li>
                <li><a href="/sheet-music">Intermediate</a></li>
                <li><a href="/sheet-music">Advanced</a></li>
              </ul>
            </div>
            <div class="footer__col">
              <span class="footer__col-title">Joanna</span>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/books">Amazon Books</a></li>
                <li><a href="https://www.youtube.com/@galemea" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="https://open.spotify.com/artist/0c6MjycQm4zUPJJF3plDsj" target="_blank" rel="noopener noreferrer">Spotify</a></li>
              </ul>
            </div>
            <div class="footer__col">
              <span class="footer__col-title">Contact</span>
              <ul>
                <li><a href="mailto:simplynotes.co.uk@gmail.com">simplynotes.co.uk@gmail.com</a></li>
                <li><a href="tel:+447595923805">+44 7595 923 805</a></li>
                <li><a href="/contact">Contact form</a></li>
                <li><a href="/contact">Store Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="footer__bottom">
            <span class="footer__copyright">&copy; ${new Date().getFullYear()} Joanna Bernat &amp; Robert Szatkowski</span>
            <span class="footer__domain">simplynotes.co.uk</span>
          </div>
        </div>
      </footer>`;
  }

  /* ── Inject on DOM ready ─────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    const headerSlot = document.getElementById('sn-header');
    const footerSlot = document.getElementById('sn-footer');

    if (headerSlot) headerSlot.outerHTML = buildHeader();
    if (footerSlot) footerSlot.outerHTML = buildFooter();

    // Re-init nav toggle after injection
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
  });

})();
