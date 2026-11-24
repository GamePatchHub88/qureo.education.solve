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
    "#qsMaint .qm-acc{margin-top:18px}#qsMaint .qm-acc>button{background:none;border:0;color:var(--qm-mute);font:inherit;font-size:13px;cursor:pointer;text-decoration:underline;text-underline-offset:4px;padding:4px 8px}" +
    "#qsMaint .qm-acc form{display:none;gap:8px;justify-content:center;margin-top:10px}#qsMaint .qm-acc.open form{display:flex}#qsMaint .qm-acc.open>button{display:none}" +
    "#qsMaint .qm-acc input{width:min(220px,60%);padding:10px 14px;border-radius:12px;border:1px solid var(--qm-line);background:rgba(127,127,127,.12);color:inherit;font:600 14px monospace;direction:ltr;text-align:center;letter-spacing:1px;text-transform:uppercase}" +
    "#qsMaint .qm-acc form button{padding:10px 18px;border:0;border-radius:12px;font:700 14px inherit;font-family:inherit;color:#04293a;cursor:pointer;background:linear-gradient(135deg,var(--qm-a),var(--qm-b))}" +
    "#qsMaint .qm-err{min-height:18px;margin-top:8px;font-size:12.5px;color:#f87171}" +
    "#qsAccNote{position:fixed;z-index:2147482000;bottom:max(14px,env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);max-width:calc(100vw - 24px);display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:99px;direction:rtl;" +
    "font:600 13px 'Noto Kufi Arabic',Tahoma,sans-serif;color:#e9eefc;background:rgba(14,21,49,.94);border:1px solid rgba(79,212,255,.45);box-shadow:0 12px 34px -8px rgba(0,0,0,.55);animation:qmin .6s both}" +
    "html[data-theme=light] #qsAccNote{color:#0f1a33;background:rgba(255,255,255,.96)}" +
    "#qsAccNote button{background:none;border:0;color:inherit;font-size:20px;line-height:1;cursor:pointer;opacity:.7;padding:0 2px}" +
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
    if (cached && cached.enabled && !code) show(cached); // ظهور فوري لمن زار الموقع من قبل (إلا صاحب رمز وصول)

    fetchStatus().then(function (s) {
      if (s.enabled) {
        writeCache({ enabled: true, title: s.title || "", message: s.message || "" });
        if (code) {
          // صاحب رمز: نتحقق منه؛ إن صحّ يدخل مع إشعار، وإلا يرى صفحة الإيقاف
          return verifyCode(code).then(function (r) {
            if (r && r.ok) { hide(); showNotice(r.label); resolve(false); }
            else { code = ""; try { localStorage.removeItem(KA); } catch (e) {} show(s); resolve(true); watch(); }
          }, function () { show(s); resolve(true); watch(); });
        }
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
