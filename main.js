/* ═══════════════════════════════════════════════
   GROWTH ASSET TRADING — main.js
═══════════════════════════════════════════════ */

/* ── SCROLL ANIMATIONS ──────────────────────── */
(function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
})();

/* ── HAMBURGER MENU ─────────────────────────── */
(function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.classList.toggle('active', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ── SMOOTH SCROLL ──────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const hash = a.getAttribute('href');
    if (!hash || hash.length < 2) return; // skip bare "#" placeholder links

    a.addEventListener('click', (e) => {
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 66;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── COUNTER ANIMATION ──────────────────────── */
(function initCounters() {
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-count]').forEach((el) => observer.observe(el));
})();
