/* Lightweight site interactions, no dependencies. */
(function () {
  // Soft-handle placeholder links (resources/repos not wired up yet).
  document.querySelectorAll('[data-todo]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (el.getAttribute('href') === '#') {
        e.preventDefault();
        var was = el.getAttribute('data-label') || el.textContent.trim();
        el.setAttribute('data-label', was);
        el.style.opacity = '.6';
        el.title = 'Link to be wired up: ' + el.dataset.todo;
      }
    });
  });

  // Active-section highlight in the top nav.
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a.lk'));
  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    var sec = document.getElementById(id);
    if (sec) map[id] = a;
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        links.forEach(function (a) { a.style.color = ''; });
        var a = map[en.target.id];
        if (a) a.style.color = 'var(--blue)';
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
})();
