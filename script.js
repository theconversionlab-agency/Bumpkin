// ============ EDIT YOUR CONTENT HERE ============
// Pinned showcase: one entry per feature. Add `image: "assets/screens/1.png"`
// to show a real app screenshot inside the phone instead of the placeholder.
const FEATURES = [
  {
    eyebrow: "Step one",
    title: "See where you<br>are today",
    body: "Explain your first key feature in one or two short sentences.",
    color: "#4f7bff",
    placeholder: `<p class="ph-label">Your level</p><p class="ph-title">Intermediate <em>B2</em></p><div class="ph-ring"></div>`,
  },
  {
    eyebrow: "Step two",
    title: "Get a plan<br>made for you",
    body: "Explain how your app adapts to each person.",
    color: "#a35bff",
    placeholder: `<p class="ph-label">Your plan</p><p class="ph-title">This week</p><div class="ph-bars"><i style="--w:80%"></i><i style="--w:55%"></i><i style="--w:35%"></i><i style="--w:65%"></i></div>`,
  },
  {
    eyebrow: "Step three",
    title: "Practice in<br>real moments",
    body: "Describe the core interaction people have with your app.",
    color: "#2ee87a",
    placeholder: `<p class="ph-label">Live session</p><div class="ph-bubbles"><span>Hi! What would you like to work on?</span><span>Something for tomorrow.</span><span>Great, let's start.</span></div>`,
  },
  {
    eyebrow: "Step four",
    title: "Instant, clear<br>feedback",
    body: "Show what users get back after each session.",
    color: "#ff9f43",
    placeholder: `<p class="ph-label">Session score</p><p class="ph-title">86 / 100</p><div class="ph-ring"></div>`,
  },
  {
    eyebrow: "Step five",
    title: "Watch your<br>progress grow",
    body: "Close the story with streaks, stats, or milestones.",
    color: "#ff5c8a",
    placeholder: `<p class="ph-label">Progress</p><p class="ph-title">12-day streak</p><div class="ph-bars"><i style="--w:30%"></i><i style="--w:50%"></i><i style="--w:70%"></i><i style="--w:90%"></i></div>`,
  },
];

const REVIEWS = [
  ["Replace with a real user review. Short and specific works best.", "Name · Month 2026"],
  ["Another review talking about a feature people love.", "Name · Month 2026"],
  ["A review about how quickly they saw results.", "Name · Month 2026"],
  ["A review about how easy it is to get started.", "Name · Month 2026"],
  ["A review that mentions a specific use case.", "Name · Month 2026"],
  ["A review comparing it favourably to alternatives.", "Name · Month 2026"],
];

// ============ Pinned showcase ============
const showcase = document.getElementById("showcase");
const copyEl = document.getElementById("showcaseCopy");
const screensEl = document.getElementById("showcaseScreens");
const dotsEl = document.getElementById("showcaseDots");
const glow = showcase.querySelector(".glow");

FEATURES.forEach((f, i) => {
  copyEl.insertAdjacentHTML("beforeend",
    `<div class="feature-copy"><p class="eyebrow">${f.eyebrow}</p><h2>${f.title}</h2><p>${f.body}</p></div>`);
  screensEl.insertAdjacentHTML("beforeend",
    `<div class="screen" style="--c:${f.color}">${f.image ? `<img src="${f.image}" alt="">` : f.placeholder}</div>`);
  const dot = document.createElement("button");
  dot.setAttribute("aria-label", `Go to feature ${i + 1}`);
  dot.addEventListener("click", () => {
    const top = showcase.offsetTop + i * window.innerHeight + 1;
    window.scrollTo({ top, behavior: "smooth" });
  });
  dotsEl.appendChild(dot);
});

// One viewport of scroll per feature, plus the pinned viewport itself.
showcase.style.height = `${FEATURES.length * 100}vh`;

let current = -1;
function setActive(i) {
  if (i === current) return;
  current = i;
  [copyEl.children, screensEl.children, dotsEl.children].forEach((list) =>
    [...list].forEach((el, j) => el.classList.toggle("active", j === i)));
  glow.style.background = `radial-gradient(circle, ${FEATURES[i].color}55, transparent 65%)`;
}

function onScroll() {
  const scrolled = window.scrollY - showcase.offsetTop;
  const step = Math.floor(scrolled / window.innerHeight);
  setActive(Math.min(FEATURES.length - 1, Math.max(0, step)));
  document.querySelector(".nav").classList.toggle("scrolled", window.scrollY > 40);
}

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
document.querySelectorAll(".seg").forEach((b) => b.addEventListener("click", () => {
  document.querySelectorAll(".seg").forEach((x) => x.classList.toggle("active", x === b));
}));
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();
