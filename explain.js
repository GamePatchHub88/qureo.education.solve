/* ===== شرح تلقائي للأكواد (جافا سكربت / بايثون / CSS / HTML) =====
   يُولَّد الشرح عند الضغط على «إظهار الشرح» فقط، سطرًا بسطر. */
(function(){
"use strict";
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const c=x=>'<bdi dir="ltr" class="x">'+esc(x)+'</bdi>';
const STR=/^(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)$/;
const STR_SPLIT=/("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)/;
const NUM=/^-?\d+(?:\.\d+)?$/;
const ID=/^[A-Za-z_$][\w$]*$/;
const outside=s=>s.split(STR_SPLIT).filter((_,i)=>i%2===0).join(" ");

/* ---------- العمليات في الشروط ---------- */
const OPNAMES={"===":"يساوي تمامًا","==":"يساوي","!==":"لا يساوي تمامًا","!=":"لا يساوي",">=":"أكبر من أو يساوي","<=":"أصغر من أو يساوي",">":"أكبر من","<":"أصغر من","&&":"و (يجب تحقق الشرطين)","||":"أو (يكفي تحقق أحدهما)","%":"باقي القسمة",
  "and":"و (يجب تحقق الشرطين)","or":"أو (يكفي تحقق أحدهما)","not":"ليس (عكس الشرط)"};
function opNote(cond,py){
  const o=outside(cond);
  const re=py?/===|!==|==|!=|>=|<=|&&|\|\||>|<|%|\band\b|\bor\b|\bnot\b/g:/===|!==|==|!=|>=|<=|&&|\|\||>|<|%/g;
  const seen=[];(o.match(re)||[]).forEach(x=>{if(!seen.includes(x))seen.push(x)});
  if(!seen.length)return"";
  return " — حيث "+seen.map(x=>c(x)+" تعني "+OPNAMES[x]).join("، ");
}
const cond=(e,py)=>c(e.trim())+opNote(e,py);

/* ---------- وصف التعبيرات ---------- */
const MATH={random:"رقم عشوائي بين 0 و1",floor:"تقريب الرقم لأسفل",ceil:"تقريب الرقم لأعلى",round:"تقريب الرقم لأقرب عدد صحيح",max:"أكبر قيمة",min:"أصغر قيمة",sqrt:"الجذر التربيعي",pow:"رفع لقوة",abs:"القيمة المطلقة"};
function ex(e){
  e=String(e).trim().replace(/;$/,"").trim();
  if(!e)return"";
  if(STR.test(e))return"النص "+c(e);
  if(NUM.test(e))return"الرقم "+c(e);
  if(/^(true|True)$/.test(e))return"القيمة "+c(e)+" (صح)";
  if(/^(false|False)$/.test(e))return"القيمة "+c(e)+" (خطأ)";
  if(/^(null|None|undefined)$/.test(e))return"قيمة فارغة "+c(e);
  if(/^\[[\s\S]*\]$/.test(e))return"قائمة عناصرها "+c(e.slice(1,-1).trim());
  if(/^f["']/.test(e))return"نص منسّق يضع قيم المتغيرات داخل الأقواس {} : "+c(e);
  if(/(^|[^\w.])(input|prompt)\(/.test(e))return"القيمة التي يدخلها المستخدم "+c(e);
  const m=/Math\.(\w+)/.exec(e);
  if(m&&MATH[m[1]])return MATH[m[1]]+" : "+c(e);
  if(/^(int|float|str|Number|String|parseInt|parseFloat|bool)\(/.test(e))return"تحويل نوع القيمة : "+c(e);
  if(/^len\(|\.length\b/.test(e))return"عدد العناصر أو الحروف : "+c(e);
  const o=outside(e);
  if(/\+/.test(o)&&STR_SPLIT.test(e)&&e.split(STR_SPLIT).length>1)return"دمج (ربط) النصوص مع القيم : "+c(e);
  if(ID.test(e))return"قيمة المتغير "+c(e);
  if(/[-+*\/%]/.test(o)&&!/[<>=!&|]/.test(o))return"ناتج العملية الحسابية "+c(e);
  if(/[<>=!&|]/.test(o))return"نتيجة المقارنة (صح أو خطأ) : "+c(e);
  return c(e);
}
const AUG={"+=":"يزيد قيمة","-=":"ينقص قيمة","*=":"يضرب قيمة","/=":"يقسم قيمة","%=":"يحسب باقي قسمة","//=":"يقسم (قسمة صحيحة) قيمة","**=":"يرفع لقوة قيمة"};
const AUGW={"+=":"بمقدار","-=":"بمقدار","*=":"في","/=":"على","%=":"على","//=":"على","**=":"إلى القوة"};
const argsOf=s=>s.trim()?c(s.trim()):"بدون مدخلات";

/* ---------- جافا سكربت ---------- */
const JS=[
 [/^\/\/(.*)$/,m=>"تعليق"+(m[1].trim()?" : "+c(m[1].trim()):"")+" — يتجاهله الحاسوب ولا يؤثر على التنفيذ."],
 [/^\/\*.*|^\*.*|.*\*\/$/,()=>"تعليق متعدد الأسطر — لا يُنفَّذ."],
 [/^console\.log\((.*)\);?$/,m=>"يعرض في وحدة التحكم : "+(m[1].trim()?ex(m[1]):"سطرًا فارغًا")+"."],
 [/^(let|const|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(.+?);?$/,m=>"ينشئ "+(m[1]==="const"?"ثابتًا (لا تتغير قيمته)":"متغيرًا")+" باسم "+c(m[2])+" ويخزّن فيه : "+ex(m[3])+"."],
 [/^(let|const|var)\s+([A-Za-z_$][\w$]*)\s*;?$/,m=>"ينشئ متغيرًا باسم "+c(m[2])+" بدون قيمة بعد."],
 [/^([A-Za-z_$][\w$.\[\]]*)\s*(\+=|-=|\*=|\/=|%=)\s*(.+?);?$/,m=>AUG[m[2]]+" "+c(m[1])+" "+AUGW[m[2]]+" "+ex(m[3])+"."],
 [/^([A-Za-z_$][\w$]*)\s*(\+\+|--)\s*;?$/,m=>(m[2]==="++"?"يزيد قيمة ":"ينقص قيمة ")+c(m[1])+" بمقدار 1."],
 [/^(\+\+|--)\s*([A-Za-z_$][\w$]*)\s*;?$/,m=>(m[1]==="++"?"يزيد قيمة ":"ينقص قيمة ")+c(m[2])+" بمقدار 1."],
 [/^([A-Za-z_$][\w$.\[\]]*)\s*=(?!=)\s*(.+?);?$/,m=>"يغيّر قيمة "+c(m[1])+" لتصبح : "+ex(m[2])+"."],
 [/^\}?\s*else\s+if\s*\((.*)\)\s*\{?$/,m=>"وإلا إذا تحقق الشرط "+cond(m[1])+" نُفِّذت الكتلة التالية (تُفحص فقط إذا فشلت الشروط السابقة)."],
 [/^\}?\s*else\s*\{?$/,()=>"وإلا : إذا لم يتحقق أي شرط سابق نُفِّذت الكتلة التالية."],
 [/^if\s*\((.*)\)\s*\{?$/,m=>"شرط : إذا تحقق "+cond(m[1])+" نُفِّذ ما بداخل الكتلة التالية."],
 [/^if\s*\((.*)\)\s*(.+);?$/,m=>"شرط : إذا تحقق "+cond(m[1])+" نُفِّذت التعليمة "+c(m[2].replace(/;$/,""))+"."],
 [/^while\s*\((.*)\)\s*\{?$/,m=>"حلقة while : تتكرر الكتلة التالية ما دام "+cond(m[1])+" متحققًا."],
 [/^for\s*\((.*)\)\s*\{?$/,m=>{
    const p=m[1].split(";");
    if(p.length===3)return"حلقة for : تبدأ بـ "+c(p[0].trim())+"، وتستمر ما دام "+cond(p[1])+"، وبعد كل دورة ينفَّذ "+c(p[2].trim())+".";
    return"حلقة for : "+c(m[1].trim())+" (تكرار على عناصر).";}],
 [/^function\s+([\w$]+)\s*\((.*)\)\s*\{?$/,m=>"يعرّف دالة باسم "+c(m[1])+" تستقبل : "+argsOf(m[2])+"."],
 [/^return\b\s*(.*?);?$/,m=>m[1]?"تُرجع الدالة : "+ex(m[1])+"، وتنتهي عندها.":"تنهي الدالة."],
 [/^break;?$/,()=>"يوقف الحلقة فورًا ويخرج منها."],
 [/^continue;?$/,()=>"يتخطى بقية الدورة الحالية وينتقل إلى الدورة التالية."],
 [/^[})\];,\s]+$/,()=>"إغلاق الكتلة (أو القوس) — نهاية الجزء السابق."],
 [/^([A-Za-z_$][\w$.]*)\((.*)\);?$/,m=>"يستدعي "+c(m[1])+" "+(m[2].trim()?"بالمدخلات "+c(m[2].trim()):"بدون مدخلات")+"."]
];

function jsLines(code){
  const out=[];
  String(code).split("\n").forEach(line=>{
    const t=line.trim();
    if(!t)return;
    if(t.startsWith("//")||t.startsWith("/*")||!/[{}]/.test(t.replace(/^\}\s*else.*$/,""))&&!/\{.+|.+\}/.test(t)){out.push(t);return}
    let buf="",q=null,dp=0;
    for(let i=0;i<t.length;i++){
      const ch=t[i];
      if(q){buf+=ch;if(ch==="\\"){buf+=t[++i]||"";continue}if(ch===q)q=null;continue}
      if(ch==='"'||ch==="'"||ch==="`"){q=ch;buf+=ch;continue}
      if(ch==="(")dp++;if(ch===")")dp=Math.max(0,dp-1);
      if(ch==="{"){buf+=ch;out.push(buf.trim());buf="";continue}
      if(ch==="}"){if(buf.trim())out.push(buf.trim());buf="}";continue}
      if(ch===";"&&!dp){buf+=ch;out.push(buf.trim());buf="";continue}
      buf+=ch;
    }
    if(buf.trim())out.push(buf.trim());
  });
  return out;
}

/* ---------- بايثون ---------- */
const PYR=[
 [/^#(.*)$/,m=>"تعليق"+(m[1].trim()?" : "+c(m[1].trim()):"")+" — يتجاهله الحاسوب ولا يؤثر على التنفيذ."],
 [/^print\((.*)\)$/,m=>"يطبع في وحدة التحكم : "+(m[1].trim()?ex(m[1]):"سطرًا فارغًا")+"."],
 [/^([A-Za-z_]\w*)\s*(\+=|-=|\*=|\/\/=|\*\*=|\/=|%=)\s*(.+)$/,m=>AUG[m[2]]+" "+c(m[1])+" "+AUGW[m[2]]+" "+ex(m[3])+"."],
 [/^([A-Za-z_]\w*)\s*=(?!=)\s*(.+)$/,m=>"ينشئ المتغير "+c(m[1])+" (أو يغيّر قيمته) ليصبح : "+ex(m[2])+"."],
 [/^elif\s+(.*):$/,m=>"وإلا إذا تحقق الشرط "+cond(m[1],1)+" نُفِّذ ما تحته (يُفحص فقط إذا فشلت الشروط السابقة)."],
 [/^else\s*:$/,()=>"وإلا : إذا لم يتحقق أي شرط سابق نُفِّذ السطر المُزاح تحته."],
 [/^if\s+(.*):$/,m=>"شرط : إذا تحقق "+cond(m[1],1)+" نُفِّذت الأسطر المُزاحة تحته."],
 [/^while\s+(.*):$/,m=>"حلقة while : تتكرر الأسطر المُزاحة تحتها ما دام "+cond(m[1],1)+" متحققًا."],
 [/^for\s+(\w+)\s+in\s+range\((.*)\):$/,m=>{
    const a=m[2].split(",").map(x=>x.trim());
    if(a.length===1)return"حلقة for : يأخذ "+c(m[1])+" القيم من 0 حتى "+c(a[0])+" (دون أن يصل إليها).";
    if(a.length===2)return"حلقة for : يأخذ "+c(m[1])+" القيم من "+c(a[0])+" حتى "+c(a[1])+" (دون أن يصل إليها).";
    return"حلقة for : يأخذ "+c(m[1])+" القيم من "+c(a[0])+" حتى "+c(a[1])+" بخطوة "+c(a[2])+".";}],
 [/^for\s+(\w+)\s+in\s+(.*):$/,m=>"حلقة for : يمرّ "+c(m[1])+" على كل عنصر في "+c(m[2])+"."],
 [/^def\s+(\w+)\((.*)\):$/,m=>"يعرّف دالة باسم "+c(m[1])+" تستقبل : "+argsOf(m[2])+"."],
 [/^return\b\s*(.*)$/,m=>m[1]?"تُرجع الدالة : "+ex(m[1])+"، وتنتهي عندها.":"تنهي الدالة."],
 [/^break$/,()=>"يوقف الحلقة فورًا ويخرج منها."],
 [/^continue$/,()=>"يتخطى بقية الدورة الحالية وينتقل إلى الدورة التالية."],
 [/^pass$/,()=>"لا يفعل شيئًا (مكان فارغ مؤقت)."],
 [/^(import|from)\s+.*$/,()=>"يستورد مكتبة جاهزة لاستخدام أدواتها."],
 [/^([A-Za-z_][\w.]*)\((.*)\)$/,m=>"يستدعي "+c(m[1])+" "+(m[2].trim()?"بالمدخلات "+c(m[2].trim()):"بدون مدخلات")+"."]
];

/* ---------- CSS ---------- */
const PROP={"color":"لون النص","background-color":"لون الخلفية","background":"الخلفية","font-size":"حجم الخط","font-family":"نوع الخط","font-weight":"سمك الخط","font-style":"شكل الخط","text-align":"محاذاة النص","text-decoration":"زخرفة النص (خط تحته أو فوقه)","text-transform":"حالة الأحرف","margin":"الهامش الخارجي","padding":"الهامش الداخلي","border":"الحدود","border-radius":"استدارة الزوايا","border-color":"لون الحدود","border-width":"سمك الحدود","border-style":"نمط الحدود","width":"العرض","height":"الارتفاع","max-width":"أقصى عرض","min-height":"أقل ارتفاع","display":"طريقة العرض","flex-direction":"اتجاه ترتيب العناصر","justify-content":"توزيع العناصر أفقيًا","align-items":"محاذاة العناصر عموديًا","gap":"المسافة بين العناصر","position":"نوع التموضع","top":"المسافة من الأعلى","left":"المسافة من اليسار","right":"المسافة من اليمين","bottom":"المسافة من الأسفل","opacity":"الشفافية","line-height":"ارتفاع السطر","letter-spacing":"المسافة بين الحروف","list-style":"شكل نقاط القائمة","list-style-type":"شكل نقاط القائمة","cursor":"شكل المؤشر","box-shadow":"ظل الصندوق","overflow":"التعامل مع المحتوى الزائد","transition":"الانتقال التدريجي","float":"العوم (وضع العنصر بجانب غيره)"};
const COLORS={red:"أحمر",blue:"أزرق",green:"أخضر",yellow:"أصفر",orange:"برتقالي",purple:"بنفسجي",black:"أسود",white:"أبيض",gray:"رمادي",grey:"رمادي",pink:"وردي",brown:"بني",gold:"ذهبي",navy:"كحلي",teal:"أزرق مخضر"};
const VALS={center:"المنتصف",left:"اليسار",right:"اليمين",bold:"عريض",none:"بلا",flex:"مرن (flex)",block:"كتلة",inline:"مضمّن",solid:"خط متصل"};
function cssLines(code){
  const out=[];let buf="",dp=0,i=0;
  while(i<code.length){
    if(code.startsWith("/*",i)){
      if(buf.trim())out.push(buf.trim());buf="";
      const j=code.indexOf("*/",i+2);const end=j<0?code.length:j+2;
      out.push(code.slice(i,end));i=end;continue;
    }
    const ch=code[i];
    if(ch==="(")dp++;if(ch===")")dp=Math.max(0,dp-1);
    if(!dp&&(ch==="{"||ch===";"||ch==="}")){
      if(ch==="}"){if(buf.trim())out.push(buf.trim());out.push("}")}
      else out.push((buf+ch).trim());
      buf="";i++;continue;
    }
    buf+=ch;i++;
  }
  if(buf.trim())out.push(buf.trim());
  return out;
}
function selDesc(sel){
  return sel.split(",").map(p=>{
    p=p.trim();
    if(/^\.[\w-]+$/.test(p))return"العناصر ذات الفئة "+c(p);
    if(/^#[\w-]+$/.test(p))return"العنصر ذو المعرّف "+c(p);
    if(/^[A-Za-z][A-Za-z0-9]*$/.test(p))return"كل وسم "+c(p);
    if(p==="*")return"كل العناصر";
    return"العناصر "+c(p);
  }).join(" و");
}
function cssRule(t){
  if(t.startsWith("/*"))return"تعليق — لا يؤثر على التنسيق.";
  if(t==="}")return"نهاية القاعدة.";
  if(/\{$/.test(t))return"يختار : "+selDesc(t.replace(/\{$/,""))+" ليطبّق عليها التنسيقات التالية.";
  const m=/^([\w-]+)\s*:\s*(.+?);?$/.exec(t);
  if(m){
    const v=m[2].trim();let extra="";
    const lv=v.toLowerCase();
    if(COLORS[lv])extra=" ("+COLORS[lv]+")";
    else if(/^#[0-9a-f]{3,8}$/i.test(v))extra=" (لون بالكود السداسي)";
    else if(/^rgba?\(/i.test(v))extra=" (لون بنظام RGB: أحمر، أخضر، أزرق)";
    else if(VALS[lv])extra=" ("+VALS[lv]+")";
    return"يضبط "+(PROP[m[1]]||"الخاصية "+c(m[1]))+" ليصبح "+c(v)+extra+".";
  }
  return null;
}

/* ---------- HTML ---------- */
const TAGS={html:"صفحة HTML",head:"رأس الصفحة (معلومات غير مرئية)",title:"عنوان تبويب المتصفح",body:"جسم الصفحة (المحتوى المرئي)",h1:"عنوان رئيسي",h2:"عنوان فرعي (مستوى 2)",h3:"عنوان فرعي (مستوى 3)",h4:"عنوان فرعي (مستوى 4)",h5:"عنوان فرعي (مستوى 5)",h6:"عنوان فرعي (مستوى 6)",p:"فقرة",ul:"قائمة نقطية",ol:"قائمة مرقّمة",li:"عنصر قائمة",img:"صورة",a:"رابط",div:"صندوق (حاوية)",span:"نص مضمّن",header:"ترويسة الصفحة",footer:"تذييل الصفحة",nav:"قائمة تنقّل",main:"المحتوى الرئيسي",section:"قسم",br:"سطر جديد",hr:"خط فاصل",button:"زر",input:"حقل إدخال",form:"نموذج",table:"جدول",tr:"صف في جدول",td:"خلية",th:"خلية عنوان",strong:"نص عريض مهم",b:"نص عريض",em:"نص مائل مؤكَّد",i:"نص مائل",link:"ربط بملف خارجي (مثل CSS)",style:"تنسيق CSS داخل الصفحة",script:"كود جافا سكربت",label:"تسمية لحقل",textarea:"مربع نص كبير",select:"قائمة منسدلة",option:"خيار في القائمة",meta:"معلومات وصفية للصفحة",video:"فيديو",audio:"صوت"};
const VOID=/^(br|hr|img|input|meta|link)$/;
const ATTR={src:"المصدر",href:"الوجهة",alt:"النص البديل",class:"الفئة (class)",id:"المعرّف (id)",style:"تنسيق داخلي",type:"النوع",name:"الاسم",value:"القيمة",placeholder:"النص التوضيحي",width:"العرض",height:"الارتفاع",rel:"العلاقة",lang:"اللغة",charset:"ترميز الحروف",content:"المحتوى","for":"مرتبط بالحقل"};
function attrsDesc(a){
  const r=[];a.replace(/([\w-]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'>]+))?/g,(m,n,v)=>{
    v=v?v.replace(/^["']|["']$/g,""):"";
    r.push((ATTR[n.toLowerCase()]||"الخاصية "+n)+(v?" "+c(v):""));return m});
  return r.length?" ("+r.join("، ")+")":"";
}
function htmlLine(t){
  if(/^[\w-]+\s*=\s*("[^"]*"|'[^']*')\s*\/?>?$/.test(t)){
    const m=/^([\w-]+)\s*=\s*["']?([^"']*)/.exec(t);
    return"خاصية داخل الوسم : "+(ATTR[m[1].toLowerCase()]||c(m[1]))+" قيمتها "+c(m[2])+".";
  }
  const toks=[];
  t.replace(/<!--[\s\S]*?-->|<!DOCTYPE[^>]*>|<(\/?)([A-Za-z][\w-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>|([^<]+)/gi,(m,cl,tag,at,tx)=>{
    if(m.startsWith("<!--"))toks.push({t:"cm"});
    else if(/^<!DOCTYPE/i.test(m))toks.push({t:"dt"});
    else if(tag)toks.push({t:cl?"close":"open",tag:tag.toLowerCase(),at:at||""});
    else if(tx&&tx.trim())toks.push({t:"tx",v:tx.trim()});
    return m;});
  if(!toks.length)return null;
  const ph=[];
  for(let i=0;i<toks.length;i++){
    const k=toks[i],n=toks[i+1],n2=toks[i+2];
    if(k.t==="cm")ph.push("تعليق — لا يظهر في الصفحة");
    else if(k.t==="dt")ph.push("يعلن أن المستند صفحة HTML5");
    else if(k.t==="open"){
      const nn=TAGS[k.tag]||"وسم "+c(k.tag);
      if(VOID.test(k.tag))ph.push(nn+attrsDesc(k.at));
      else if(n&&n.t==="tx"&&n2&&n2.t==="close"&&n2.tag===k.tag){ph.push("يعرض "+nn+attrsDesc(k.at)+" بالنص "+c(n.v));i+=2}
      else if(n&&n.t==="close"&&n.tag===k.tag){ph.push(nn+" فارغ"+attrsDesc(k.at));i+=1}
      else ph.push("يفتح "+nn+attrsDesc(k.at));
    }
    else if(k.t==="close")ph.push("يُغلق "+(TAGS[k.tag]||"وسم "+c(k.tag)));
    else if(k.t==="tx")ph.push("النص "+c(k.v));
  }
  return ph.join("، ثم ")+".";
}

/* ---------- الواجهة ---------- */
const INTRO={js:"يُنفَّذ البرنامج سطرًا بسطر من الأعلى إلى الأسفل. شرح كل سطر :",py:"يُنفَّذ البرنامج سطرًا بسطر من الأعلى إلى الأسفل (والأسطر المُزاحة تتبع السطر الذي فوقها). شرح كل سطر :",css:"كل قاعدة CSS تختار عناصر ثم تضبط خصائصها. شرح كل سطر :",html:"يقرأ المتصفح الوسوم من الأعلى إلى الأسفل ويرسم الصفحة. شرح كل سطر :"};
const FALL="تعليمة تُنفَّذ كما هي ضمن البرنامج.";
function fallback(t,kind){
  if(kind!=="js"&&kind!=="py")return FALL;
  if(/^[+\-*\/%]$/.test(t))return"رمز عملية حسابية : "+c(t)+" (جمع أو طرح أو ضرب أو قسمة أو باقي قسمة).";
  if(/^[\w$.\s]+(===|!==|==|!=|>=|<=|>|<)[\w$.\s"']+$/.test(t))return"تعبير مقارنة : "+c(t)+opNote(t,kind==="py")+" — نتيجته صح أو خطأ.";
  if(ID.test(t))return"اسم توضيحي يرمز إلى مكان التعليمات أو القيمة في الشكل العام.";
  return FALL;
}
window.explainCode=function(code,kind){
  if(!INTRO[kind])kind="js";
  if(kind==="js"&&!/\b(console|let|const|var|function|if|for|while)\b/.test(code)&&/[.#\w*][^;{}()]*\{[^{}]*:[^{}]*\}/.test(code))kind="css";
  const lines=kind==="css"?cssLines(code):kind==="js"?jsLines(code):String(code).split("\n");
  const items=[];
  for(const raw of lines){
    const t=raw.trim();if(!t)continue;
    let txt=null;
    if(kind==="js"||kind==="py"){
      for(const [re,fn] of (kind==="js"?JS:PYR)){const m=re.exec(t);if(m){txt=fn(m);break}}
    }else if(kind==="css")txt=cssRule(t);
    else txt=htmlLine(t);
    items.push('<li><code dir="ltr">'+esc(t)+'</code><p>'+(txt||fallback(t,kind))+'</p></li>');
  }
  return'<p class="exp-intro">'+INTRO[kind]+'</p><ol class="exp-list">'+items.join("")+'</ol>';
};
window.__explainKind=n=>({"index.html":"html","style.css":"css","main.js":"js","main.py":"py"})[n]||"js";
})();
