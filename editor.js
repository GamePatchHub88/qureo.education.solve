/* ===== المحرر الحر — جافا سكربت · بايثون · HTML/CSS =====
   جافا سكربت: داخل Web Worker معزول (بدون DOM أو localStorage)، ويُوقَف بعد 5 ثوانٍ.
   بايثون: Pyodide (CPython على WebAssembly) داخل Web Worker، يُحمَّل عند أول تشغيل فقط ويُوقَف بعد 10 ثوانٍ.
   HTML/CSS/JS: معاينة حيّة داخل iframe معزول (sandbox) مع Console. */
(function(){
"use strict";
var $=function(s,r){return(r||document).querySelector(s)};
var LS={get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
var esc=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};
var KEY_FS="ed_fs",KEY_LANG="ed_lang",KEY_IN="ed_stdin",LIMIT_MS=5000,PY_LIMIT_MS=10000,PY_LOAD_MS=40000;
/* مصادر Pyodide (يُجرَّب التالي تلقائيًا عند الفشل) */
var PY_CDNS=[
 {t:"pyo",u:"https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"},
 {t:"pyo",u:"https://cdn.jsdelivr.net/npm/pyodide@0.26.4/"},
 {t:"sk",u:"https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/"},
 {t:"sk",u:"https://skulpt.org/js/"}
],pyIdx=parseInt(LS.get("ed_pyidx"),10)||0,pyWhy=[],skNoted=false;
if(pyIdx<0||pyIdx>=PY_CDNS.length)pyIdx=0;

/* ---------- الأكواد الابتدائية والأمثلة ---------- */
var START_JS='// اكتب كود جافا سكربت هنا ثم اضغط «تشغيل» (Ctrl + Enter)\nconst numList = [3, 7, 14, 21, 25];\n\nfor (const num of numList) {\n  if (num % 7 == 0) {\n    console.log(num + " يقبل القسمة على 7");\n  }\n}\n';
var START_PY='# اكتب كود بايثون هنا ثم اضغط «تشغيل» (Ctrl + Enter)\nnum_list = [3, 7, 14, 21, 25]\n\nfor num in num_list:\n    if num % 7 == 0:\n        print(num, "يقبل القسمة على 7")\n';
var WEB1={
html:'<div class="card">\n  <h1>Hello!</h1>\n  <p>This is my first page.</p>\n  <button id="btn">Click me</button>\n</div>\n',
css:'body {\n  font-family: sans-serif;\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  background: #eef2ff;\n}\n\n.card {\n  background: #fff;\n  padding: 24px 32px;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px #0002;\n  text-align: center;\n}\n\nbutton {\n  padding: 8px 16px;\n  border: 0;\n  border-radius: 8px;\n  background: #4f46e5;\n  color: #fff;\n  cursor: pointer;\n}\n',
wjs:'const btn = document.getElementById("btn");\nconst title = document.querySelector("h1");\nlet count = 0;\n\nbtn.addEventListener("click", function () {\n  count++;\n  title.textContent = "Clicked " + count + " times";\n  console.log("click", count);\n});\n'};
var EX_JS=[
["مثال: حلقة for","for (let i = 1; i <= 5; i++) {\n  console.log(\"Round \" + i);\n}\n"],
["مثال: while","let money = 600;\nlet month = 0;\nwhile (money < 4000) {\n  month++;\n  money += 800;\n}\nconsole.log(\"Save for \" + month + \" months\");\n"],
["مثال: switch","const target = 4;\nswitch (target) {\n  case 4:\n  case 8:\n    console.log(\"Video game Get\");\n    break;\n  case 1:\n  case 7:\n    console.log(\"Candy Assortment Get\");\n    break;\n  default:\n    console.log(\"Sticker Get\");\n}\n"],
["مثال: مصفوفات","const list = [\"Mia\", \"Noah\", \"Liam\"];\nlist.push(\"David\");\nlist.unshift(\"Grace\");\nconsole.log(list);\nlist.sort();\nconsole.log(list);\nconsole.log(list.indexOf(\"Liam\"), list.includes(\"Rick\"));\n"],
["مثال: دالة","function average(list) {\n  let sum = 0;\n  for (const n of list) {\n    sum += n;\n  }\n  return sum / list.length;\n}\nconsole.log(average([70, 85, 90]));\n"]
];
var EX_PY=[
["مثال: حلقة for","for i in range(1, 6):\n    print(\"Round\", i)\n"],
["مثال: while","money = 600\nmonth = 0\nwhile money < 4000:\n    month += 1\n    money += 800\nprint(\"Save for\", month, \"months\")\n"],
["مثال: if / elif / else","score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")\n"],
["مثال: قوائم","names = [\"Mia\", \"Noah\", \"Liam\"]\nnames.append(\"David\")\nnames.insert(0, \"Grace\")\nprint(names)\nnames.sort()\nprint(names)\nprint(names.index(\"Liam\"), \"Rick\" in names)\n"],
["مثال: دالة","def average(numbers):\n    total = 0\n    for n in numbers:\n        total += n\n    return total / len(numbers)\n\nprint(average([70, 85, 90]))\n"],
["مثال: input()","name = input(\"What is your name? \")\nage = int(input(\"How old are you? \"))\nprint(\"Hello,\", name)\nprint(\"Next year you will be\", age + 1)\n","Mohamed\n16"]
];
var EX_WEB=[
["مثال: بطاقة وزر",WEB1],
["مثال: قائمة روابط",{
html:'<nav>\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li><a href="#">Lessons</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>\n<p id="msg">Hover over the links.</p>\n',
css:'body { font-family: sans-serif; margin: 0; }\nul {\n  display: flex;\n  gap: 8px;\n  list-style: none;\n  margin: 0;\n  padding: 12px;\n  background: #111936;\n}\na {\n  color: #fff;\n  text-decoration: none;\n  padding: 8px 14px;\n  border-radius: 8px;\n}\na:hover { background: #4fd4ff; color: #04293a; }\n#msg { padding: 16px; }\n',
wjs:'const links = document.querySelectorAll("a");\nlinks.forEach(function (a) {\n  a.addEventListener("mouseenter", function () {\n    document.getElementById("msg").textContent = "You are on: " + a.textContent;\n  });\n});\n'}],
["مثال: Flexbox",{
html:'<div class="row">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>\n',
css:'body { font-family: sans-serif; padding: 20px; }\n.row {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 200px;\n  background: #eef2ff;\n  border-radius: 14px;\n}\n.box {\n  width: 70px;\n  height: 70px;\n  display: grid;\n  place-items: center;\n  border-radius: 12px;\n  background: #4f46e5;\n  color: #fff;\n  font-size: 24px;\n}\n.box:nth-child(2) { height: 120px; background: #0ea5e9; }\n',
wjs:'console.log("3 boxes:", document.querySelectorAll(".box").length);\n'}],
["مثال: نموذج",{
html:'<form id="f">\n  <label>Your name</label>\n  <input id="name" placeholder="Type here">\n  <button type="submit">Say hi</button>\n</form>\n<h2 id="out"></h2>\n',
css:'body { font-family: sans-serif; padding: 20px; }\nform { display: flex; flex-direction: column; gap: 8px; max-width: 260px; }\ninput { padding: 8px; border: 1px solid #aab; border-radius: 8px; }\nbutton { padding: 8px; border: 0; border-radius: 8px; background: #13875a; color: #fff; }\n',
wjs:'document.getElementById("f").addEventListener("submit", function (e) {\n  e.preventDefault();\n  const name = document.getElementById("name").value;\n  document.getElementById("out").textContent = "Hi, " + name + "!";\n  console.log("name =", name);\n});\n'}]
];

/* ---------- الملفات والأوضاع ---------- */
var FILES={
 js:{key:"ed_code",name:"main.js",lang:"js",start:START_JS},
 py:{key:"ed_code_py",name:"main.py",lang:"py",start:START_PY},
 html:{key:"ed_code_html",name:"index.html",lang:"html",start:WEB1.html},
 css:{key:"ed_code_css",name:"style.css",lang:"css",start:WEB1.css},
 wjs:{key:"ed_code_wjs",name:"script.js",lang:"js",start:WEB1.wjs}
};
var MODES={
 js:{files:["js"],label:"جافا سكربت",ex:EX_JS,dl:"main.js",mime:"text/javascript"},
 py:{files:["py"],label:"بايثون",ex:EX_PY,dl:"main.py",mime:"text/x-python"},
 web:{files:["html","css","wjs"],label:"HTML / CSS",ex:EX_WEB,dl:"index.html",mime:"text/html"}
};
var mode="js",cur="js",buf={};
function L(){return FILES[cur].lang}
function B(id){
  if(buf[id]==null){var v=LS.get(FILES[id].key);buf[id]=v===null?FILES[id].start:v}
  return buf[id];
}

/* ---------- تلوين بايثون (أشمل من المدمج: docstrings، class، try، with، lambda…) ---------- */
function scan(c,rules){
  var out="",plain="",i=0,j,m,hit;
  function flush(){if(plain){out+=esc(plain);plain=""}}
  while(i<c.length){
    hit=null;
    for(j=0;j<rules.length;j++){rules[j][1].lastIndex=i;m=rules[j][1].exec(c);if(m&&m[0]){hit=[rules[j][0],m[0]];break}}
    if(hit){flush();out+='<span class="'+hit[0]+'">'+esc(hit[1])+'</span>';i+=hit[1].length}else plain+=c.charAt(i++);
  }
  flush();return out;
}
var PY_RULES=[
 ["c",/#[^\n]*/y],
 ["s",/[rRbBfFuU]{0,2}(?:"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$)|"(?:[^"\\\n]|\\.)*"?|'(?:[^'\\\n]|\\.)*'?)/y],
 ["n",/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/y],
 ["k",/\b(?:False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/y],
 ["b",/\b(?:print|input|len|range|str|int|float|bool|list|dict|set|tuple|type|abs|sum|min|max|round|sorted|reversed|enumerate|zip|map|filter|isinstance|any|all|self|math|random)\b/y],
 ["f",/@[A-Za-z_][\w.]*/y],
 ["f",/[A-Za-z_]\w*(?=\s*\()/y],
 ["o",/[=+\-*\/%<>!&|?:~^]+|[{}()\[\];,.]/y]
];
function hlPY(c){return scan(c,PY_RULES)}
function hlFor(lg,v){
  var h=window.__hl||{};
  if(lg==="py")return hlPY(v);
  var f=lg==="html"?h.hlHTML:lg==="css"?h.hlCSS:h.hlJS;
  return f?f(v):esc(v);
}

/* ---------- Worker جافا سكربت ---------- */
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

/* ---------- Worker بايثون (Pyodide) ---------- */
function pyWorkerMain(){
  var n=0,MAX=1500,py=null;
  function post(t,a){self.postMessage({t:t,a:a})}
  function line(t,s){if(++n>MAX){if(n===MAX+1)post("err","تجاوز الحد الأقصى للإخراج ("+MAX+" سطر).");return}post(t,s)}
  async function load(INDEX){
    try{
      /* نجلب المكتبة القياسية يدويًا (بدون كاش) ونتحقق منها قبل تمريرها لـ Pyodide */
      var r=await fetch(INDEX+"python_stdlib.zip",{cache:"reload"});
      if(!r.ok)throw new Error("HTTP "+r.status+" — "+INDEX);
      var buf=await r.arrayBuffer(),u=new Uint8Array(buf);
      if(u.length<1000000||u[0]!==0x50||u[1]!==0x4b)throw new Error("ملف python_stdlib.zip تالف أو محجوب ("+u.length+" بايت) — "+INDEX);
      importScripts(INDEX+"pyodide.js");
      py=await loadPyodide({indexURL:INDEX,stdLibURL:URL.createObjectURL(new Blob([buf]))});
      post("ready");
    }catch(err){post("fail",String(err&&err.message!==undefined?err.message:err))}
  }
  self.onmessage=async function(e){
    var m=e.data;
    if(m&&m.t==="init"){load(m.index);return}
    if(!m||m.t!=="run"||!py)return;
    var t0=Date.now(),g=null,rows=m.stdin?String(m.stdin).split("\n"):[],ri=0;
    n=0;post("start");
    try{
      py.setStdout({batched:function(s){line("log",s)}});
      py.setStderr({batched:function(s){line("warn",s)}});
      py.setStdin({stdin:function(){return ri<rows.length?rows[ri++]:undefined}});
      g=py.globals.get("dict")();
      await py.runPythonAsync(m.code,{globals:g});
    }catch(err){
      var msg=String(err&&err.message!==undefined?err.message:err),ls=msg.split("\n"),i=-1,k;
      for(k=0;k<ls.length;k++){if(ls[k].indexOf('File "<exec>"')>-1){i=k;break}}
      if(i>-1)msg="Traceback (most recent call last):\n"+ls.slice(i).join("\n");
      msg=msg.replace(/\s+$/,"");
      if(/EOF when reading a line/.test(msg))msg+="\n(أضف قيم input() في خانة «المدخلات» أسفل الشاشة — كل سطر = قيمة.)";
      post("err",msg);
    }finally{
      try{if(g&&g.destroy)g.destroy()}catch(x){}
    }
    post("done",Date.now()-t0);
  };
}
/* ---------- Worker بايثون البديل (Skulpt — مفسّر JavaScript خالص بدون WebAssembly) ---------- */
function skWorkerMain(){
  var n=0,MAX=1500,ready=false;
  function post(t,a){self.postMessage({t:t,a:a})}
  function line(t,s){if(++n>MAX){if(n===MAX+1)post("err","تجاوز الحد الأقصى للإخراج ("+MAX+" سطر).");return}post(t,s)}
  self.onmessage=function(e){
    var m=e.data;
    if(m&&m.t==="init"){
      try{
        importScripts(m.index+"skulpt.min.js",m.index+"skulpt-stdlib.js");
        if(typeof Sk==="undefined")throw new Error("Skulpt لم يُحمَّل — "+m.index);
        ready=true;post("ready");
      }catch(err){post("fail",String(err&&err.message!==undefined?err.message:err))}
      return;
    }
    if(!m||m.t!=="run"||!ready)return;
    var t0=Date.now(),rows=m.stdin?String(m.stdin).split("\n"):[],ri=0,ob="";
    n=0;post("start");
    function flush(all){
      var i;while((i=ob.indexOf("\n"))>-1){line("log",ob.slice(0,i));ob=ob.slice(i+1)}
      if(all&&ob){line("log",ob);ob=""}
    }
    Sk.configure({
      output:function(t){ob+=t;flush(false)},
      read:function(x){
        if(Sk.builtinFiles===undefined||Sk.builtinFiles["files"][x]===undefined)throw "File not found: '"+x+"'";
        return Sk.builtinFiles["files"][x];
      },
      inputfunTakesPrompt:true,
      inputfun:function(p){
        ob+=(p||"");
        if(ri>=rows.length){flush(true);throw new Error("EOFError: EOF when reading a line (أضف قيم input() في خانة «المدخلات» — كل سطر = قيمة)")}
        var v=rows[ri++];ob+=v+"\n";flush(false);return v;
      },
      __future__:Sk.python3
    });
    Sk.misceval.asyncToPromise(function(){return Sk.importMainWithBody("<stdin>",false,m.code,true)}).then(function(){
      flush(true);post("done",Date.now()-t0);
    },function(err){
      flush(true);post("err",String(err&&err.toString?err.toString():err));post("done",Date.now()-t0);
    });
  };
}
var skURL=null;
function getSkURL(){if(!skURL)skURL=URL.createObjectURL(new Blob(["("+skWorkerMain.toString()+")()"],{type:"text/javascript"}));return skURL}
var pyURL=null;
function getPyURL(){if(!pyURL)pyURL=URL.createObjectURL(new Blob(["("+pyWorkerMain.toString()+")()"],{type:"text/javascript"}));return pyURL}

/* ---------- المعاينة (HTML/CSS/JS) ---------- */
var VOID={area:1,base:1,br:1,col:1,embed:1,hr:1,img:1,input:1,link:1,meta:1,source:1,track:1,wbr:1};
var BRIDGE='<script>(function(){function f(v){try{if(typeof v==="string")return v;if(v instanceof Error)return v.name+": "+v.message;return typeof v==="object"&&v!==null?JSON.stringify(v):String(v)}catch(e){return String(v)}}var P=function(t,a){parent.postMessage({__ed:1,t:t,a:Array.prototype.map.call(a,f).join(" ")},"*")};["log","info","warn","error","debug"].forEach(function(m){var o=console[m];console[m]=function(){P(m==="error"?"err":m==="warn"?"warn":m==="info"?"info":"log",arguments);try{o.apply(console,arguments)}catch(e){}}});window.addEventListener("error",function(e){P("err",[e.message+(e.lineno?" (سطر "+e.lineno+")":"")])});window.addEventListener("unhandledrejection",function(e){var r=e.reason;P("err",["Uncaught (in promise) "+(r&&r.message||r)])})})();<\/script>';
function buildDoc(bridge){
  var h=B("html"),c=B("css"),j=B("wjs").replace(/<\/script/gi,"<\\/script"),usedC=false,usedJ=false;
  h=h.replace(/<link\b[^>]*href\s*=\s*["']?\.?\/?style\.css["']?[^>]*>/i,function(){usedC=true;return"<style>\n"+c+"\n</style>"});
  h=h.replace(/<script\b[^>]*src\s*=\s*["']?\.?\/?script\.js["']?[^>]*>\s*<\/script>/i,function(){usedJ=true;return"<script>\n"+j+"\n<\/script>"});
  var br=bridge?BRIDGE:"",jsTag="<script>\n"+j+"\n<\/script>",cssTag="<style>\n"+c+"\n</style>";
  if(!/<html[\s>]/i.test(h)&&!/<!doctype/i.test(h)){
    return'<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+br+(usedC?"":cssTag)+"</head><body>\n"+h+"\n"+(usedJ?"":jsTag)+"</body></html>";
  }
  var inj=br+(usedC?"":cssTag);
  if(/<head[^>]*>/i.test(h))h=h.replace(/<head[^>]*>/i,function(m){return m+inj});
  else if(/<html[^>]*>/i.test(h))h=h.replace(/<html[^>]*>/i,function(m){return m+"<head>"+inj+"</head>"});
  else h=inj+h;
  if(!usedJ)h=/<\/body>/i.test(h)?h.replace(/<\/body>/i,function(m){return jsTag+m}):h+jsTag;
  return h;
}

/* ---------- بناء الواجهة ---------- */
var root=document.createElement("div");
root.id="ed";root.setAttribute("role","dialog");root.setAttribute("aria-modal","true");root.setAttribute("aria-labelledby","edT");
root.dataset.mode="js";
root.innerHTML=
'<div class="ed-box">'+
 '<div class="ed-head">'+
  '<h2 id="edT"><span aria-hidden="true">‹/›</span> المحرر الحر</h2>'+
  '<select class="ed-sel" id="edLang" aria-label="لغة المحرر">'+
   '<option value="js">جافا سكربت</option><option value="py">بايثون</option><option value="web">HTML / CSS</option>'+
  '</select>'+
  '<select class="ed-sel" id="edEx" aria-label="أمثلة جاهزة"><option value="">أمثلة جاهزة…</option></select>'+
  '<button type="button" class="ed-btn run" id="edRun" title="Ctrl + Enter">▶ تشغيل</button>'+
  '<button type="button" class="ed-btn" id="edCopy">نسخ</button>'+
  '<button type="button" class="ed-btn" id="edDl">تنزيل</button>'+
  '<button type="button" class="ed-btn" id="edReset">مسح الكود</button>'+
  '<button type="button" class="ed-btn x" id="edClose" aria-label="إغلاق المحرر">✕</button>'+
 '</div>'+
 '<div class="ed-main">'+
  '<section class="ed-pane" aria-label="الكود">'+
   '<div class="ed-bar"><i></i><i></i><i></i><div class="ed-tabs" id="edTabs" role="tablist" aria-label="ملفات المشروع"></div><button type="button" id="edMinus" aria-label="تصغير الخط">A−</button><button type="button" id="edPlus" aria-label="تكبير الخط">A+</button></div>'+
   '<div class="ed-wrap mac"><div class="ed-gut" aria-hidden="true"><div id="edGut"></div></div>'+
    '<div class="ed-area"><pre class="ed-pre" aria-hidden="true"><code id="edHl"></code></pre>'+
    '<textarea id="edCode" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="محرر الكود" wrap="off"></textarea></div></div>'+
  '</section>'+
  '<section class="ed-pane" aria-label="الإخراج">'+
   '<div class="ed-bar ed-pv-bar"><i></i><i></i><i></i><span>Preview</span></div>'+
   '<iframe class="ed-frame" id="edFrame" title="معاينة الصفحة" sandbox="allow-scripts allow-modals"></iframe>'+
   '<div class="ed-bar"><i></i><i></i><i></i><span id="edOutT">Console</span><button type="button" id="edClear">مسح</button></div>'+
   '<div class="ed-out" id="edOut" role="log" aria-live="polite"></div>'+
   '<div class="ed-stdin"><label for="edIn">المدخلات <small>(لدوال input() — سطر لكل قيمة)</small></label><textarea id="edIn" rows="2" spellcheck="false" autocomplete="off" autocapitalize="off" dir="ltr"></textarea></div>'+
  '</section>'+
 '</div>'+
 '<div class="ed-status" id="edSt"><span class="dot"></span><span id="edStT">جاهز</span><span class="sp hint"><kbd>Ctrl</kbd>+<kbd>Enter</kbd> تشغيل · <kbd>Ctrl</kbd>+<kbd>Space</kbd> اقتراحات · <kbd>Ctrl</kbd>+<kbd>M</kbd> التنقل بـ Tab · <kbd>Esc</kbd> إغلاق</span></div>'+
'</div>';
document.body.appendChild(root);

var code=$("#edCode",root),hl=$("#edHl",root),gut=$("#edGut",root),out=$("#edOut",root),pre=$(".ed-pre",root),wrap=$(".ed-wrap",root),
    st=$("#edSt",root),stT=$("#edStT",root),runB=$("#edRun",root),ex=$("#edEx",root),langSel=$("#edLang",root),tabs=$("#edTabs",root),
    frame=$("#edFrame",root),stdin=$("#edIn",root);
stdin.value=LS.get(KEY_IN)||"";
stdin.addEventListener("input",function(){LS.set(KEY_IN,stdin.value)});
stdin.addEventListener("keydown",function(e){if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){e.preventDefault();run()}});

/* ---------- التلوين والأرقام ---------- */
function highlight(){
  var v=code.value,h;
  try{h=hlFor(L(),v)}catch(e){h=esc(v)}
  hl.innerHTML=h+"\n";
  var n=v.split("\n").length,s="";for(var i=1;i<=n;i++)s+=i+"\n";
  if(gut.textContent!==s.replace(/\n$/,""))gut.textContent=s.replace(/\n$/,"");
  sync();
}
function sync(){pre.scrollTop=code.scrollTop;pre.scrollLeft=code.scrollLeft;gut.style.transform="translateY("+(-code.scrollTop)+"px)"}
var saveT,prevT;
var loaded=false;
function saveCur(){if(!loaded)return;buf[cur]=code.value;LS.set(FILES[cur].key,code.value)}
function onInput(){
  highlight();clearTimeout(saveT);saveT=setTimeout(saveCur,300);
  if(mode==="web"&&(cur==="html"||cur==="css")){clearTimeout(prevT);prevT=setTimeout(function(){saveCur();renderPreview(true)},700)}
}
code.addEventListener("input",onInput);
code.addEventListener("scroll",sync);

/* ---------- أدوات الكتابة ---------- */
function insert(text){
  code.focus();
  var ok=false;try{ok=document.execCommand("insertText",false,text)}catch(e){}
  if(!ok){code.setRangeText(text,code.selectionStart,code.selectionEnd,"end");onInput()}
}
function unit(){return L()==="py"?"    ":"  "}

/* ---------- الإكمال التلقائي (مثل VS Code) ---------- */
var SNIPS_JS=[
 ["for","حلقة for","for (let i = 0; i < |; i++) {\n  \n}"],
 ["forof","حلقة for...of","for (const item of |) {\n  \n}"],
 ["while","حلقة while","while (|) {\n  \n}"],
 ["if","جملة if","if (|) {\n  \n}"],
 ["ifelse","if مع else","if (|) {\n  \n} else {\n  \n}"],
 ["switch","جملة switch","switch (|) {\n  case 1:\n    \n    break;\n  default:\n    \n}"],
 ["function","دالة","function name(|) {\n  \n}"],
 ["log","console.log","console.log(|);"]
];
var SNIPS_PY=[
 ["for","حلقة for","for i in range(|):\n    "],
 ["forin","for على قائمة","for item in |:\n    "],
 ["while","حلقة while","while |:\n    "],
 ["if","جملة if","if |:\n    "],
 ["ifelse","if مع else","if |:\n    \nelse:\n    "],
 ["elif","elif","elif |:\n    "],
 ["def","دالة","def name(|):\n    "],
 ["class","كلاس","class Name:\n    def __init__(self|):\n        "],
 ["try","try / except","try:\n    |\nexcept Exception as e:\n    print(e)"],
 ["main","نقطة البداية","if __name__ == \"__main__\":\n    |"]
];
var KW_JS=["let","const","var","else","do","return","break","continue","case","default","new","true","false","null","undefined","typeof","of","in","async","await","class","try","catch","throw"];
var KW_PY=["and","as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield","True","False","None"];
var GLOBALS_JS=[["console","كائن"],["Math","كائن"],["Object","كائن"],["Array","كائن"],["String","كائن"],["Number","كائن"],["JSON","كائن"],["Date","كائن"],["Map","كائن"],["Set","كائن"],["parseInt","دالة"],["parseFloat","دالة"],["isNaN","دالة"],["setTimeout","دالة"],["setInterval","دالة"],["clearTimeout","دالة"],["alert","دالة"]];
var GLOBALS_WEB=[["document","كائن"],["window","كائن"],["localStorage","كائن"]];
var FN_PY=[["print","طباعة"],["input","قراءة نص"],["len","الطول"],["range","نطاق أرقام"],["int","إلى عدد صحيح"],["float","إلى عدد عشري"],["str","إلى نص"],["bool","إلى منطقي"],["list","قائمة"],["dict","قاموس"],["set","مجموعة"],["tuple","صف"],["abs","القيمة المطلقة"],["sum","المجموع"],["min","أصغر قيمة"],["max","أكبر قيمة"],["round","تقريب"],["sorted","ترتيب"],["enumerate","ترقيم"],["zip","دمج قوائم"],["type","نوع القيمة"],["isinstance","فحص النوع"]];
var GLOBALS_PY=[["math","وحدة"],["random","وحدة"]];
/* [الاسم، الوصف، هل يأخذ معاملات؟ (1/0)، p = خاصية] */
var M_CONSOLE=[["log","طباعة","1"],["error","خطأ","1"],["warn","تحذير","1"],["info","معلومة","1"],["table","جدول","1"],["clear","مسح","0"]];
var M_MATH=[["floor","تقريب للأسفل","1"],["ceil","تقريب للأعلى","1"],["round","تقريب","1"],["trunc","حذف الكسر","1"],["random","رقم عشوائي","0"],["max","أكبر قيمة","1"],["min","أصغر قيمة","1"],["abs","القيمة المطلقة","1"],["sqrt","الجذر التربيعي","1"],["pow","القوة","1"],["PI","π","p"]];
var M_OBJECT=[["keys","المفاتيح","1"],["values","القيم","1"],["entries","الأزواج","1"],["assign","دمج","1"]];
var M_ARRAY_STATIC=[["isArray","هل هي مصفوفة؟","1"],["from","إنشاء من","1"]];
var M_NUMBER=[["isInteger","هل عدد صحيح؟","1"],["parseFloat","تحويل لعدد عشري","1"],["parseInt","تحويل لعدد صحيح","1"]];
var M_JSON=[["stringify","كائن ← نص","1"],["parse","نص ← كائن","1"]];
var M_DOCUMENT=[["getElementById","عنصر بالـ id","1"],["querySelector","أول عنصر مطابق","1"],["querySelectorAll","كل العناصر المطابقة","1"],["createElement","إنشاء عنصر","1"],["addEventListener","الاستماع لحدث","1"],["body","عنصر body","p"]];
var M_ANY_JS=[
 ["length","الطول","p","Array/String"],
 ["push","إضافة في النهاية","1","Array"],["pop","حذف آخر قيمة","0","Array"],["shift","حذف أول قيمة","0","Array"],["unshift","إضافة في البداية","1","Array"],
 ["includes","هل موجودة؟","1","Array/String"],["indexOf","فهرس القيمة","1","Array/String"],["sort","ترتيب","0","Array"],["reverse","عكس الترتيب","0","Array"],
 ["join","دمج في نص","1","Array"],["slice","جزء من القيم","1","Array/String"],["splice","حذف/إضافة بالفهرس","1","Array"],
 ["map","تحويل كل قيمة","1","Array"],["filter","تصفية","1","Array"],["forEach","تنفيذ لكل قيمة","1","Array"],["reduce","تجميع","1","Array"],["find","أول قيمة تطابق","1","Array"],
 ["toUpperCase","أحرف كبيرة","0","String"],["toLowerCase","أحرف صغيرة","0","String"],["trim","حذف المسافات","0","String"],["split","تقسيم النص","1","String"],["replace","استبدال","1","String"],["charAt","حرف بالفهرس","1","String"],["startsWith","يبدأ بـ","1","String"],["endsWith","ينتهي بـ","1","String"],
 ["toFixed","كسور عشرية","1","Number"],["toString","إلى نص","0","Any"]
];
var M_ANY_WEB=[
 ["textContent","النص","p","DOM"],["innerHTML","كود HTML","p","DOM"],["value","القيمة","p","DOM"],["style","التنسيق","p","DOM"],["classList","الأصناف","p","DOM"],
 ["addEventListener","الاستماع لحدث","1","DOM"],["appendChild","إضافة ابن","1","DOM"],["setAttribute","تعيين خاصية","1","DOM"],["getAttribute","قراءة خاصية","1","DOM"],["click","نقرة برمجية","0","DOM"],["remove","حذف العنصر","0","DOM"]
];
var M_MATH_PY=[["sqrt","الجذر التربيعي","1"],["pow","القوة","1"],["floor","تقريب للأسفل","1"],["ceil","تقريب للأعلى","1"],["fabs","القيمة المطلقة","1"],["factorial","المضروب","1"],["gcd","القاسم المشترك الأكبر","1"],["sin","جيب","1"],["cos","جيب التمام","1"],["pi","π","p"],["e","ثابت e","p"]];
var M_RANDOM_PY=[["randint","عدد صحيح عشوائي","1"],["random","عدد عشري عشوائي","0"],["choice","اختيار عشوائي","1"],["shuffle","خلط القائمة","1"],["uniform","عدد عشري في نطاق","1"]];
var M_ANY_PY=[
 ["append","إضافة في النهاية","1","list"],["insert","إضافة بالفهرس","1","list"],["remove","حذف قيمة","1","list"],["pop","حذف وإرجاع","0","list/dict"],["sort","ترتيب","0","list"],["reverse","عكس الترتيب","0","list"],["index","فهرس القيمة","1","list/str"],["count","عدد التكرار","1","list/str"],["extend","إضافة قائمة","1","list"],["clear","مسح الكل","0","list/dict"],["copy","نسخة","0","list/dict"],
 ["upper","أحرف كبيرة","0","str"],["lower","أحرف صغيرة","0","str"],["strip","حذف المسافات","0","str"],["split","تقسيم النص","1","str"],["join","دمج في نص","1","str"],["replace","استبدال","1","str"],["startswith","يبدأ بـ","1","str"],["endswith","ينتهي بـ","1","str"],["find","موضع النص","1","str"],["format","تنسيق النص","1","str"],["title","أول حرف كبير","0","str"],["capitalize","أول حرف كبير","0","str"],["isdigit","هل أرقام؟","0","str"],["isalpha","هل حروف؟","0","str"],
 ["keys","المفاتيح","0","dict"],["values","القيم","0","dict"],["items","الأزواج","0","dict"],["get","قيمة بمفتاح","1","dict"],["update","دمج","1","dict"]
];
var DATA={
 js:{snips:SNIPS_JS,kw:KW_JS,members:{console:M_CONSOLE,Math:M_MATH,Object:M_OBJECT,Number:M_NUMBER,JSON:M_JSON,Array:M_ARRAY_STATIC},any:M_ANY_JS},
 py:{snips:SNIPS_PY,kw:KW_PY,members:{math:M_MATH_PY,random:M_RANDOM_PY},any:M_ANY_PY}
};
var SNIP_NAMES={};
[SNIPS_JS,SNIPS_PY].forEach(function(a){a.forEach(function(s){SNIP_NAMES[s[0]]=1})});

/* CSS */
var CSS_PROPS=["color","background","background-color","background-image","border","border-radius","border-color","border-width","box-shadow","margin","margin-top","margin-right","margin-bottom","margin-left","padding","padding-top","padding-right","padding-bottom","padding-left","width","height","min-width","max-width","min-height","max-height","display","position","top","right","bottom","left","z-index","float","overflow","font-family","font-size","font-weight","font-style","line-height","letter-spacing","text-align","text-decoration","text-transform","flex","flex-direction","flex-wrap","justify-content","align-items","align-content","gap","grid-template-columns","grid-template-rows","opacity","cursor","transition","transform","animation","list-style","outline","box-sizing","visibility","content","object-fit","white-space"];
var VALS={
 display:["block","inline","inline-block","flex","grid","none"],
 position:["static","relative","absolute","fixed","sticky"],
 "text-align":["left","right","center","justify"],
 "flex-direction":["row","column","row-reverse","column-reverse"],
 "flex-wrap":["nowrap","wrap"],
 "justify-content":["flex-start","flex-end","center","space-between","space-around","space-evenly"],
 "align-items":["flex-start","flex-end","center","stretch","baseline"],
 cursor:["pointer","default","text","not-allowed","grab"],
 "font-weight":["normal","bold","600","800"],
 "font-style":["normal","italic"],
 overflow:["visible","hidden","scroll","auto"],
 "text-decoration":["none","underline","line-through"],
 "text-transform":["none","uppercase","lowercase","capitalize"],
 "box-sizing":["border-box","content-box"],
 border:["1px solid","2px dashed","none"],
 float:["left","right","none"],
 visibility:["visible","hidden"],
 "object-fit":["cover","contain","fill"],
 "white-space":["normal","nowrap","pre"],
 "list-style":["none","disc","decimal"]
};
var GEN_VALS=["auto","none","inherit","initial","transparent","center","solid","bold","pointer","flex","grid","block","relative","absolute","100%"];
var SNIPS_CSS=[
 ["media","media query","@media (max-width: 600px) {\n  |\n}"],
 ["flexcenter","flex في المنتصف","display: flex;\n  justify-content: center;\n  align-items: center;"],
 ["gridcols","شبكة بأعمدة","display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: |;"],
 ["keyframes","حركة keyframes","@keyframes name {\n  from { | }\n  to { }\n}"]
];
function cssCtx(before){
  var t=before.replace(/\/\*[\s\S]*?\*\//g,""),depth=0,i,ch;
  for(i=0;i<t.length;i++){ch=t.charAt(i);if(ch==="{")depth++;else if(ch==="}")depth--}
  if(depth<=0)return{t:"sel"};
  var st=t.slice(Math.max(t.lastIndexOf(";"),t.lastIndexOf("{"),t.lastIndexOf("}"))+1),m=/^\s*([\w-]+)\s*:[\s\S]*$/.exec(st);
  return m?{t:"value",p:m[1]}:{t:"prop"};
}
/* HTML */
var TAGS=[["a","رابط"],["article","مقال"],["aside","جانب"],["b","غامق"],["body","جسم الصفحة"],["br","سطر جديد"],["button","زر"],["canvas","لوحة رسم"],["code","كود"],["div","حاوية"],["em","مائل"],["footer","تذييل"],["form","نموذج"],["h1","عنوان 1"],["h2","عنوان 2"],["h3","عنوان 3"],["h4","عنوان 4"],["head","رأس الصفحة"],["header","ترويسة"],["hr","خط فاصل"],["html","الجذر"],["i","مائل"],["img","صورة"],["input","حقل إدخال"],["label","وسم حقل"],["li","عنصر قائمة"],["link","ربط ملف"],["main","المحتوى الرئيسي"],["meta","بيانات وصفية"],["nav","تنقل"],["ol","قائمة مرقمة"],["option","خيار"],["p","فقرة"],["pre","نص منسق"],["script","سكربت"],["section","قسم"],["select","قائمة منسدلة"],["small","نص صغير"],["span","نص مضمّن"],["strong","نص مهم"],["style","تنسيق CSS"],["table","جدول"],["tbody","جسم الجدول"],["td","خلية"],["textarea","نص متعدد الأسطر"],["th","خلية عنوان"],["thead","رأس الجدول"],["title","عنوان الصفحة"],["tr","صف"],["ul","قائمة نقطية"],["video","فيديو"]];
var TAGT={a:'a href="|"></a>',img:'img src="|" alt="">',input:'input type="|">',link:'link rel="stylesheet" href="|">',meta:'meta charset="|">',script:'script src="|"></script>',br:'br>',hr:'hr>',label:'label for="|"></label>',ul:'ul>\n  <li>|</li>\n</ul>',ol:'ol>\n  <li>|</li>\n</ol>',button:'button type="button">|</button>'};
var ATTRS=[["class","الصنف"],["id","المعرّف"],["style","تنسيق مباشر"],["href","الرابط"],["src","المصدر"],["alt","نص بديل"],["title","تلميح"],["type","النوع"],["name","الاسم"],["value","القيمة"],["placeholder","نص إرشادي"],["for","ربط بحقل"],["rel","العلاقة"],["target","الهدف"],["width","العرض"],["height","الارتفاع"],["lang","اللغة"],["dir","الاتجاه"],["charset","الترميز"],["content","المحتوى"],["onclick","عند النقر"],["disabled","معطّل"],["checked","محدد"],["required","مطلوب"],["action","وجهة النموذج"],["method","طريقة الإرسال"]];
var SNIPS_HTML=[
 ["html5","هيكل صفحة كامل",'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Document</title>\n</head>\n<body>\n  |\n</body>\n</html>'],
 ["table","جدول",'<table>\n  <tr>\n    <th>|</th>\n    <th></th>\n  </tr>\n  <tr>\n    <td></td>\n    <td></td>\n  </tr>\n</table>'],
 ["form","نموذج",'<form>\n  <label for="name">Name</label>\n  <input id="name" type="text">\n  <button type="submit">|</button>\n</form>']
];

/* هل المؤشر داخل نص/تعليق (لا نعرض الاقتراحات هناك)؟ */
function quoteOpen(line){
  var q=null,i,ch;
  for(i=0;i<line.length;i++){ch=line.charAt(i);if(q){if(ch==="\\")i++;else if(ch===q)q=null}else if(ch==='"'||ch==="'"||ch==="`")q=ch}
  return !!q;
}
var BLOCK={
 js:function(text){
  var ls=text.lastIndexOf("\n")+1,line=text.slice(ls),q=null,i;
  for(i=0;i<line.length;i++){
    var ch=line.charAt(i);
    if(q){if(ch==="\\")i++;else if(ch===q)q=null}
    else if(ch==="/"&&line.charAt(i+1)==="/")return true;
    else if(ch==="\""||ch==="'"||ch==="`")q=ch;
  }
  return !!q;
 },
 py:function(text){
  if(((text.match(/"""/g)||[]).length%2)||((text.match(/'''/g)||[]).length%2))return true;
  var ls=text.lastIndexOf("\n")+1,line=text.slice(ls),q=null,i;
  for(i=0;i<line.length;i++){
    var ch=line.charAt(i);
    if(q){if(ch==="\\")i++;else if(ch===q)q=null}
    else if(ch==="#")return true;
    else if(ch==="\""||ch==="'")q=ch;
  }
  return !!q;
 },
 css:function(text){
  if(text.lastIndexOf("/*")>text.lastIndexOf("*/"))return true;
  return quoteOpen(text.slice(text.lastIndexOf("\n")+1));
 },
 html:function(text){
  if(text.lastIndexOf("<!--")>text.lastIndexOf("-->"))return true;
  var lt=text.lastIndexOf("<"),gt=text.lastIndexOf(">");
  if(lt>gt){var seg=text.slice(lt);return((seg.match(/"/g)||[]).length%2)===1||((seg.match(/'/g)||[]).length%2)===1}
  return false;
 }
};

var pop=document.createElement("div");
pop.id="edAc";pop.className="ed-ac";pop.setAttribute("role","listbox");pop.hidden=true;root.appendChild(pop);
code.setAttribute("aria-autocomplete","list");code.setAttribute("aria-controls","edAc");
var acItems=[],acSel=0,acPrefix="",acOpen=false,cw=0;

function measure(){
  var sp=document.createElement("span"),cs=getComputedStyle(code);
  sp.style.cssText="position:absolute;visibility:hidden;white-space:pre;font:"+cs.font;
  sp.textContent=new Array(101).join("M");document.body.appendChild(sp);cw=sp.getBoundingClientRect().width/100;sp.remove();
}
function words(v,prefix,s,lg){
  var seen={},res=[],m,re;
  if(lg==="py"){
    re=/\b(?:def|class)\s+([A-Za-z_]\w*)/g;while((m=re.exec(v)))seen[m[1]]=2;
    re=/^[ \t]*([A-Za-z_]\w*)\s*(?:[+\-*\/]?=)(?!=)/gm;while((m=re.exec(v)))seen[m[1]]=2;
    re=/\bfor\s+([A-Za-z_]\w*)\s+in\b/g;while((m=re.exec(v)))seen[m[1]]=2;
    re=/\bimport\s+([A-Za-z_]\w*)/g;while((m=re.exec(v)))seen[m[1]]=2;
    re=/\bdef\s+\w+\(([^)]*)\)/g;while((m=re.exec(v))){m[1].split(",").forEach(function(a){var n=a.trim().split(/[=:\s]/)[0];if(/^[A-Za-z_]\w*$/.test(n))seen[n]=2})}
  }else{
    re=/\b(?:let|const|var|function|class)\s+([A-Za-z_$][\w$]*)/g;while((m=re.exec(v)))seen[m[1]]=2;
  }
  re=/\b[A-Za-z_$][\w$]{2,}\b/g;
  while((m=re.exec(v))){if(m.index+m[0].length===s&&m[0]===prefix)continue;if(!seen[m[0]])seen[m[0]]=1}
  for(var k in seen)res.push([k,seen[k]===2?"متغير/دالة":"من الكود"]);
  return res;
}
function rank(label,prefix){
  if(!prefix)return 3;
  if(label.indexOf(prefix)===0)return 0;
  var l=label.toLowerCase(),p=prefix.toLowerCase();
  if(l.indexOf(p)===0)return 1;
  if(l.indexOf(p)>-1)return 2;
  var j=0;for(var i=0;i<l.length&&j<p.length;i++)if(l.charAt(i)===p.charAt(j))j++;
  return j===p.length?4:-1;
}
function listCode(lg,before,pos,prefix,v,s,manual){
  var dot=before.charAt(pos-1)===".",list=[],D=DATA[lg];
  if(/\d$/.test(before.slice(0,pos))&&!prefix)return null;
  if(!prefix&&!dot&&!manual)return null;
  if(dot&&before.charAt(pos-2)==="."&&before.charAt(pos-3)===".")return null;
  var web=cur==="wjs";
  if(dot){
    var om=/([A-Za-z_$][\w$]*)\s*\.$/.exec(before.slice(0,pos)),obj=om?om[1]:"",set=D.members[obj]||(web&&obj==="document"?M_DOCUMENT:null);
    function add(m,detail){list.push({label:m[0],detail:detail,kind:m[2]==="p"?"prop":"fn",args:m[2]==="1",p:0})}
    if(set)set.forEach(function(m){add(m,m[1])});
    else{D.any.forEach(function(m){add(m,m[3]+" · "+m[1])});if(web)M_ANY_WEB.forEach(function(m){add(m,m[3]+" · "+m[1])})}
  }else{
    D.snips.forEach(function(sn){list.push({label:sn[0],detail:sn[1],kind:"snip",text:sn[2],p:0})});
    if(lg==="js"){
      D.kw.forEach(function(k){list.push({label:k,detail:"كلمة مفتاحية",kind:"kw",p:2})});
      GLOBALS_JS.concat(web?GLOBALS_WEB:[]).forEach(function(g){list.push({label:g[0],detail:g[1],kind:"cls",p:1})});
    }else{
      D.kw.forEach(function(k){list.push({label:k,detail:"كلمة مفتاحية",kind:"kw",p:2})});
      FN_PY.forEach(function(g){list.push({label:g[0],detail:g[1],kind:"fn",args:true,p:1})});
      GLOBALS_PY.forEach(function(g){list.push({label:g[0],detail:g[1],kind:"cls",p:1})});
    }
    words(v,prefix,s,lg).forEach(function(w){list.push({label:w[0],detail:w[1],kind:"var",p:w[1]==="من الكود"?3:0})});
  }
  return list;
}
function listCSS(before,prefix,manual){
  var ctx=cssCtx(before),list=[];
  if(!prefix&&!(ctx.t==="value"&&/:\s*$/.test(before))&&!manual)return null;
  if(ctx.t==="value"){
    (VALS[ctx.p]||[]).forEach(function(x){list.push({label:x,detail:"قيمة · "+ctx.p,kind:"kw",p:0})});
    GEN_VALS.forEach(function(x){list.push({label:x,detail:"قيمة",kind:"kw",p:2})});
  }else if(ctx.t==="prop"){
    CSS_PROPS.forEach(function(p){list.push({label:p,detail:"خاصية",kind:"prop",text:p+": |;",p:0})});
    SNIPS_CSS.slice(1,3).forEach(function(sn){list.push({label:sn[0],detail:sn[1],kind:"snip",text:sn[2],p:1})});
  }else{
    TAGS.forEach(function(t){list.push({label:t[0],detail:"وسم · "+t[1],kind:"tag",p:1})});
    [SNIPS_CSS[0],SNIPS_CSS[3]].forEach(function(sn){list.push({label:sn[0],detail:sn[1],kind:"snip",text:sn[2],p:0})});
  }
  return list;
}
function listHTML(before,pos,prefix,manual){
  var list=[],tagMode=before.charAt(pos-1)==="<",lt=before.lastIndexOf("<"),gt=before.lastIndexOf(">");
  var inTag=lt>gt,seg=inTag?before.slice(lt):"",attrCtx=inTag&&/^<[A-Za-z][\w-]*\s/.test(seg);
  if(!prefix&&!tagMode&&!(attrCtx&&/\s$/.test(before))&&!manual)return null;
  if(tagMode){
    TAGS.forEach(function(t){list.push({label:t[0],detail:"وسم · "+t[1],kind:"tag",text:TAGT[t[0]]||(VOID[t[0]]?t[0]+">":t[0]+">|</"+t[0]+">"),p:0})});
  }else if(attrCtx){
    ATTRS.forEach(function(a){list.push({label:a[0],detail:"خاصية · "+a[1],kind:"prop",text:a[0]+'="|"',p:0})});
  }else if(!inTag){
    SNIPS_HTML.forEach(function(sn){list.push({label:sn[0],detail:sn[1],kind:"snip",text:sn[2],p:0})});
    if(manual)TAGS.forEach(function(t){list.push({label:t[0],detail:"وسم · "+t[1],kind:"tag",text:t[0]+">|</"+t[0]+">",p:1})});
  }
  return list;
}
function buildItems(manual){
  var s=code.selectionStart,v=code.value,lg=L();
  if(s!==code.selectionEnd)return null;
  var before=v.slice(0,s);
  if(BLOCK[lg](before))return null;
  var web=lg==="css"||lg==="html",pm=(web?/[A-Za-z][\w-]*$/:/[A-Za-z_$][\w$]*$/).exec(before),prefix=pm?pm[0]:"",pos=s-prefix.length,list;
  if(lg==="css"&&/[\d.]$/.test(before.slice(0,pos)))return null;
  if(lg==="css")list=listCSS(before,prefix,manual);
  else if(lg==="html")list=listHTML(before,pos,prefix,manual);
  else list=listCode(lg,before,pos,prefix,v,s,manual);
  if(!list)return null;
  var seen={},out=[];
  list.forEach(function(x){
    var r=rank(x.label,prefix);if(r<0)return;
    if(x.kind==="kw"&&SNIP_NAMES[x.label]&&(lg==="js"||lg==="py"))return;
    var key=x.label+"|"+x.kind;if(seen[key])return;seen[key]=1;
    x.r=r;out.push(x);
  });
  out.sort(function(a,b){return a.r-b.r||a.p-b.p||a.label.length-b.label.length||(a.label<b.label?-1:1)});
  if(!out.length)return null;
  if(out.length===1&&out[0].label===prefix&&out[0].kind!=="snip"&&out[0].text==null)return null;
  return {items:out.slice(0,40),prefix:prefix};
}
var ICON={snip:"⌘",kw:"K",cls:"C",fn:"ƒ",prop:"P",var:"V",tag:"‹›"};
function renderAc(){
  pop.textContent="";
  acItems.forEach(function(x,i){
    var d=document.createElement("div");d.className="ac-i"+(i===acSel?" on":"");d.id="ac"+i;d.setAttribute("role","option");d.setAttribute("aria-selected",i===acSel?"true":"false");
    var ic=document.createElement("span");ic.className="ac-k k-"+x.kind;ic.textContent=ICON[x.kind]||"·";
    var lb=document.createElement("span");lb.className="ac-l";
    var n=acPrefix.length;
    if(n&&x.label.toLowerCase().indexOf(acPrefix.toLowerCase())===0){var b=document.createElement("b");b.textContent=x.label.slice(0,n);lb.appendChild(b);lb.appendChild(document.createTextNode(x.label.slice(n)))}
    else lb.textContent=x.label;
    var dt=document.createElement("span");dt.className="ac-d";dt.textContent=x.detail||"";
    d.appendChild(ic);d.appendChild(lb);d.appendChild(dt);
    d.addEventListener("mousedown",function(e){e.preventDefault();acSel=i;acceptAc()});
    pop.appendChild(d);
  });
  code.setAttribute("aria-activedescendant","ac"+acSel);
}
function placeAc(){
  if(!cw)measure();
  var cs=getComputedStyle(code),lh=parseFloat(cs.lineHeight),pl=parseFloat(cs.paddingLeft),pt=parseFloat(cs.paddingTop);
  var before=code.value.slice(0,code.selectionStart-acPrefix.length).replace(/\t/g,"  "),ln=before.split("\n"),
      line=ln.length-1,col=ln[ln.length-1].length,r=code.getBoundingClientRect();
  var x=r.left+pl+col*cw-code.scrollLeft,y=r.top+pt+(line+1)*lh-code.scrollTop;
  pop.hidden=false;
  var pw=pop.offsetWidth,ph=pop.offsetHeight,vw=window.innerWidth,vh=window.innerHeight;
  if(x+pw>vw-8)x=Math.max(8,vw-pw-8);
  if(y+ph>vh-8){y=y-lh-ph;if(y<8)y=Math.max(8,vh-ph-8)}
  if(y<r.top-4&&line*lh-code.scrollTop<0){hideAc();return}
  pop.style.left=x+"px";pop.style.top=y+"px";
}
function showAc(manual){
  var res=buildItems(manual);
  if(!res){hideAc();return}
  acItems=res.items;acPrefix=res.prefix;acSel=0;acOpen=true;renderAc();placeAc();
}
function hideAc(){if(!acOpen&&pop.hidden)return;acOpen=false;pop.hidden=true;code.removeAttribute("aria-activedescendant")}
function moveAc(d){
  acSel=(acSel+d+acItems.length)%acItems.length;
  [].forEach.call(pop.children,function(c,i){c.classList.toggle("on",i===acSel);c.setAttribute("aria-selected",i===acSel?"true":"false")});
  var el=pop.children[acSel];if(el&&el.scrollIntoView)el.scrollIntoView({block:"nearest"});
  code.setAttribute("aria-activedescendant","ac"+acSel);
}
function acceptAc(){
  var x=acItems[acSel];if(!x){hideAc();return}
  var s=code.selectionStart,v=code.value,start=s-acPrefix.length,text=x.label,caret=-1;
  if(x.kind==="prop"&&x.text!=null&&L()==="css"&&/^[\w-]*\s*:/.test(v.slice(s))){text=x.label}
  else if(x.text!=null){
    var ls=v.lastIndexOf("\n",start-1)+1,ind=(/^[ \t]*/.exec(v.slice(ls,start))||[""])[0];
    text=x.text.replace(/\n/g,"\n"+ind);caret=text.indexOf("|");text=text.replace("|","");
  }else if(x.kind==="fn"&&v.charAt(s)!=="("){
    text=x.label+"()";caret=x.args?x.label.length+1:-1;
  }
  hideAc();
  code.setSelectionRange(start,s);insert(text);
  if(caret>-1){var p=start+caret;code.setSelectionRange(p,p)}
}
code.addEventListener("input",function(e){
  var t=e.inputType||"";
  if(/^insert/.test(t)&&t!=="insertFromPaste")showAc(false);else hideAc();
});
code.addEventListener("blur",function(){setTimeout(hideAc,120)});
code.addEventListener("mousedown",hideAc);
code.addEventListener("scroll",hideAc);
window.addEventListener("resize",function(){cw=0;hideAc()});
/* يُستدعى من keydown: يعيد true إذا استُهلك الضغط */
function acKey(e){
  if((e.ctrlKey||e.metaKey)&&(e.key===" "||e.code==="Space"||e.key==="i"||e.key==="I")){e.preventDefault();showAc(true);return true}
  if(!acOpen)return false;
  if(e.key==="ArrowDown"){e.preventDefault();moveAc(1);return true}
  if(e.key==="ArrowUp"){e.preventDefault();moveAc(-1);return true}
  if((e.key==="Enter"||e.key==="Tab")&&!e.shiftKey&&!e.ctrlKey&&!e.metaKey){e.preventDefault();e.stopPropagation();acceptAc();return true}
  if(e.key==="Escape"){e.preventDefault();e.stopPropagation();hideAc();return true}
  if(e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="Home"||e.key==="End"||e.key==="PageUp"||e.key==="PageDown"){hideAc()}
  return false;
}

var PAIRS={"(":")","[":"]","{":"}",'"':'"',"'":"'","`":"`"},CLOSERS=")]}\"'`",tabFocus=false;
code.addEventListener("keydown",function(e){
  var s=code.selectionStart,en=code.selectionEnd,v=code.value,lg=L(),U=unit();
  if(acKey(e))return;
  if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){e.preventDefault();run();return}
  if((e.ctrlKey||e.metaKey)&&(e.key==="m"||e.key==="M")){e.preventDefault();tabFocus=!tabFocus;status(tabFocus?"وضع التنقل: زر Tab ينقل التركيز (Ctrl+M للعودة للكتابة)":"وضع الكتابة: زر Tab يضيف مسافة بادئة");return}
  if(e.key==="Tab"&&!tabFocus){
    e.preventDefault();
    var ls=v.lastIndexOf("\n",s-1)+1;
    if(s!==en&&v.slice(s,en).indexOf("\n")>-1||e.shiftKey){
      var blockEnd=en,seg=v.slice(ls,blockEnd),lines=seg.split("\n"),res,re=new RegExp("^( {1,"+U.length+"}|\\t)");
      res=lines.map(function(l){return e.shiftKey?l.replace(re,""):U+l}).join("\n");
      code.setSelectionRange(ls,blockEnd);insert(res);
      code.setSelectionRange(ls,ls+res.length);
    }else insert(U);
    return;
  }
  if(e.key==="Enter"&&!e.shiftKey&&!e.ctrlKey&&!e.metaKey&&s===en){
    var ls2=v.lastIndexOf("\n",s-1)+1,line=v.slice(ls2,s),ind=(/^[ \t]*/.exec(line)||[""])[0],prev=v.charAt(s-1),next=v.charAt(s);
    if(/[{(\[]$/.test(line.trimEnd())&&prev&&/[{(\[]/.test(prev)){
      e.preventDefault();
      if((prev==="{"&&next==="}")||(prev==="("&&next===")")||(prev==="["&&next==="]")){
        insert("\n"+ind+U+"\n"+ind);
        var p=s+1+ind.length+U.length;code.setSelectionRange(p,p);
      }else insert("\n"+ind+U);
      return;
    }
    if(lg==="py"&&/:$/.test(line.replace(/\s*#.*$/,"").trimEnd())){e.preventDefault();insert("\n"+ind+U);return}
    if(lg==="html"){
      var om=/<([A-Za-z][\w-]*)(?:\s[^<>]*)?>$/.exec(line);
      if(om&&!VOID[om[1].toLowerCase()]&&v.slice(s,s+2)==="</"){
        e.preventDefault();insert("\n"+ind+U+"\n"+ind);
        var p2=s+1+ind.length+U.length;code.setSelectionRange(p2,p2);return;
      }
      if(om&&!VOID[om[1].toLowerCase()]){e.preventDefault();insert("\n"+ind+U);return}
    }
    if(ind){e.preventDefault();insert("\n"+ind);return}
    return;
  }
  if(e.key==="Backspace"&&s===en&&s>0&&PAIRS[v.charAt(s-1)]&&PAIRS[v.charAt(s-1)]===v.charAt(s)){
    e.preventDefault();code.setSelectionRange(s-1,s+1);insert("");return;
  }
  if(!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.key.length===1){
    if(lg==="html"&&e.key===">"&&s===en&&v.charAt(s)!==">"){
      var lt=v.lastIndexOf("<",s-1),sg=lt>-1?v.slice(lt,s):"",bm=/^<([A-Za-z][\w-]*)(?:\s[^]*)?$/.exec(sg);
      if(bm&&sg.indexOf(">")===-1&&!/\/$/.test(sg)&&!VOID[bm[1].toLowerCase()]&&!/(?:"[^"]*|'[^']*)$/.test(sg.replace(/"[^"]*"|'[^']*'/g,""))){
        e.preventDefault();insert("></"+bm[1]+">");code.setSelectionRange(s+1,s+1);return;
      }
    }
    if(lg==="py"&&(e.key==='"'||e.key==="'")&&s===en&&v.slice(s-2,s)===e.key+e.key&&v.charAt(s-3)!==e.key){
      e.preventDefault();insert(e.key+e.key+e.key+e.key);code.setSelectionRange(s+1,s+1);return;
    }
    if(CLOSERS.indexOf(e.key)>-1&&s===en&&v.charAt(s)===e.key){e.preventDefault();code.setSelectionRange(s+1,s+1);return}
    if(PAIRS[e.key]){
      var nx=v.charAt(s),pv=v.charAt(s-1),isQ=e.key===PAIRS[e.key];
      if(s!==en){e.preventDefault();insert(e.key+v.slice(s,en)+PAIRS[e.key]);code.setSelectionRange(s+1,en+1);return}
      if((!nx||/[\s)\]};,.<]/.test(nx))&&!(isQ&&/[\w]/.test(pv))){e.preventDefault();insert(e.key+PAIRS[e.key]);code.setSelectionRange(s+1,s+1)}
    }
  }
});

/* ---------- الحالة والإخراج ---------- */
function status(t,cls){stT.textContent=t;st.className="ed-status"+(cls?" "+cls:"")}
function phText(){
  return mode==="web"?"رسائل console.log الخاصة بصفحتك تظهر هنا.":"اضغط «تشغيل» لرؤية النتيجة هنا.";
}
function ph(){out.innerHTML='<div class="ph">'+phText()+'</div>'}
var lines=0;
function line(cls,t){
  if(!lines)out.textContent="";
  lines++;var d=document.createElement("div");d.className="ln "+cls;d.textContent=t;out.appendChild(d);out.scrollTop=out.scrollHeight;
}
function clearOut(){lines=0;ph()}
$("#edClear",root).addEventListener("click",clearOut);

/* ---------- تشغيل جافا سكربت ---------- */
var worker=null,timer=null,finished=false;
function setRunUI(on){runB.textContent=on?"■ إيقاف":"▶ تشغيل";runB.classList.toggle("stop",!!on)}
function stopJS(){clearTimeout(timer);if(worker){worker.terminate();worker=null}setRunUI(false)}
function runJS(){
  if(worker&&!finished){stopJS();line("sys","⏹ تم إيقاف التنفيذ.");status("أُوقف التنفيذ","bad");return}
  stopJS();clearOut();finished=false;
  saveCur();
  status("يعمل…","busy");setRunUI(true);
  try{worker=new Worker(getURL())}catch(e){stopJS();line("err","تعذّر تشغيل المحرر في هذا المتصفح: "+e.message);status("خطأ","bad");return}
  var errs=0,t0=Date.now();
  worker.onmessage=function(e){
    var m=e.data;
    if(m.t==="clear"){lines=0;out.textContent=""}
    else if(m.t==="done"){
      finished=true;setRunUI(false);
      if(!lines){lines=1;out.innerHTML='<div class="ln sys">انتهى التنفيذ بدون إخراج (استخدم console.log لإظهار النتائج).</div>'}
      status(errs?"انتهى مع أخطاء ("+m.a+" ms)":"اكتمل بنجاح ("+m.a+" ms)",errs?"bad":"");
      clearTimeout(timer);timer=setTimeout(stopJS,Math.max(0,LIMIT_MS-(Date.now()-t0)));/* يترك المؤقّتات (setTimeout) تعمل حتى انتهاء المهلة */
    }
    else{if(m.t==="err")errs++;line(m.t==="err"?"err":m.t,m.a)}
  };
  worker.onerror=function(e){e.preventDefault();errs++;line("err",e.message||"خطأ غير معروف");status("خطأ","bad")};
  timer=setTimeout(function(){
    if(!finished){stopJS();line("err","⏱ توقّف التنفيذ بعد "+(LIMIT_MS/1000)+" ثوانٍ (ربما توجد حلقة لا نهائية).");status("تجاوز المهلة","bad")}
    else stopJS();
  },LIMIT_MS);
  worker.postMessage(code.value);
}

/* ---------- تشغيل بايثون ---------- */
var pw=null,pyReady=false,pyBusy=false,pyPending=false,pyT=null,pyLoadT=null,pyErrs=0;
function pyKill(){
  clearTimeout(pyT);clearTimeout(pyLoadT);
  if(pw){pw.terminate();pw=null}
  pyReady=false;pyBusy=false;pyPending=false;setRunUI(false);
}
function sendPy(){
  pyPending=false;
  pw.postMessage({t:"run",code:code.value,stdin:stdin.value});
}
function pyRetry(why){
  /* جرّب المصدر التالي (Pyodide ثم Skulpt)؛ إن انتهت المصادر أظهر الخطأ */
  if(pw){pw.terminate();pw=null}
  clearTimeout(pyLoadT);pyReady=false;
  pyWhy.push(PY_CDNS[pyIdx].u+" → "+String(why).split("\n")[0].slice(0,160));
  if(window.console&&console.warn)console.warn("[editor] python load failed:",PY_CDNS[pyIdx].u,why);
  if(pyIdx<PY_CDNS.length-1&&pyBusy){
    pyIdx++;status("جارٍ المحاولة من مصدر بديل ("+(pyIdx+1)+"/"+PY_CDNS.length+")…","busy");
    if(!makePyWorker()){pyIdx=0}
    return;
  }
  var det=pyWhy.join("\n");pyWhy=[];pyIdx=0;LS.set("ed_pyidx","0");pyKill();clearOut();
  line("err","تعذّر تحميل مفسّر بايثون من كل المصادر.\nيلزم اتصال بالإنترنت عند أول تشغيل، وتأكد أن مانع الإعلانات/الـ VPN لا يحجب cdn.jsdelivr.net أو skulpt.org.\n\n"+det);
  status("فشل التحميل","bad");
}
function makePyWorker(){
  try{pw=new Worker(PY_CDNS[pyIdx].t==="sk"?getSkURL():getPyURL())}catch(e){pyKill();line("err","تعذّر تشغيل بايثون في هذا المتصفح: "+e.message);status("خطأ","bad");return false}
  var w=pw;
  w.onmessage=function(e){
    if(w!==pw)return;
    var m=e.data;
    if(m.t==="ready"){
      clearTimeout(pyLoadT);pyReady=true;pyWhy=[];LS.set("ed_pyidx",String(pyIdx));
      if(pyPending&&pyBusy)sendPy();
    }
    else if(m.t==="fail")pyRetry(m.a);
    else if(m.t==="start"){
      lines=0;out.textContent="";pyErrs=0;status("يعمل…","busy");
      if(PY_CDNS[pyIdx].t==="sk"&&!skNoted){skNoted=true;line("sys","ℹ️ يعمل الآن مفسّر Skulpt (يدعم أساسيات بايثون: حلقات، دوال، قوائم، math، random…).")}
      clearTimeout(pyT);pyT=setTimeout(function(){
        if(pyBusy){pyKill();line("err","⏱ توقّف التنفيذ بعد "+(PY_LIMIT_MS/1000)+" ثوانٍ (ربما توجد حلقة لا نهائية).");status("تجاوز المهلة","bad")}
      },PY_LIMIT_MS);
    }
    else if(m.t==="done"){
      clearTimeout(pyT);pyBusy=false;setRunUI(false);
      if(!lines){lines=1;out.innerHTML='<div class="ln sys">انتهى التنفيذ بدون إخراج (استخدم print لإظهار النتائج).</div>'}
      status(pyErrs?"انتهى مع أخطاء ("+m.a+" ms)":"اكتمل بنجاح ("+m.a+" ms)",pyErrs?"bad":"");
    }
    else{if(m.t==="err")pyErrs++;line(m.t,m.a)}
  };
  w.onerror=function(e){
    if(w!==pw)return;
    e.preventDefault();
    if(!pyReady)pyRetry(e.message||"خطأ غير معروف");
    else{var msg=e.message||"خطأ غير معروف";pyKill();line("err",msg);status("خطأ","bad")}
  };
  pyLoadT=setTimeout(function(){if(!pyReady)pyRetry("انتهت مهلة التحميل")},PY_LOAD_MS);
  w.postMessage({t:"init",index:PY_CDNS[pyIdx].u});
  return true;
}
function runPy(){
  if(pyBusy){pyKill();line("sys","⏹ تم إيقاف التنفيذ.");status("أُوقف التنفيذ","bad");return}
  clearOut();saveCur();
  if(!pw){
    line("sys","⏳ جارٍ تحميل مفسّر بايثون (أول مرة فقط)…");
    status("جارٍ تحميل بايثون…","busy");
    if(!makePyWorker())return;
  }else status("يعمل…","busy");
  pyBusy=true;setRunUI(true);
  if(pyReady)sendPy();else pyPending=true;
}

/* ---------- معاينة HTML/CSS/JS ---------- */
function renderPreview(auto){
  saveCur();
  clearOut();
  frame.srcdoc=buildDoc(true);
  status(auto?"تم تحديث المعاينة تلقائيًا":"تم تحديث المعاينة");
}
window.addEventListener("message",function(e){
  if(mode!=="web"||e.source!==frame.contentWindow)return;
  var m=e.data;if(!m||m.__ed!==1||lines>800)return;
  line(m.t==="err"?"err":m.t,String(m.a));
});

function stopAll(){stopJS();if(pyBusy)pyKill();clearTimeout(prevT)}
function run(){
  if(mode==="py")runPy();else if(mode==="web")renderPreview(false);else runJS();
}
runB.addEventListener("click",run);

/* ---------- الملفات والأوضاع ---------- */
function renderTabs(){
  tabs.textContent="";
  var fl=MODES[mode].files;
  if(fl.length===1){
    var sp=document.createElement("span");sp.className="ed-fn";sp.textContent=FILES[fl[0]].name;tabs.appendChild(sp);return;
  }
  fl.forEach(function(id){
    var b=document.createElement("button");b.type="button";b.className="ed-tab"+(id===cur?" on":"");b.textContent=FILES[id].name;
    b.setAttribute("role","tab");b.setAttribute("aria-selected",id===cur?"true":"false");
    b.addEventListener("click",function(){if(id!==cur){switchFile(id);code.focus()}});
    tabs.appendChild(b);
  });
}
function loadFile(id){
  cur=id;loaded=true;code.value=B(id);code.scrollTop=0;code.scrollLeft=0;hideAc();renderTabs();highlight();
}
function switchFile(id){saveCur();loadFile(id)}
function fillExamples(){
  ex.textContent="";
  var o=document.createElement("option");o.value="";o.textContent="أمثلة جاهزة…";ex.appendChild(o);
  MODES[mode].ex.forEach(function(e,i){var o=document.createElement("option");o.value=i;o.textContent=e[0];ex.appendChild(o)});
}
function setMode(m){
  if(!MODES[m])m="js";
  if(root.classList.contains("on")){saveCur();stopAll()}
  mode=m;root.dataset.mode=m;langSel.value=m;LS.set(KEY_LANG,m);
  fillExamples();clearOut();
  loadFile(MODES[m].files[0]);
  var hint=m==="web"?"المعاينة تتحدّث تلقائيًا عند تعديل HTML/CSS · اضغط تشغيل لتحديث JS":m==="py"?"بايثون يعمل بـ Pyodide (يُحمَّل عند أول تشغيل)":"جاهز";
  status(hint);
  if(m==="web"&&root.classList.contains("on"))renderPreview(false);
  else if(m!=="web")frame.srcdoc="";
}
langSel.addEventListener("change",function(){setMode(langSel.value);code.focus()});

/* ---------- أزرار الأدوات ---------- */
function flash(b,t){var o=b.textContent;b.textContent=t;b.classList.add("done");setTimeout(function(){b.textContent=o;b.classList.remove("done")},1400)}
$("#edCopy",root).addEventListener("click",function(){
  var b=this,v=code.value;
  function fb(){try{code.select();var ok=document.execCommand("copy");code.setSelectionRange(v.length,v.length);flash(b,ok?"تم النسخ ✓":"تعذّر النسخ")}catch(e){flash(b,"تعذّر النسخ")}}
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(function(){flash(b,"تم النسخ ✓")},fb);else fb();
});
$("#edDl",root).addEventListener("click",function(){
  saveCur();
  var M=MODES[mode],txt=mode==="web"?buildDoc(false):code.value,
      u=URL.createObjectURL(new Blob([txt],{type:M.mime+";charset=utf-8"})),a=document.createElement("a");
  a.href=u;a.download=M.dl;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},1000);
});
$("#edReset",root).addEventListener("click",function(){
  if(code.value.trim()&&!confirm("هل تريد مسح الكود الحالي؟"))return;
  code.value="";onInput();code.focus();
});
function isStart(){
  var fl=MODES[mode].files;
  return fl.every(function(id){return B(id)===FILES[id].start||!B(id).trim()});
}
ex.addEventListener("change",function(){
  if(ex.value==="")return;
  var e=MODES[mode].ex[+ex.value];
  if(!isStart()&&!confirm("سيُستبدل الكود الحالي بالمثال. متابعة؟")){ex.value="";return}
  if(mode==="web"){
    buf.html=e[1].html;buf.css=e[1].css;buf.wjs=e[1].wjs;
    ["html","css","wjs"].forEach(function(id){LS.set(FILES[id].key,buf[id])});
    loadFile(cur);renderPreview(false);
  }else{
    code.value=e[1];
    if(mode==="py"){stdin.value=e[2]||"";LS.set(KEY_IN,stdin.value)}
    onInput();
  }
  ex.value="";code.focus();
});
var fs=parseInt(LS.get(KEY_FS),10)||15;
function setFs(n){fs=Math.max(11,Math.min(26,n));wrap.style.setProperty("--edfs",fs+"px");LS.set(KEY_FS,fs);cw=0;sync()}
$("#edPlus",root).addEventListener("click",function(){setFs(fs+1)});
$("#edMinus",root).addEventListener("click",function(){setFs(fs-1)});

/* ---------- فتح وإغلاق ---------- */
var opener=null,inited=false;
function open(m){
  opener=document.activeElement;
  root.classList.add("on");document.body.classList.add("ed-lock");
  if(!inited){inited=true;var sm=LS.get(KEY_LANG);setMode(MODES[m||sm]?(m||sm):"js")}
  else if(m&&m!==mode)setMode(m);
  else if(mode==="web")renderPreview(false);
  setFs(fs);highlight();if(!lines)ph();
  setTimeout(function(){code.focus();code.setSelectionRange(code.value.length,code.value.length)},30);
}
function close(){
  hideAc();stopAll();root.classList.remove("on");document.body.classList.remove("ed-lock");
  saveCur();
  if(opener&&opener.focus)opener.focus();
  if(/^#editor/.test(location.hash))history.replaceState(null,"",location.pathname+location.search);
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
if(btn)btn.addEventListener("click",function(){open()});
/* روابط مباشرة: #editor · #editor-js · #editor-python · #editor-web */
function hashMode(){
  var h=location.hash;
  if(h==="#editor"||h==="#editor-js")return h==="#editor"?"":"js";
  if(h==="#editor-python"||h==="#editor-py")return"py";
  if(h==="#editor-web"||h==="#editor-html")return"web";
  return null;
}
window.addEventListener("hashchange",function(){var hm=hashMode();if(hm!==null&&!root.classList.contains("on"))open(hm||undefined)});
var hm0=hashMode();if(hm0!==null)open(hm0||undefined);
window.__editor={open:open,close:close,setMode:setMode,setCode:function(c){code.value=c;if(root.classList.contains("on"))onInput();else buf[cur]=c}};
})();
