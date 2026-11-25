/* =====================================================================
   الامتحان التجريبي (توفاس) — محاكاة امتحان نهاية الترم أونلاين
   الصف الأول الثانوي (الفصول 1–42) · الأسئلة تُولَّد من بنك الفصول نفسه
   ملف مستقل: لا يعدّل بيانات الحلول، ويقرأ G1 من script.js
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- إعدادات الامتحان (عدّلها هنا فقط) ---------- */
  var CFG = {
    1: {
      label: "الصف الأول الثانوي",
      total: 40,            // عدد الأسئلة
      minutes: 60,          // مدة الامتحان بالدقائق
      passPct: 50,          // نسبة النجاح
      mix: { output: 0.25, code: 0.125, concept: 0.125, write: 0.3, debug: 0.2 }, // توزيع أنواع الأسئلة
      hints: 5,             // عدد التلميحات (الماسات) في الامتحان
      warnAt: 5 * 60        // تنبيه عند بقاء (ثانية)
    }
  };
  var KEY = "qx_exam_g";
  var BEST = "qx_exam_best_g";
  var LETTERS = ["أ", "ب", "ج", "د"];
  var BAN = /prompt\(|alert\(|confirm\(|document|window|Math\.random|Date|setTimeout|setInterval|fetch|require|process|import |<\w+/;

  /* ---------- أدوات عامة ---------- */
  var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); };
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function uniq(a) { var s = {}; return a.filter(function (x) { if (s[x]) return false; s[x] = 1; return true; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function fmtTime(sec) { sec = Math.max(0, Math.round(sec)); var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60; return (h ? h + ":" + pad(m) : pad(m)) + ":" + pad(s); }
  function arDigits(n) { return String(n).replace(/\d/g, function (d) { return "٠١٢٣٤٥٦٧٨٩"[d]; }); }
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };

  /* ---------- تشغيل كود جافا سكربت آمن لاستخراج الناتج الحقيقي ---------- */
  function fmtVal(x) {
    if (typeof x === "string") return x;
    if (Array.isArray(x)) return "[" + x.map(function (i) { return typeof i === "string" ? '"' + i + '"' : fmtVal(i); }).join(", ") + "]";
    if (x === undefined) return "undefined";
    if (x === null) return "null";
    if (typeof x === "object") { try { return JSON.stringify(x); } catch (e) { return String(x); } }
    return String(x);
  }
  function runJS(code) {
    var out = [];
    var con = { log: function () { out.push(Array.prototype.map.call(arguments, fmtVal).join(" ")); } };
    new Function("console", '"use strict";\n' + code)(con);
    return out;
  }

  /* ---------- تغيير بسيط للكود/الناتج لصنع إجابات خاطئة مقنعة ---------- */
  var SWAPS = [
    [/ >= /, " <= "], [/ <= /, " >= "], [/ > /, " < "], [/ < /, " > "],
    [/ === /, " !== "], [/ !== /, " === "], [/ == /, " != "], [/ != /, " == "],
    [/ && /, " || "], [/ \|\| /, " && "], [/ \+ /, " - "], [/ - /, " + "],
    [/ \* /, " / "], [/ \/ /, " * "], [/\+\+/, "--"], [/--/, "++"],
    [/\bconst\b/, "let"], [/\bbreak;/, "continue;"], [/\btrue\b/, "false"], [/\bfalse\b/, "true"],
    [/\bfloor\b/, "ceil"], [/\bceil\b/, "floor"], [/\bmax\b/, "min"], [/\bmin\b/, "max"]
  ];
  function codeMutants(code) {
    var res = [];
    SWAPS.forEach(function (p) { if (p[0].test(code)) { var c = code.replace(p[0], p[1]); if (c !== code) res.push(c); } });
    var m = code.match(/\b\d+\b/);
    if (m) res.push(code.replace(/\b(\d+)\b/, function (x) { return String(+x + 1); }));
    return uniq(res);
  }
  function outMutants(o) {
    var res = [];
    if (/^-?\d+(\.\d+)?$/.test(o)) {
      var n = parseFloat(o);
      [n + 1, n - 1, n * 2, n + 10, n === 0 ? 1 : 0, -n].forEach(function (v) { res.push(String(Math.round(v * 100) / 100)); });
    } else if (o === "true" || o === "false") {
      res.push(o === "true" ? "false" : "true", "undefined", "لا يظهر شيء");
    } else {
      var lines = o.split("\n");
      if (lines.length > 1) { res.push(lines.slice().reverse().join("\n")); res.push(lines.slice(0, -1).join("\n")); res.push(lines.slice(1).join("\n")); }
      var w = o.split(" ");
      if (lines.length === 1 && w.length > 1) { res.push(w.slice(0, -1).join(" ")); res.push(w.slice().reverse().join(" ")); }
      if (lines.length === 1) res.push(o.toUpperCase() !== o ? o.toUpperCase() : o.toLowerCase());
      res.push("undefined", "لا يظهر شيء");
    }
    return uniq(res).filter(function (x) { return x !== o && x !== ""; });
  }
  function shapeOf(s) { return /^-?\d+(\.\d+)?$/.test(s) ? "num" : (s === "true" || s === "false") ? "bool" : "txt"; }

  /* ---------- بناء بنك الأسئلة من G1 ---------- */
  function buildPool(G1) {
    var pool = { output: [], code: [], concept: [], write: [], debug: [] };
    var allOut = [], allCode = [], allCon = [];
    var chOut = {}, chCode = {}, chCon = {};

    G1.forEach(function (ch) {
      var web = ch.lang === "web";
      chOut[ch.id] = []; chCode[ch.id] = []; chCon[ch.id] = [];
      ch.lessons.forEach(function (ls) {
        ls[1].forEach(function (q) {
          var t = q[0], a = q[1], k = q[2];
          if (k) {
            var lines = k.split("\n").length;
            if (!web && !BAN.test(k) && /console\.log/.test(k)) {
              var o = null;
              try { o = runJS(k); } catch (e) { o = null; }
              if (o && o.length && o.length <= 4 && o.join("\n").length < 80) {
                var s = o.join("\n");
                chOut[ch.id].push({ code: k, out: s, lines: lines, t: t });
                allOut.push(s);
              }
            }
            if (!/^(أدخل|انسخ|اكتب البرنامج|أضف الكود)|كما هو|نفس البرنامج/.test(t) && t.length >= 12 && lines <= 9 && k.length <= 260) {
              chCode[ch.id].push({ text: t, code: k, web: web });
              allCode.push({ code: k, web: web, ch: ch.id });
            }
          } else if (a && t.length >= 8 && a.length <= 70 && a.indexOf("\n") < 0 &&
            !/^(ثم اضغط|اضغط|اكتب في|اكتب مكان|علامة|علّم|بالطبع|نعم|إنه|تم عرض)/.test(a) &&
            !/تشغيل الكود|^هل |أجب عن سؤال|^سؤال|ممتع|حظك|تشرب|تستخدم لقياس|نوع المعالجة|بيتزا/.test(t) && !/[!؟]$|ممتع|لقد كانت|ينتج عنه خطأ|ثم \d|تمارين|^Scope$|^String$/.test(a)) {
            var qk = t.replace(/[^\u0600-\u06FFa-zA-Z ]/g, "").split(" ").slice(0, 2).join(" ");
            chCon[ch.id].push({ text: t, ans: a, qk: qk });
            allCon.push({ ans: a, ch: ch.id, qk: qk });
          }
        });
      });
    });

    /* أسئلة: ما ناتج الكود؟ */
    G1.forEach(function (ch) {
      chOut[ch.id].forEach(function (it) {
        var same = uniq(chOut[ch.id].map(function (x) { return x.out; })).filter(function (x) { return x !== it.out && shapeOf(x) === shapeOf(it.out); });
        var other = shuffle(uniq(allOut)).filter(function (x) { return x !== it.out && shapeOf(x) === shapeOf(it.out); });
        var cand = uniq(shuffle(outMutants(it.out)).slice(0, 3).concat(shuffle(same).slice(0, 2), other.slice(0, 4)));
        cand = cand.filter(function (x) { return x !== it.out; });
        if (cand.length < 3) return;
        pool.output.push({
          type: "output", ch: ch.id, simple: it.lines <= 1,
          q: "ما الناتج الذي يظهر في وحدة التحكم عند تشغيل الكود التالي؟",
          code: it.code, correct: it.out, wrong: cand.slice(0, 3), mono: true
        });
      });
    });

    /* أسئلة عملية (مقالية): اكتب الكود + صحّح الخطأ — تُصحَّح بتنفيذ كود الطالب ومقارنة الناتج */
    G1.forEach(function (ch) {
      chOut[ch.id].forEach(function (it) {
        var t = it.t.replace(/^[\u2066\u2069]+/, "");
        var okT = !/^(أدخل|انسخ|اكتب البرنامج|أضف الكود)|كما هو|نفس البرنامج/.test(t) && t.length >= 12 &&
          !/السطر|المكان|الملون|أكمل|عدّل|لنعدّل|علّق|تعليق|اضغط|تشغيل الكود|أجب|ابحث|أي |ما /.test(t) &&
          /اعرض|اطبع|أنشئ|أعلن|احسب|عيّن|أسند|استخدم|ضع|اكتب/.test(t);
        if (okT) pool.write.push({ type: "write", ch: ch.id, simple: it.lines <= 1, q: t, solution: it.code, expected: it.out });
        if (it.lines >= 2 && !/\b(for|while|do)\b/.test(it.code)) {
          var ms = codeMutants(it.code).filter(function (m) {
            try { return runJS(m).join("\n") !== it.out; } catch (e) { return true; }
          });
          if (ms.length) pool.debug.push({ type: "debug", ch: ch.id, simple: false, q: "شغّل البرنامج وتأكد من وجود خطأ، ثم أعد كتابة الكود ليعمل بشكل صحيح.", starter: shuffle(ms)[0], solution: it.code, expected: it.out });
        }
      });
    });

    /* أسئلة: اختر الكود الصحيح */
    G1.forEach(function (ch) {
      chCode[ch.id].forEach(function (it) {
        var cand = [];
        if (!it.web) cand = codeMutants(it.code);
        var same = chCode[ch.id].filter(function (x) { return x.code !== it.code; }).map(function (x) { return x.code; });
        var sameKind = allCode.filter(function (x) { return x.web === it.web && x.code !== it.code; }).map(function (x) { return x.code; });
        cand = uniq(shuffle(cand).slice(0, 2).concat(shuffle(same).slice(0, 3), shuffle(sameKind).slice(0, 4)));
        cand = cand.filter(function (x) { return x !== it.code; });
        if (cand.length < 3) return;
        pool.code.push({
          type: "code", ch: ch.id, simple: false,
          q: "اختر الكود الصحيح للمطلوب التالي:\n" + it.text.replace(/^[\u2066\u2069]+/, ""),
          correct: it.code, wrong: cand.slice(0, 3), mono: true, isCode: true, web: it.web
        });
      });
    });

    /* أسئلة: مفاهيم */
    G1.forEach(function (ch) {
      chCon[ch.id].forEach(function (it) {
        var sh = shapeOf(it.ans), cand;
        if (sh === "bool") {
          cand = [it.ans === "true" ? "false" : "true"];
        } else {
          var sameQ = allCon.filter(function (x) { return x.qk === it.qk; }).map(function (x) { return x.ans; });
          var same = chCon[ch.id].map(function (x) { return x.ans; });
          var all = allCon.map(function (x) { return x.ans; });
          var ok = function (x) { return shapeOf(x) === sh; };
          cand = uniq(shuffle(same).filter(ok).slice(0, 2).concat(shuffle(sameQ).filter(ok).slice(0, 4)));
          cand = cand.filter(function (x) { return x !== it.ans; });
          /* الأسئلة النصية: لا نقبل إلا مشتّتات من نفس الفصل/نوع السؤال حتى تبقى منطقية */
          if (sh === "txt" && cand.length < 3) return;
          if (sh === "num") cand = uniq(cand.concat(shuffle(all).filter(ok).slice(0, 4)));
          cand = cand.filter(function (x) { return x !== it.ans; });
          if (sh === "num") outMutants(it.ans).forEach(function (m) { cand.push(m); });
          cand = uniq(cand);
        }
        if (cand.length < (sh === "bool" ? 1 : 3)) return;
        pool.concept.push({
          type: "concept", ch: ch.id, simple: false,
          q: it.text, correct: it.ans, wrong: cand.slice(0, 3), mono: sh !== "txt" || /^[\x00-\x7F]+$/.test(it.ans)
        });
      });
    });
    return pool;
  }

  /* ---------- سحب أسئلة الامتحان بتوازن بين الفصول ---------- */
  function draw(pool, cfg) {
    var want = {
      output: Math.round(cfg.total * cfg.mix.output),
      code: Math.round(cfg.total * cfg.mix.code),
      write: Math.round(cfg.total * cfg.mix.write),
      debug: Math.round(cfg.total * cfg.mix.debug)
    };
    want.concept = cfg.total - want.output - want.code - want.write - want.debug;
    var picked = [], seenQ = {};
    function key(x) { return x.type + "|" + x.q + "|" + (x.correct || "") + (x.code || "") + (x.solution || ""); }
    function take(type, n) {
      var byCh = {};
      shuffle(pool[type]).forEach(function (x) { (byCh[x.ch] = byCh[x.ch] || []).push(x); });
      Object.keys(byCh).forEach(function (c) { byCh[c].sort(function (a, b) { return (a.simple ? 1 : 0) - (b.simple ? 1 : 0); }); });
      var chs = shuffle(Object.keys(byCh)), got = 0, guard = 0;
      while (got < n && guard++ < 200) {
        var progressed = false;
        for (var i = 0; i < chs.length && got < n; i++) {
          var arr = byCh[chs[i]];
          while (arr.length) {
            var x = arr.shift();
            if (seenQ[key(x)]) continue;
            seenQ[key(x)] = 1; picked.push(x); got++; progressed = true; break;
          }
        }
        if (!progressed) break;
      }
      return got;
    }
    var short = 0;
    var TYPES = ["write", "debug", "output", "code", "concept"];
    TYPES.forEach(function (t) { short += want[t] - take(t, want[t]); });
    if (short > 0) TYPES.forEach(function (t) { if (short > 0) short -= take(t, short); });

    picked.sort(function (a, b) { return a.ch - b.ch; });
    return picked.map(function (x) {
      if (x.type === "write" || x.type === "debug") {
        return { type: x.type, ch: x.ch, q: x.q, starter: x.starter || "", expected: x.expected, solution: x.solution, opts: [], ans: -1 };
      }
      var opts = shuffle([x.correct].concat(x.wrong));
      return {
        type: x.type, ch: x.ch, q: x.q, code: x.code || "", opts: opts, ans: opts.indexOf(x.correct),
        mono: !!x.mono, isCode: !!x.isCode, web: !!x.web
      };
    });
  }

  /* ---------- اختبار من Node بدون واجهة ---------- */
  if (typeof document === "undefined") {
    module.exports = { buildPool: buildPool, draw: draw, CFG: CFG, runJS: runJS };
    return;
  }

  /* ---------- تشغيل كود الطالب في Worker بمهلة (يمنع تجمّد الصفحة عند حلقة لا نهائية) ---------- */
  function runAsync(code) {
    return new Promise(function (resolve) {
      var done = false;
      function fin(r) { if (!done) { done = true; resolve(r); } }
      function sync() {
        try { fin({ out: runJS(code), err: "" }); } catch (e) { fin({ out: [], err: String(e && e.name ? e.name + ": " + e.message : e) }); }
      }
      if (typeof Worker === "undefined" || typeof Blob === "undefined" || typeof URL === "undefined" || !URL.createObjectURL) { sync(); return; }
      try {
        var src = "var F=" + fmtVal.toString() + ";self.onmessage=function(e){var out=[];var con={log:function(){out.push(Array.prototype.map.call(arguments,F).join(' '))}};" +
          "try{new Function('console','\"use strict\";\\n'+e.data)(con);postMessage({out:out,err:''})}catch(x){postMessage({out:out,err:(x&&x.name?x.name+': '+x.message:String(x))})}};";
        var url = URL.createObjectURL(new Blob([src], { type: "application/javascript" }));
        var w = new Worker(url);
        var t = setTimeout(function () { w.terminate(); URL.revokeObjectURL(url); fin({ out: [], err: "انتهت مهلة التنفيذ (هل توجد حلقة لا نهائية؟)" }); }, 2000);
        w.onmessage = function (e) { clearTimeout(t); w.terminate(); URL.revokeObjectURL(url); fin(e.data); };
        w.onerror = function () { clearTimeout(t); w.terminate(); URL.revokeObjectURL(url); sync(); };
        w.postMessage(code);
      } catch (e) { sync(); }
    });
  }
  function norm(arr) { return arr.map(function (l) { return String(l).replace(/\s+$/, ""); }).join("\n").trim(); }

  /* =====================================================================
     الواجهة (بنفس شكل منصة كيريو: شريط علوي، شريط بنفسجي، بطاقة السؤال، المحرر)
     ===================================================================== */
  var root = document.getElementById("exam");
  if (!root) return;

  var GRADE = 1;
  var S = null;
  var tick = null;
  var view = "intro";   // intro | run | grading | result
  var reviewOnlyWrong = false;
  var TLBL = { output: "ناتج الكود", code: "اختيار الكود", concept: "مفهوم", write: "اكتب الكود", debug: "صحّح الخطأ" };

  function load() {
    var raw = store.get(KEY + GRADE);
    if (!raw) return null;
    try { var s = JSON.parse(raw); return s && s.v === 2 && s.qs && s.qs.length ? s : null; } catch (e) { return null; }
  }
  function save() { if (S) store.set(KEY + GRADE, JSON.stringify(S)); }

  function hlFn(c) {
    var H = window.__hl;
    if (!H) return esc(c);
    var d = (typeof detectWeb === "function" && /<\w+|^\s*[.#\w-]+\s*\{/m.test(c)) ? detectWeb(c) : H.detect(c);
    var f = { html: H.hlHTML, css: H.hlCSS, js: H.hlJS, py: H.hlPY }[d] || H.hlJS;
    return f(c);
  }
  function hlJS(c) { return window.__hl ? window.__hl.hlJS(c) : esc(c); }
  function codeBox(c, file) {
    return '<div class="mac ex-mac"><div class="bar"><i></i><i></i><i></i><span>' + esc(file || "main.js") + '</span></div><pre dir="ltr"><code>' + hlFn(c) + "</code></pre></div>";
  }
  function fileOf(q) { return q.web ? (/<\w+/.test(q.code || q.opts[0]) ? "index.html" : "style.css") : "main.js"; }
  function isPractical(q) { return q.type === "write" || q.type === "debug"; }

  /* ---- الشاشة 1: المقدّمة ---- */
  function renderIntro() {
    view = "intro";
    var c = CFG[GRADE];
    var best = store.get(BEST + GRADE);
    var prev = load();
    var resume = prev && !prev.done && Date.now() < prev.endAt;
    var bestHtml = best ? '<div class="ex-best">🏆 أفضل نتيجة لك: <b>' + esc(best) + "%</b></div>" : "";
    var lastHtml = prev && prev.done && prev.result
      ? '<div class="ex-resume ex-last"><div><b>آخر محاولة: ' + prev.result.pct + '%</b><small>' + prev.result.correct + " من " + prev.result.total + ' صحيحة</small></div><button type="button" class="ghost" data-act="show-result">عرض النتيجة</button></div>'
      : "";
    var resumeHtml = resume
      ? '<div class="ex-resume"><div><b>لديك امتحان لم يُنهَ</b><small>المتبقي ' + fmtTime((prev.endAt - Date.now()) / 1000) + ' · وصلت إلى السؤال ' + (prev.idx + 1) + " من " + prev.qs.length + '</small></div><button type="button" class="ex-btn main" data-act="resume">متابعة الامتحان</button></div>'
      : "";
    root.innerHTML =
      '<div class="ex-wrap">' +
      '<header class="ex-hero"><span class="ex-tag">محاكاة امتحان نهاية الترم</span>' +
      "<h2>📝 الامتحان التجريبي — توفاس</h2>" +
      "<p>نفس شكل منصة كيريو: أسئلة اختيار من متعدد وأسئلة عملية تكتب فيها الكود وتشغّله، بوقت محدد ونتيجة فورية مع مراجعة كاملة.</p></header>" +
      '<div class="ex-grades" role="tablist" aria-label="الصف">' +
      '<button type="button" role="tab" class="on" aria-selected="true">الصف الأول الثانوي</button>' +
      '<button type="button" role="tab" disabled aria-selected="false">الصف الثاني الثانوي <small>قريبًا</small></button></div>' +
      resumeHtml + lastHtml +
      '<div class="ex-cards">' +
      '<div class="ex-card"><b>' + c.total + "</b><span>سؤالًا</span></div>" +
      '<div class="ex-card"><b>' + c.minutes + "</b><span>دقيقة</span></div>" +
      '<div class="ex-card"><b>' + c.hints + "</b><span>تلميحات</span></div>" +
      '<div class="ex-card"><b>' + c.passPct + '%</b><span>حد النجاح</span></div></div>' +
      bestHtml +
      '<section class="ex-rules"><h3>تعليمات الامتحان</h3><ul>' +
      "<li>الأسئلة مولَّدة عشوائيًا من الفصول 1–42 وتختلف في كل محاولة.</li>" +
      "<li>أنواع الأسئلة: <b>اكتب الكود</b> و<b>صحّح الخطأ</b> (تكتب وتشغّل في المحرر)، وناتج الكود، واختيار الكود الصحيح، والمفاهيم.</li>" +
      "<li>الأسئلة العملية تُصحَّح بتشغيل كودك ومقارنة ناتجه بالناتج المطلوب، فأي كود يعطي نفس الناتج مقبول.</li>" +
      "<li>لديك " + c.hints + " ماسات تلميح 💎 لكل الامتحان: كل ماسة تكشف تلميحًا للسؤال الحالي.</li>" +
      "<li>تنتقل بزر «السؤال التالي» ولا يمكن الرجوع، والعدّاد لا يتوقف وينتهي الامتحان تلقائيًا عند انتهاء الوقت.</li>" +
      "<li>لو أغلقت الصفحة يمكنك المتابعة طالما لم ينتهِ الوقت.</li></ul></section>" +
      '<div class="ex-start"><button type="button" class="ex-btn main big" data-act="start">' + (resume ? "بدء امتحان جديد" : "ابدأ الامتحان") + "</button></div>" +
      "</div>";
  }

  /* ---- الشاشة 2: الامتحان بشكل كيريو ---- */
  function remaining() { return Math.max(0, Math.round((S.endAt - Date.now()) / 1000)); }
  function diamonds() {
    var tot = CFG[GRADE].hints, left = tot - S.hints, out = "";
    for (var i = 0; i < tot; i++) {
      out += '<button type="button" class="qx-dia' + (i < left ? "" : " used") + '" data-act="hint" aria-label="تلميح" title="' + (i < left ? "استخدم تلميحًا (" + left + " متبقية)" : "استُخدمت") + '"><i></i></button>';
    }
    return out;
  }
  function gutterHtml(n) { var s = []; for (var i = 1; i <= n; i++) s.push(i); return s.join("\n"); }

  function renderRun() {
    view = "run";
    var q = S.qs[S.idx], n = S.qs.length, last = S.idx === n - 1, pct = Math.round((S.idx + 1) / n * 100);
    var cardBody = "", pane = "";
    if (q.type === "write" || q.type === "debug") {
      cardBody = '<p class="qx-t">' + esc(q.q) + "</p>" +
        '<p class="qx-t">الناتج المطلوب في وحدة النتائج:</p><pre class="qx-need" dir="ltr">' + esc(q.expected) + "</pre>" +
        (S.hint[S.idx] ? '<div class="qx-hint">💎 ' + esc(hintText(q)) + "</div>" : "");
      var val = S.ans[S.idx] != null ? S.ans[S.idx] : (q.starter || "");
      pane =
        '<div class="qx-ed"><div class="qx-tab">JavaScript</div>' +
        '<div class="qx-code"><div class="qx-gut" aria-hidden="true">' + gutterHtml(val.split("\n").length) + '</div>' +
        '<div class="qx-area"><pre class="qx-hl" aria-hidden="true"><code></code></pre><textarea class="qx-ta" dir="ltr" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="محرر الكود"></textarea></div></div>' +
        '<div class="qx-tools"><button type="button" class="qx-reset" data-act="reset"><span>↺</span> إعادة تعيين الكود</button><button type="button" class="qx-run" data-act="run">تشغيل الكود ◄</button></div></div>' +
        '<div class="qx-tab qx-tab2">وحدة النتائج</div><div class="qx-console" id="qxCon" dir="ltr"></div>';
    } else {
      var hid = S.hide[S.idx];
      cardBody = '<p class="qx-t">' + q.q.split("\n").map(esc).join("<br>") + "</p>" +
        (q.type === "output" ? codeBox(q.code, "main.js") : "") +
        (S.hint[S.idx] ? '<div class="qx-hint">💎 تم استبعاد إجابة خاطئة.</div>' : "");
      pane = '<div class="qx-opts" role="radiogroup">' + q.opts.map(function (o, i) {
        var sel = S.ans[S.idx] === i, gone = hid === i;
        var inner = q.isCode ? '<pre class="qx-oc" dir="ltr"><code>' + hlFn(o) + "</code></pre>"
          : '<pre class="qx-oc' + (q.mono ? "" : " ar") + '" dir="' + (q.mono ? "ltr" : "rtl") + '">' + esc(o) + "</pre>";
        return '<button type="button" class="qx-opt' + (sel ? " sel" : "") + (gone ? " gone" : "") + '" data-act="pick" data-i="' + i + '"' + (gone ? " disabled" : "") + ' role="radio" aria-checked="' + sel + '">' +
          '<span class="qx-on">' + (i + 1) + "</span>" + inner + '<span class="qx-rd"><i></i></span></button>';
      }).join("") + "</div>";
    }
    root.innerHTML =
      '<div class="qx-frame">' +
      '<div class="qx-top"><div class="qx-logo"><b>QUREO</b><span>JavaScript</span></div>' +
      '<div class="qx-crumb"><span>الصفحة الرئيسية</span><em>›</em><span>الامتحان النهائي [الفصول 1–42]</span></div>' +
      '<div class="qx-me"><div class="qx-timer" id="exTimer" role="timer"><b id="exTime">--:--</b></div><span class="qx-lv">' + (S.idx + 1) + "</span></div></div>" +
      '<div class="qx-purple"><div class="qx-title"><span class="qx-ico" aria-hidden="true">☑</span><h2>الامتحان التجريبي — توفاس</h2></div>' +
      '<div class="qx-prog"><span class="qx-pn">' + (S.idx + 1) + "/" + n + '</span><div class="qx-pb"><i style="width:' + pct + '%"></i></div></div>' +
      '<div class="qx-dias" aria-label="التلميحات">' + diamonds() + "</div></div>" +
      '<div class="qx-body' + (isPractical(q) ? " prac" : "") + '">' +
      '<section class="qx-card"><div class="qx-qtab"><span>سؤال ' + (S.idx + 1) + '</span><u aria-hidden="true"></u></div><div class="qx-cb"><small class="qx-kind">' + TLBL[q.type] + "</small>" + cardBody + "</div></section>" +
      '<section class="qx-pane">' + pane +
      '<button type="button" class="qx-next" data-act="' + (last ? "finish" : "next") + '">' + (last ? "إنهاء الاختبار" : "السؤال التالي") + "</button></section></div></div>";
    if (isPractical(q)) mountEditor();
    paintTimer();
  }

  function hintText(q) {
    if (q.type === "write") { var l = q.solution.split("\n")[0]; return "السطر الأول من الحل: " + l; }
    var a = q.starter.split("\n"), b = q.solution.split("\n");
    for (var i = 0; i < Math.max(a.length, b.length); i++) if (a[i] !== b[i]) return "الخطأ موجود في السطر رقم " + (i + 1) + ".";
    return "راجع الكود بعناية.";
  }

  function mountEditor() {
    var ta = root.querySelector(".qx-ta"); if (!ta) return;
    var q = S.qs[S.idx];
    ta.value = S.ans[S.idx] != null ? S.ans[S.idx] : (q.starter || "");
    syncEd(ta);
  }
  function syncEd(ta) {
    var hl = root.querySelector(".qx-hl code"), g = root.querySelector(".qx-gut");
    if (hl) hl.innerHTML = hlJS(ta.value) + "\n ";
    if (g) g.textContent = gutterHtml(Math.max(ta.value.split("\n").length, 12));
    syncScroll(ta);
  }
  function syncScroll(ta) {
    var p = root.querySelector(".qx-hl"), g = root.querySelector(".qx-gut");
    if (p) { p.scrollTop = ta.scrollTop; p.scrollLeft = ta.scrollLeft; }
    if (g) g.scrollTop = ta.scrollTop;
  }

  function paintTimer() {
    var el = document.getElementById("exTime");
    if (!el || !S) return;
    var r = remaining();
    el.textContent = fmtTime(r);
    var box = document.getElementById("exTimer");
    box.classList.toggle("warn", r <= CFG[GRADE].warnAt && r > 60);
    box.classList.toggle("danger", r <= 60);
  }
  function startTick() {
    clearInterval(tick);
    tick = setInterval(function () {
      if (!S || S.done) { clearInterval(tick); return; }
      var r = remaining();
      if (view === "run") paintTimer();
      if (r === CFG[GRADE].warnAt && view === "run") toast("⏰ تبقّى " + Math.round(CFG[GRADE].warnAt / 60) + " دقائق على نهاية الامتحان");
      if (r === 60 && view === "run") toast("⏰ تبقّت دقيقة واحدة!");
      if (r <= 0) finish(true);
    }, 1000);
  }
  function toast(m) { var t = document.getElementById("toast"); if (!t) return; t.textContent = m; t.classList.add("on"); clearTimeout(toast.id); toast.id = setTimeout(function () { t.classList.remove("on"); }, 2600); }

  /* ---- تسليم الامتحان وتصحيحه (الأسئلة العملية بتنفيذ الكود) ---- */
  function finish(auto) {
    if (!S || S.done || view === "grading") return;
    clearInterval(tick);
    var now = Math.min(Date.now(), S.endAt);
    view = "grading";
    root.innerHTML = '<div class="ex-wrap"><div class="ex-grading"><div class="ex-spin"></div><b>جارٍ تصحيح إجاباتك…</b><small>يتم تشغيل أكوادك ومقارنتها بالناتج المطلوب</small></div></div>';
    Promise.all(S.qs.map(function (q, i) {
      if (isPractical(q)) {
        var code = S.ans[i];
        if (code == null || !String(code).trim()) return Promise.resolve({ ok: false, out: [], err: "", empty: true });
        return runAsync(String(code)).then(function (r) {
          return { ok: !r.err && norm(r.out) === norm(q.expected.split("\n")), out: r.out, err: r.err };
        });
      }
      return Promise.resolve({ ok: S.ans[i] === q.ans });
    })).then(function (rs) {
      var correct = 0, byType = {}, weak = {};
      S.qs.forEach(function (q, i) {
        byType[q.type] = byType[q.type] || [0, 0];
        byType[q.type][1]++;
        if (rs[i].ok) { correct++; byType[q.type][0]++; } else { weak[q.ch] = (weak[q.ch] || 0) + 1; }
      });
      var total = S.qs.length, pct = Math.round(correct / total * 100);
      S.done = true; S.graded = rs;
      S.result = { correct: correct, total: total, pct: pct, spent: Math.round((now - S.startedAt) / 1000), byType: byType, weak: weak, auto: !!auto, hints: S.hints };
      save();
      var best = +store.get(BEST + GRADE) || 0;
      if (pct > best) store.set(BEST + GRADE, String(pct));
      reviewOnlyWrong = false;
      renderResult();
      window.scrollTo({ top: root.offsetTop - 60, behavior: "smooth" });
      if (auto) toast("انتهى الوقت وتم تسليم الامتحان تلقائيًا");
    });
  }

  /* ---- الشاشة 3: النتيجة والمراجعة ---- */
  function gradeLabel(p) {
    return p >= 90 ? ["ممتاز 🌟", "ok"] : p >= 75 ? ["جيد جدًا 👏", "ok"] : p >= 60 ? ["جيد 👍", "ok"] : p >= CFG[GRADE].passPct ? ["مقبول", "mid"] : ["يحتاج إلى مراجعة 📚", "bad"];
  }
  function optView(q, i, cls, lbl) {
    var o = q.opts[i];
    var inner = q.isCode ? codeBox(o, fileOf(q)) : (q.mono ? '<pre class="ex-out" dir="ltr">' + esc(o) + "</pre>" : '<span class="ex-ot">' + esc(o) + "</span>");
    return '<div class="ex-ans ' + cls + '"><small>' + lbl + " (" + LETTERS[i] + ")</small>" + inner + "</div>";
  }
  function renderResult() {
    view = "result";
    var r = S.result, c = CFG[GRADE], g = gradeLabel(r.pct), pass = r.pct >= c.passPct;
    var circ = 2 * Math.PI * 52, off = circ * (1 - r.pct / 100);
    var types = Object.keys(r.byType).filter(function (k) { return r.byType[k][1]; }).map(function (k) {
      var v = r.byType[k], p = Math.round(v[0] / v[1] * 100);
      return '<li><span>' + TLBL[k] + '</span><i><u style="width:' + p + '%"></u></i><b>' + v[0] + " / " + v[1] + "</b></li>";
    }).join("");
    var chName = {};
    if (typeof G1 !== "undefined") G1.forEach(function (ch) { chName[ch.id] = ch.title + " — " + ch.sub; });
    var weakList = Object.keys(r.weak).sort(function (a, b) { return r.weak[b] - r.weak[a] || a - b; }).slice(0, 8).map(function (id) {
      return '<a class="ex-weak" href="#' + id + '"><span>' + esc(chName[id] || "الفصل " + id) + "</span><b>" + r.weak[id] + " " + (r.weak[id] > 2 ? "أخطاء" : r.weak[id] === 2 ? "خطآن" : "خطأ") + "</b></a>";
    }).join("");
    var list = S.qs.map(function (q, i) {
      var gr = (S.graded && S.graded[i]) || { ok: S.ans[i] === q.ans }, ok = gr.ok, body = "";
      if (reviewOnlyWrong && ok) return "";
      if (isPractical(q)) {
        var mine = S.ans[i];
        body = '<p class="ex-qt">' + esc(q.q) + "</p>" +
          '<div class="ex-ans ' + (ok ? "right" : "wrong") + '"><small>كودك</small>' + (mine && String(mine).trim() ? codeBox(String(mine), "main.js") : '<em class="ex-none">لم تكتب كودًا</em>') +
          (gr.err ? '<pre class="ex-out err" dir="ltr">' + esc(gr.err) + "</pre>" : (gr.out && gr.out.length ? '<pre class="ex-out" dir="ltr">' + esc(gr.out.join("\n")) + "</pre>" : "")) + "</div>" +
          '<div class="ex-ans right"><small>الناتج المطلوب</small><pre class="ex-out" dir="ltr">' + esc(q.expected) + "</pre></div>" +
          (ok ? "" : '<div class="ex-ans right"><small>حل مقترح</small>' + codeBox(q.solution, "main.js") + "</div>");
      } else {
        var none = S.ans[i] == null;
        body = '<p class="ex-qt">' + q.q.split("\n").map(esc).join("<br>") + "</p>" + (q.type === "output" ? codeBox(q.code, "main.js") : "") +
          (none ? '<em class="ex-none">لم تُجِب عن هذا السؤال</em>' : optView(q, S.ans[i], ok ? "right" : "wrong", "إجابتك")) + (ok ? "" : optView(q, q.ans, "right", "الإجابة الصحيحة"));
      }
      return '<article class="ex-rv ' + (ok ? "ok" : "bad") + '"><div class="ex-rvh"><b>' + (i + 1) + '</b><span>' + (ok ? "✓ صحيحة" : "✗ خاطئة") + '</span><em class="ex-kind">' + TLBL[q.type] + "</em><small>" + (chName[q.ch] ? esc(chName[q.ch]) : "") + "</small></div>" + body + "</article>";
    }).join("");
    root.innerHTML =
      '<div class="ex-wrap">' +
      '<section class="ex-res ' + g[1] + '">' +
      '<div class="ex-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" class="bg"/><circle cx="60" cy="60" r="52" class="fg" stroke-dasharray="' + circ.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 60 60)"/></svg><div><b>' + r.pct + '%</b><small>' + r.correct + " / " + r.total + "</small></div></div>" +
      '<div class="ex-rt"><h2>' + (pass ? "🎉 ناجح" : "لم تجتز الامتحان بعد") + '</h2><p class="ex-grade">التقدير: <b>' + g[0] + "</b></p>" +
      '<p class="ex-meta">⏱ الزمن المستغرق: ' + fmtTime(r.spent) + " من " + c.minutes + ":00" + (r.auto ? " · سُلّم تلقائيًا" : "") + " · 💎 التلميحات المستخدمة: " + (r.hints || 0) + "</p>" +
      '<div class="ex-acts"><button type="button" class="ex-btn main" data-act="again">امتحان جديد</button><button type="button" class="ex-btn" data-act="home">الرئيسية</button></div></div></section>' +
      '<div class="ex-two"><section class="ex-box"><h3>الأداء حسب نوع السؤال</h3><ul class="ex-bars">' + types + "</ul></section>" +
      '<section class="ex-box"><h3>فصول تحتاج مراجعة</h3>' + (weakList ? '<div class="ex-weaks">' + weakList + "</div>" : '<p class="ex-allgood">لا توجد أخطاء، أداء كامل! 👏</p>') + "</section></div>" +
      '<section class="ex-box"><div class="ex-rvtop"><h3>مراجعة الأسئلة</h3><label class="ex-chk"><input type="checkbox" id="exOnlyWrong"' + (reviewOnlyWrong ? " checked" : "") + '> الأخطاء فقط</label></div>' +
      (list || '<p class="ex-allgood">لا توجد أخطاء لعرضها 🎉</p>') + "</section></div>";
  }

  /* ---- نافذة تأكيد الإنهاء ---- */
  function confirmFinish() {
    var un = S.qs.filter(function (q, i) { return S.ans[i] == null || (isPractical(q) && !String(S.ans[i]).trim()); }).length;
    var m = document.createElement("div");
    m.className = "ex-modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true");
    m.innerHTML = '<div class="ex-md"><h3>إنهاء الاختبار؟</h3><p>' +
      (un ? "لديك <b>" + un + "</b> " + (un > 2 ? "أسئلة" : "سؤال") + " بدون إجابة." : "أجبت عن جميع الأسئلة.") + "<br>بعد التسليم لا يمكن تعديل الإجابات.</p>" +
      '<div class="ex-acts"><button type="button" class="ex-btn" data-act="cancel">العودة للامتحان</button><button type="button" class="ex-btn danger" data-act="confirm">تسليم الآن</button></div></div>';
    root.appendChild(m);
    var b = m.querySelector('[data-act="cancel"]'); if (b) b.focus();
  }

  /* ---- بدء/استئناف ---- */
  function start() {
    var G = typeof G1 !== "undefined" ? G1 : null;
    if (!G) { toast("تعذّر تحميل بنك الأسئلة، أعد تحميل الصفحة"); return; }
    var c = CFG[GRADE];
    var qs = draw(buildPool(G), c);
    if (!qs.length) { toast("تعذّر إنشاء الامتحان"); return; }
    var now = Date.now();
    S = { v: 2, grade: GRADE, startedAt: now, endAt: now + c.minutes * 60000, qs: qs,
      ans: qs.map(function () { return null; }), hint: qs.map(function () { return false; }), hide: qs.map(function () { return null; }),
      hints: 0, idx: 0, done: false };
    save(); startTick(); renderRun();
    window.scrollTo({ top: root.offsetTop - 60, behavior: "smooth" });
  }
  function resume() {
    var s = load();
    if (!s || s.done) return renderIntro();
    S = s;
    if (Date.now() >= S.endAt) { finish(true); return; }
    startTick(); renderRun();
  }
  function useHint() {
    var q = S.qs[S.idx];
    if (S.hint[S.idx]) { toast("استخدمت تلميحًا لهذا السؤال بالفعل"); return; }
    if (S.hints >= CFG[GRADE].hints) { toast("انتهت التلميحات المتاحة"); return; }
    if (!isPractical(q)) {
      var wrongs = q.opts.map(function (_, i) { return i; }).filter(function (i) { return i !== q.ans && S.ans[S.idx] !== i; });
      if (wrongs.length < 2) { toast("لا يمكن استبعاد المزيد من الإجابات"); return; }
      S.hide[S.idx] = wrongs[Math.floor(Math.random() * wrongs.length)];
    }
    S.hint[S.idx] = true; S.hints++; save(); renderRun();
  }
  function runCurrent() {
    var ta = root.querySelector(".qx-ta"), con = document.getElementById("qxCon"), btn = root.querySelector(".qx-run");
    if (!ta || !con) return;
    if (btn) btn.disabled = true;
    con.textContent = "";
    runAsync(ta.value).then(function (r) {
      if (btn) btn.disabled = false;
      if (!document.getElementById("qxCon")) return;
      con.innerHTML = (r.out.length ? esc(r.out.join("\n")) : "") + (r.err ? (r.out.length ? "\n" : "") + '<span class="qx-err">' + esc(r.err) + "</span>" : "");
      if (!r.out.length && !r.err) con.innerHTML = '<span class="qx-mute">لا يوجد ناتج. استخدم console.log لعرض النتيجة.</span>';
    });
  }

  /* ---- الأحداث ---- */
  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-act]");
    if (!b || b.disabled) return;
    var a = b.dataset.act;
    if (a === "start") {
      var prev = load();
      if (prev && !prev.done && Date.now() < prev.endAt && !window.confirm("سيتم التخلي عن الامتحان الجاري وبدء امتحان جديد. هل تريد المتابعة؟")) return;
      start();
    } else if (a === "resume") resume();
    else if (a === "show-result") { S = load(); if (S && S.done) renderResult(); }
    else if (a === "pick") { S.ans[S.idx] = +b.dataset.i; save(); renderRun(); }
    else if (a === "next") { S.idx = Math.min(S.qs.length - 1, S.idx + 1); save(); renderRun(); window.scrollTo({ top: root.offsetTop - 60, behavior: "smooth" }); }
    else if (a === "hint") useHint();
    else if (a === "run") runCurrent();
    else if (a === "reset") { S.ans[S.idx] = null; save(); renderRun(); }
    else if (a === "finish") confirmFinish();
    else if (a === "cancel") { var m = root.querySelector(".ex-modal"); if (m) m.remove(); }
    else if (a === "confirm") finish(false);
    else if (a === "again") { renderIntro(); window.scrollTo({ top: root.offsetTop - 60, behavior: "smooth" }); }
    else if (a === "home") { S = null; renderIntro(); }
  });
  root.addEventListener("change", function (e) {
    if (e.target && e.target.id === "exOnlyWrong") { reviewOnlyWrong = e.target.checked; renderResult(); }
  });
  root.addEventListener("input", function (e) {
    var ta = e.target;
    if (!ta || !ta.classList || !ta.classList.contains("qx-ta") || !S) return;
    S.ans[S.idx] = ta.value; save(); syncEd(ta);
  });
  root.addEventListener("scroll", function (e) { if (e.target && e.target.classList && e.target.classList.contains("qx-ta")) syncScroll(e.target); }, true);
  root.addEventListener("keydown", function (e) {
    var ta = e.target;
    if (!ta || !ta.classList || !ta.classList.contains("qx-ta")) return;
    if (e.key === "Tab") {
      e.preventDefault();
      var s = ta.selectionStart, en = ta.selectionEnd;
      ta.value = ta.value.slice(0, s) + "  " + ta.value.slice(en);
      ta.selectionStart = ta.selectionEnd = s + 2;
      S.ans[S.idx] = ta.value; save(); syncEd(ta);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (view !== "run" || !S || S.done || root.hidden || root.offsetParent === null) return;
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (root.querySelector(".ex-modal")) { if (e.key === "Escape") root.querySelector(".ex-modal").remove(); return; }
    var q = S.qs[S.idx];
    if (/^[1-4]$/.test(e.key) && !isPractical(q) && q.opts[+e.key - 1] != null && S.hide[S.idx] !== +e.key - 1) { S.ans[S.idx] = +e.key - 1; save(); renderRun(); }
  });
  window.addEventListener("beforeunload", function (e) {
    if (S && !S.done && Date.now() < S.endAt && view === "run") { e.preventDefault(); e.returnValue = ""; }
  });

  (function boot() {
    var s = load();
    if (s && !s.done) {
      S = s;
      if (Date.now() >= S.endAt) { finish(true); return; }
      startTick();
    }
    renderIntro();
  })();
})();
