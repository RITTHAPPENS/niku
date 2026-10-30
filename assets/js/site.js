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

// Product submenu: button toggles, Escape and outside click close.
(function () {
  var item = document.querySelector('.has-sub');
  if (!item) return;
  var btn = item.querySelector('.sub-toggle');
  function set(open) {
    item.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Produktlinien ausblenden' : 'Produktlinien anzeigen');
  }
  btn.addEventListener('click', function (e) { e.stopPropagation(); set(!item.classList.contains('is-open')); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && item.classList.contains('is-open')) { set(false); btn.focus(); }
  });
  document.addEventListener('click', function (e) { if (!item.contains(e.target)) set(false); });
})();
