/**
 * SimplyNotes — site.js
 * Renders the free pieces list from inline data.
 * No shop, no Stripe, no server calls.
 */

(function () {
  'use strict';

  /* ── Free pieces data ────────────────────────────── */
  var FREE_PIECES = [
    { title: 'Right Here Waiting',      composer: 'Richard Marx · Easy arrangement',  bg: '#EEE8F4' },
    { title: 'You Raise Me Up',         composer: 'Secret Garden · Easy arrangement', bg: '#EEF4EE' },
    { title: 'Never Gonna Give You Up', composer: 'Rick Astley · Easy arrangement',   bg: '#FFF0E8' },
    { title: 'Minuet in G',             composer: 'J.S. Bach · Classical',            bg: '#E8F2F8' },
    { title: 'Tango II (Habanera)',      composer: 'M. Seiber · Intermediate',         bg: '#F8ECF4' },
  ];

  /* ── Render free pieces ──────────────────────────── */
  function renderFreePieces() {
    var list = document.getElementById('free-pieces-list');
    if (!list) return;

    list.innerHTML = FREE_PIECES.map(function (p) {
      return [
        '<div class="free-piece">',
        '  <div class="free-piece__icon" style="background:' + p.bg + '" aria-hidden="true">',
        '    <svg width="10" height="12" viewBox="0 0 12 14" fill="var(--color-navy)">',
        '      <path d="M2 1l9 6-9 6V1z"/>',
        '    </svg>',
        '  </div>',
        '  <div class="free-piece__info">',
        '    <div class="free-piece__title">' + p.title + '</div>',
        '    <div class="free-piece__composer">' + p.composer + '</div>',
        '  </div>',
        '  <span class="badge-free">FREE</span>',
        '</div>',
      ].join('\n');
    }).join('\n') +
    '<p class="free-downloads__note">Subscribe via email below to receive all 5 as PDF downloads</p>';
  }

  document.addEventListener('DOMContentLoaded', renderFreePieces);

})();
