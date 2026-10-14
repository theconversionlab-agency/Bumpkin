// ============ EDIT YOUR CONTENT HERE ============
// Each audience mode (nav toggle) has its own hero copy, hero screen and
// pinned-showcase features. `screen` picks an HTML screen from app-screens.js;
// or set `image: "assets/screens/1.png"` to use a real screenshot instead.
const INDIVIDUAL_FEATURES = [
  {
    eyebrow: "Your network",
    title: "Everyone you've met,<br>in one place",
    body: "Bumpkin is your directory of people, not just phone numbers. Search by name, event, city or profession and find them in seconds.",
    color: "#3ecf7a",
    screen: "directory",
  },
  {
    eyebrow: "Nearby",
    title: "See who's in<br>the room",
    body: "Switch on Nearby at an event and see who else is sharing. Connect with one tap instead of hunting for a pen.",
    color: "#5aa9ff",
    screen: "nearby",
  },
  {
    eyebrow: "Contacts",
    title: "Context on<br>every contact",
    body: "Every contact keeps their role, company and city, plus where you met. Find the right person even when you've forgotten their name.",
    color: "#c9a7f5",
    screen: "contacts",
  },
  {
    eyebrow: "Rewind",
    title: "Your month in<br>people",
    body: "A monthly recap of who you met and where. A quick way to see who you still owe a follow-up.",
    color: "#e8c06a",
    screen: "rewind",
  },
  {
    eyebrow: "Events",
    title: "Host it, and<br>everyone connects",
    body: "Create an event, and guests join by scanning the event QR or typing a short code. The whole guest list lands in a collection automatically.",
    color: "#f2a07b",
    screen: "events",
  },
];

const EVENT_FEATURES = [
  {
    eyebrow: "Create",
    title: "Set up an event<br>in a minute",
    body: "Name it, pick a date and venue, and Bumpkin gives you a QR code and short join code for the door.",
    color: "#f2a07b",
    screen: "events",
  },
  {
    eyebrow: "Check-in",
    title: "One scan at<br>the door",
    body: "Guests scan the event QR or type the code. No forms and no lanyards to print. They're in, and their card is shared.",
    color: "#3ecf7a",
    screen: "eventLive",
  },
  {
    eyebrow: "Live guest list",
    title: "Know who's<br>in the room",
    body: "Watch guests arrive in real time and filter by role or company, so you can make the right introductions.",
    color: "#5aa9ff",
    screen: "guests",
  },
  {
    eyebrow: "Recap",
    title: "Proof your event<br>worked",
    body: "See how many connections your guests made and who came, then follow up with everyone in one tap.",
    color: "#e8c06a",
    screen: "recap",
  },
];

const MODES = {
  individuals: {
    title: "Remember everyone you meet",
    sub: "Share your card with a scan. Bumpkin keeps every connection organised by where you met, what they do, and when.",
    heroScreen: "card",
    features: INDIVIDUAL_FEATURES,
  },
  events: {
    title: "Events where everyone connects",
    sub: "Guests check in with one scan, share their cards automatically, and leave with a list of everyone they met.",
    heroScreen: "eventLive",
    features: EVENT_FEATURES,
  },
};

// Dummy reviews — replace with real ones.
const REVIEWS = [
  ["I came home from a conference with 30 contacts and actually remembered who everyone was.", "Riya M. · Sep 2026"],
  ["Sharing my card by QR is so smooth. People don't even need the app to scan it.", "Kabir S. · Sep 2026"],
  ["Rewind is my favourite part. I go through it every month and send follow-ups.", "Ananya N. · Aug 2026"],
  ["We used Events for our business meet and everyone was connected before lunch.", "Dev V. · Aug 2026"],
  ["Finally stopped losing paper cards. Collections keep my clients and leads separate.", "Sana G. · Jul 2026"],
  ["Nearby is like magic at meetups. I just see who's around and say hi.", "Vikram J. · Jul 2026"],
];

