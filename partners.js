/* الشركاء + شريط الإعلان.
   - طلب واحد خفيف (/public/extras) مخزَّن على CDN، ويُعرض فورًا من الكاش المحلي ثم يتحدّث بهدوء
   - الشركاء يظهرون في شريط أعلى الصفحة وفي الفوتر حسب اختيار المدير
   - لا يعمل أثناء إيقاف الموقع */
(function () {
  "use strict";
  var API = "https://mohamedahmedhelmi.vercel.app/api";
  var CK = "qs_extras", DK = "qs_ann_closed";

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function safeUrl(u) { return /^https?:\/\/[^\s<>"']+$/i.test(u || "") ? u : ""; }

  function logoSrc(p) {
    if (p.has_logo) return API + "/public/partner-logo/" + encodeURIComponent(p.id) + "?v=" + (p.v || 0);
    return safeUrl(p.logo_url);
  }
  function logoNode(p, cls) {
    var src = logoSrc(p);
    function ini() { return el("span", "pt-ini", (p.name || "؟").trim().charAt(0)); }
    if (!src) return ini();
    var img = new Image();
    img.alt = ""; img.decoding = "async"; img.loading = "lazy";
    img.referrerPolicy = "no-referrer";
    if (cls) img.className = cls;
    img.onerror = function () { if (img.parentNode) img.parentNode.replaceChild(ini(), img); };
    img.src = src;
    return img;
  }
  function track(p) {
    try { navigator.sendBeacon(API + "/public/partner-click/" + encodeURIComponent(p.id)); } catch (e) {}
  }
  function wrapLink(p, node) {
    var u = safeUrl(p.url);
    if (!u) return node;
    var a = el("a", node.className);
    a.href = u; a.target = "_blank"; a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", p.name + (p.tagline ? " — " + p.tagline : ""));
    while (node.firstChild) a.appendChild(node.firstChild);
    a.addEventListener("click", function () { track(p); });
    return a;
  }

  /* ---------- شريط الأعلى ---------- */
  function tile(p) {
    var t = el("span", "pt-tile");
    t.appendChild(logoNode(p));
    t.appendChild(el("span", null, p.name));
    return wrapLink(p, t);
  }
  function renderTop(list) {
    var box = $("ptTop");
    if (!box) return;
    var rail = box.querySelector(".pt-rail");
    rail.textContent = "";
    if (!list.length) { box.hidden = true; return; }
    var track = el("div", "pt-track");
    var many = list.length > 4;
    var base = list.slice();
    while (many && base.length < 8) base = base.concat(list); // ملء العرض قبل التكرار
    base.forEach(function (p) { track.appendChild(tile(p)); });
    if (many) {
      base.forEach(function (p, i) { var c = tile(p); c.setAttribute("aria-hidden", "true"); c.tabIndex = -1; track.appendChild(c); });
      track.style.setProperty("--pt-dur", Math.max(24, base.length * 5) + "s");
    }
    rail.className = "pt-rail" + (many ? "" : " static");
    rail.appendChild(track);
    box.hidden = false;
  }

  /* ---------- الفوتر ---------- */
  function renderFoot(list) {
    var box = $("ptFoot");
    if (!box) return;
    var grid = box.querySelector(".fp-grid");
    grid.textContent = "";
    if (!list.length) { box.hidden = true; return; }
    list.forEach(function (p) {
      var c = el("div", "pt-card");
      var lg = el("span", "pt-logo");
      lg.appendChild(logoNode(p));
      c.appendChild(lg);
      c.appendChild(el("b", null, p.name));
      if (p.tagline) c.appendChild(el("small", null, p.tagline));
      if (safeUrl(p.url)) c.appendChild(el("span", "go", "زيارة الموقع ↗"));
      grid.appendChild(wrapLink(p, c));
    });
    box.hidden = false;
  }

  /* ---------- الإعلان ---------- */
  function renderAnn(a) {
    var bar = $("annBar");
    if (!bar) return;
    if (!a || !a.text || lsGet(DK) === String(a.rev)) { bar.hidden = true; bar.textContent = ""; return; }
    bar.textContent = "";
    bar.className = "ann " + (a.tone || "info");
    bar.appendChild(el("i", "ann-dot"));
    bar.appendChild(el("span", null, a.text));
    var u = safeUrl(a.link);
    if (u) {
      var l = el("a", null, (a.link_label || "اعرف المزيد") + " ‹");
      l.href = u; l.target = "_blank"; l.rel = "noopener noreferrer";
      bar.appendChild(l);
    }
    if (a.dismissible) {
      var x = el("button", "ann-x", "×");
      x.type = "button"; x.setAttribute("aria-label", "إغلاق الإعلان");
      x.addEventListener("click", function () { lsSet(DK, String(a.rev)); bar.hidden = true; });
      bar.appendChild(x);
    }
    bar.hidden = false;
  }

  var lastSig = "";
  function render(d) {
    d = d || {};
    var sig = JSON.stringify(d);
    if (sig === lastSig) return;
    lastSig = sig;
    var ps = Array.isArray(d.partners) ? d.partners : [];
    renderTop(ps.filter(function (p) { return p.placement !== "footer"; }));
    renderFoot(ps.filter(function (p) { return p.placement !== "top"; }));
    renderAnn(d.announcement);
  }

  try { var c = JSON.parse(lsGet(CK) || "null"); if (c) render(c); } catch (e) {}

  (window.__qsReady || Promise.resolve(false)).then(function (stopped) {
    if (stopped) return;
    var ctl = typeof AbortController === "function" ? new AbortController() : null;
    var t = ctl ? setTimeout(function () { ctl.abort(); }, 12000) : 0;
    fetch(API + "/public/extras", { headers: window.__qsHeaders ? window.__qsHeaders() : {}, signal: ctl ? ctl.signal : undefined })
      .then(function (r) { clearTimeout(t); if (!r.ok) throw new Error("http " + r.status); return r.json(); })
      .then(function (d) { lsSet(CK, JSON.stringify(d)); render(d); })
      .catch(function () { /* الخادم غير متاح: يبقى ما في الكاش (أو لا شيء) بهدوء */ });
  });
})();
