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
      mix: { output: 0.5, code: 0.3, concept: 0.2 }, // توزيع أنواع الأسئلة
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
    var pool = { output: [], code: [], concept: [] };
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
                chOut[ch.id].push({ code: k, out: s, lines: lines });
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
      code: Math.round(cfg.total * cfg.mix.code)
    };
    want.concept = cfg.total - want.output - want.code;
    var picked = [], seenQ = {};
    function key(x) { return x.type + "|" + x.q + "|" + x.correct + (x.code || ""); }
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
    ["output", "code", "concept"].forEach(function (t) { short += want[t] - take(t, want[t]); });
    if (short > 0) ["output", "code", "concept"].forEach(function (t) { if (short > 0) short -= take(t, short); });

    picked.sort(function (a, b) { return a.ch - b.ch; });
    return picked.map(function (x) {
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

  /* =====================================================================
     الواجهة
     ===================================================================== */
  var root = document.getElementById("exam");
  if (!root) return;

  var GRADE = 1;
  var S = null;            // حالة امتحان جارٍ أو منتهٍ
  var tick = null;
  var view = "intro";      // intro | run | result
  var reviewOnlyWrong = false;

  function load() {
    var raw = store.get(KEY + GRADE);
    if (!raw) return null;
    try { var s = JSON.parse(raw); return s && s.v === 1 && s.qs && s.qs.length ? s : null; } catch (e) { return null; }
  }
  function save() { if (S) store.set(KEY + GRADE, JSON.stringify(S)); }

  function hlCode(c) {
    var H = window.__hl;
    if (!H) return esc(c);
    var d = (typeof detectWeb === "function" && /<\w+|[{;]\s*$|^\s*[.#\w-]+\s*\{/m.test(c)) ? detectWeb(c) : H.detect(c);
    var f = { html: H.hlHTML, css: H.hlCSS, js: H.hlJS, py: H.hlPY }[d] || H.hlJS;
    return f(c);
  }
  function codeBox(c, file) {
    return '<div class="mac ex-mac"><div class="bar"><i></i><i></i><i></i><span>' + esc(file || "main.js") + '</span></div><pre dir="ltr"><code>' + hlCode(c) + "</code></pre></div>";
  }
  function fileOf(q) { return q.web ? (/<\w+/.test(q.code || q.opts[0]) ? "index.html" : "style.css") : "main.js"; }

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
      ? '<div class="ex-resume"><div><b>لديك امتحان لم يُنهَ</b><small>المتبقي ' + fmtTime((prev.endAt - Date.now()) / 1000) + ' · أجبت عن ' + prev.ans.filter(function (x) { return x != null; }).length + " من " + prev.qs.length + '</small></div><button type="button" class="ex-btn main" data-act="resume">متابعة الامتحان</button></div>'
      : "";
    root.innerHTML =
      '<div class="ex-wrap">' +
      '<header class="ex-hero"><span class="ex-tag">محاكاة امتحان نهاية الترم</span>' +
      "<h2>📝 الامتحان التجريبي — توفاس</h2>" +
      "<p>اختبر نفسك بنفس أجواء الامتحان الأونلاين: وقت محدد، أسئلة اختيار من متعدد، ونتيجة فورية مع مراجعة كل سؤال.</p></header>" +
      '<div class="ex-grades" role="tablist" aria-label="الصف">' +
      '<button type="button" role="tab" class="on" aria-selected="true">الصف الأول الثانوي</button>' +
      '<button type="button" role="tab" disabled aria-selected="false">الصف الثاني الثانوي <small>قريبًا</small></button></div>' +
      resumeHtml + lastHtml +
      '<div class="ex-cards">' +
      '<div class="ex-card"><b>' + c.total + "</b><span>سؤالًا</span></div>" +
      '<div class="ex-card"><b>' + c.minutes + "</b><span>دقيقة</span></div>" +
      '<div class="ex-card"><b>' + c.total + "</b><span>الدرجة الكلية</span></div>" +
      '<div class="ex-card"><b>' + c.passPct + '%</b><span>حد النجاح</span></div></div>' +
      bestHtml +
      '<section class="ex-rules"><h3>تعليمات الامتحان</h3><ul>' +
      "<li>الأسئلة مولَّدة عشوائيًا من الفصول 1–42 (جافا سكربت وHTML وCSS) وتختلف في كل محاولة.</li>" +
      "<li>أنواع الأسئلة: ناتج تشغيل الكود، اختيار الكود الصحيح، ومفاهيم المنهج.</li>" +
      "<li>لكل سؤال إجابة صحيحة واحدة، ويمكنك تغيير إجابتك أو تعليم السؤال 🚩 للعودة إليه.</li>" +
      "<li>العدّاد يعمل بمجرد البدء ولا يمكن إيقافه، وينتهي الامتحان تلقائيًا عند انتهاء الوقت.</li>" +
      "<li>لو أغلقت الصفحة أثناء الامتحان يمكنك المتابعة طالما لم ينتهِ الوقت.</li></ul></section>" +
      '<div class="ex-start"><button type="button" class="ex-btn main big" data-act="start">' + (resume ? "بدء امتحان جديد" : "ابدأ الامتحان") + "</button></div>" +
      "</div>";
  }

  /* ---- الشاشة 2: الامتحان ---- */
  function answeredCount() { return S.ans.filter(function (x) { return x != null; }).length; }

  function renderRun() {
    view = "run";
    var q = S.qs[S.idx], n = S.qs.length;
    var typeLbl = { output: "ناتج الكود", code: "اختيار الكود", concept: "مفهوم" }[q.type];
    var body = "";
    if (q.type === "output") body = codeBox(q.code, "main.js");
    var stem = '<p class="ex-qt">' + q.q.split("\n").map(esc).join("<br>") + "</p>";
    var opts = q.opts.map(function (o, i) {
      var sel = S.ans[S.idx] === i;
      var inner = q.isCode ? codeBox(o, fileOf(q))
        : (q.mono ? '<pre class="ex-out" dir="ltr">' + esc(o) + "</pre>" : '<span class="ex-ot">' + esc(o) + "</span>");
      return '<button type="button" class="ex-opt' + (sel ? " sel" : "") + '" data-act="pick" data-i="' + i + '" role="radio" aria-checked="' + sel + '">' +
        '<span class="ex-l">' + LETTERS[i] + "</span>" + inner + "</button>";
    }).join("");
    var nav = S.qs.map(function (_, i) {
      var cls = "ex-n" + (i === S.idx ? " cur" : "") + (S.ans[i] != null ? " done" : "") + (S.flag[i] ? " flag" : "");
      return '<button type="button" class="' + cls + '" data-act="go" data-i="' + i + '" aria-label="سؤال ' + (i + 1) + '">' + (i + 1) + "</button>";
    }).join("");
    var last = S.idx === n - 1;
    root.innerHTML =
      '<div class="ex-wrap ex-run">' +
      '<div class="ex-bar"><div class="ex-timer" id="exTimer" role="timer" aria-live="off"><span class="ex-ti">⏱</span><b id="exTime">--:--</b></div>' +
      '<div class="ex-prog"><span>' + answeredCount() + " / " + n + ' أُجيب عنها</span><i><u style="width:' + Math.round(answeredCount() / n * 100) + '%"></u></i></div>' +
      '<button type="button" class="ex-btn danger sm" data-act="finish">إنهاء الامتحان</button></div>' +
      '<div class="ex-grid">' +
      '<article class="ex-q"><div class="ex-qh"><span class="ex-qn">السؤال ' + (S.idx + 1) + " من " + n + '</span><span class="ex-qty">' + typeLbl + "</span>" +
      '<button type="button" class="ex-flag' + (S.flag[S.idx] ? " on" : "") + '" data-act="flag" aria-pressed="' + !!S.flag[S.idx] + '">🚩 ' + (S.flag[S.idx] ? "إزالة التعليم" : "تعليم للمراجعة") + "</button></div>" +
      stem + body + '<div class="ex-opts" role="radiogroup">' + opts + "</div>" +
      '<div class="ex-foot"><button type="button" class="ex-btn" data-act="prev"' + (S.idx === 0 ? " disabled" : "") + '>→ السابق</button>' +
      (last ? '<button type="button" class="ex-btn main" data-act="finish">إنهاء وتسليم</button>' : '<button type="button" class="ex-btn main" data-act="next">التالي ←</button>') +
      "</div></article>" +
      '<aside class="ex-side" aria-label="خريطة الأسئلة"><h4>خريطة الأسئلة</h4><div class="ex-map">' + nav + "</div>" +
      '<ul class="ex-leg"><li><i class="done"></i>مُجاب</li><li><i></i>غير مُجاب</li><li><i class="flag"></i>معلَّم</li></ul></aside>' +
      "</div></div>";
    paintTimer();
  }

  function remaining() { return Math.max(0, Math.round((S.endAt - Date.now()) / 1000)); }
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

  /* ---- تسليم الامتحان وحساب النتيجة ---- */
  function finish(auto) {
    if (!S || S.done) return;
    clearInterval(tick);
    var now = Math.min(Date.now(), S.endAt);
    var correct = 0, byType = { output: [0, 0], code: [0, 0], concept: [0, 0] }, weak = {};
    S.qs.forEach(function (q, i) {
      var ok = S.ans[i] === q.ans;
      byType[q.type][1]++;
      if (ok) { correct++; byType[q.type][0]++; } else { weak[q.ch] = (weak[q.ch] || 0) + 1; }
    });
    var total = S.qs.length, pct = Math.round(correct / total * 100);
    S.done = true;
    S.result = { correct: correct, total: total, pct: pct, spent: Math.round((now - S.startedAt) / 1000), byType: byType, weak: weak, auto: !!auto, wrongCount: total - correct };
    save();
    var best = +store.get(BEST + GRADE) || 0;
    if (pct > best) store.set(BEST + GRADE, String(pct));
    reviewOnlyWrong = false;
    renderResult();
    window.scrollTo({ top: root.offsetTop - 60, behavior: "smooth" });
    if (auto) toast("انتهى الوقت وتم تسليم الامتحان تلقائيًا");
  }

  /* ---- الشاشة 3: النتيجة والمراجعة ---- */
  function gradeLabel(p) {
    return p >= 90 ? ["ممتاز 🌟", "ok"] : p >= 75 ? ["جيد جدًا 👏", "ok"] : p >= 60 ? ["جيد 👍", "ok"] : p >= CFG[GRADE].passPct ? ["مقبول", "mid"] : ["يحتاج إلى مراجعة 📚", "bad"];
  }
  function renderResult() {
    view = "result";
    var r = S.result, c = CFG[GRADE], g = gradeLabel(r.pct), pass = r.pct >= c.passPct;
    var circ = 2 * Math.PI * 52, off = circ * (1 - r.pct / 100);
    var tl = { output: "ناتج الكود", code: "اختيار الكود", concept: "المفاهيم" };
    var types = Object.keys(r.byType).filter(function (k) { return r.byType[k][1]; }).map(function (k) {
      var v = r.byType[k], p = Math.round(v[0] / v[1] * 100);
      return '<li><span>' + tl[k] + '</span><i><u style="width:' + p + '%"></u></i><b>' + v[0] + " / " + v[1] + "</b></li>";
    }).join("");
    var chName = {};
    if (typeof G1 !== "undefined") G1.forEach(function (ch) { chName[ch.id] = ch.title + " — " + ch.sub; });
    var weakList = Object.keys(r.weak).sort(function (a, b) { return r.weak[b] - r.weak[a] || a - b; }).slice(0, 8).map(function (id) {
      return '<a class="ex-weak" href="#' + id + '"><span>' + esc(chName[id] || "الفصل " + id) + "</span><b>" + r.weak[id] + " " + (r.weak[id] > 2 ? "أخطاء" : r.weak[id] === 2 ? "خطآن" : "خطأ") + "</b></a>";
    }).join("");
    var list = S.qs.map(function (q, i) {
      var ok = S.ans[i] === q.ans, none = S.ans[i] == null;
      if (reviewOnlyWrong && ok) return "";
      var yours = none ? '<em class="ex-none">لم تُجِب عن هذا السؤال</em>' : optView(q, S.ans[i], ok ? "right" : "wrong", "إجابتك");
      var right = ok ? "" : optView(q, q.ans, "right", "الإجابة الصحيحة");
      return '<article class="ex-rv ' + (ok ? "ok" : "bad") + '"><div class="ex-rvh"><b>' + (i + 1) + '</b><span>' + (ok ? "✓ صحيحة" : none ? "✗ بدون إجابة" : "✗ خاطئة") + '</span><small>' + (chName[q.ch] ? esc(chName[q.ch]) : "") + "</small></div>" +
        '<p class="ex-qt">' + q.q.split("\n").map(esc).join("<br>") + "</p>" + (q.type === "output" ? codeBox(q.code, "main.js") : "") + yours + right + "</article>";
    }).join("");
    root.innerHTML =
      '<div class="ex-wrap">' +
      '<section class="ex-res ' + g[1] + '">' +
      '<div class="ex-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" class="bg"/><circle cx="60" cy="60" r="52" class="fg" stroke-dasharray="' + circ.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 60 60)"/></svg><div><b>' + r.pct + '%</b><small>' + r.correct + " / " + r.total + "</small></div></div>" +
      '<div class="ex-rt"><h2>' + (pass ? "🎉 ناجح" : "لم تجتز الامتحان بعد") + '</h2><p class="ex-grade">التقدير: <b>' + g[0] + "</b></p>" +
      '<p class="ex-meta">⏱ الزمن المستغرق: ' + fmtTime(r.spent) + " من " + c.minutes + ":00" + (r.auto ? " · سُلّم تلقائيًا" : "") + "</p>" +
      '<div class="ex-acts"><button type="button" class="ex-btn main" data-act="again">امتحان جديد</button><button type="button" class="ex-btn" data-act="home">الرئيسية</button></div></div></section>' +
      '<div class="ex-two"><section class="ex-box"><h3>الأداء حسب نوع السؤال</h3><ul class="ex-bars">' + types + "</ul></section>" +
      '<section class="ex-box"><h3>فصول تحتاج مراجعة</h3>' + (weakList ? '<div class="ex-weaks">' + weakList + "</div>" : '<p class="ex-allgood">لا توجد أخطاء، أداء كامل! 👏</p>') + "</section></div>" +
      '<section class="ex-box"><div class="ex-rvtop"><h3>مراجعة الأسئلة</h3><label class="ex-chk"><input type="checkbox" id="exOnlyWrong"' + (reviewOnlyWrong ? " checked" : "") + '> الأخطاء فقط</label></div>' +
      (list || '<p class="ex-allgood">لا توجد أخطاء لعرضها 🎉</p>') + "</section></div>";
  }
  function optView(q, i, cls, lbl) {
    var o = q.opts[i];
    var inner = q.isCode ? codeBox(o, fileOf(q)) : (q.mono ? '<pre class="ex-out" dir="ltr">' + esc(o) + "</pre>" : '<span class="ex-ot">' + esc(o) + "</span>");
    return '<div class="ex-ans ' + cls + '"><small>' + lbl + " (" + LETTERS[i] + ")</small>" + inner + "</div>";
  }

  /* ---- نافذة تأكيد الإنهاء ---- */
  function confirmFinish() {
    var un = S.qs.length - answeredCount(), fl = S.flag.filter(Boolean).length;
    var m = document.createElement("div");
    m.className = "ex-modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true");
    m.innerHTML = '<div class="ex-md"><h3>إنهاء الامتحان؟</h3><p>' +
      (un ? "لديك <b>" + un + "</b> " + (un > 2 ? "أسئلة" : "سؤال") + " بدون إجابة." : "أجبت عن جميع الأسئلة.") +
      (fl ? " و<b>" + fl + "</b> معلَّم للمراجعة." : "") + "<br>بعد التسليم لا يمكن تعديل الإجابات.</p>" +
      '<div class="ex-acts"><button type="button" class="ex-btn" data-act="cancel">العودة للامتحان</button><button type="button" class="ex-btn danger" data-act="confirm">تسليم الآن</button></div></div>';
    root.appendChild(m);
    var b = m.querySelector('[data-act="cancel"]'); if (b) b.focus();
  }

  /* ---- بدء الامتحان ---- */
  function start() {
    var G = typeof G1 !== "undefined" ? G1 : null;
    if (!G) { toast("تعذّر تحميل بنك الأسئلة، أعد تحميل الصفحة"); return; }
    var c = CFG[GRADE];
    var qs = draw(buildPool(G), c);
    if (!qs.length) { toast("تعذّر إنشاء الامتحان"); return; }
    var now = Date.now();
    S = { v: 1, grade: GRADE, startedAt: now, endAt: now + c.minutes * 60000, qs: qs, ans: qs.map(function () { return null; }), flag: qs.map(function () { return false; }), idx: 0, done: false };
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
    else if (a === "show-result") { S = load(); if (S && S.done) { renderResult(); } }
    else if (a === "pick") { S.ans[S.idx] = +b.dataset.i; save(); renderRun(); }
    else if (a === "next") { S.idx = Math.min(S.qs.length - 1, S.idx + 1); save(); renderRun(); scrollQ(); }
    else if (a === "prev") { S.idx = Math.max(0, S.idx - 1); save(); renderRun(); scrollQ(); }
    else if (a === "go") { S.idx = +b.dataset.i; save(); renderRun(); scrollQ(); }
    else if (a === "flag") { S.flag[S.idx] = !S.flag[S.idx]; save(); renderRun(); }
    else if (a === "finish") confirmFinish();
    else if (a === "cancel") { var m = root.querySelector(".ex-modal"); if (m) m.remove(); }
    else if (a === "confirm") finish(false);
    else if (a === "again") { renderIntro(); window.scrollTo({ top: root.offsetTop - 60, behavior: "smooth" }); }
    else if (a === "home") { S = null; renderIntro(); }
  });
  root.addEventListener("change", function (e) {
    if (e.target && e.target.id === "exOnlyWrong") { reviewOnlyWrong = e.target.checked; renderResult(); }
  });
  function scrollQ() { var q = root.querySelector(".ex-q"); if (q) { var y = q.getBoundingClientRect().top + scrollY - 130; if (y < scrollY) window.scrollTo({ top: y, behavior: "smooth" }); } }

  document.addEventListener("keydown", function (e) {
    if (view !== "run" || !S || S.done || root.hidden || root.offsetParent === null) return;
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (root.querySelector(".ex-modal")) { if (e.key === "Escape") root.querySelector(".ex-modal").remove(); return; }
    var k = e.key;
    if (k === "ArrowLeft") { S.idx = Math.min(S.qs.length - 1, S.idx + 1); save(); renderRun(); }
    else if (k === "ArrowRight") { S.idx = Math.max(0, S.idx - 1); save(); renderRun(); }
    else if (/^[1-4]$/.test(k) && S.qs[S.idx].opts[+k - 1] != null) { S.ans[S.idx] = +k - 1; save(); renderRun(); }
    else if (k === "f" || k === "F") { S.flag[S.idx] = !S.flag[S.idx]; save(); renderRun(); }
  });

  window.addEventListener("beforeunload", function (e) {
    if (S && !S.done && Date.now() < S.endAt && view === "run") { e.preventDefault(); e.returnValue = ""; }
  });

  /* ---- تشغيل أولي: إن كان هناك امتحان جارٍ يُستأنف، وإلا المقدّمة ---- */
  (function boot() {
    var s = load();
    if (s && !s.done) {
      S = s;
      if (Date.now() >= S.endAt) { finish(true); renderIntro(); S = null; return; }
      startTick();
    }
    renderIntro();
  })();
})();
