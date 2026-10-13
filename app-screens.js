// HTML recreations of the app's screens, filled with dummy data.
// Each screen is drawn at a fixed 360×780 and scaled to fit the phone mockup.
// To use a real screenshot instead, set `image:` on a feature in script.js.

const I = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".6"/>',
  scan: '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M7 12h10"/>',
  userPlus: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/>',
  archive: '<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M10 13h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13" r="3.5"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  megaphone: '<path d="M3 11v3a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1zM17 9a4 4 0 0 1 0 6"/>',
  keypad: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
};
const icon = (name, size = 20) =>
  `<svg class="i" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${I[name]}</svg>`;

// Avatar: initials on a tinted circle
const AV = {
  green: ["#1f3a24", "#9be29f"], rust: ["#3d2018", "#f2a07b"], purple: ["#7b1fa2", "#fff"],
  orange: ["#f4511e", "#fff"], plum: ["#2f2440", "#c9a7f5"], bronze: ["#3a2c18", "#e8c06a"],
  teal: ["#123a3a", "#7fe0d6"], blue: ["#1b2c4f", "#8fb4ff"], ink: ["#000", "#fff"],
};
const av = (txt, tone, size = 56) => {
  const [bg, fg] = AV[tone];
  return `<span class="a-av" style="width:${size}px;height:${size}px;background:${bg};color:${fg};font-size:${size * 0.4}px">${txt}</span>`;
};

const tabbar = (active) => `
  <nav class="a-tabs">
    ${[["grid", "Directory"], ["users", "Contacts"], ["history", "Rewind"], ["calendar", "Events"]]
      .map(([ic, label]) => `<span class="${label === active ? "on" : ""}">${icon(ic, 22)}${label}</span>`).join("")}
  </nav>`;

