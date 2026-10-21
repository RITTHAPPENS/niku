// Fills the container drops once they scroll into view.
(function () {
  var list = document.querySelector('[data-fill]');
  if (!list || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-fill');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { list.classList.add('is-filled'); io.disconnect(); }
    });
  }, { threshold: 0.35 });
  io.observe(list);
})();
