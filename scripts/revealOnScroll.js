export const initRevealOnScroll = () => {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const sp = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: `-${sp}px 0px -10% 0px`,
      threshold: 0,
    }
  );

  els.forEach((el) => io.observe(el));
};
