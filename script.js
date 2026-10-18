const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const orbit = document.querySelector('.hero-orbit');
if (orbit && !reduceMotion) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    orbit.style.transform = `translateY(-50%) rotateX(${y * -3}deg) rotateY(${x * 4}deg)`;
    orbit.style.setProperty('--pointer-x', `${x * 12}px`);
    orbit.style.setProperty('--pointer-y', `${y * 12}px`);
  }, { passive: true });
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
sections.forEach((section) => observer.observe(section));

const revealItems = document.querySelectorAll('.timeline-item, .project-card, .achievement-card, .certificate-card, .skill-group');
if ('IntersectionObserver' in window && !reduceMotion) {
  revealItems.forEach((item) => { item.style.opacity = '0'; item.style.transform = 'translateY(15px)'; });
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.transition = 'opacity .6s ease, transform .6s ease';
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      obs.unobserve(entry.target);
    });
  }, { threshold: .12 });
  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', () => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.setAttribute('tabindex', '-1');
  });
});
