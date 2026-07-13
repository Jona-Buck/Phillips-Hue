document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.15 });

  reveals.forEach((el) => observer.observe(el));

  const topbar = document.querySelector('.topbar');
  let lastY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    topbar.style.transform = currentY > 24 && currentY > lastY ? 'translateY(-2px)' : 'translateY(0)';
    lastY = currentY;
  }, { passive: true });

  document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.faq-item[open]').forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});