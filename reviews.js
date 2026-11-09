/* آراء الطلاب + معرض صور الطلاب الذين أنهوا المنصة.
   - لا يُحمَّل شيء إلا عند اقتراب الزائر من القسم (IntersectionObserver)
   - الصور: نسخة صغيرة lazy للمعرض، والنسخة الكبيرة لا تُحمَّل إلا عند التكبير
   - الحركة تتوقف خارج الشاشة وعند تقليل الحركة في النظام */
(function () {
  "use strict";
  var API_URL = "https://mohamedahmedhelmi.vercel.app/api";
  var PAGE = 12; // عدد الصور في أول عرض
  var rv = document.getElementById("rv"), ph = document.getElementById("ph");
  if (!rv || !ph) return;

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
    return fetch(API_URL + path, { signal: ctl ? ctl.signal : undefined }).then(function (r) {
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

  function card(r, dup) {
    var c = el("article", "rv-card");
    if (dup) c.setAttribute("aria-hidden", "true");
    c.appendChild(el("p", null, r.text));
    var foot = el("div", "rv-foot");
    var who = el("div", "rv-who");
    who.appendChild(el("b", null, r.name));
    who.appendChild(el("span", null, r.role || "طالب"));
    var q = el("span", "rv-q");
    q.innerHTML = QUOTE;
    foot.appendChild(q);
    foot.appendChild(who);
    c.appendChild(foot);
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
  function openForm() {
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
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ p_device: dev, p_name: name, p_text: text, p_grade: form.querySelector("#rvfGrade").value })
    }).then(function (r) { if (!r.ok) throw new Error(); return r.json(); }).then(function (res) {
      var s = res && res.status;
      if (s === "ok") {
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

  /* ================= معرض الصور ================= */
  var photos = [], order = [], stack, dotsBox, timer = 0, hoverOn = false, phOn = true, holdUntil = 0;
  var MAX_PHOTOS = 3; // الحد الأقصى للصور المعروضة
  var BOX = 1.6;      // نسبة (عرض/ارتفاع) الصندوق الذي تُوضَع فيه الصور (أفقي 16:10)، لازم تطابق .ph-stack في CSS
  // يضبط حجم البطاقة على نسبة أبعاد صورتها داخل الصندوق دون قص كبير أو فراغات
  function fit(b, w, h) {
    var ar = w && h ? w / h : BOX;
    ar = Math.min(2, Math.max(0.5, ar)); // حدود معقولة للصور الطويلة/العريضة جدًا
    if (ar >= BOX) { b.style.width = "100%"; b.style.height = (BOX / ar * 100) + "%"; }
    else { b.style.height = "100%"; b.style.width = (ar / BOX * 100) + "%"; }
  }
  function pUrl(p, kind) { return API_URL + "/public/photos/" + encodeURIComponent(p.id) + "/" + kind + "?v=" + p.v; }

  // يوزّع الصور فوق بعضها: الأولى في الأمام والباقي خلفها بميل خفيف
  function layout() {
    var items = stack.children, dots = dotsBox.children;
    for (var k = 0; k < items.length; k++) {
      items[k].setAttribute("data-pos", order.indexOf(k));
      if (dots[k]) dots[k].classList.toggle("on", order[0] === k);
    }
  }
  function bring(i) {
    var at = order.indexOf(i);
    if (at <= 0) return;
    order = order.slice(at).concat(order.slice(0, at));
    layout();
  }
  function next() { if (order.length > 1) { order.push(order.shift()); layout(); } }
  function hold(ms) { holdUntil = Date.now() + ms; }

  function addPhotos() {
    stack = document.getElementById("phStack");
    dotsBox = document.getElementById("phDots");
    stack.textContent = ""; dotsBox.textContent = "";
    photos = photos.slice(0, MAX_PHOTOS);
    photos.forEach(function (p, i) {
      var b = el("button", "ph-item");
      b.type = "button";
      b.setAttribute("aria-label", "تكبير صورة " + (p.name || "طالب"));
      var img = new Image();
      img.alt = p.caption || (p.name ? "صورة الطالب " + p.name : "طالب أنهى المنصة");
      img.decoding = "async";
      if (i > 0) img.loading = "lazy";
      fit(b, p.w, p.h);
      if (!(p.w && p.h)) img.addEventListener("load", function () { fit(b, img.naturalWidth, img.naturalHeight); });
      img.src = pUrl(p, "thumb");
      b.appendChild(img);
      if (p.name || p.caption) {
        var cap = el("span", "ph-cap");
        if (p.name) cap.appendChild(el("b", null, p.name));
        if (p.caption) cap.appendChild(document.createTextNode(p.caption));
        b.appendChild(cap);
      }
      b.addEventListener("click", function () {
        hold(8000);
        if (order[0] === i) openLb(i); else bring(i); // الأمامية تُكبَّر، والخلفية تتقدّم
      });
      stack.appendChild(b);
      var d = el("button", "ph-dot");
      d.type = "button";
      d.setAttribute("aria-label", "الصورة " + (i + 1));
      d.addEventListener("click", function () { hold(8000); bring(i); });
      dotsBox.appendChild(d);
    });
    dotsBox.hidden = photos.length < 2;
    order = photos.map(function (_, i) { return i; });
    layout();

    // تدوير تلقائي هادئ: يتوقف عند المرور/اللمس/التكبير/خروج القسم من الشاشة
    stack.addEventListener("mouseenter", function () { hoverOn = true; });
    stack.addEventListener("mouseleave", function () { hoverOn = false; });
    stack.addEventListener("touchstart", function () { hold(6000); }, { passive: true });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { phOn = es[0].isIntersecting; }, { threshold: 0.2 }).observe(ph);
    }
    if (photos.length > 1) {
      timer = setInterval(function () {
        if (hoverOn || !phOn || document.hidden || Date.now() < holdUntil) return;
        if (lb && !lb.hidden) return;
        next();
      }, 4200);
    }
  }

  var lb, lbImg, lbCap, cur = 0, lastFocus;
  function buildLb() {
    lb = el("div", "lb");
    lb.hidden = true;
    lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "عرض الصورة");
    lb.innerHTML = '<button class="lb-x" type="button" aria-label="إغلاق">×</button>' +
      '<button class="lb-p" type="button" aria-label="السابقة">›</button>' +
      '<button class="lb-n" type="button" aria-label="التالية">‹</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(lb);
    lbImg = lb.querySelector("img"); lbCap = lb.querySelector("figcaption");
    lb.querySelector(".lb-x").addEventListener("click", closeLb);
    lb.querySelector(".lb-p").addEventListener("click", function (e) { e.stopPropagation(); step(-1); });
    lb.querySelector(".lb-n").addEventListener("click", function (e) { e.stopPropagation(); step(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.tagName === "FIGURE") closeLb(); });
    var x0 = null;
    lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1);
    }, { passive: true });
  }
  function show(i) {
    cur = (i + photos.length) % photos.length;
    if (stack) bring(cur);
    var p = photos[cur];
    lbImg.src = pUrl(p, "thumb"); // يظهر فورًا (محمّلة أصلًا) ثم تُستبدل بالنسخة الكبيرة
    lbImg.alt = p.caption || p.name || "";
    lbCap.textContent = [p.name, p.caption].filter(Boolean).join(" — ");
    var big = new Image();
    big.onload = function () { if (photos[cur] === p) lbImg.src = big.src; };
    big.src = pUrl(p, "full");
  }
  function step(d) { if (photos.length > 1) show(cur + d); }
  function openLb(i) {
    if (!lb) buildLb();
    lastFocus = document.activeElement;
    lb.hidden = false;
    document.documentElement.style.overflow = "hidden";
    show(i);
    lb.querySelector(".lb-x").focus();
    document.addEventListener("keydown", onKey);
  }
  function closeLb() {
    lb.hidden = true;
    lbImg.removeAttribute("src");
    document.documentElement.style.overflow = "";
    document.removeEventListener("keydown", onKey);
    try { lastFocus && lastFocus.focus(); } catch (e) {}
  }
  function onKey(e) {
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") step(1);   // الصفحة RTL: اليسار = التالي
    else if (e.key === "ArrowRight") step(-1);
  }

  /* ================= التحميل عند الاقتراب ================= */
  var started = false;
  function start() {
    if (started) return;
    started = true;
    get("/public/reviews").then(function (d) {
      renderReviews((d && d.reviews) || []);
      rv.hidden = false;
      watchVisibility();
    }).catch(function () { /* الخادم غير متاح: يبقى القسم مخفيًا بهدوء */ });
    get("/public/photos").then(function (d) {
      photos = (d && d.photos) || [];
      if (!photos.length) return;
      addPhotos();
      ph.hidden = false;
    }).catch(function () {});
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
