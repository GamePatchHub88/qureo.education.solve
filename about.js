/* شاشة "عن المطور": تظهر عند الرابط #about وتُخفي باقي الصفحة */
(function () {
  "use strict";
  var root = document.documentElement;
  var baseTitle = document.title;
  var aboutTitle = "عن المطور – محمد أحمد حلمي | مطوّر واجهات أمامية";
  var home = "";

  function isAbout() { return location.hash === "#about"; }

  function apply(scrollTop) {
    var on = isAbout();
    root.classList.toggle("view-about", on);
    document.title = on ? aboutTitle : baseTitle;
    var link = document.querySelector(".dev-link");
    if (link) {
      if (on) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
    if (scrollTop) window.scrollTo(0, 0);
  }

  // فتح الصفحة مباشرة على #about: script.js يستبدل الهاش عند الإقلاع، فنعيده هنا
  if (window.__h0 === "#about") {
    home = location.hash;
    history.replaceState(null, "", "#about");
    apply(false);
  }

  window.addEventListener("hashchange", function (e) {
    var was = root.classList.contains("view-about");
    var now = isAbout();
    if (now === was) return;
    if (now) {
      try {
        var old = new URL(e.oldURL).hash;
        if (old && old !== "#about") home = old;
      } catch (err) {}
    }
    apply(true);
  });

  // زر "العودة إلى الحلول" وشعار الموقع
  var back = document.getElementById("devBack");
  if (back) {
    back.addEventListener("click", function (e) {
      e.preventDefault();
      if (isAbout()) location.hash = home || "#";
    });
  }
})();
