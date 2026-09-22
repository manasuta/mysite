// js/main.js — behavior layer
(function () {
  "use strict";
  const D = (typeof PORTFOLIO_DATA !== "undefined") ? PORTFOLIO_DATA : { timeline: [], now: [] };
  const root = document.documentElement;
  const body = document.body;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  body.classList.add("js");

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ── Language ── */
  const savedLang = store.get("lang");
  let lang = savedLang
    || ((navigator.language || "ja").toLowerCase().startsWith("ja") ? "ja" : "en");

  function localize(scope, l) {
    l = l || lang;
    scope.querySelectorAll("[data-en]").forEach(el => {
      const v = el.getAttribute(l === "ja" ? "data-ja" : "data-en");
      if (v != null) el.innerHTML = v;
    });
  }
  function applyLang(l) {
    lang = l;
    body.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    localize(document, l);
    $$(".seg-btn").forEach(b => b.classList.toggle("is-on", b.dataset.lang === l));
    store.set("lang", l);
  }
  $$(".seg-btn").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));

  /* ── Theme: auto → light → dark ── */
  const themeBtn = $("#theme-btn");
  const themeOrder = ["light", "dark", "auto"];
  const themeLabel = { auto: "自動 (システム連動)", light: "ライト", dark: "ダーク" };
  let theme = store.get("theme") || "light";

  function applyTheme(t) {
    theme = t;
    if (t === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", t);
    if (themeBtn) {
      themeBtn.setAttribute("aria-label", "外観モード: " + themeLabel[t] + "（タップで切替）");
      themeBtn.setAttribute("title", "外観モード: " + themeLabel[t]);
    }
    store.set("theme", t);
  }
  if (themeBtn) themeBtn.addEventListener("click", () => {
    applyTheme(themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length]);
  });

  /* ── Timeline ── */
  const tl = $("#timeline");
  if (tl) {
    D.timeline.forEach(it => {
      const li = document.createElement("li");
      li.className = "tl-item" + (it.featured ? " featured" : "");
      let markHtml = "";
      if (it.badge) {
        const m = { award: "m-award", apple: "m-apple", intern: "m-intern" }[it.badge.kind] || "m-apple";
        markHtml = `<span class="tl-mark ${m}" data-en="${it.badge.label.en}" data-ja="${it.badge.label.ja}">${it.badge.label.ja}</span>`;
      }
      li.innerHTML =
        `<span class="tl-dot k-${it.kind}"></span>` +
        `<div class="tl-date">${it.date}</div>` +
        `<div class="tl-title" data-en="${esc(it.title.en)}" data-ja="${esc(it.title.ja)}">${it.title.ja}</div>` +
        `<p class="tl-body" data-en="${esc(it.body.en)}" data-ja="${esc(it.body.ja)}">${it.body.ja}</p>` +
        markHtml;
      tl.appendChild(li);
    });
  }

  /* ── Now ── */
  const ng = $("#now-grid");
  if (ng) {
    const statusText = {
      active:   { ja: "活動中", en: "Active" },
      building: { ja: "開発中", en: "Building" }
    };
    D.now.forEach(n => {
      const st = statusText[n.status] || statusText.active;
      const card = document.createElement("article");
      card.className = "now-card";
      const logo = n.logo ? `<div class="now-logo"><img src="${n.logo}" alt="CYPR logo"></div>` : "";
      card.innerHTML = logo +
        `<span class="now-status s-${n.status}"><span class="nd"></span><span data-en="${st.en}" data-ja="${st.ja}">${st.ja}</span></span>` +
        `<h3 class="now-title" data-en="${esc(n.title.en)}" data-ja="${esc(n.title.ja)}">${n.title.ja}</h3>` +
        `<p class="now-body" data-en="${esc(n.body.en)}" data-ja="${esc(n.body.ja)}">${n.body.ja}</p>`;
      ng.appendChild(card);
    });
  }

  function esc(s) { return String(s).replace(/"/g, "&quot;"); }

  /* ── Apply language after dynamic render ── */
  applyLang(lang);
  applyTheme(theme);

  /* ── Reveal on scroll ── */
  $$(".bento .widget").forEach((w, i) => w.style.setProperty("--i", i));
  const revealTargets = $$(".sec-head, .widget, .app-list, .tl-item, .now-card, .contact-card");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(el => el.classList.add("in"));
  } else {
    revealTargets.forEach(el => el.classList.add("reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealTargets.forEach(el => io.observe(el));
  }

  /* ── Mobile nav ── */
  const burger = $("#nav-burger");
  const navLinks = $("#nav-links");
  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  }
  if (burger && navLinks) {
    burger.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
    navLinks.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  }

  /* ── Active section in nav ── */
  const linkMap = {};
  $$(".nav-links a").forEach(a => { linkMap[a.getAttribute("href").slice(1)] = a; });
  const sections = $$("main section[id], header[id]");
  if ("IntersectionObserver" in window) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        const a = linkMap[e.target.id];
        if (!a) return;
        if (e.isIntersecting) {
          $$(".nav-links a").forEach(x => x.classList.remove("is-active"));
          a.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => so.observe(s));
  }

  /* ── Work detail sheet (App Store-style) ── */
  const sheet = $("#sheet");
  const sheetBody = $("#sheet-body");
  const PROJS = ["signinja", "mangaru", "fognot", "famlog"];
  let sheetTimer = null;

  function openSheet(id) {
    const src = document.getElementById("src-" + id);
    if (!sheet || !sheetBody || !src) return;
    if (sheetTimer) { clearTimeout(sheetTimer); sheetTimer = null; }
    sheetBody.innerHTML = src.innerHTML;
    localize(sheetBody);
    sheet.hidden = false;
    void sheet.offsetWidth; // reflow so the transform transition runs
    sheet.classList.add("open");
    sheet.setAttribute("aria-hidden", "false");
    body.classList.add("sheet-open");
    sheetBody.scrollTop = 0;
    const back = sheet.querySelector(".sheet-back");
    if (back) back.focus();
  }
  function closeSheet() {
    if (!sheet || sheet.hidden) return;
    sheet.classList.remove("open");
    sheet.setAttribute("aria-hidden", "true");
    body.classList.remove("sheet-open");
    const finish = () => { sheet.hidden = true; sheetBody.innerHTML = ""; sheetTimer = null; };
    if (reduceMotion) finish();
    else sheetTimer = setTimeout(finish, 440);
  }
  function currentProj() {
    const h = decodeURIComponent(location.hash.slice(1));
    return PROJS.indexOf(h) >= 0 ? h : null;
  }
  function syncSheet() {
    const p = currentProj();
    if (p) openSheet(p); else closeSheet();
  }
  function dismiss() {
    if (history.length > 1) history.back();
    else location.hash = "work";
  }
  if (sheet) {
    $$(".app-row").forEach(r => r.addEventListener("click", () => { location.hash = r.dataset.proj; }));
    $$("[data-close]", sheet).forEach(el => el.addEventListener("click", dismiss));
    window.addEventListener("hashchange", syncSheet);
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !sheet.hidden) dismiss(); });
    syncSheet(); // support deep links on load
  }
})();
