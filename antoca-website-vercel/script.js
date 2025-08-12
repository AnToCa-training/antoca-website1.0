// Mobile nav
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Cookie banner (tech necessary only)
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
if (cookieBanner && cookieAccept) {
  if (!localStorage.getItem('cookie-ok')) cookieBanner.hidden = false;
  cookieAccept.addEventListener('click', () => {
    localStorage.setItem('cookie-ok', '1');
    cookieBanner.hidden = true;
  });
}

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Rotating slogans
const slogans = [
  "Weil mentale Stärke erlernbar ist.",
  "Mehr Selbstvertrauen. Mehr Möglichkeiten. Mehr Leben.",
  "Mentale Stärke, die bleibt."
];
const sloganEl = document.getElementById('slogan');
let idx = 0;
function rotateSlogan() {
  if (!sloganEl) return;
  idx = (idx + 1) % slogans.length;
  sloganEl.textContent = slogans[idx];
}
setInterval(rotateSlogan, 3500);

// Contact form handler (no backend; demo only)
async function handleSubmit(e) {
  e.preventDefault();
  const status = document.querySelector('.form-status');
  try {
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const out = await res.json();
    if (out.ok) {
      status.textContent = 'Danke! Deine Nachricht wurde versendet. Ich melde mich asap.';
      form.reset();
    } else {
      status.textContent = 'Ups – das hat nicht geklappt: ' + (out.error || 'Bitte später erneut versuchen.');
    }
  } catch (err) {
    status.textContent = 'Fehler beim Senden. Schreib mir direkt: office@antoca-training.com';
  }
  return false;
}
