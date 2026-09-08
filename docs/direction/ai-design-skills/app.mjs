const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const dialog = document.querySelector('dialog');
const menuButton = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.menu-close');
const easing = 'cubic-bezier(0.32,0.72,0,1)';

if (dialog instanceof HTMLDialogElement && menuButton instanceof HTMLButtonElement && closeButton instanceof HTMLButtonElement) {
  document.documentElement.classList.add('js-ready');
  menuButton.hidden = false;
  menuButton.addEventListener('click', () => {
    dialog.showModal();
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Fechar menu');
    if (!motion.matches) {
      closeButton.querySelectorAll('span').forEach((line, index) => {
        line.animate([
          { transform: `translateY(${index === 0 ? -4 : 4}px) rotate(0deg)` },
          { transform: `translateY(0) rotate(${index === 0 ? 45 : -45}deg)` },
        ], { duration: 700, easing });
      });
      dialog.querySelectorAll('nav a').forEach((link, index) => {
        link.animate([{ opacity: 0, transform: 'translateY(48px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 700, delay: 100 + index * 50, easing, fill: 'backwards' });
      });
    }
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const links = dialog.querySelectorAll('nav a');
    const lastLink = links.item(links.length - 1);
    if (!(lastLink instanceof HTMLAnchorElement)) return;
    if (event.shiftKey && document.activeElement === closeButton) {
      event.preventDefault();
      lastLink.focus();
    } else if (!event.shiftKey && document.activeElement === lastLink) {
      event.preventDefault();
      closeButton.focus();
    }
  });
  dialog.addEventListener('close', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    menuButton.focus();
  });
  dialog.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      dialog.close();
      const target = document.querySelector(link.hash);
      if (target instanceof HTMLElement) {
        requestAnimationFrame(() => {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.scrollIntoView();
        });
      }
    });
  });
  window.matchMedia('(min-width: 601px)').addEventListener('change', (event) => {
    if (event.matches && dialog.open) dialog.close();
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    if (!motion.matches) {
      entry.target.animate([
        { opacity: 0, transform: 'translateY(64px)', filter: 'blur(12px)' },
        { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
      ], { duration: 850, easing });
    }
    revealObserver.unobserve(entry.target);
  }
}, { threshold: 0.08 });
document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

const tagline = document.querySelector('.tagline');
const words = Array.from(document.querySelectorAll('.tagline-line > span'));
const wordObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-lit');
      wordObserver.unobserve(entry.target);
    }
  }
}, { rootMargin: '0px 0px -20% 0px', threshold: 1 });
if (!motion.matches && tagline) {
  tagline.classList.add('is-observed');
  words.forEach((word, index) => {
    if (word instanceof HTMLElement) word.style.transitionDelay = `${index * 90}ms`;
    wordObserver.observe(word);
  });
}
motion.addEventListener('change', (event) => {
  if (!event.matches) return;
  document.getAnimations().forEach((animation) => animation.finish());
  tagline?.classList.remove('is-observed');
  wordObserver.disconnect();
});

const sectionLinks = document.querySelectorAll('.nav-pill a, dialog nav a');
const sections = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    sectionLinks.forEach((link) => {
      if (link instanceof HTMLAnchorElement && link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
}, { rootMargin: '-10% 0px -60% 0px' });
document.querySelectorAll('main > section[id]').forEach((section) => sections.observe(section));
