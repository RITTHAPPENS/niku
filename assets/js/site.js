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

// Anfrageformular: Anfrageart aus URL, Adresse bei Händleranfrage, Prüfung, Erfolgsmeldung (Entwurf ohne Versand)
(function () {
  var form = document.getElementById('anfrage-form');
  if (!form) return;
  var params = new URLSearchParams(location.search);
  var typ = params.get('typ');
  var produkt = params.get('produkt');
  if (typ) { var r = form.querySelector('input[name="anfrageart"][value="' + typ + '"]'); if (r) r.checked = true; }
  if (produkt) { form.produkt.value = produkt.replace(/-/g, ' ').replace(/^./, function (c) { return c.toUpperCase(); }); }
  var addr = form.querySelector('.addr');
  function syncAddr() {
    var isH = (form.querySelector('input[name="anfrageart"]:checked') || {}).value === 'haendler';
    addr.classList.toggle('is-shown', isH);
    form.adresse.required = isH;
  }
  form.addEventListener('change', syncAddr); syncAddr();
  function setErr(field, on) {
    var wrap = field.closest('.field');
    wrap.classList.toggle('is-invalid', on);
    var e = wrap.querySelector('.field-error'); if (e) e.hidden = !on;
    if (field.setAttribute) field.setAttribute('aria-invalid', on ? 'true' : 'false');
  }
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var first = null;
    var radio = form.querySelector('input[name="anfrageart"]:checked');
    document.getElementById('err-anfrageart').hidden = !!radio;
    if (!radio) first = form.querySelector('input[name="anfrageart"]');
    ['firma', 'name', 'email', 'adresse', 'datenschutz'].forEach(function (n) {
      var f = form.elements[n]; if (!f) return;
      var bad = f.required && (f.type === 'checkbox' ? !f.checked : !f.value.trim() || (f.type === 'email' && !f.checkValidity()));
      setErr(f, bad); if (bad && !first) first = f;
    });
    if (first) { first.focus(); return; }
    form.querySelector('.form-success').hidden = false;
    form.querySelector('.form-actions').hidden = true;
  });
})();