const SCREENS = {
  card: `
    <div class="app">
      <div class="a-row a-pad" style="justify-content:space-between;margin-top:46px">
        <span class="a-circle">${icon("back")}</span><span class="a-circle">${icon("gear")}</span>
      </div>
      <div class="a-pad a-row" style="gap:14px;margin-top:18px">
        <div style="position:relative">${av("AK", "teal", 70)}<span class="a-cam">${icon("camera", 12)}</span></div>
        <div><div class="a-serif" style="font-size:26px">Aarav Kapoor</div>
          <div class="a-muted">Founder · Studio North</div><div class="a-muted">Mumbai</div></div>
      </div>
      <p class="a-pad" style="margin-top:14px">Designing brands that people remember</p>
      <div class="a-pad a-row" style="gap:8px;margin-top:12px">
        <span class="a-chip green">Branding</span><span class="a-chip">UI UX</span><span class="a-chip dashed">+ Add skill</span>
      </div>
      <div class="a-box" style="margin:18px 18px 0;text-align:center;padding:18px">
        <div class="a-muted" style="font-weight:600">Your business card</div>
        <div class="a-qr"><img src="assets/qr-card.svg" alt=""></div>
        <div class="a-muted" style="font-size:11px">Any phone camera can scan this, no app needed</div>
        <div class="a-btn-light">${icon("share", 18)} Share my card</div>
      </div>
      <div class="a-pad a-row" style="justify-content:space-between;margin-top:18px"><b>Contact &amp; socials</b><span class="a-green">Edit</span></div>
      <div class="a-box a-row" style="margin:10px 18px 0;padding:12px 14px;justify-content:space-between">
        <span class="a-row" style="gap:10px">${icon("phone", 18)} +91 90000 00000</span><span class="a-tag">Public</span>
      </div>
      <div class="a-box a-row" style="margin:8px 18px 0;padding:12px 14px;justify-content:space-between">
        <span class="a-row" style="gap:10px">${icon("mail", 18)} aarav@studionorth.co</span><span class="a-tag">Public</span>
      </div>
    </div>`,

  directory: `
    <div class="app">
      <div class="a-row a-pad a-top" style="justify-content:space-between">
        ${av("AK", "teal", 44)}
        <div class="a-row" style="gap:8px">
          <span class="a-nearby">${icon("wifi", 16)} Nearby</span>
          <span class="a-circle sm">${icon("scan", 18)}</span><span class="a-circle sm">${icon("userPlus", 18)}</span><span class="a-circle sm">${icon("bell", 18)}</span>
        </div>
      </div>
      <div class="a-search">${icon("search", 18)} Search name, event, city, profession…</div>
      <div class="a-box" style="margin:14px 18px 0;padding:16px 18px">
        <div class="a-muted">Your network</div><div class="a-serif" style="font-size:52px;line-height:1">128 people</div>
      </div>
      <b class="a-pad" style="display:block;margin-top:20px">Collections</b>
      <div class="a-row" style="gap:14px;padding:12px 18px 0;overflow:hidden">
        ${[["M", "green", "Meetups", 12], ["C", "rust", "Clients", 9], ["D", "purple", "Design", 7], ["F", "bronze", "Founders", 15], ["N", "orange", "Nearby", 4]]
          .map(([l, t, n, c]) => `<div class="a-col">${av(l, t, 56)}<span class="a-badge">${c}</span><span>${n}</span></div>`).join("")}
      </div>
      <div class="a-pad a-row" style="justify-content:space-between;margin-top:20px"><b>Fresh connects</b><span class="a-green">See all</span></div>
      ${[["RM", "blue", "Riya Mehta", "Meetup"], ["KS", "purple", "Kabir Shah", "Design"], ["NW", "ink", "Northwind Co.", "Scanned"]]
        .map(([i, t, n, tag]) => `<div class="a-box a-row" style="margin:10px 18px 0;padding:12px 14px;justify-content:space-between"><span class="a-row" style="gap:12px">${av(i, t, 40)}<b>${n}</b></span><span class="a-tag">${tag}</span></div>`).join("")}
      ${tabbar("Directory")}
    </div>`,

  nearby: `
    <div class="app">
      <div class="a-row a-pad a-top" style="justify-content:space-between">
        <span class="a-circle">${icon("back")}</span><span class="a-nearby on">${icon("wifi", 16)} Nearby is on</span>
      </div>
      <div class="a-pad" style="margin-top:18px"><div class="a-serif" style="font-size:34px">Who's here</div>
        <div class="a-muted">Startup Mixer · 23 people sharing</div></div>
      <div class="a-radar">
        <i></i><i></i><i></i>
        <span class="me">${av("AK", "teal", 52)}</span>
        <span style="top:12%;left:58%">${av("RM", "blue", 42)}</span>
        <span style="top:40%;left:8%">${av("PS", "rust", 40)}</span>
        <span style="top:66%;left:66%">${av("VJ", "bronze", 44)}</span>
        <span style="top:72%;left:20%">${av("TN", "plum", 38)}</span>
      </div>
      ${[["PS", "rust", "Priya Sen", "Product Lead · Fintech"], ["VJ", "bronze", "Vikram Joshi", "Investor · Seed fund"]]
        .map(([i, t, n, r]) => `<div class="a-box a-row" style="margin:10px 18px 0;padding:12px 14px;justify-content:space-between"><span class="a-row" style="gap:12px">${av(i, t, 40)}<span><b>${n}</b><br><small class="a-muted">${r}</small></span></span><span class="a-btn-sm">Connect</span></div>`).join("")}
    </div>`,

  contacts: `
    <div class="app">
      <div class="a-row a-pad a-top" style="justify-content:space-between">
        <span class="a-serif" style="font-size:34px">All contacts</span>
        <span class="a-row" style="gap:8px"><span class="a-circle sm">${icon("archive", 18)}</span><span class="a-count">128</span></span>
      </div>
      <div class="a-search">${icon("search", 18)} Search or filter contacts</div>
      <div class="a-list">
        ${[["A", [["AN", "green", "Ananya Nair", "Architect · Pune"], ["AR", "rust", "Arjun Rao", "Doctor · Bengaluru"]]],
           ["D", [["DV", "orange", "Dev Verma", "Advocate · Verma &amp; Co · Delhi"]]],
           ["K", [["KS", "purple", "Kabir Shah", "Designer · Mumbai"]]],
           ["S", [["SG", "bronze", "Sana Gill", "Managing Partner · Gill Ventures"]]]]
          .map(([letter, rows]) => `<small class="a-muted a-letter">${letter}</small>` + rows.map(([i, t, n, r]) =>
            `<div class="a-row a-item">${av(i, t, 48)}<span><b>${n}</b><br><span class="a-muted">${r}</span></span></div>`).join("")).join("")}
      </div>
      <div class="a-rail">A B D K R S Y</div>
      <span class="a-fab">${icon("plus", 18)} Add</span>
      ${tabbar("Contacts")}
    </div>`,

  rewind: `
    <div class="app">
      <div class="a-row a-pad a-top" style="gap:12px">
        <span class="a-serif" style="font-size:34px">Rewind</span><span class="a-pill on">Sep</span><span class="a-pill">Oct</span>
      </div>
      <div class="a-box" style="margin:16px 18px 0;padding:18px">
        <div class="a-serif" style="font-size:52px;line-height:1">24 people</div>
        <div class="a-muted">you met in September, across 6 events and trips</div>
      </div>
      ${[["Startup Mixer", "Mumbai · 3 people", [["RM", "blue", "Riya"], ["PS", "rust", "Priya"], ["VJ", "bronze", "Vikram"]]],
         ["Design Week", "2 people", [["KS", "purple", "Kabir"], ["TN", "plum", "Tara"]]],
         ["Scanned my card", "1 person", [["NW", "ink", "Northwind"]]]]
        .map(([t, meta, ppl]) => `<div class="a-pad" style="margin-top:20px"><b>${t}</b> <span class="a-muted">· ${meta}</span>
          <div class="a-row" style="gap:20px;margin-top:10px">${ppl.map(([i, tn, n]) => `<div class="a-col">${av(i, tn, 56)}<span class="a-muted">${n}</span></div>`).join("")}</div></div>`).join("")}
      ${tabbar("Rewind")}
    </div>`,

  events: `
    <div class="app">
      <div class="a-row a-pad a-top" style="justify-content:space-between">
        <span class="a-serif" style="font-size:34px">Events</span><span class="a-btn-light sm">${icon("plus", 16)} New event</span>
      </div>
      <div class="a-row" style="gap:10px;margin:18px 18px 0">
        <div class="a-box a-half"><span class="a-green">${icon("scan", 24)}</span><b>Scan event QR</b></div>
        <div class="a-box a-half"><span class="a-green">${icon("keypad", 24)}</span><b>Enter code</b></div>
      </div>
      <b class="a-pad" style="display:block;margin-top:22px">Upcoming</b>
      ${[["Founders Breakfast", "Hosting · Sat, Oct 18"]].map(evRow).join("")}
      <b class="a-pad" style="display:block;margin-top:22px">Past</b>
      ${[["Startup Mixer", "Attended · Oct 1"], ["Design Week", "Hosting · completed Sep 29"], ["City Business Meet", "Attended · Sep 14"]].map(evRow).join("")}
      ${tabbar("Events")}
    </div>`,
};

function evRow([t, s]) {
  return `<div class="a-box a-row" style="margin:10px 18px 0;padding:12px 14px;justify-content:space-between">
    <span class="a-row" style="gap:12px"><span class="a-sq">${icon("megaphone", 20)}</span><span><b>${t}</b><br><span class="a-muted">${s}</span></span></span>${icon("chevron", 18)}</div>`;
}

// Scale each 360px-wide app screen to fit its phone.
function fitScreens() {
  document.querySelectorAll(".phone-screen").forEach((scr) => {
    const s = scr.clientWidth / 360;
    scr.querySelectorAll(".app").forEach((a) => (a.style.transform = `scale(${s})`));
  });
}
