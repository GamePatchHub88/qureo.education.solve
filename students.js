/* بوابة الاسم: كل جهاز يكتب اسمه مرة واحدة ويظهر للمدير في لوحة البورتفوليو.
   ليست تسجيل دخول — قاعدة بيانات Supabase فقط (دوال student_check / student_register). */
(function () {
  "use strict";
  var SB_URL = "https://wgcfajrwfmunwoqmneww.supabase.co";
  var SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnY2ZhanJ3Zm11bndvcW1uZXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNDg3ODQsImV4cCI6MjA5ODkyNDc4NH0.sR7YNvM3YKGQkavCN617r9B30oEwf06dCuuRz83ojlE";
  var K_DEV = "qs_device", K_ST = "qs_status", K_NAME = "qs_name";
  var welcomed = false, wTimer;
  var root = document.documentElement;
  var mem = {};

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

  function rpc(fn, args) {
    var ctl = typeof AbortController === "function" ? new AbortController() : null;
    var t = ctl ? setTimeout(function () { ctl.abort(); }, 10000) : 0;
    return fetch(SB_URL + "/rest/v1/rpc/" + fn, {
      method: "POST",
      headers: { apikey: SB_KEY, Authorization: "Bearer " + SB_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(args),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) {
      clearTimeout(t);
      if (!r.ok) throw new Error("http " + r.status);
      return r.json();
    }, function (e) { clearTimeout(t); throw e; });
  }

  /* ---------- الواجهة ---------- */
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

  function show(mode, note) {
    if (!gate) build();
    var rej = mode === "rejected";
    title.textContent = rej ? "يلزم اسم جديد" : "أهلًا بك في حلول كيريو";
    sub.textContent = rej ? "تم رفض الاسم السابق لهذا الجهاز. اكتب اسمًا آخر للمتابعة." : "اكتب اسمك للدخول إلى الموقع. لا حاجة لحساب أو كلمة مرور.";
    msg.textContent = note || "";
    input.value = "";
    gate.hidden = false;
    root.classList.add("gate-pending");
    if (!open) { open = true; setTimeout(function () { try { input.focus(); } catch (e) {} }, 60); }
  }

  function allow() {
    open = false;
    if (gate) gate.hidden = true;
    root.classList.remove("gate-pending");
  }

  function submit() {
    var name = input.value.replace(/\s+/g, " ").trim();
    if (name.length < 2) { msg.textContent = "اكتب اسمًا من حرفين على الأقل."; input.focus(); return; }
    if (name.length > 40) { msg.textContent = "الاسم طويل جدًا (الحد الأقصى 40 حرفًا)."; return; }
    btn.disabled = true; msg.textContent = "";
    rpc("student_register", { p_device: deviceId(), p_name: name, p_type: deviceType() }).then(function (r) {
      btn.disabled = false;
      if (r && r.status === "approved") { lsSet(K_ST, "approved"); lsSet(K_NAME, r.name || name); allow(); welcomed = true; welcome(r.name || name, true); }
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

  /* ---------- الفحص ---------- */
  function check() {
    return rpc("student_check", { p_device: deviceId(), p_type: deviceType() }).then(function (r) {
      var st = r && r.status;
      if (st === "approved") {
        lsSet(K_ST, "approved"); if (r.name) lsSet(K_NAME, r.name);
        allow();
        if (!welcomed) { welcomed = true; welcome(r.name || lsGet(K_NAME), false); }
      }
      else if (st === "rejected") { lsSet(K_ST, "rejected"); show("rejected"); }
      else { lsSet(K_ST, "none"); show("new"); }
    }, function () {
      var c = lsGet(K_ST);
      if (c === "approved") { allow(); if (!welcomed) { welcomed = true; welcome(lsGet(K_NAME), false); } }
      else if (c === "rejected") show("rejected");
      else show("new", "تعذر الاتصال بالخادم حاليًا، حاول بعد قليل.");
    });
  }

  function start() {
    check();
    setInterval(check, 60000);
    document.addEventListener("visibilitychange", function () { if (!document.hidden) check(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
