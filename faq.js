/* الأسئلة الشائعة: بحث فوري + تصنيفات + فتح سؤال واحد في كل مرة.
   المحتوى نفسه مكتوب في index.html (لمحركات البحث)، وهذا الملف يضيف التفاعل فقط. */
(function () {
  "use strict";
  var root = document.getElementById("faq");
  if (!root) return;
  var items = [].slice.call(root.querySelectorAll("details.fq"));
  var input = root.querySelector("#faqQ");
  var chips = [].slice.call(root.querySelectorAll(".faq-chips button"));
  var empty = root.querySelector(".faq-empty");
  var cat = "all";

  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[ً-ٰٟـ]/g, "")
      .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه");
  }
  items.forEach(function (d) { d._t = norm(d.textContent); });

  function apply() {
    var q = norm(input.value).trim(), n = 0;
    items.forEach(function (d) {
      var ok = (cat === "all" || d.dataset.cat === cat) && (!q || d._t.indexOf(q) > -1);
      d.hidden = !ok;
      if (ok) n++;
      if (!ok) d.open = false;
    });
    empty.hidden = n > 0;
  }

  input.addEventListener("input", apply);
  chips.forEach(function (b) {
    b.addEventListener("click", function () {
      cat = b.dataset.cat;
      chips.forEach(function (x) { var on = x === b; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on); });
      apply();
    });
  });
  // سؤال واحد مفتوح في كل مرة
  items.forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (!d.open) return;
      items.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
  // رابط #faqT يفتح أول سؤال بهدوء
  if (location.hash === "#faqT" && items[0]) items[0].open = true;
})();
