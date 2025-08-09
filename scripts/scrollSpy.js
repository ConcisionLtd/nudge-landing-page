export const initScrollSpy = () => {
  const sections = document.querySelectorAll('main > *[id]');
  const navItems = document.querySelectorAll('.nav-item');
  if (!sections.length || !navItems.length) return;

  const setActive = (id) => {
    navItems.forEach((item) => {
      const a = item.querySelector('a');
      item.classList.toggle('active', a && a.getAttribute('href') === `#${id}`);
    });
  };

  // get CSS scroll-padding-top so spy aligns with anchor offsets
  const sp = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length) {
        setActive(visible[0].target.id);
      }
    },
    {
      root: null,
      rootMargin: `-${sp}px 0px -60% 0px`,
      threshold: 0,
    }
  );

  sections.forEach((s) => observer.observe(s));
};
