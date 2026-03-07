/* CV site — script.js
   - Mobile hamburger menu toggle
   - Active nav link highlight on scroll
*/

(function () {
  'use strict';

  // ── Mobile menu ─────────────────────────────────────────────────
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('open');
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
    });
  });

  // ── Active nav highlight ─────────────────────────────────────────
  const sections = document.querySelectorAll('main [id]');
  const navLinks  = document.querySelectorAll('.nav__links a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
})();
