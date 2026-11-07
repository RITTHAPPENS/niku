// Fills drop circles once their list scrolls into view.
(function () {
  var lists = document.querySelectorAll('[data-fill]');
  if (!lists.length || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-fill');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('is-filled'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.35 });
  lists.forEach(function (list) { io.observe(list); });
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
