/* بوابة الاسم + نشاط الطالب + رسائل الإدارة (نص أو صوت).
   ليست تسجيل دخول — قاعدة بيانات Supabase فقط (خادم Node.js + MongoDB في مجلد students-api). */
(function () {
  "use strict";
  // خادم Node.js + MongoDB يعمل داخل مشروع موقع الحلول نفسه على Vercel (مجلد api)
  var API_URL = "https://qureoeducationsolve.vercel.app/api";
  var K_DEV = "qs_device", K_ST = "qs_status", K_NAME = "qs_name", K_LOCK = "qs_lock";
  var PING_MS = 30000, MAX_REC = 60;
  var root = document.documentElement;
  var mem = {};
  var welcomed = false, wTimer;
  var locked = false, unread = 0, chatOpen = false, allowed = false;
  var prevUnread = null, lastNotifId = null, nTimer, tabTimer, baseTitle = document.title;

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return mem[k] || null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { mem[k] = v; } }

  function deviceId() {
    var d = lsGet(K_DEV);
    if (d && d.length >= 8) return d;
    try { d = crypto.randomUUID(); }
    catch (e) { d = "d" + Date.now().toString(36) + Math.random().toString(36).slice(2, 12); }
    lsSet(K_DEV, d);
    return d;
  }

  function deviceType() {
    try {
      var ua = navigator.userAgent || "";
      var touch = navigator.maxTouchPoints > 1;
      var kind;
      if (/iPad|Tablet/i.test(ua) || (/Macintosh/.test(ua) && touch) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) kind = "تابلت";
      else if (/Mobi|iPhone|iPod|Android/i.test(ua)) kind = "هاتف";
      else kind = "كمبيوتر";
      var os = /Android/i.test(ua) ? "Android"
        : /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && touch) ? "iOS"
        : /Windows/i.test(ua) ? "Windows"
        : /CrOS/i.test(ua) ? "ChromeOS"
        : /Mac OS X|Macintosh/i.test(ua) ? "macOS"
        : /Linux/i.test(ua) ? "Linux" : "";
      var br = /Edg\//.test(ua) ? "Edge"
        : /OPR\/|Opera/.test(ua) ? "Opera"
        : /SamsungBrowser/.test(ua) ? "Samsung Internet"
        : /Firefox|FxiOS/.test(ua) ? "Firefox"
        : /Chrome|CriOS/.test(ua) ? "Chrome"
        : /Safari/.test(ua) ? "Safari" : "";
      var model = "";
      var m = /Android [\d.]+; ([^;)]+?)(?: Build|\))/.exec(ua);
      if (m && m[1].length > 1 && m[1] !== "K" && !/^(Linux|U)$/.test(m[1])) model = m[1].trim();
      return [kind, os, br, model].filter(Boolean).join(" · ").slice(0, 100);
    } catch (e) { return ""; }
  }

  function rpc(fn, args, ms) {
    var ctl = typeof AbortController === "function" ? new AbortController() : null;
    var t = ctl ? setTimeout(function () { ctl.abort(); }, ms || 15000) : 0;
    return fetch(API_URL + "/rpc/" + fn, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(args),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) {
      clearTimeout(t);
      if (!r.ok) throw new Error("http " + r.status);
      return r.text().then(function (t) { return t ? JSON.parse(t) : null; });
    }, function (e) { clearTimeout(t); throw e; });
  }

  /* ================= بوابة الاسم ================= */
  var gate, input, msg, btn, title, sub, open = false;

  function build() {
    gate = document.createElement("div");
    gate.id = "nameGate";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-labelledby", "ngTitle");
    gate.hidden = true;
    gate.innerHTML =
      '<div class="ng-card">' +
      '<div class="ng-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z"/></svg></div>' +
      '<h2 id="ngTitle"></h2><p class="ng-sub"></p>' +
      '<input class="ng-in" type="text" maxlength="40" autocomplete="name" placeholder="اكتب اسمك هنا" aria-label="الاسم">' +
      '<p class="ng-msg" role="alert"></p>' +
      '<button class="ng-btn" type="button">دخول الموقع</button></div>';
    document.body.appendChild(gate);
    title = gate.querySelector("h2");
    sub = gate.querySelector(".ng-sub");
    input = gate.querySelector(".ng-in");
    msg = gate.querySelector(".ng-msg");
    btn = gate.querySelector(".ng-btn");
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
  }

  function showName(mode, note) {
    leaveChat();
    if (!gate) build();
    var rej = mode === "rejected";
    title.textContent = rej ? "يلزم اسم جديد" : "أهلًا بك في حلول كيريو";
    sub.textContent = rej ? "تم رفض الاسم السابق لهذا الجهاز. اكتب اسمًا آخر للمتابعة." : "اكتب اسمك للدخول إلى الموقع. لا حاجة لحساب أو كلمة مرور.";
    msg.textContent = note || "";
    input.value = "";
    gate.hidden = false;
    root.classList.add("gate-pending");
    allowed = false;
    if (!open) { open = true; setTimeout(function () { try { input.focus(); } catch (e) {} }, 60); }
  }

  function allow() {
    open = false;
    if (gate) gate.hidden = true;
    root.classList.remove("gate-pending");
    allowed = true;
  }

  function submit() {
    var name = input.value.replace(/\s+/g, " ").trim();
    if (name.length < 2) { msg.textContent = "اكتب اسمًا من حرفين على الأقل."; input.focus(); return; }
    if (name.length > 40) { msg.textContent = "الاسم طويل جدًا (الحد الأقصى 40 حرفًا)."; return; }
    btn.disabled = true; msg.textContent = "";
    rpc("student_register", { p_device: deviceId(), p_name: name, p_type: deviceType() }).then(function (r) {
      btn.disabled = false;
      if (r && r.status === "approved") {
        lsSet(K_ST, "approved"); lsSet(K_NAME, r.name || name);
        allow(); welcomed = true; welcome(r.name || name, true);
        check();
      }
      else if (r && r.status === "same_rejected") { msg.textContent = "هذا الاسم مرفوض، اكتب اسمًا آخر."; input.focus(); }
      else { msg.textContent = "تعذر قبول الاسم، تأكد منه وحاول مرة أخرى."; }
    }, function () {
      btn.disabled = false;
      msg.textContent = "تعذر الاتصال بالخادم. تحقق من الإنترنت وحاول مرة أخرى.";
    });
  }

  function welcome(name, first) {
    if (!name) return;
    var w = document.getElementById("nameWelcome");
    if (!w) {
      w = document.createElement("div");
      w.id = "nameWelcome";
      w.setAttribute("role", "status");
      w.setAttribute("aria-live", "polite");
      document.body.appendChild(w);
    }
    w.textContent = (first ? "أهلًا بك، " : "مرحبًا بالعودة، ") + name;
    w.classList.remove("on");
    void w.offsetWidth;
    w.classList.add("on");
    clearTimeout(wTimer);
    wTimer = setTimeout(function () { w.classList.remove("on"); }, 4000);
  }

  /* ================= محادثة الإدارة ================= */
  var fab, badge, panel, listEl, noteEl, errEl, ta, micBtn, sendBtn, closeBtn, recBar, recTime, imgBtn, fileIn;
  var shownIds = "", audios = {}, imgs = {}, rec = null, sending = false;

  var ICON_CHAT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-5 4V6a2 2 0 0 1 1-2Z"/></svg>';
  var ICON_MIC = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1A7 7 0 0 0 19 12Z"/></svg>';

  var pendingImg = "", preparing = false, prevEl, prevImg;

  function buildChat() {
    if (panel) return;
    fab = document.createElement("button");
    fab.id = "chatFab"; fab.type = "button"; fab.hidden = true;
    fab.setAttribute("aria-label", "رسائل الإدارة");
    fab.innerHTML = ICON_CHAT + '<span class="cf-badge" hidden></span>';
    badge = fab.querySelector(".cf-badge");
    document.body.appendChild(fab);

    panel = document.createElement("section");
    panel.id = "chatPanel"; panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "رسائل الإدارة");
    panel.innerHTML =
      '<header class="cp-h"><b>رسائل الإدارة</b><button class="cp-x" type="button" aria-label="إغلاق">×</button></header>' +
      '<p class="cp-note" hidden></p>' +
      '<div class="cp-list" aria-live="polite"></div>' +
      '<div class="cp-rec" hidden><span class="cp-dot"></span><span class="cp-time">0:00</span>' +
      '<button class="cp-cancel" type="button">إلغاء</button><button class="cp-stop" type="button">إرسال التسجيل</button></div>' +
      '<div class="cp-prev" hidden><img alt="معاينة الصورة" /><span class="cp-prevt">الصورة جاهزة — أضف تعليقًا إن أردت ثم اضغط إرسال</span><button class="cp-prevx" type="button" aria-label="إزالة الصورة">×</button></div>' +
      '<div class="cp-bar"><textarea rows="1" maxlength="1000" placeholder="اكتب رسالتك..." aria-label="نص الرسالة"></textarea>' +
      '<input class="cp-file" type="file" accept="image/*" hidden />' +
      '<button class="cp-mic cp-imgb" type="button" aria-label="إرسال صورة" title="إرسال صورة">🖼</button>' +
      '<button class="cp-mic cp-micb" type="button" aria-label="تسجيل رسالة صوتية">' + ICON_MIC + '</button>' +
      '<button class="cp-send" type="button">إرسال</button></div>' +
      '<p class="cp-err" role="alert"></p>';
    document.body.appendChild(panel);

    listEl = panel.querySelector(".cp-list");
    noteEl = panel.querySelector(".cp-note");
    errEl = panel.querySelector(".cp-err");
    ta = panel.querySelector("textarea");
    micBtn = panel.querySelector(".cp-micb");
    imgBtn = panel.querySelector(".cp-imgb");
    fileIn = panel.querySelector(".cp-file");
    prevEl = panel.querySelector(".cp-prev");
    prevImg = prevEl.querySelector("img");
    sendBtn = panel.querySelector(".cp-send");
    closeBtn = panel.querySelector(".cp-x");
    recBar = panel.querySelector(".cp-rec");
    recTime = panel.querySelector(".cp-time");

    fab.addEventListener("click", function () { chatOpen ? closeChat() : openChat(); });
    closeBtn.addEventListener("click", closeChat);
    sendBtn.addEventListener("click", sendText);
    ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendText(); } });
    micBtn.addEventListener("click", startRec);
    imgBtn.addEventListener("click", function () { if (!sending && !preparing) fileIn.click(); });
    prevEl.querySelector(".cp-prevx").addEventListener("click", clearPending);
    ta.addEventListener("input", function () { ta.style.height = "auto"; ta.style.height = Math.min(ta.scrollHeight, 90) + "px"; });
    fileIn.addEventListener("change", function () { var f = fileIn.files && fileIn.files[0]; fileIn.value = ""; if (f) pickImage(f); });
    ta.addEventListener("paste", function (e) {
      var items = (e.clipboardData && e.clipboardData.items) || [];
      for (var i = 0; i < items.length; i++) if (items[i].kind === "file" && /^image\//.test(items[i].type)) { e.preventDefault(); pickImage(items[i].getAsFile()); return; }
    });
    panel.querySelector(".cp-stop").addEventListener("click", function () { stopRec(false); });
    panel.querySelector(".cp-cancel").addEventListener("click", function () { stopRec(true); });
  }

  function fmtDur(s) { s = Math.max(0, s | 0); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }
  function fmtTime(iso) {
    try { return new Date(iso).toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }); } catch (e) { return ""; }
  }
  function setErr(t) { if (errEl) { errEl.classList.remove("info"); errEl.textContent = t || ""; } }
  function setInfo(t) { if (errEl) { errEl.classList.toggle("info", !!t); errEl.textContent = t || ""; } }

  /* ===== إشعار الرسالة الجديدة (يظهر 5 ثوانٍ) ===== */
  var NOTIF_MS = 5000;

  function hideNotif() {
    clearTimeout(nTimer);
    var n = document.getElementById("msgNotif");
    if (n) n.classList.remove("on");
  }

  function showNotif(text, voice) {
    var n = document.getElementById("msgNotif");
    if (!n) {
      n = document.createElement("div");
      n.id = "msgNotif";
      n.setAttribute("role", "alert");
      n.setAttribute("aria-live", "assertive");
      n.innerHTML =
        '<span class="mn-ico">' + ICON_CHAT + '</span>' +
        '<span class="mn-body"><b class="mn-t">رسالة جديدة من الإدارة</b><span class="mn-p"></span></span>' +
        '<button class="mn-x" type="button" aria-label="إغلاق الإشعار">×</button>';
      document.body.appendChild(n);
      n.addEventListener("click", function (e) {
        if (e.target.closest(".mn-x")) { hideNotif(); return; }
        hideNotif(); openChat();
      });
    }
    var p = voice ? "🎤 رسالة صوتية" : String(text || "اضغط لفتح الرسالة");
    n.querySelector(".mn-p").textContent = p.length > 90 ? p.slice(0, 90) + "…" : p;
    n.classList.remove("on");
    void n.offsetWidth;
    n.classList.add("on");
    clearTimeout(nTimer);
    nTimer = setTimeout(hideNotif, NOTIF_MS);
    try { if (navigator.vibrate) navigator.vibrate([120, 60, 120]); } catch (e) {}
    flashTitle();
  }

  function flashTitle() {
    clearTimeout(tabTimer);
    var on = true, c = 0;
    (function tick() {
      document.title = on ? "💬 رسالة جديدة" : baseTitle;
      on = !on;
      if (++c < 10 && !chatOpen) tabTimer = setTimeout(tick, 500);
      else document.title = baseTitle;
    })();
  }

  function notifyNew() {
    rpc("student_inbox", { p_device: deviceId() }).then(function (r) {
      var ms = ((r && r.messages) || []).filter(function (m) { return m.sender === "admin"; });
      var m = ms[ms.length - 1];
      if (m && m.id === lastNotifId) return;
      if (m) lastNotifId = m.id;
      if (chatOpen) return;
      showNotif(m && m.kind === "image" ? "🖼 صورة" + (m.body ? " · " + m.body : "") : m && m.body, m && m.kind === "voice");
    }, function () { if (!chatOpen) showNotif("", false); });
  }

  function updateFab() {
    buildChat();
    fab.hidden = !(allowed && !locked);
    var n = chatOpen ? 0 : unread;
    badge.hidden = n < 1;
    badge.textContent = n > 9 ? "9+" : String(n);
    fab.classList.toggle("has-new", n > 0);
  }

  function openChat() {
    buildChat();
    hideNotif();
    chatOpen = true;
    panel.hidden = false;
    panel.classList.toggle("lock", locked);
    closeBtn.hidden = locked;
    noteEl.hidden = !locked;
    noteEl.textContent = locked ? "الإدارة طلبت ردًا منك. أرسل رسالة نصية أو صوتية للمتابعة إلى الموقع." : "";
    setErr("");
    updateFab();
    loadInbox(true);
  }

  function closeChat() {
    if (locked) return;
    chatOpen = false;
    if (rec) stopRec(true);
    if (panel) panel.hidden = true;
    updateFab();
  }

  function leaveChat() {
    chatOpen = false; locked = false; lsSet(K_LOCK, "0");
    if (rec) stopRec(true);
    if (panel) panel.hidden = true;
    if (fab) fab.hidden = true;
  }

  function enterLock() {
    locked = true; lsSet(K_LOCK, "1");
    if (gate) gate.hidden = true;
    open = false;
    allowed = true;
    root.classList.add("gate-pending");
    if (chatOpen) { panel.classList.add("lock"); closeBtn.hidden = true; loadInbox(false); } else openChat();
  }

  function exitLock() {
    locked = false; lsSet(K_LOCK, "0");
    chatOpen = false;
    if (panel) { panel.hidden = true; panel.classList.remove("lock"); }
    allow();
    updateFab();
  }

  function loadInbox(scroll) {
    return rpc("student_inbox", { p_device: deviceId() }).then(function (r) {
      var ms = (r && r.messages) || [];
      renderMsgs(ms, scroll);
      if (chatOpen) {
        rpc("student_mark_read", { p_device: deviceId() }).then(function () { unread = 0; updateFab(); }, function () {});
      }
    }, function () { setErr("تعذر تحميل الرسائل، حاول مرة أخرى."); });
  }

  function renderMsgs(ms, scroll) {
    var ids = ms.map(function (m) { return m.id; }).join(",");
    if (ids === shownIds && !scroll) return;
    shownIds = ids;
    listEl.textContent = "";
    if (!ms.length) {
      var e = document.createElement("p");
      e.className = "cp-empty";
      e.textContent = "لا توجد رسائل بعد. اكتب رسالتك أو أرسل صورة أو سجّل رسالة صوتية للإدارة.";
      listEl.appendChild(e);
      return;
    }
    ms.forEach(function (m) {
      var row = document.createElement("div");
      row.className = "cm " + (m.sender === "student" ? "cm-me" : "cm-ad");
      if (m.kind === "voice") {
        var b = document.createElement("button");
        b.type = "button"; b.className = "cm-voice";
        b.textContent = "▶ رسالة صوتية · " + fmtDur(m.duration);
        b.addEventListener("click", function () { playVoice(m, b); });
        row.appendChild(b);
      } else if (m.kind === "image") {
        var box = document.createElement("button");
        box.type = "button"; box.className = "cm-img"; box.textContent = "جاري تحميل الصورة...";
        loadImg(m, box);
        row.appendChild(box);
        if (m.body) {
          var cap = document.createElement("div");
          cap.className = "cm-txt"; cap.textContent = m.body;
          row.appendChild(cap);
        }
      } else {
        var p = document.createElement("div");
        p.className = "cm-txt"; p.textContent = m.body || "";
        row.appendChild(p);
      }
      var meta = document.createElement("small");
      meta.textContent = (m.sender === "admin" ? "الإدارة · " : "أنت · ") + fmtTime(m.created_at) + (m.requires_reply ? " · مطلوب ردك" : "");
      row.appendChild(meta);
      listEl.appendChild(row);
    });
    listEl.scrollTop = listEl.scrollHeight;
  }

  function showImg(box, url, mine) {
    var im = new Image();
    im.alt = mine ? "صورتك" : "صورة من الإدارة"; im.src = url;
    box.textContent = ""; box.appendChild(im);
    box.onclick = function () {
      var d = document.createElement("div");
      d.className = "cm-lb";
      var big = new Image(); big.alt = "صورة"; big.src = url;
      d.appendChild(big);
      d.addEventListener("click", function () { d.remove(); });
      document.body.appendChild(d);
    };
  }

  function loadImg(m, box) {
    var mine = m.sender === "student";
    if (imgs[m.id]) { showImg(box, imgs[m.id], mine); return; }
    function fail() {
      box.textContent = "تعذر تحميل الصورة · اضغط لإعادة المحاولة";
      box.onclick = function () { box.onclick = null; box.textContent = "جاري تحميل الصورة..."; loadImg(m, box); };
    }
    rpc("student_image", { p_device: deviceId(), p_id: m.id }, 30000).then(function (url) {
      if (!url || typeof url !== "string" || url.indexOf("data:image/") !== 0) { fail(); return; }
      imgs[m.id] = url;
      showImg(box, url, mine);
    }, fail);
  }

  function playVoice(m, b) {
    var label = "▶ رسالة صوتية · " + fmtDur(m.duration);
    var a = audios[m.id];
    if (a) {
      if (a.paused) { a.play(); b.textContent = "⏸ إيقاف مؤقت"; } else { a.pause(); b.textContent = label; }
      return;
    }
    b.textContent = "جاري التحميل...";
    rpc("student_audio", { p_device: deviceId(), p_id: m.id }).then(function (url) {
      if (!url || typeof url !== "string") { b.textContent = label; setErr("تعذر تشغيل التسجيل."); return; }
      var au = new Audio(url);
      audios[m.id] = au;
      au.onended = function () { b.textContent = label; };
      au.play().then(function () { b.textContent = "⏸ إيقاف مؤقت"; }, function () { b.textContent = label; setErr("تعذر تشغيل التسجيل."); });
    }, function () { b.textContent = label; setErr("تعذر تحميل التسجيل."); });
  }

  function afterSend(r) {
    sending = false; sendBtn.disabled = false; micBtn.disabled = false; if (imgBtn) imgBtn.disabled = false;
    if (r && r.status === "ok") {
      setErr(""); ta.value = ""; ta.style.height = "";
      loadInbox(true);
      if (locked && !r.locked) check();
    } else if (r && r.status === "rate_limited") setErr("أرسلت رسائل كثيرة، حاول بعد قليل.");
    else setErr("تعذر إرسال الرسالة، حاول مرة أخرى.");
  }

  function sendText() {
    if (sending || preparing) return;
    if (pendingImg) { sendPending(); return; }
    var t = ta.value.trim();
    if (!t) return;
    if (t.length > 1000) { setErr("الرسالة طويلة جدًا."); return; }
    sending = true; sendBtn.disabled = true; micBtn.disabled = true; setErr("");
    rpc("student_send", { p_device: deviceId(), p_kind: "text", p_body: t }).then(afterSend, function () { afterSend(null); });
  }

  // فك ترميز الصورة: createImageBitmap (يحترم اتجاه الصورة) ثم Image كخطة بديلة
  function viaImg(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file), im = new Image();
      im.onload = function () { resolve({ src: im, w: im.naturalWidth, h: im.naturalHeight, close: function () { URL.revokeObjectURL(url); } }); };
      im.onerror = function () { URL.revokeObjectURL(url); reject(new Error("decode")); };
      im.src = url;
    });
  }
  function decodeImg(file) {
    if (typeof createImageBitmap !== "function") return viaImg(file);
    return createImageBitmap(file, { imageOrientation: "from-image" })
      .catch(function () { return createImageBitmap(file); })
      .then(function (b) { return { src: b, w: b.width, h: b.height, close: function () { try { b.close(); } catch (e) {} } }; })
      .catch(function () { return viaImg(file); });
  }

  // تصغير الصورة وضغطها (JPEG، أطول ضلع 1280px) لتصبح أقل من ~700KB
  function compressImg(file) {
    if (!file) return Promise.reject(new Error("لم يتم اختيار صورة."));
    var okType = /^image\//.test(file.type) || (!file.type && /\.(jpe?g|png|webp|gif|bmp|heic|heif)$/i.test(file.name || ""));
    if (!okType) return Promise.reject(new Error("الملف ليس صورة."));
    if (file.size > 30 * 1024 * 1024) return Promise.reject(new Error("الصورة كبيرة جدًا (أكثر من 30MB)."));
    return decodeImg(file).then(function (d) {
      var max = 1280, q = 0.82, out = "";
      try {
        for (var i = 0; i < 8; i++) {
          var k = Math.min(1, max / Math.max(d.w, d.h));
          var c = document.createElement("canvas");
          c.width = Math.max(1, Math.round(d.w * k)); c.height = Math.max(1, Math.round(d.h * k));
          var x = c.getContext("2d");
          x.fillStyle = "#fff"; x.fillRect(0, 0, c.width, c.height);
          x.drawImage(d.src, 0, 0, c.width, c.height);
          out = c.toDataURL("image/jpeg", q);
          if (out.indexOf("data:image/jpeg") === 0 && out.length <= 700000) return out;
          q = Math.max(0.5, q - 0.1); max = Math.round(max * 0.8);
        }
      } finally { d.close(); }
      throw new Error("تعذر تصغير الصورة، جرّب صورة أخرى.");
    }, function () {
      throw new Error("تعذر قراءة الصورة. جرّب صورة بصيغة JPG أو PNG (صيغة HEIC لا تعمل على بعض الأجهزة).");
    });
  }

  // اختيار الصورة: تُجهَّز وتظهر معاينة، ولا تُرسل إلا بعد الضغط على «إرسال»
  function pickImage(file) {
    if (sending || preparing || !file) return;
    preparing = true; imgBtn.disabled = true; setInfo("جارٍ تجهيز الصورة...");
    compressImg(file).then(function (url) {
      pendingImg = url; prevImg.src = url; prevEl.hidden = false; setErr(""); ta.focus();
    }, function (e) {
      setErr((e && e.message) || "تعذر تجهيز الصورة.");
    }).then(function () { preparing = false; imgBtn.disabled = false; });
  }

  function clearPending() {
    pendingImg = "";
    if (prevEl) { prevEl.hidden = true; prevImg.removeAttribute("src"); }
  }

  function sendPending() {
    var url = pendingImg;
    if (!url || sending) return;
    sending = true; sendBtn.disabled = true; micBtn.disabled = true; imgBtn.disabled = true; setInfo("جارٍ إرسال الصورة...");
    var cap = ta.value.trim().slice(0, 1000);
    rpc("student_send", { p_device: deviceId(), p_kind: "image", p_image: url, p_body: cap }, 60000).then(function (r) {
      afterSend(r);
      if (r && r.status === "ok") clearPending();
      else if (r && r.status === "rate_limited") setErr("وصلت للحد الأقصى لإرسال الصور (10 صور في الساعة)، حاول لاحقًا.");
      else if (r && r.status === "invalid") setErr("الخادم لم يقبل الصورة. حدّث الصفحة وجرّب مرة أخرى، وإن تكرر الأمر أبلغ الإدارة.");
    }, function (e) {
      afterSend(null);
      var m = (e && e.message) || "";
      if (/^http 413/.test(m)) setErr("حجم الصورة أكبر من المسموح، اختر صورة أصغر.");
      else if (/^http (\d+)/.test(m)) setErr("تعذر إرسال الصورة (خطأ الخادم " + m.slice(5) + ")، حاول مرة أخرى.");
      else setErr("انقطع الاتصال أثناء الإرسال. تحقق من الإنترنت ثم اضغط إرسال لإعادة المحاولة.");
    });
  }

  function sendVoice(url, dur) {
    if (url.length > 590000) { setErr("التسجيل طويل جدًا، سجّل رسالة أقصر."); return; }
    sending = true; sendBtn.disabled = true; micBtn.disabled = true; setErr("");
    rpc("student_send", { p_device: deviceId(), p_kind: "voice", p_audio: url, p_duration: dur }).then(afterSend, function () { afterSend(null); });
  }

  function showRec(on) {
    recBar.hidden = !on;
    panel.querySelector(".cp-bar").hidden = on;
  }

  function startRec() {
    if (rec || sending) return;
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder)) {
      setErr("التسجيل الصوتي غير مدعوم في هذا المتصفح، اكتب رسالة نصية."); return;
    }
    setErr("");
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var mime = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"].filter(function (m) {
        try { return MediaRecorder.isTypeSupported(m); } catch (e) { return false; }
      })[0];
      var mr;
      try { mr = new MediaRecorder(stream, mime ? { mimeType: mime, audioBitsPerSecond: 24000 } : { audioBitsPerSecond: 24000 }); }
      catch (e) { mr = new MediaRecorder(stream); }
      var chunks = [];
      var r = { mr: mr, stream: stream, t0: Date.now(), cancel: false, timer: 0 };
      rec = r;
      mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
      mr.onstop = function () {
        clearInterval(r.timer);
        stream.getTracks().forEach(function (t) { t.stop(); });
        rec = null; showRec(false);
        if (r.cancel) return;
        var dur = Math.max(1, Math.round((Date.now() - r.t0) / 1000));
        var blob = new Blob(chunks, { type: mr.mimeType || mime || "audio/webm" });
        var fr = new FileReader();
        fr.onload = function () { sendVoice(String(fr.result), dur); };
        fr.readAsDataURL(blob);
      };
      mr.start();
      showRec(true);
      recTime.textContent = "0:00";
      r.timer = setInterval(function () {
        var s = Math.round((Date.now() - r.t0) / 1000);
        recTime.textContent = fmtDur(s);
        if (s >= MAX_REC) stopRec(false);
      }, 250);
    }, function () { setErr("لم يتم السماح باستخدام الميكروفون."); });
  }

  function stopRec(cancel) {
    if (!rec) return;
    rec.cancel = !!cancel;
    try { rec.mr.stop(); } catch (e) { rec.stream.getTracks().forEach(function (t) { t.stop(); }); rec = null; showRec(false); }
  }

  /* ================= الفحص / نبضة النشاط ================= */
  function applyCheck(r) {
    var st = r && r.status;
    if (st === "approved") {
      lsSet(K_ST, "approved");
      if (r.name) lsSet(K_NAME, r.name);
      unread = r.unread | 0;
      if (prevUnread !== null && unread > prevUnread && !chatOpen && !r.locked) notifyNew();
      if (prevUnread === null && unread > 0 && !r.locked) notifyNew();
      prevUnread = unread;
      var nowLocked = !!r.locked;
      buildChat();
      if (nowLocked) { enterLock(); return; }
      if (locked) exitLock(); else allow();
      if (!welcomed) { welcomed = true; welcome(r.name || lsGet(K_NAME), false); }
      updateFab();
      if (chatOpen) loadInbox(false);
    } else if (st === "rejected") { lsSet(K_ST, "rejected"); showName("rejected"); }
    else { lsSet(K_ST, "none"); showName("new"); }
  }

  function check() {
    return rpc("student_check", { p_device: deviceId(), p_type: deviceType() }).then(applyCheck, function () {
      var c = lsGet(K_ST);
      if (c === "approved") {
        if (lsGet(K_LOCK) === "1") { if (!locked) enterLock(); }
        else { if (!locked) allow(); if (!welcomed) { welcomed = true; welcome(lsGet(K_NAME), false); } }
      } else if (c === "rejected") showName("rejected");
      else showName("new", "تعذر الاتصال بالخادم حاليًا، حاول بعد قليل.");
    });
  }

  function start() {
    check();
    setInterval(function () { if (!document.hidden) check(); }, PING_MS);
    document.addEventListener("visibilitychange", function () { if (!document.hidden) check(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
