window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('main').classList.add('visible');
    initReveal();
    initTypewriter();
  }, 2700);
});

function initReveal() {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.10 });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
}

document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    var el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

function initTypewriter() {
  var el = document.getElementById('typewriter');
  if (!el) return;
  var names = ['Sofia', 'Laura', 'Ana', 'Clara', 'Beatriz', 'Júlia', 'Fernanda'];
  var ni = 0, ci = 0, del = false;
  function tick() {
    var cur = names[ni];
    if (!del) {
      el.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) { del = true; setTimeout(tick, 1400); return; }
      setTimeout(tick, 105);
    } else {
      el.textContent = cur.slice(0, --ci);
      if (ci === 0) { del = false; ni = (ni + 1) % names.length; setTimeout(tick, 300); return; }
      setTimeout(tick, 62);
    }
  }
  setTimeout(tick, 800);
}
