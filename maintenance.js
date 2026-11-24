/* إيقاف موقع الحلول مؤقتًا: يعرض رسالة ثابتة يكتبها المدير من لوحة التحكم.
   - طلب واحد خفيف (مخزَّن على CDN لعدة ثوانٍ) قبل أي شيء آخر
   - أثناء الإيقاف لا يعمل أي سكربت يتصل بالخادم (البوابة/الرسائل/التقييمات)
   - يُحمَّل في <head> قبل بقية السكربتات: window.__qsReady = Promise<true|false> (true = الموقع متوقف) */
(function () {
  "use strict";
  var API = "https://mohamedahmedhelmi.vercel.app/api";
  var ADMIN_ORIGINS = ["https://mohamedahmedhelmi.vercel.app"]; // مصدر لوحة المدير (للمعاينة فقط)
  var K = "qs_maint";
  var DEF_TITLE = "نعود إليكم قريبًا";
  var root = document.documentElement;
  var el = null, state = null;

  var preview = false;
  try { preview = window.top !== window && /[?&]qs_preview=1(&|$)/.test(location.search); } catch (e) { preview = true; }

  function readCache() { try { return JSON.parse(localStorage.getItem(K) || "null"); } catch (e) { return null; } }
  function writeCache(v) { try { localStorage.setItem(K, JSON.stringify(v)); } catch (e) {} }

  /* ---------- رمز الوصول الخاص (لأشخاص معينين أثناء الإيقاف) ---------- */
  var KA = "qs_access", code = "", allowedLabel = "";
  try {
    var m = /[?&]access=([A-Za-z0-9]{8,40})(&|$)/.exec(location.search);
    if (m && !preview) {
      localStorage.setItem(KA, m[1]);
      var u = location.pathname + location.search.replace(/([?&])access=[^&]*&?/, "$1").replace(/[?&]$/, "") + location.hash;
      history.replaceState(null, "", u);
    }
    code = (!preview && localStorage.getItem(KA)) || "";
  } catch (e) {}
  // رؤوس تضيفها بقية السكربتات لطلبات الخادم كي يسمح لها الخادم أثناء الإيقاف
  window.__qsHeaders = function () { return code ? { "X-Access-Code": code } : {}; };

  function verifyCode(c) {
    return fetch(API + "/public/site-access", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: c })
    }).then(function (r) { if (!r.ok) throw new Error("http " + r.status); return r.json(); });
  }

  function showNotice(label) {
    ensureCss();
    var go = function () {
      if (document.getElementById("qsAccNote")) return;
      var n = document.createElement("div");
      n.id = "qsAccNote";
      n.setAttribute("role", "status");
      n.innerHTML = '<span class="qa-i">🔒</span><span class="qa-t"></span><button type="button" aria-label="إغلاق">×</button>';
      n.querySelector(".qa-t").textContent = "الموقع مغلق حاليًا للزوار، وهو متاح لك أنت فقط" + (label ? " يا " + label : "") + ".";
      n.querySelector("button").onclick = function () { n.remove(); };
      document.body.appendChild(n);
    };
    if (document.body) go(); else document.addEventListener("DOMContentLoaded", go);
  }

  /* ---------- التصميم ---------- */
  var css =
    "html.qs-wait body>*:not(#qsMaint){visibility:hidden!important}" +
    "html.qs-maint,html.qs-maint body{overflow:hidden!important;height:100%}" +
    "html.qs-maint body>*:not(#qsMaint){display:none!important}" +
    "#qsMaint{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;overflow:auto;direction:rtl;" +
    "font-family:'Noto Kufi Arabic','IBM Plex Sans Arabic',Tahoma,system-ui,sans-serif;background:#0a0f1f;color:#e9eefc;--qm-line:#222d4d;--qm-mute:#9aa7c9;--qm-a:#4fd4ff;--qm-card:#121a33}" +
    "html[data-theme=light] #qsMaint{background:#f2f5fb;color:#0f1a33;--qm-line:#e0e6f2;--qm-mute:#5a6785;--qm-card:#fff}" +
    "#qsMaint .qm-card{width:min(420px,100%);margin:auto;text-align:center;padding:30px 24px 22px;border-radius:20px;background:var(--qm-card);border:1px solid var(--qm-line);animation:qmin .35s ease-out both}" +
    "#qsMaint .qm-ic{width:56px;height:56px;margin:0 auto 14px;border-radius:16px;display:grid;place-items:center;color:var(--qm-a);background:rgba(79,212,255,.12)}" +
    "#qsMaint .qm-ic svg{width:28px;height:28px}" +
    "#qsMaint .qm-t{margin:0 0 10px;font-size:clamp(20px,5vw,24px);line-height:1.5;font-weight:800}" +
    "#qsMaint .qm-m{margin:0 auto;max-width:42ch;font-size:15px;line-height:1.9;color:var(--qm-mute);white-space:pre-line;overflow-wrap:anywhere}" +
    "#qsMaint .qm-foot{margin-top:18px;font-size:12px;color:var(--qm-mute);opacity:.8}" +
    "#qsMaint .qm-acc{margin-top:16px}#qsMaint .qm-acc>button{background:none;border:0;color:var(--qm-mute);font:inherit;font-size:12.5px;cursor:pointer;text-decoration:underline;text-underline-offset:4px;padding:4px 8px}" +
    "#qsMaint .qm-acc form{display:none;gap:8px;justify-content:center;margin-top:8px}#qsMaint .qm-acc.open form{display:flex}#qsMaint .qm-acc.open>button{display:none}" +
    "#qsMaint .qm-acc input{width:min(200px,58%);padding:9px 12px;border-radius:10px;border:1px solid var(--qm-line);background:transparent;color:inherit;font:600 14px monospace;direction:ltr;text-align:center;letter-spacing:1px;text-transform:uppercase}" +
    "#qsMaint .qm-acc form button{padding:9px 16px;border:0;border-radius:10px;font:700 14px inherit;font-family:inherit;color:#04293a;cursor:pointer;background:var(--qm-a)}" +
    "#qsMaint .qm-err{min-height:16px;margin-top:6px;font-size:12px;color:#f87171}" +
    "#qsAccNote{position:fixed;z-index:2147482000;bottom:max(14px,env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);max-width:calc(100vw - 24px);display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:99px;direction:rtl;" +
    "font:600 13px 'Noto Kufi Arabic',Tahoma,sans-serif;color:#e9eefc;background:#0e1531;border:1px solid rgba(79,212,255,.45);box-shadow:0 8px 24px -8px rgba(0,0,0,.5);animation:qmin .35s both}" +
    "html[data-theme=light] #qsAccNote{color:#0f1a33;background:#fff}" +
    "#qsAccNote button{background:none;border:0;color:inherit;font-size:20px;line-height:1;cursor:pointer;opacity:.7;padding:0 2px}" +
    "@keyframes qmin{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}" +
    "@media(prefers-reduced-motion:reduce){#qsMaint .qm-card,#qsAccNote{animation:none!important}}";

  var GEAR =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="3.2"/>' +
    '<path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1.11 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.01A1.7 1.7 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.01A1.7 1.7 0 0 0 20.91 10H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.03Z"/></svg>';

  function ensureCss() {
    if (document.getElementById("qsMaintCss")) return;
    var s = document.createElement("style");
    s.id = "qsMaintCss";
    s.textContent = css;
    (document.head || root).appendChild(s);
  }

  function fill(s) {
    if (!el) return;
    el.querySelector(".qm-t").textContent = (s && s.title) || DEF_TITLE;
    el.querySelector(".qm-m").textContent = (s && s.message) || "";
  }

  // إزالة محتوى الموقع من الصفحة نهائيًا (لا إخفاء فقط) كي لا يمكن إظهاره من أدوات المتصفح
  var purged = false;
  function purge() {
    if (!document.body || !el) return;
    purged = true;
    Array.prototype.slice.call(document.body.children).forEach(function (n) { if (n !== el) n.remove(); });
  }
  function purgeLater() {
    purge();
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", purge);
    window.addEventListener("load", purge);
  }

  function mount() {
    if (el && el.isConnected) return;
    el = document.createElement("div");
    el.id = "qsMaint";
    el.setAttribute("role", "alert");
    el.setAttribute("aria-live", "polite");
    el.innerHTML =
      '<div class="qm-card">' +
      '<div class="qm-ic">' + GEAR + "</div>" +
      '<h1 class="qm-t"></h1><p class="qm-m"></p>' +
      '<div class="qm-acc"><button type="button">لديك رمز وصول خاص؟</button>' +
      '<form autocomplete="off"><input type="text" maxlength="40" placeholder="الرمز" aria-label="رمز الوصول"><button type="submit">دخول</button></form>' +
      '<div class="qm-err" role="alert"></div></div>' +
      '<div class="qm-foot">كيريو مصر · محمد أحمد حلمي</div>' +
      "</div>";
    document.body.appendChild(el);
    var acc = el.querySelector(".qm-acc"), inp = acc.querySelector("input"), err = acc.querySelector(".qm-err");
    if (preview) acc.style.display = "none";
    acc.querySelector(":scope>button").onclick = function () { acc.classList.add("open"); inp.focus(); };
    acc.querySelector("form").onsubmit = function (ev) {
      ev.preventDefault();
      var c = inp.value.replace(/\s+/g, "");
      if (c.length < 8) { err.textContent = "الرمز غير صحيح"; return; }
      err.textContent = "";
      verifyCode(c).then(function (r) {
        if (r && r.ok) { try { localStorage.setItem(KA, c); } catch (e) {} location.reload(); }
        else err.textContent = "الرمز غير صحيح أو أُلغي";
      }).catch(function () { err.textContent = "تعذر التحقق الآن، حاول بعد قليل"; });
    };
    fill(state);
  }

  function show(s) {
    state = s;
    ensureCss();
    root.classList.add("qs-maint");
    root.classList.remove("gate-pending");
    if (document.body) mount();
    else document.addEventListener("DOMContentLoaded", mount);
    fill(s);
  }

  function hide() {
    if (purged) { location.reload(); return; }
    root.classList.remove("qs-maint");
    if (el && el.parentNode) el.parentNode.removeChild(el);
    el = null;
  }

  /* ---------- جلب الحالة ---------- */
  function fetchStatus() {
    var ctl = typeof AbortController === "function" ? new AbortController() : null;
    var t = ctl ? setTimeout(function () { ctl.abort(); }, 4000) : 0;
    return fetch(API + "/public/site-status", { signal: ctl ? ctl.signal : undefined }).then(function (r) {
      clearTimeout(t);
      if (!r.ok) throw new Error("http " + r.status);
      return r.json();
    }, function (e) { clearTimeout(t); throw e; }).then(function (s) {
      if (!s || s.unknown) throw new Error("unknown");
      return s;
    });
  }

  window.__qsReady = new Promise(function (resolveRaw) {
    // يبقى محتوى الصفحة مخفيًا حتى تُعرف حالة الموقع (بحد أقصى مهلة الطلب) ثم يُفتح أو يُستبدل برسالة الإيقاف
    function resolve(v) { root.classList.remove("qs-wait"); resolveRaw(v); }
    if (!preview) { ensureCss(); root.classList.add("qs-wait"); }
    if (preview) {
      // معاينة من لوحة المدير داخل iframe: بلا اتصال بالخادم
      window.addEventListener("message", function (e) {
        if (ADMIN_ORIGINS.indexOf(e.origin) < 0 || !e.data || e.data.type !== "qs-maint-preview") return;
        show({ title: String(e.data.title || "").slice(0, 80), message: String(e.data.message || "").slice(0, 1500) });
      });
      show({ title: "", message: "" });
      try { window.parent.postMessage({ type: "qs-maint-ready" }, "*"); } catch (e) {}
      resolve(true);
      return;
    }

    var cached = readCache();
    if (cached && cached.enabled && !code) show(cached); // ظهور فوري لمن زار الموقع من قبل (إلا صاحب رمز وصول)

    fetchStatus().then(function (s) {
      if (s.enabled) {
        writeCache({ enabled: true, title: s.title || "", message: s.message || "" });
        if (code) {
          // صاحب رمز: نتحقق منه؛ إن صحّ يدخل مع إشعار، وإلا يرى صفحة الإيقاف
          return verifyCode(code).then(function (r) {
            if (r && r.ok) { hide(); showNotice(r.label); resolve(false); }
            else { code = ""; try { localStorage.removeItem(KA); } catch (e) {} show(s); purgeLater(); resolve(true); watch(); }
          }, function () { show(s); purgeLater(); resolve(true); watch(); });
        }
        show(s);
        purgeLater();
        resolve(true);
        watch();
      } else {
        writeCache({ enabled: false });
        hide();
        resolve(false);
      }
    }).catch(function () {
      // تعذّر الاتصال: نُبقي آخر حالة معروفة (لا نفتح الموقع على خادم مضغوط)
      var on = !!(cached && cached.enabled);
      if (on) { show(cached); purgeLater(); watch(); }
      resolve(on);
    });
  });

  // أثناء الإيقاف: فحص هادئ كل ~دقيقة ونصف (الطلب مخزَّن على CDN) ثم يفتح الموقع تلقائيًا عند انتهاء الإيقاف
  function watch() {
    if (watch.on) return;
    watch.on = true;
    setInterval(function () {
      if (document.hidden) return;
      fetchStatus().then(function (s) {
        if (!s.enabled) { writeCache({ enabled: false }); location.reload(); }
        else if (s.title !== state.title || s.message !== state.message) { writeCache({ enabled: true, title: s.title || "", message: s.message || "" }); show(s); }
      }).catch(function () {});
    }, 90000 + Math.floor(Math.random() * 30000));
  }
})();