// ============ Pinned showcase ============
const showcase = document.getElementById("showcase");
const copyEl = document.getElementById("showcaseCopy");
const screensEl = document.getElementById("showcaseScreens");
const dotsEl = document.getElementById("showcaseDots");
const glow = showcase.querySelector(".glow");

let features = [];
let current = -1;

function buildShowcase(list) {
  features = list;
  current = -1;
  copyEl.innerHTML = screensEl.innerHTML = dotsEl.innerHTML = "";
  list.forEach((f, i) => {
    copyEl.insertAdjacentHTML("beforeend",
      `<div class="feature-copy"><p class="eyebrow">${f.eyebrow}</p><h2>${f.title}</h2><p>${f.body}</p></div>`);
    screensEl.insertAdjacentHTML("beforeend",
      `<div class="screen">${f.image ? `<img src="${f.image}" alt="">` : SCREENS[f.screen]}</div>`);
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Go to feature ${i + 1}`);
    dot.addEventListener("click", () => {
      const top = showcase.offsetTop + i * window.innerHeight + 1;
      window.scrollTo({ top, behavior: "smooth" });
    });
    dotsEl.appendChild(dot);
  });
  // One viewport of scroll per feature, plus the pinned viewport itself.
  showcase.style.height = `${list.length * 100}vh`;
}

function setActive(i) {
  if (i === current) return;
  current = i;
  [copyEl.children, screensEl.children, dotsEl.children].forEach((list) =>
    [...list].forEach((el, j) => el.classList.toggle("active", j === i)));
  glow.style.background = `radial-gradient(circle, ${features[i].color}55, transparent 65%)`;
}

function onScroll() {
  const scrolled = window.scrollY - showcase.offsetTop;
  const step = Math.floor(scrolled / window.innerHeight);
  setActive(Math.min(features.length - 1, Math.max(0, step)));
  document.querySelector(".nav").classList.toggle("scrolled", window.scrollY > 40);
}

// ============ Audience toggle (For Individuals / For Events) ============
const heroTitle = document.getElementById("heroTitle");
const heroSub = document.getElementById("heroSub");
const heroScreen = document.getElementById("heroScreen");

function setMode(name) {
  const mode = MODES[name];
  document.querySelectorAll(".seg").forEach((b) => {
    const on = b.dataset.mode === name;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", on);
  });
  document.body.dataset.mode = name;
  heroTitle.textContent = mode.title;
  heroSub.textContent = mode.sub;
  heroScreen.innerHTML = `<div class="screen active">${SCREENS[mode.heroScreen]}</div>`;
  buildShowcase(mode.features);
  fitScreens();
  onScroll();
}

document.querySelectorAll(".seg").forEach((b) => b.addEventListener("click", () => {
  setMode(b.dataset.mode);
  // If the visitor is already past the hero, bring them back to the top of the new story.
  if (window.scrollY > showcase.offsetTop) window.scrollTo({ top: showcase.offsetTop, behavior: "smooth" });
}));
document.querySelectorAll("[data-mode-link]").forEach((a) => a.addEventListener("click", (e) => {
  e.preventDefault();
  setMode(a.dataset.modeLink);
  window.scrollTo({ top: 0, behavior: "smooth" });
}));

// ============ Reviews marquee ============
const reviewHTML = REVIEWS.map(([text, who]) => `<div class="review"><p>${text}</p><small>${who}</small></div>`).join("");
["reviewRow1", "reviewRow2"].forEach((id) => {
  document.getElementById(id).innerHTML = reviewHTML + reviewHTML; // duplicated for a seamless loop
});

// ============ Count-up number ============
const counter = document.querySelector("[data-count]");
new IntersectionObserver(([entry], obs) => {
  if (!entry.isIntersecting) return;
  obs.disconnect();
  const target = +counter.dataset.count;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min(1, (now - start) / 1600);
    counter.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString() + (p === 1 ? "+" : "");
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}, { threshold: 0.5 }).observe(counter);

// ============ Misc ============
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => { onScroll(); fitScreens(); });
setMode(new URLSearchParams(location.search).get("for") === "events" ? "events" : "individuals");
