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
    if (currentY > 24) {
      topbar.style.transform = currentY > lastY ? 'translateY(-2px)' : 'translateY(0)';
    } else {
      topbar.style.transform = 'translateY(0)';
    }
    lastY = currentY;
  }, { passive: true });
});
