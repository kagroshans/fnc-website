/* =============================================
   Freedom Note Capital — main.js
   Vanilla JS only. No libraries.
   - Mobile hamburger nav toggle
   - Accordion cards (one open at a time)
   ============================================= */

(function () {
  'use strict';

  /* ── Mobile Nav ── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is clicked
    navMenu.querySelectorAll('.navbar__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Card Accordion ── */
  const cards = document.querySelectorAll('[data-card]');

  function closeCard(card) {
    const body   = card.querySelector('.card__body');
    const toggle = card.querySelector('.card__toggle');
    if (!body || !toggle) return;
    body.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openCard(card) {
    const body   = card.querySelector('.card__body');
    const toggle = card.querySelector('.card__toggle');
    if (!body || !toggle) return;
    body.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  cards.forEach(function (card) {
    const trigger = card.querySelector('[data-card-trigger]');
    if (!trigger) return;

    trigger.addEventListener('click', function () {
      const isCurrentlyOpen = !card.querySelector('.card__body').hidden;

      // Close all cards first
      cards.forEach(closeCard);

      // If it wasn't open, open it
      if (!isCurrentlyOpen) {
        openCard(card);
      }
    });
  });

})();
