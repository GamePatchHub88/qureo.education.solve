/* آراء الطلاب.
   - لا يُحمَّل شيء إلا عند اقتراب الزائر من القسم (IntersectionObserver)
   - الحركة تتوقف خارج الشاشة وعند تقليل الحركة في النظام */
(function () {
  "use strict";
  var API_URL = "https://mohamedahmedhelmi.vercel.app/api";
  var rv = document.getElementById("rv");
  if (!rv) return;

  var reduce = false; // الحركة تعمل دائمًا (تتوقف عند اللمس/المرور وخارج الشاشة)

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function get(path) {
    var ctl = typeof AbortController === "function" ? new AbortController() : null;
    var t = ctl ? setTimeout(function () { ctl.abort(); }, 12000) : 0;
    return fetch(API_URL + path, { headers: window.__qsHeaders ? window.__qsHeaders() : {}, signal: ctl ? ctl.signal : undefined }).then(function (r) {
      clearTimeout(t);
      if (!r.ok) throw new Error("http " + r.status);
      return r.json();
    }, function (e) { clearTimeout(t); throw e; });
  }
  var mem = {};
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return mem[k] || null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { mem[k] = v; } }
  var K_REV = "qs_reviewed"; // علامة: هذا الجهاز أضاف تقييمه
  function loginName() { return (lsGet("qs_name") || "").replace(/\s+/g, " ").trim(); }
  function markReviewed() {
    lsSet(K_REV, "1");
    var b = document.getElementById("rvAdd");
    if (b) { b.disabled = true; b.textContent = "✓ شكرًا لك، أضفت تقييمك"; }
  }

  /* ================= آراء الطلاب ================= */
  var QUOTE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.5 4C3 4 2 5 2 6.6V12c0 1.6 1 2.6 2.5 2.6h2.3c-.2 2-1.2 3.2-3.1 3.6l.5 1.8C7.6 19.4 10 17 10 13V6.6C10 5 9 4 7.5 4h-3Zm11 0C14 4 13 5 13 6.6V12c0 1.6 1 2.6 2.5 2.6h2.3c-.2 2-1.2 3.2-3.1 3.6l.5 1.8C18.6 19.4 21 17 21 13V6.6C21 5 20 4 18.5 4h-3Z"/></svg>';

  function hue(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
    return h;
  }
  function card(r, dup) {
    var c = el("article", "rv-card");
    if (dup) c.setAttribute("aria-hidden", "true");
    var top = el("div", "rv-top");
    var av = el("span", "rv-av", (r.name || "؟").trim().charAt(0));
    av.style.setProperty("--h", hue(r.name || ""));
    var who = el("div", "rv-who");
    who.appendChild(el("b", null, r.name));
    who.appendChild(el("span", null, r.role || "طالب"));
    var q = el("span", "rv-q");
    q.innerHTML = QUOTE;
    top.appendChild(av);
    top.appendChild(who);
    top.appendChild(q);
    c.appendChild(top);
    c.appendChild(el("p", null, r.text));
    return c;
  }

  function marqueeRow(items, rev) {
    var base = items.slice();
    while (base.length < 6) base = base.concat(items); // ملء العرض قبل التكرار
    var row = el("div", "rv-row" + (rev ? " rev" : ""));
    var track = el("div", "rv-track");
    base.forEach(function (r) { track.appendChild(card(r, false)); });
    if (!reduce) base.forEach(function (r) { track.appendChild(card(r, true)); }); // نسخة ثانية للّف السلس
    track.style.setProperty("--rv-dur", Math.max(36, base.length * 9) + "s");
    row.appendChild(track);
    // لمسة على الجوال توقف الحركة مؤقتًا لتسهيل القراءة
    row.addEventListener("touchstart", function () { row.classList.add("paused"); }, { passive: true });
    row.addEventListener("touchend", function () { setTimeout(function () { row.classList.remove("paused"); }, 2500); }, { passive: true });
    return row;
  }

  function renderReviews(list) {
    var box = document.getElementById("rvRows");
    box.textContent = "";
    box.classList.remove("is-static");
    var cnt = document.getElementById("rvCount");
    if (cnt) { cnt.hidden = !list.length; cnt.firstChild.textContent = list.length; }
    if (!list.length) {
      box.appendChild(el("p", "rv-empty", "لا توجد آراء منشورة بعد. كن أول من يشارك رأيه!"));
      return;
    }
    if (list.length < 6) {
      box.appendChild(marqueeRow(list, false));
    } else {
      var a = [], b = [];
      list.forEach(function (r, i) { (i % 2 ? b : a).push(r); });
      box.appendChild(marqueeRow(a, false));
      box.appendChild(marqueeRow(b, true));
    }
  }

  // إيقاف الحركة تمامًا حين يكون القسم خارج الشاشة (توفير للبطارية)
  function watchVisibility() {
    if (!("IntersectionObserver" in window)) return;
    new IntersectionObserver(function (es) {
      rv.classList.toggle("rv-off", !es[0].isIntersecting);
    }, { threshold: 0 }).observe(rv);
  }

  /* ================= نافذة إرسال رأي ================= */
  var form;
  function buildForm() {
    form = el("div", "rvf-back");
    form.hidden = true;
    form.innerHTML =
      '<div class="rvf" role="dialog" aria-modal="true" aria-labelledby="rvfT">' +
      '<h3 id="rvfT">شاركنا رأيك</h3>' +
      '<p>رأيك يظهر في الموقع بعد مراجعته. التجربة مجانية بالكامل.</p>' +
      '<label for="rvfName">الاسم</label><input id="rvfName" type="text" maxlength="40" autocomplete="name" readonly>' +
      '<label for="rvfGrade">الصف (اختياري)</label><select id="rvfGrade"><option value="">—</option><option value="1">الصف الأول الثانوي</option><option value="2">الصف الثاني الثانوي</option></select>' +
      '<label for="rvfText">رأيك</label><textarea id="rvfText" maxlength="400" placeholder="اكتب تجربتك مع الموقع…"></textarea><small id="rvfCount">0 / 400</small>' +
      '<p class="rvf-msg" id="rvfMsg" role="alert"></p>' +
      '<div class="rvf-acts"><button type="button" class="rv-btn" id="rvfSend">إرسال</button><button type="button" class="ghost" id="rvfCancel">إلغاء</button></div></div>';
    document.body.appendChild(form);
    var text = form.querySelector("#rvfText"), count = form.querySelector("#rvfCount");
    text.addEventListener("input", function () { count.textContent = text.value.length + " / 400"; });
    form.querySelector("#rvfCancel").addEventListener("click", closeForm);
    form.addEventListener("click", function (e) { if (e.target === form) closeForm(); });
    form.querySelector("#rvfSend").addEventListener("click", send);
  }
  // رسالة قصيرة تحت الزر عندما تكون التقييمات مغلقة (يوقفها المدير لتقليل الاستهلاك)
  var closedT;
  function showClosed() {
    var box = document.querySelector(".rv-add");
    if (!box) return;
    var n = document.getElementById("rvClosed");
    if (!n) {
      n = el("p", "rv-closed", "التقييمات مغلقة الآن لتقليل الاستهلاك، حاول لاحقًا.");
      n.id = "rvClosed";
      n.setAttribute("role", "status");
      n.style.cssText = "margin:10px auto 0;max-width:420px;padding:9px 14px;border-radius:10px;font-size:14px;line-height:1.8;text-align:center;background:rgba(240,180,41,.14);border:1px solid rgba(240,180,41,.55)";
      box.appendChild(n);
    }
    clearTimeout(closedT);
    closedT = setTimeout(function () { if (n.parentNode) n.parentNode.removeChild(n); }, 7000);
  }
  function openForm() {
    if (lsGet(K_REV) === "1") { markReviewed(); return; }
    (window.__qsRec ? window.__qsRec() : Promise.resolve(true)).then(function (on) {
      if (!on) { closeForm(); showClosed(); return; }
      openFormNow();
    });
  }
  function openFormNow() {
    if (!form) buildForm();
    if (lsGet(K_REV) === "1") { markReviewed(); return; }
    form.querySelector("#rvfName").value = loginName();
    form.querySelector("#rvfMsg").className = "rvf-msg";
    form.querySelector("#rvfMsg").textContent = loginName() ? "" : "سجّل دخولك بالاسم أولًا ثم أضف تقييمك.";
    form.hidden = false;
    setTimeout(function () { try { form.querySelector("#rvfText").focus(); } catch (e) {} }, 50);
  }
  function closeForm() { if (form) form.hidden = true; }

  function send() {
    var msg = form.querySelector("#rvfMsg"), btn = form.querySelector("#rvfSend");
    var name = loginName(); // الاسم هو نفسه اسم الدخول ولا يمكن تغييره
    var text = form.querySelector("#rvfText").value.replace(/\s+/g, " ").trim();
    msg.className = "rvf-msg err";
    if (lsGet(K_REV) === "1") { markReviewed(); closeForm(); return; }
    if (name.length < 2) { msg.textContent = "سجّل دخولك بالاسم أولًا ثم أضف تقييمك."; return; }
    if (text.length < 10) { msg.textContent = "اكتب رأيك في 10 أحرف على الأقل."; return; }
    var dev = lsGet("qs_device");
    if (!dev) { msg.textContent = "أعد تحميل الصفحة ثم حاول مرة أخرى."; return; }
    btn.disabled = true;
    fetch(API_URL + "/rpc/review_submit", {
      method: "POST", headers: Object.assign({ "Content-Type": "application/json" }, window.__qsHeaders ? window.__qsHeaders() : {}),
      body: JSON.stringify({ p_device: dev, p_name: name, p_text: text, p_grade: form.querySelector("#rvfGrade").value })
    }).then(function (r) { if (!r.ok) throw new Error(); return r.json(); }).then(function (res) {
      var s = res && res.status;
      if (s === "paused") { closeForm(); showClosed(); try { window.__qsRec && window.__qsRec(true); } catch (e) {} }
      else if (s === "ok") {
        msg.className = "rvf-msg ok";
        msg.textContent = "شكرًا لك! وصل رأيك وسيظهر بعد المراجعة.";
        form.querySelector("#rvfText").value = "";
        markReviewed();
        setTimeout(closeForm, 2200);
      } else if (s === "rate_limited") { msg.textContent = "أضفت تقييمك بالفعل من هذا الجهاز."; markReviewed(); }
      else if (s === "limit") { msg.textContent = "أضفت تقييمك بالفعل من هذا الجهاز."; markReviewed(); }
      else msg.textContent = "تعذر الإرسال. تأكد من الاسم والنص ثم حاول مجددًا.";
    }).catch(function () { msg.textContent = "تعذر الاتصال بالخادم. حاول لاحقًا."; })
      .then(function () { btn.disabled = false; });
  }
  document.getElementById("rvAdd").addEventListener("click", openForm);
  if (lsGet(K_REV) === "1") markReviewed();

  /* ================= التحميل عند الاقتراب ================= */
  var started = false;
  function start() {
    if (started) return;
    started = true;
    // أثناء إيقاف الموقع لا نطلب التقييمات من الخادم
    (window.__qsReady || Promise.resolve(false)).then(function (stopped) { if (!stopped) load(); });
  }
  function load() {
    get("/public/reviews").then(function (d) {
      renderReviews((d && d.reviews) || []);
      rv.hidden = false;
      watchVisibility();
    }).catch(function () { /* الخادم غير متاح: يبقى القسم مخفيًا بهدوء */ });
  }
  var trigger = document.querySelector(".seo") || document.querySelector("footer");
  if ("IntersectionObserver" in window && trigger) {
    var io = new IntersectionObserver(function (es) {
      if (es[0].isIntersecting) { io.disconnect(); start(); }
    }, { rootMargin: "700px 0px" });
    io.observe(trigger);
  } else {
    window.addEventListener("load", function () { setTimeout(start, 1500); });
  }
})();
