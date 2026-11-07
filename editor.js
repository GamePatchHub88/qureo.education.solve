/* ===== المحرر الحر — جافا سكربت =====
   يعمل داخل Web Worker معزول عن الصفحة: لا وصول إلى DOM أو localStorage،
   ويُوقَف تلقائيًا بعد 5 ثوانٍ (حماية من الحلقات اللانهائية). */
(function(){
"use strict";
var $=function(s,r){return(r||document).querySelector(s)};
var LS={get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
var esc=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};
var KEY="ed_code",KEY_FS="ed_fs",LIMIT_MS=5000;

var START='// اكتب كود جافا سكربت هنا ثم اضغط «تشغيل» (Ctrl + Enter)\nconst numList = [3, 7, 14, 21, 25];\n\nfor (const num of numList) {\n  if (num % 7 == 0) {\n    console.log(num + " يقبل القسمة على 7");\n  }\n}\n';
var EXAMPLES=[
["مثال: حلقة for","for (let i = 1; i <= 5; i++) {\n  console.log(\"Round \" + i);\n}\n"],
["مثال: while","let money = 600;\nlet month = 0;\nwhile (money < 4000) {\n  month++;\n  money += 800;\n}\nconsole.log(\"Save for \" + month + \" months\");\n"],
["مثال: switch","const target = 4;\nswitch (target) {\n  case 4:\n  case 8:\n    console.log(\"Video game Get\");\n    break;\n  case 1:\n  case 7:\n    console.log(\"Candy Assortment Get\");\n    break;\n  default:\n    console.log(\"Sticker Get\");\n}\n"],
["مثال: مصفوفات","const list = [\"Mia\", \"Noah\", \"Liam\"];\nlist.push(\"David\");\nlist.unshift(\"Grace\");\nconsole.log(list);\nlist.sort();\nconsole.log(list);\nconsole.log(list.indexOf(\"Liam\"), list.includes(\"Rick\"));\n"],
["مثال: دالة","function average(list) {\n  let sum = 0;\n  for (const n of list) {\n    sum += n;\n  }\n  return sum / list.length;\n}\nconsole.log(average([70, 85, 90]));\n"]
];

/* ---------- الـ Worker ---------- */
function workerMain(){
  var n=0,MAX=1500;
  function post(t,a){self.postMessage({t:t,a:a})}
  function fmt(v,top,d,seen){
    if(typeof v==="string")return top?v:"'"+v+"'";
    if(v===null)return"null";if(v===undefined)return"undefined";
    if(typeof v==="function")return"[Function: "+(v.name||"anonymous")+"]";
    if(typeof v==="bigint")return v+"n";
    if(typeof v==="symbol")return v.toString();
    if(typeof v!=="object")return String(v);
    if(seen.indexOf(v)>-1)return"[Circular]";
    if(d>3)return Array.isArray(v)?"[Array]":"[Object]";
    if(v instanceof Error)return v.name+": "+v.message;
    if(v instanceof Date)return isNaN(v)?"Invalid Date":v.toISOString();
    seen.push(v);var r,f=function(x){return fmt(x,false,d+1,seen)};
    if(Array.isArray(v))r=v.length?"[ "+v.map(f).join(", ")+" ]":"[]";
    else if(v instanceof Map){r="Map("+v.size+") { "+Array.from(v).map(function(e){return f(e[0])+" => "+f(e[1])}).join(", ")+" }"}
    else if(v instanceof Set){r="Set("+v.size+") { "+Array.from(v).map(f).join(", ")+" }"}
    else{var k=Object.keys(v);r=k.length?"{ "+k.map(function(x){return x+": "+f(v[x])}).join(", ")+" }":"{}"}
    seen.pop();return r;
  }
  function emit(t,args){
    if(++n>MAX){if(n===MAX+1)post("err","تجاوز الحد الأقصى للإخراج ("+MAX+" سطر).");throw new Error("__LIMIT__")}
    post(t,Array.prototype.map.call(args,function(a){return fmt(a,true,0,[])}).join(" "));
  }
  var c={};["log","info","warn","error","debug","table","dir"].forEach(function(m){
    c[m]=function(){emit(m==="warn"?"warn":m==="error"?"err":m==="info"?"info":"log",arguments)};
  });
  c.clear=function(){post("clear")};
  self.console=c;
  self.alert=function(m){emit("log",[m])};
  self.prompt=function(){emit("warn",["prompt() غير مدعومة في المحرر، استخدم متغيرات بدلًا منها."]);return null};
  self.addEventListener("unhandledrejection",function(e){var r=e.reason;post("err","Uncaught (in promise) "+(r&&r.message!==undefined?(r.name||"Error")+": "+r.message:String(r)))});
  self.onmessage=function(e){
    var t0=Date.now();
    try{(0,eval)(e.data)}catch(err){
      if(!(err&&err.message==="__LIMIT__"))post("err",(err&&err.message!==undefined)?(err.name||"Error")+": "+err.message:"Uncaught "+String(err));
    }
    post("done",Date.now()-t0);
  };
}
var workerURL=null;
function getURL(){if(!workerURL)workerURL=URL.createObjectURL(new Blob(["("+workerMain.toString()+")()"],{type:"text/javascript"}));return workerURL}

/* ---------- بناء الواجهة ---------- */
var root=document.createElement("div");
root.id="ed";root.setAttribute("role","dialog");root.setAttribute("aria-modal","true");root.setAttribute("aria-labelledby","edT");
root.innerHTML=
'<div class="ed-box">'+
 '<div class="ed-head">'+
  '<h2 id="edT"><span aria-hidden="true">‹/›</span> المحرر الحر <small>جافا سكربت</small></h2>'+
  '<select class="ed-sel" id="edEx" aria-label="أمثلة جاهزة"><option value="">أمثلة جاهزة…</option></select>'+
  '<button type="button" class="ed-btn run" id="edRun" title="Ctrl + Enter">▶ تشغيل</button>'+
  '<button type="button" class="ed-btn" id="edCopy">نسخ</button>'+
  '<button type="button" class="ed-btn" id="edDl">تنزيل</button>'+
  '<button type="button" class="ed-btn" id="edReset">مسح الكود</button>'+
  '<button type="button" class="ed-btn x" id="edClose" aria-label="إغلاق المحرر">✕</button>'+
 '</div>'+
 '<div class="ed-main">'+
  '<section class="ed-pane" aria-label="الكود">'+
   '<div class="ed-bar"><i></i><i></i><i></i><span>main.js</span><button type="button" id="edMinus" aria-label="تصغير الخط">A−</button><button type="button" id="edPlus" aria-label="تكبير الخط">A+</button></div>'+
   '<div class="ed-wrap mac"><div class="ed-gut" aria-hidden="true"><div id="edGut"></div></div>'+
    '<div class="ed-area"><pre class="ed-pre" aria-hidden="true"><code id="edHl"></code></pre>'+
    '<textarea id="edCode" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="محرر الكود" wrap="off"></textarea></div></div>'+
  '</section>'+
  '<section class="ed-pane" aria-label="الإخراج">'+
   '<div class="ed-bar"><i></i><i></i><i></i><span>Console</span><button type="button" id="edClear">مسح</button></div>'+
   '<div class="ed-out" id="edOut" role="log" aria-live="polite"></div>'+
  '</section>'+
 '</div>'+
 '<div class="ed-status" id="edSt"><span class="dot"></span><span id="edStT">جاهز</span><span class="sp hint"><kbd>Ctrl</kbd>+<kbd>Enter</kbd> تشغيل · <kbd>Ctrl</kbd>+<kbd>M</kbd> التنقل بـ Tab · <kbd>Esc</kbd> إغلاق</span></div>'+
'</div>';
document.body.appendChild(root);

var code=$("#edCode",root),hl=$("#edHl",root),gut=$("#edGut",root),out=$("#edOut",root),pre=$(".ed-pre",root),wrap=$(".ed-wrap",root),
    st=$("#edSt",root),stT=$("#edStT",root),runB=$("#edRun",root),ex=$("#edEx",root);
EXAMPLES.forEach(function(e,i){var o=document.createElement("option");o.value=i;o.textContent=e[0];ex.appendChild(o)});

/* ---------- التلوين والأرقام ---------- */
function highlight(){
  var v=code.value,h;
  try{h=(window.__hl&&window.__hl.hlJS)?window.__hl.hlJS(v):esc(v)}catch(e){h=esc(v)}
  hl.innerHTML=h+"\n";
  var n=v.split("\n").length,s="";for(var i=1;i<=n;i++)s+=i+"\n";
  if(gut.textContent!==s.replace(/\n$/,""))gut.textContent=s.replace(/\n$/,"");
  sync();
}
function sync(){pre.scrollTop=code.scrollTop;pre.scrollLeft=code.scrollLeft;gut.style.transform="translateY("+(-code.scrollTop)+"px)"}
var saveT;
function onInput(){highlight();clearTimeout(saveT);saveT=setTimeout(function(){LS.set(KEY,code.value)},300)}
code.addEventListener("input",onInput);
code.addEventListener("scroll",sync);

/* ---------- أدوات الكتابة ---------- */
function insert(text){
  code.focus();
  var ok=false;try{ok=document.execCommand("insertText",false,text)}catch(e){}
  if(!ok){code.setRangeText(text,code.selectionStart,code.selectionEnd,"end");onInput()}
}
var PAIRS={"(":")","[":"]","{":"}",'"':'"',"'":"'","`":"`"},CLOSERS=")]}\"'`",tabFocus=false;
code.addEventListener("keydown",function(e){
  var s=code.selectionStart,en=code.selectionEnd,v=code.value;
  if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){e.preventDefault();run();return}
  if((e.ctrlKey||e.metaKey)&&(e.key==="m"||e.key==="M")){e.preventDefault();tabFocus=!tabFocus;status(tabFocus?"وضع التنقل: زر Tab ينقل التركيز (Ctrl+M للعودة للكتابة)":"وضع الكتابة: زر Tab يضيف مسافة بادئة");return}
  if(e.key==="Tab"&&!tabFocus){
    e.preventDefault();
    var ls=v.lastIndexOf("\n",s-1)+1;
    if(s!==en&&v.slice(s,en).indexOf("\n")>-1||e.shiftKey){
      var blockEnd=en,seg=v.slice(ls,blockEnd),lines=seg.split("\n"),res;
      res=lines.map(function(l){return e.shiftKey?l.replace(/^( {1,2}|\t)/,""):"  "+l}).join("\n");
      code.setSelectionRange(ls,blockEnd);insert(res);
      code.setSelectionRange(ls,ls+res.length);
    }else insert("  ");
    return;
  }
  if(e.key==="Enter"&&!e.shiftKey&&!e.ctrlKey&&!e.metaKey&&s===en){
    var ls2=v.lastIndexOf("\n",s-1)+1,line=v.slice(ls2,s),ind=(/^[ \t]*/.exec(line)||[""])[0],prev=v.charAt(s-1),next=v.charAt(s);
    if(/[{(\[]$/.test(line.trimEnd())&&prev&&/[{(\[]/.test(prev)){
      e.preventDefault();
      if((prev==="{"&&next==="}")||(prev==="("&&next===")")||(prev==="["&&next==="]")){
        insert("\n"+ind+"  \n"+ind);
        var p=s+1+ind.length+2;code.setSelectionRange(p,p);
      }else insert("\n"+ind+"  ");
      return;
    }
    if(ind){e.preventDefault();insert("\n"+ind);return}
    return;
  }
  if(e.key==="Backspace"&&s===en&&s>0&&PAIRS[v.charAt(s-1)]&&PAIRS[v.charAt(s-1)]===v.charAt(s)){
    e.preventDefault();code.setSelectionRange(s-1,s+1);insert("");return;
  }
  if(!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.key.length===1){
    if(CLOSERS.indexOf(e.key)>-1&&s===en&&v.charAt(s)===e.key){e.preventDefault();code.setSelectionRange(s+1,s+1);return}
    if(PAIRS[e.key]){
      var nx=v.charAt(s),pv=v.charAt(s-1),isQ=e.key===PAIRS[e.key];
      if(s!==en){e.preventDefault();insert(e.key+v.slice(s,en)+PAIRS[e.key]);code.setSelectionRange(s+1,en+1);return}
      if((!nx||/[\s)\]};,.]/.test(nx))&&!(isQ&&/[\w]/.test(pv))){e.preventDefault();insert(e.key+PAIRS[e.key]);code.setSelectionRange(s+1,s+1)}
    }
  }
});

/* ---------- الحالة والإخراج ---------- */
function status(t,cls){stT.textContent=t;st.className="ed-status"+(cls?" "+cls:"")}
function ph(){out.innerHTML='<div class="ph">اضغط «تشغيل» لرؤية النتيجة هنا.</div>'}
var lines=0;
function line(cls,t){
  if(!lines)out.textContent="";
  lines++;var d=document.createElement("div");d.className="ln "+cls;d.textContent=t;out.appendChild(d);out.scrollTop=out.scrollHeight;
}
function clearOut(){lines=0;ph()}
$("#edClear",root).addEventListener("click",clearOut);

/* ---------- التشغيل ---------- */
var worker=null,timer=null,finished=false;
function stop(){clearTimeout(timer);if(worker){worker.terminate();worker=null}runB.textContent="▶ تشغيل";runB.classList.remove("stop")}
function run(){
  if(worker&&!finished){stop();line("sys","⏹ تم إيقاف التنفيذ.");status("أُوقف التنفيذ","bad");return}
  stop();clearOut();finished=false;
  LS.set(KEY,code.value);
  status("يعمل…","busy");runB.textContent="■ إيقاف";runB.classList.add("stop");
  try{worker=new Worker(getURL())}catch(e){stop();line("err","تعذّر تشغيل المحرر في هذا المتصفح: "+e.message);status("خطأ","bad");return}
  var errs=0,t0=Date.now();
  worker.onmessage=function(e){
    var m=e.data;
    if(m.t==="clear"){lines=0;out.textContent=""}
    else if(m.t==="done"){
      finished=true;runB.textContent="▶ تشغيل";runB.classList.remove("stop");
      if(!lines){lines=1;out.innerHTML='<div class="ln sys">انتهى التنفيذ بدون إخراج (استخدم console.log لإظهار النتائج).</div>'}
      status(errs?"انتهى مع أخطاء ("+m.a+" ms)":"اكتمل بنجاح ("+m.a+" ms)",errs?"bad":"");
      clearTimeout(timer);timer=setTimeout(stop,Math.max(0,LIMIT_MS-(Date.now()-t0)));/* يترك المؤقّتات (setTimeout) تعمل حتى انتهاء المهلة */
    }
    else{if(m.t==="err")errs++;line(m.t==="err"?"err":m.t,m.a)}
  };
  worker.onerror=function(e){e.preventDefault();errs++;line("err",e.message||"خطأ غير معروف");status("خطأ","bad")};
  timer=setTimeout(function(){
    if(!finished){stop();line("err","⏱ توقّف التنفيذ بعد "+(LIMIT_MS/1000)+" ثوانٍ (ربما توجد حلقة لا نهائية).");status("تجاوز المهلة","bad")}
    else stop();
  },LIMIT_MS);
  worker.postMessage(code.value);
}
runB.addEventListener("click",run);

/* ---------- أزرار الأدوات ---------- */
function flash(b,t){var o=b.textContent;b.textContent=t;b.classList.add("done");setTimeout(function(){b.textContent=o;b.classList.remove("done")},1400)}
$("#edCopy",root).addEventListener("click",function(){
  var b=this,v=code.value;
  function fb(){try{code.select();var ok=document.execCommand("copy");code.setSelectionRange(v.length,v.length);flash(b,ok?"تم النسخ ✓":"تعذّر النسخ")}catch(e){flash(b,"تعذّر النسخ")}}
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(function(){flash(b,"تم النسخ ✓")},fb);else fb();
});
$("#edDl",root).addEventListener("click",function(){
  var u=URL.createObjectURL(new Blob([code.value],{type:"text/javascript"})),a=document.createElement("a");
  a.href=u;a.download="main.js";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},1000);
});
$("#edReset",root).addEventListener("click",function(){
  if(code.value.trim()&&!confirm("هل تريد مسح الكود الحالي؟"))return;
  code.value="";onInput();code.focus();
});
ex.addEventListener("change",function(){
  if(ex.value==="")return;
  if(code.value.trim()&&code.value!==START&&!confirm("سيُستبدل الكود الحالي بالمثال. متابعة؟")){ex.value="";return}
  code.value=EXAMPLES[+ex.value][1];ex.value="";onInput();code.focus();
});
var fs=parseInt(LS.get(KEY_FS),10)||15;
function setFs(n){fs=Math.max(11,Math.min(26,n));wrap.style.setProperty("--edfs",fs+"px");LS.set(KEY_FS,fs);sync()}
$("#edPlus",root).addEventListener("click",function(){setFs(fs+1)});
$("#edMinus",root).addEventListener("click",function(){setFs(fs-1)});

/* ---------- فتح وإغلاق ---------- */
var opener=null;
function open(){
  opener=document.activeElement;
  root.classList.add("on");document.body.classList.add("ed-lock");
  if(!code.value){code.value=LS.get(KEY)||START}
  setFs(fs);highlight();if(!lines)ph();
  setTimeout(function(){code.focus();code.setSelectionRange(code.value.length,code.value.length)},30);
}
function close(){
  stop();root.classList.remove("on");document.body.classList.remove("ed-lock");
  LS.set(KEY,code.value);
  if(opener&&opener.focus)opener.focus();
  if(location.hash==="#editor")history.replaceState(null,"",location.pathname+location.search);
}
$("#edClose",root).addEventListener("click",close);
root.addEventListener("mousedown",function(e){if(e.target===root)close()});
root.addEventListener("keydown",function(e){
  if(e.key==="Escape"){e.preventDefault();close();return}
  if(e.key==="Tab"&&(e.target!==code||tabFocus)){
    var f=[].slice.call(root.querySelectorAll("button,select,textarea")).filter(function(x){return!x.disabled&&x.offsetParent!==null});
    if(!f.length)return;var a=f[0],z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}
    else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}
  }
});
var btn=$("#edBtn");
if(btn)btn.addEventListener("click",open);
window.addEventListener("hashchange",function(){if(location.hash==="#editor"&&!root.classList.contains("on"))open()});
if(location.hash==="#editor")open();
window.__editor={open:open,close:close,setCode:function(c){code.value=c;if(root.classList.contains("on"))highlight()}};
})();
