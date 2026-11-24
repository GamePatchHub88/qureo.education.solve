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

  /* ---------- التصميم ---------- */
  var css =
    "html.qs-maint,html.qs-maint body{overflow:hidden!important;height:100%}" +
    "html.qs-maint body>*:not(#qsMaint){display:none!important}" +
    "#qsMaint{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:max(20px,env(safe-area-inset-top)) 20px max(20px,env(safe-area-inset-bottom));overflow:auto;" +
    "font-family:'Noto Kufi Arabic','IBM Plex Sans Arabic',Tahoma,system-ui,sans-serif;direction:rtl;color:#e9eefc;" +
    "background:radial-gradient(1200px 700px at 85% -10%,#1b2a66 0%,transparent 60%),radial-gradient(900px 600px at 0% 110%,#0f3a55 0%,transparent 55%),#0a0f1f;" +
    "--qm-card:rgba(18,26,51,.72);--qm-line:rgba(255,255,255,.10);--qm-mute:#9fb0d8;--qm-a:#4fd4ff;--qm-b:#7c8cff}" +
    "html[data-theme=light] #qsMaint{color:#0f1a33;background:radial-gradient(1200px 700px at 85% -10%,#cfe0ff 0%,transparent 60%),radial-gradient(900px 600px at 0% 110%,#c9f1ff 0%,transparent 55%),#f2f5fb;" +
    "--qm-card:rgba(255,255,255,.82);--qm-line:rgba(15,26,51,.10);--qm-mute:#52618a}" +
    "#qsMaint .qm-grid{position:absolute;inset:0;pointer-events:none;opacity:.5;" +
    "background-image:linear-gradient(var(--qm-line) 1px,transparent 1px),linear-gradient(90deg,var(--qm-line) 1px,transparent 1px);background-size:46px 46px;" +
    "-webkit-mask-image:radial-gradient(ellipse at center,#000 10%,transparent 70%);mask-image:radial-gradient(ellipse at center,#000 10%,transparent 70%)}" +
    "#qsMaint .qm-orb{position:absolute;border-radius:50%;filter:blur(70px);opacity:.45;pointer-events:none;animation:qmf 12s ease-in-out infinite}" +
    "#qsMaint .o1{width:340px;height:340px;background:var(--qm-a);top:-90px;left:-70px}" +
    "#qsMaint .o2{width:380px;height:380px;background:var(--qm-b);bottom:-120px;right:-90px;animation-delay:-6s}" +
    "#qsMaint .qm-card{position:relative;width:min(560px,100%);margin:auto;text-align:center;padding:44px 34px 30px;border-radius:28px;" +
    "background:var(--qm-card);border:1px solid var(--qm-line);box-shadow:0 30px 80px -20px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.06);" +
    "-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);animation:qmin .7s cubic-bezier(.2,.8,.2,1) both}" +
    "#qsMaint .qm-ic{width:92px;height:92px;margin:0 auto 22px;border-radius:26px;display:grid;place-items:center;position:relative;" +
    "background:linear-gradient(135deg,var(--qm-a),var(--qm-b));box-shadow:0 14px 40px -8px rgba(79,212,255,.55)}" +
    "#qsMaint .qm-ic::after{content:'';position:absolute;inset:-8px;border-radius:32px;border:2px solid var(--qm-a);opacity:.0;animation:qmp 2.6s ease-out infinite}" +
    "#qsMaint .qm-ic svg{width:48px;height:48px;color:#04293a}" +
    "#qsMaint .qm-g{transform-origin:50% 50%;animation:qmr 9s linear infinite}" +
    "#qsMaint .qm-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:99px;font-size:13px;font-weight:700;color:var(--qm-a);" +
    "background:rgba(79,212,255,.10);border:1px solid rgba(79,212,255,.30);margin-bottom:16px}" +
    "html[data-theme=light] #qsMaint .qm-badge{color:#0b6e93}" +
    "#qsMaint .qm-badge i{width:8px;height:8px;border-radius:50%;background:currentColor;animation:qmb 1.4s ease-in-out infinite}" +
    "#qsMaint .qm-t{margin:0 0 14px;font-size:clamp(26px,5.6vw,36px);line-height:1.35;font-weight:800;letter-spacing:-.2px;" +
    "background:linear-gradient(135deg,var(--qm-a),var(--qm-b));-webkit-background-clip:text;background-clip:text;color:transparent}" +
    "#qsMaint .qm-m{margin:0 auto;max-width:46ch;font-size:clamp(15px,3.9vw,17.5px);line-height:2;color:var(--qm-mute);white-space:pre-line;overflow-wrap:anywhere}" +
    "#qsMaint .qm-bar{height:5px;border-radius:9px;margin:28px auto 0;max-width:260px;background:var(--qm-line);overflow:hidden}" +
    "#qsMaint .qm-bar b{display:block;height:100%;width:38%;border-radius:9px;background:linear-gradient(90deg,var(--qm-a),var(--qm-b));animation:qmbar 1.8s ease-in-out infinite}" +
    "#qsMaint .qm-foot{margin-top:22px;font-size:12.5px;color:var(--qm-mute);opacity:.85}" +
    "@keyframes qmin{from{opacity:0;transform:translateY(22px) scale(.97)}to{opacity:1;transform:none}}" +
    "@keyframes qmf{0%,100%{transform:translate(0,0)}50%{transform:translate(26px,-22px)}}" +
    "@keyframes qmr{to{transform:rotate(360deg)}}" +
    "@keyframes qmp{0%{opacity:.55;transform:scale(.92)}100%{opacity:0;transform:scale(1.28)}}" +
    "@keyframes qmb{0%,100%{opacity:1}50%{opacity:.25}}" +
    "@keyframes qmbar{0%{transform:translateX(120%)}100%{transform:translateX(-290%)}}" +
    "@media(max-width:480px){#qsMaint .qm-card{padding:36px 22px 24px;border-radius:24px}}" +
    "@media(prefers-reduced-motion:reduce){#qsMaint *,#qsMaint .qm-card{animation:none!important}}";

  var GEAR =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<g class="qm-g"><circle cx="12" cy="12" r="3.2"/>' +
    '<path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1.11 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.01A1.7 1.7 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.01A1.7 1.7 0 0 0 20.91 10H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.03Z"/></g></svg>';

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

  function mount() {
    if (el && el.isConnected) return;
    el = document.createElement("div");
    el.id = "qsMaint";
    el.setAttribute("role", "alert");
    el.setAttribute("aria-live", "polite");
    el.innerHTML =
      '<div class="qm-grid"></div><div class="qm-orb o1"></div><div class="qm-orb o2"></div>' +
      '<div class="qm-card">' +
      '<div class="qm-ic">' + GEAR + "</div>" +
      '<div class="qm-badge"><i></i> الموقع متوقف مؤقتًا</div>' +
      '<h1 class="qm-t"></h1><p class="qm-m"></p>' +
      '<div class="qm-bar"><b></b></div>' +
      '<div class="qm-foot">كيريو مصر · محمد أحمد حلمي</div>' +
      "</div>";
    document.body.appendChild(el);
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

  window.__qsReady = new Promise(function (resolve) {
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
    if (cached && cached.enabled) show(cached); // ظهور فوري لمن زار الموقع من قبل

    fetchStatus().then(function (s) {
      if (s.enabled) {
        writeCache({ enabled: true, title: s.title || "", message: s.message || "" });
        show(s);
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
      resolve(on);
      if (on) watch();
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
