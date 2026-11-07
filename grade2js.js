/* ===== الصف الثاني الثانوي — جافا سكربت (JavaScript) =====
   الفصول 43 إلى 45 (HTML / CSS) و46 إلى 54 (JavaScript). نفس صيغة بقية الأقسام: [السؤال، الإجابة النصية، الكود]
   lang:"web" يجعل تلوين الكود واسم الملف (index.html / style.css) يُحدَّدان تلقائيًا. */
const WEB_SAME="امسح الكود أو عدّله ليصبح هكذا، وتأكد من عدم وجود أسطر زائدة.";
const WEB_RUN="اضغط على «تشغيل الكود» دون تعديل البرنامج.";

const CAFE_HEADER=`<header>
  <h1>CAFE MENU</h1>
  <ul>
    <li>About the Cafe</li>
    <li>Menu</li>
  </ul>
</header>
`;
const CAFE_FULL=CAFE_HEADER+`
<div class="main">
  <h1>Menu List</h1>
  <ul>
    <li>Donuts<br><img src="donuts.png" alt="Donut image"></li>
    <li>Cafe latte<br><img src="cafe_latte.png" alt="Cafe latte image"></li>
  </ul>
</div>`;

const G2JS=[
{id:43,lang:"web",title:"الفصل 43",sub:"CSS (3)",lessons:[
[`الدرس 1: RGB`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`غيّر لون نص وسم span إلى اللون البرتقالي (الأجزاء المراد تغيير لونها مُحاطة بوسم span)`,WEB_SAME,`span {
  color: orange;
}`],
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`غيّر لون نص وسم span إلى اللون الأحمر باستخدام RGB`,WEB_SAME,`span {
  color: rgb(255, 0, 0);
}`],
[`غيّر قيمة RGB من 255, 0, 0 إلى 150, 0, 0`,`اكتب في المكان المخصص: 150`,`span {
  color: rgb(150, 0, 0);
}`],
[`غيّر لون نص وسم span إلى اللون الأصفر باستخدام RGB`,`اكتب السطر الثاني فقط واترك السطر الأول والثالث كما هما.`,`span {
  color: rgb(255, 255, 0);
}`],
[`غيّر لون نص وسم span إلى اللون البرتقالي الداكن باستخدام RGB`,`اكتب السطر الثاني فقط واترك السطر الأول والثالث كما هما.`,`span {
  color: rgb(255, 100, 0);
}`]]],
[`الدرس 2: أكواد الألوان`,[
[`غيّر لون نص وسم span إلى اللون البرتقالي باستخدام كود اللون`,WEB_SAME,`span {
  color: #ff8c00;
}`],
[`غيّر لون نص وسم span إلى اللون الأرجواني باستخدام كود اللون`,`اكتب في المكان المخصص: #a260bf`,`span {
  color: #a260bf;
}`]]],
[`الدرس 3: العتامة (Opacity)`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`عند ملامسة مؤشّر الفأرة للصورة تصبح أكثر شفافية (الصورة لها class باسم cody)`,`اكتب السطر الثاني في المكان المخصص له.`,`.cody:hover {
  opacity: 0.3;
}`],
[`عند ملامسة مؤشّر الفأرة للصورة تصبح شفافة تمامًا (الصورة لها class باسم cody)`,`اكتب السطر الثاني في المكان المخصص له.`,`.cody:hover {
  opacity: 0;
}`],
[`عند ملامسة مؤشّر الفأرة للعنوان h2 يصبح أكثر شفافية`,`اكتب السطر الثاني في المكان المخصص له.`,`h2:hover {
  opacity: 0.5;
}
.cody:hover {
  opacity: 0.3;
}`]]],
[`مراجعة الفصل 43`,[
[`اجعل الأجزاء المحاطة بوسم span في HTML خضراء باستخدام CSS (اختر التصريح الصحيح)`,``,`span {
  color: green;
}`],
[`حدد اللون الذي يمثله rgb(255, 255, 0) من الخيارات`,`أصفر`],
[`حدد تمثيل كود اللون الستة عشري لـ rgb(255, 255, 0) من الخيارات`,`#ffff00`],
[`حدد الخاصية التي تجعل النص أو الصور شبه شفافة`,``,`opacity: 0.6;`],
[`حدد المظهر الأنسب عند تحديد opacity: 0 للنص`,`شفاف`]],``,1]
]},

{id:44,lang:"web",title:"الفصل 44",sub:"إنشاء موقع ويب",lessons:[
[`الدرس 1: وسم header في HTML`,[
[`أنشئ صفحة قائمة مقهى: اكتب العنوان CAFE MENU بوسم h1، واعرض About the Cafe وMenu بوسمي ul وli`,`اكتب أو انسخ الكود التالي.`,`<h1>CAFE MENU</h1>
<ul>
  <li>About the Cafe</li>
  <li>Menu</li>
</ul>`],
[`اكتب وسم header في قسم رأس الصفحة`,`اكتب <header> في السطر الأول و</header> في السطر الأخير فقط، وأبقِ الباقي كما هو.`,CAFE_HEADER.trim()]]],
[`الدرس 2: وسم header في CSS`,[
[`أضف لون خلفية إلى قسم رأس الصفحة (Selector: header، Property: background-color، Value: rgb(255, 255, 180))`,`اكتب أو انسخ الكود التالي.`,`header {
  background-color: rgb(255, 255, 180);
}`]]],
[`الدرس 3: المحتوى الرئيسي`,[
[`أضف قائمة طعام إلى قسم المحتوى الرئيسي: أدخل وسم div بدءًا من السطر 9`,`اكتب <div> في السطر 9 و</div> في السطر 11، مع بقاء السطر الثامن فارغًا.`,CAFE_HEADER+`
<div>
  <h1>Menu List</h1>
</div>`],
[`أضف سمة class إلى وسم div في السطر 9 واضبط اسم الفئة على "main"`,`اكتب في السطر 9 داخل الوسم: class="main"`,CAFE_HEADER+`
<div class="main">
  <h1>Menu List</h1>
</div>`],
[`أدخل قائمة ul تحتوي على Donuts والصورة بدءًا من السطر 11`,`اكتب الكود من السطر 11 إلى 13 ليرحَّل السطر 12 القديم إلى السطر 14، مع بقاء السطر الثامن فارغًا.`,CAFE_HEADER+`
<div class="main">
  <h1>Menu List</h1>
  <ul>
    <li>Donuts<img src="donuts.png"></li>
  </ul>
</div>`],
[`أضف فاصل سطر باستخدام وسم br بين Donuts والصورة في السطر 12`,`عدّل السطر 12 ليصبح هكذا. انسخ هذا السطر فقط وابدأ به بدون مسافة في أوله؛ نسخ الكود كاملًا قد يعطي خطأ.`,`<li>Donuts<br><img src="donuts.png"></li>`],
[`أضف وصفًا للصورة (لن تُعرض الصورة عند التنفيذ): أضف "Donut image" إلى سمة alt في السطر 12`,`اكتب في المكان المخصص في السطر 12: alt="Donut image" (الكود التالي للمشاهدة فقط والسطر الثامن فارغ).`,CAFE_HEADER+`
<div class="main">
  <h1>Menu List</h1>
  <ul>
    <li>Donuts<br><img src="donuts.png" alt="Donut image"></li>
  </ul>
</div>`],
[`أضف صورة مشروب في السطر 13: اسم الصورة "cafe_latte.png" وسمة alt "Cafe latte image"`,`عدّل السطر 13 ليصبح كما في الكود التالي (السطر الثامن فارغ).`,CAFE_FULL]]],
[`الدرس 4: وسم footer في HTML`,[
[`أحط قسم التذييل بوسم footer وأنشئ قائمة ul وli لـ Access وContact بدءًا من السطر 17`,`اكتب من السطر 17 واترك السطر 16 فارغًا (السطران 8 و16 فارغان).`,CAFE_FULL+`

<footer>
  <ul>
    <li>Access</li>
    <li>Contact</li>
  </ul>
</footer>`]]],
[`الدرس 5: وسم footer في CSS`,[
[`أضف لون خلفية إلى قسم التذييل (Selector: footer، Property: background-color، Value: #1e90ff) بدءًا من السطر 4`,`اترك أول 3 أسطر كما هي واكتب الكود من السطر 4 إلى 6.`,`header {
  background-color: rgb(255, 255, 180);
}
footer {
  background-color: #1e90ff;
}`],
[`غيّر لون نص قسم التذييل (Property: color، Value: #ffffff) في السطر 6`,`اكتب السطر 6 ورحِّل القوس الموجود إلى السطر 7.`,`header {
  background-color: rgb(255, 255, 180);
}
footer {
  background-color: #1e90ff;
  color: #ffffff;
}`]]],
[`مراجعة الفصل 44`,[
[`أدرج صورة باسم الملف "mountain_hut.png" وأضف سمة alt إليها (اختر الكود المناسب)`,``,`<img src="mountain_hut.png" alt="Mountain hut photo">`],
[`اختر الوسم الذي يُحيط بكود قسم رأس الصفحة عند كتابته في HTML`,``,`<header> </header>`],
[`أضف class باسم "mountains" إلى وسم div`,WEB_SAME,`<div class="mountains">
  <h1>World Mountains</h1>
  <ul>
    <li>Mount Everest</li>
    <li>Mount McKinley</li>
    <li>Mount Kilimanjaro</li>
  </ul>
</div>`],
[`اختر الوسم الذي يُحيط بكود قسم التذييل عند كتابته في HTML`,``,`<footer> </footer>`],
[`اختر وصف CSS الأنسب لجعل لون خلفية قسم footer بالكامل بكود اللون #e0a241`,``,`footer {
  background-color: #e0a241;
}`]],``,1]
]},

{id:45,lang:"web",title:"الفصل 45",sub:"مراجعة الفهم",lessons:[
[`الدرس 1: مراجعة الفصلين 43 و44`,[
[`استخدم RGB لتحديد لون نص العنوان (Red: 0، Green: 0، Blue: 255)`,`اكتب السطر الثاني فقط.`,`h1 {
  color: rgb(0, 0, 255);
}`],
[`استخدم كود اللون الستة عشري #0000ff لتحديد لون نص العنوان`,`اكتب السطر الثاني فقط.`,`h1 {
  color: #0000ff;
}`],
[`اجعل الصورة أكثر شفافية عندما يلمسها مؤشّر الفأرة (الصورة لها class باسم "cody")`,`اكتب السطر الثاني فقط.`,`.cody:hover {
  opacity: 0.5;
}`],
[`صفحة ويب لمطعم باستا: حدّد Delicious Pasta Restaurant كرأس للصفحة (header)، وقسم القائمة بوسم div، وContact Us كتذييل (footer)`,`اكتب الوسوم بالترتيب في الأماكن المخصصة: <header> </header> ثم <div> </div> ثم <footer> </footer>.`,`<header>
  <h3>Delicious Pasta Restaurant</h3>
</header>
<div>
  <ul>
    <li>Peperoncino</li>
    <li>Carbonara</li>
  </ul>
</div>
<footer>
  <p>Contact Us</p>
</footer>`]]],
[`اختبار منتصف الطريق`,[
[`اختر اللون الذي يمثّله rgb(255, 255, 0) من الخيارات`,`أصفر`],
[`اختر تمثيل رمز اللون الست عشري للون rgb(255, 255, 0) من الخيارات`,`#ffff00`],
[`اختر المظهر الأنسب عند تحديد opacity: 0 للنص`,`شفاف`],
[`اختر الوسم الذي يُحيط بكود الترويسة عند كتابة ترويسة صفحة ويب في HTML`,``,`<header> </header>`],
[`أضِف فئة باسم "mountains" إلى وسم div`,`عدّل السطر الأول ليصبح هكذا.`,`<div class="mountains">
  <h1>Mountains of the World</h1>
  <ul>
    <li>Mount Everest</li>
    <li>Mount McKinley</li>
    <li>Mount Kilimanjaro</li>
  </ul>
</div>`],
[`اختر الوصف الأنسب في CSS لضبط لون خلفية قسم footer بالكامل بالرمز #e0a241`,``,`footer {
  background-color: #e0a241;
}`],
[`اختر الوسم الذي يُحيط بكود التذييل عند كتابة تذييل صفحة ويب في HTML`,``,`<footer> </footer>`]],``,1]
]}
,
{id:46,title:"الفصل 46",sub:"for...of والعدّ والدوال",lessons:[
[`الدرس 1: مراجعة for...of`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`اطبع الأرقام التي تقبل القسمة على 7 فقط من المصفوفة numList باستخدام for...of (اسم المتغير num)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const numList = [128, 254, 458, 547, 125, 305, 581, 12, 783, 429];
for (const num of numList) {
  if (num % 7 == 0) {
    console.log(num);
  }
}`]]],
[`الدرس 2: عدّ الأرقام الرابحة`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`احسب عدد الأرقام من 0 إلى 999 التي تقبل القسمة على 7 (استخدم المتغير count وعامل الزيادة ++) ثم اطبع العدد`,`امسح الكود أو عدّله ليصبح هكذا.`,`let count = 0;
for (let i = 0; i <= 999; i++) {
  if (i % 7 == 0) {
    count++;
  }
}
console.log(count);`]]],
[`الدرس 3: الدوال`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`ضع الحلقة داخل دالة باسم checkWinningNum لها المعامل numList، ثم استدعها بالمصفوفة`,`امسح الكود أو عدّله ليصبح هكذا.`,`function checkWinningNum(numList) {
  for (const num of numList) {
    if (num % 7 == 0) {
      console.log(num);
    }
  }
}
const winList = [128, 254, 458, 547, 125, 305, 581, 12, 783, 429];
checkWinningNum(winList);`]]],
[`مراجعة الفصل 46`,[
[`اختر ناتج الإخراج: const list = [3, 4, 6, 9]; for (const num of list) { if (num % 3 == 0) { console.log(num); } }`,`3 ثم 6 ثم 9 (كل رقم في سطر)`],
[`اطبع كل قيمة في المصفوفة الثابتة باستخدام for...of`,`امسح الكود أو عدّله ليصبح هكذا.`,`const fruitList = ["apple", "orange", "grape"];
for (const fruit of fruitList) {
  console.log(fruit);
}`],
[`ما الناتج؟ let count = 0; for (let i = 0; i <= 5; i++) { if (i % 2 == 0) { count++; } } console.log(count);`,`3 (القيم الزوجية هي 0 و2 و4)`],
[`عدّل الشرط ليطبع القيم التي تقبل القسمة على 3`,`امسح الكود أو عدّله ليصبح هكذا.`,`const list = [3, 5, 6, 8, 9];
for (const num of list) {
  if (num % 3 == 0) {
    console.log(num);
  }
}`],
[`اختر ناتج الإخراج: function check(list) { for (const num of list) { if (num % 5 == 0) { console.log(num); } } } check([5, 7, 10, 12]);`,`5 ثم 10 (كل رقم في سطر)`]],``,1]
]}
,{id:47,title:"الفصل 47",sub:"switch والنفي !",lessons:[
[`الدرس 1: جملة switch`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`اطبع رسالة الجائزة المناسبة لكل رقم من قيمة target باستخدام switch (حالات منفصلة) مع default`,`امسح الكود أو عدّله ليصبح هكذا.`,`let target = 1;
switch (target) {
  case 1:
    console.log("Candy Assortment Get");
    break;
  case 4:
    console.log("Video game Get");
    break;
  default:
    console.log("Sticker Get");
}`],
[`اجمع الحالات التي لها نفس الناتج معًا (الرقمان 4 و8 للعبة، والرقمان 1 و7 للحلوى)`,`امسح الكود أو عدّله ليصبح هكذا.`,`let target = 1;
switch (target) {
  case 4:
  case 8:
    console.log("Video game Get");
    break;
  case 1:
  case 7:
    console.log("Candy Assortment Get");
    break;
  default:
    console.log("Sticker Get");
}`]]],
[`الدرس 2: switch والحلقات والباقي %`,[
[`اطبع مجموعة الطالب بحسب رقمه باستخدام switch`,`امسح الكود أو عدّله ليصبح هكذا.`,`const student = 3;
switch (student) {
  case 1:
    console.log("Group A");
    break;
  case 2:
    console.log("Group B");
    break;
  case 3:
    console.log("Group C");
    break;
  default:
    console.log("Group D");
}`],
[`وزّع الطلاب من 1 إلى 30 على المجموعات بحسب باقي القسمة على 4`,`امسح الكود أو عدّله ليصبح هكذا.`,`for (let student = 1; student <= 30; student++) {
  switch (student % 4) {
    case 1:
      console.log(student + ": Group A");
      break;
    case 2:
      console.log(student + ": Group B");
      break;
    case 3:
      console.log(student + ": Group C");
      break;
    default:
      console.log(student + ": Group D");
  }
}`]]],
[`الدرس 3: نفي الشرط`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`اطبع "It's sold out" عندما لا يكون المقعد available (استخدم عامل النفي !)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const seat = "sold out";
if (!(seat == "available")) {
  console.log("It's sold out");
}`]]],
[`مراجعة الفصل 47`,[
[`اطبع الملابس المناسبة للطقس باستخدام switch (حالات منفصلة)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const weather = "rainy";
switch (weather) {
  case "sunny":
    console.log("Wear a cap");
    break;
  case "rainy":
    console.log("Take an umbrella");
    break;
  default:
    console.log("Wear a jacket");
}`],
[`اجمع الحالات المتشابهة في switch (rainy و snowy لهما نفس الناتج)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const weather = "snowy";
switch (weather) {
  case "rainy":
  case "snowy":
    console.log("Take a coat");
    break;
  default:
    console.log("Wear a cap");
}`],
[`اختر ناتج الإخراج: for (let i = 1; i <= 4; i++) { switch (i % 2) { case 0: console.log("even"); break; default: console.log("odd"); } }`,`odd ثم even ثم odd ثم even (كل كلمة في سطر)`],
[`وزّع الطلاب من 1 إلى 10 على مجموعتين بحسب الباقي (أكمل الحلقة)`,`امسح الكود أو عدّله ليصبح هكذا.`,`for (let student = 1; student <= 10; student++) {
  switch (student % 2) {
    case 0:
      console.log(student + ": Group A");
      break;
    default:
      console.log(student + ": Group B");
  }
}`],
[`اختر ناتج الإخراج: const seat = "available"; if (!(seat == "available")) { console.log("sold out"); }`,`لا يُطبع شيء (الشرط غير متحقق)`]],``,1]
]}
,{id:48,title:"الفصل 48",sub:"مراجعة الفصلين 46 و47",lessons:[
[`الدرس 1: مراجعة الفصلين 46 و47`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`اطبع الأرقام التي تقبل القسمة على 7 من المصفوفة الثابتة numList (اسم المتغير num)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const numList = [128, 254, 458, 547, 125, 305, 581, 12, 783, 429];
for (const num of numList) {
  if (num % 7 == 0) {
    console.log(num);
  }
}`],
[`احسب عدد الأرقام الرابحة من 0 إلى 999 (القابلة للقسمة على 7) واطبعه`,`امسح الكود أو عدّله ليصبح هكذا.`,`let count = 0;
for (let i = 0; i <= 999; i++) {
  if (i % 7 == 0) {
    count++;
  }
}
console.log(count);`],
[`أنشئ الدالة checkWinningNum بالمعامل numList لطباعة القيم القابلة للقسمة على 7`,`امسح الكود أو عدّله ليصبح هكذا.`,`function checkWinningNum(numList) {
  for (const num of numList) {
    if (num % 7 == 0) {
      console.log(num);
    }
  }
}
checkWinningNum([128, 254, 458, 547, 125, 305, 581, 12, 783, 429]);`],
[`اطبع الجائزة بحسب target (قيمته 1): للرقمين 4 و8 "Video game Get"، وللرقمين 1 و7 "Candy Assortment Get"، وغير ذلك "Sticker Get"`,`امسح الكود أو عدّله ليصبح هكذا.`,`let target = 1;
switch (target) {
  case 4:
  case 8:
    console.log("Video game Get");
    break;
  case 1:
  case 7:
    console.log("Candy Assortment Get");
    break;
  default:
    console.log("Sticker Get");
}`],
[`أعد كتابة الشرط باستخدام ! لطباعة "It's sold out" عندما لا يكون المقعد available`,`امسح الكود أو عدّله ليصبح هكذا.`,`const seat = "sold out";
if (!(seat == "available")) {
  console.log("It's sold out");
}`]],`مراجعة شاملة للفصلين 46 و47.`],
[`اختبار منتصف الطريق`,[
[`اختر الحلقة المستخدمة لتمرير كل عنصر في المصفوفة بالترتيب`,``,`for (const item of list) {
  process;
}`],
[`اختر ناتج الإخراج: const list = [2, 7, 14, 20]; for (const num of list) { if (num % 7 == 0) { console.log(num); } }`,`7 ثم 14 (كل رقم في سطر)`],
[`اختر الكلمة المفتاحية التي تنهي الحالة في switch وتمنع الانتقال إلى الحالة التالية`,`break`],
[`أكمل البرنامج لطباعة عدد الأرقام القابلة للقسمة على 3 من 0 إلى 99`,`امسح الكود أو عدّله ليصبح هكذا.`,`let count = 0;
for (let i = 0; i <= 99; i++) {
  if (i % 3 == 0) {
    count++;
  }
}
console.log(count);`],
[`وزّع الطلاب من 1 إلى 6 على ثلاث مجموعات بحسب باقي القسمة على 3`,`امسح الكود أو عدّله ليصبح هكذا.`,`for (let student = 1; student <= 6; student++) {
  switch (student % 3) {
    case 1:
      console.log(student + ": Group A");
      break;
    case 2:
      console.log(student + ": Group B");
      break;
    default:
      console.log(student + ": Group C");
  }
}`]],``,1]
]}
,{id:49,title:"الفصل 49",sub:"while و if و continue",lessons:[
[`الدرس 1: حلقة while`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`أضف 6 كم إلى distance في كل مرة حتى تتجاوز المسافة 100 كم، واطبع المسافة بعد كل إضافة`,`امسح الكود أو عدّله ليصبح هكذا.`,`let distance = 0;
while (distance < 100) {
  distance += 6;
  console.log(distance);
}`]]],
[`الدرس 2: while مع if`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`ابدأ بمبلغ 20000 واحسب عدد السنوات اللازمة ليتجاوز 50000 (يتضاعف المبلغ بنسبة 1.2 كل سنتين: تحقق من أن السنة زوجية بـ if)`,`امسح الكود أو عدّله ليصبح هكذا.`,`let money = 20000;
let year = 0;
while (money <= 50000) {
  year++;
  if (year % 2 == 0) {
    money = money * 1.2;
  }
}
console.log(year);`]]],
[`الدرس 3: continue`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`احسب عدد بطولات كأس العالم من 2026 إلى 2100 (كل 4 سنوات)`,`امسح الكود أو عدّله ليصبح هكذا.`,`let year = 2026;
let count = 0;
while (year <= 2100) {
  count++;
  year += 4;
}
console.log(count);`],
[`تخطَّ عام 2050 باستخدام continue (لا يُحتسب ضمن العدد)`,`امسح الكود أو عدّله ليصبح هكذا.`,`let year = 2026;
let count = 0;
while (year <= 2100) {
  if (year == 2050) {
    year += 4;
    continue;
  }
  count++;
  year += 4;
}
console.log(count);`]]],
[`مراجعة الفصل 49`,[
[`أضف 7 إلى num حتى يصل إلى 100 أو يتجاوزه، ثم اطبع عدد مرات التكرار`,`امسح الكود أو عدّله ليصبح هكذا.`,`let num = 0;
let count = 0;
while (num < 100) {
  num += 7;
  count++;
}
console.log(count);`],
[`اطبع سنوات الأولمبياد (القابلة للقسمة على 4) من 2024 إلى 2200`,`امسح الكود أو عدّله ليصبح هكذا.`,`let year = 2024;
while (year <= 2200) {
  if (year % 4 == 0) {
    console.log(year);
  }
  year++;
}`],
[`اختر ناتج الإخراج: let i = 0; let count = 0; while (i < 5) { i++; if (i == 3) { continue; } count++; } console.log(count);`,`4 (يُتخطى العدّ عندما تكون i تساوي 3)`],
[`اختر الوصف الصحيح لعمل continue داخل الحلقة`,`تتخطى بقية الدورة الحالية وتنتقل إلى الدورة التالية`]],``,1]
]}
,{id:50,title:"الفصل 50",sub:"المصفوفات والحلقات",lessons:[
[`الدرس 1: المصفوفات`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`احسب عدد الخطوات يوم الاثنين (الفهرس 0) ويوم السبت (الفهرس 5) بقسمة المسافة على 0.7 واطبعهما`,`امسح الكود أو عدّله ليصبح هكذا.`,`const distanceList = [2870, 2100, 3500, 1470, 4200, 4900, 2450];
console.log(distanceList[0] / 0.7);
console.log(distanceList[5] / 0.7);`]]],
[`الدرس 2: for...of مع المصفوفات`,[
[`اطبع عدد الخطوات لكل يوم باستخدام for...of (اسم المتغير distance)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const distanceList = [2870, 2100, 3500, 1470, 4200, 4900, 2450];
for (const distance of distanceList) {
  console.log(distance / 0.7);
}`]]],
[`الدرس 3: طول المصفوفة length`,[
[`اجمع المسافات في المتغير sum واطبع المجموع`,`امسح الكود أو عدّله ليصبح هكذا.`,`const distanceList = [2870, 2100, 3500, 1470, 4200, 4900, 2450];
let sum = 0;
for (const distance of distanceList) {
  sum += distance;
}
console.log(sum);`],
[`اطبع متوسط المسافات بقسمة sum على طول المصفوفة length`,`امسح الكود أو عدّله ليصبح هكذا.`,`const distanceList = [2870, 2100, 3500, 1470, 4200, 4900, 2450];
let sum = 0;
for (const distance of distanceList) {
  sum += distance;
}
console.log(sum);
console.log(sum / distanceList.length);`]]],
[`مراجعة الفصل 50`,[
[`اختر ناتج الإخراج: const scoreList = [70, 85, 90]; console.log(scoreList[1]);`,`85`],
[`أكمل رأس حلقة for...of لتمرير كل عنصر في scoreList باسم score`,`اكتب في المكان المخصص: const score of scoreList`,`const scoreList = [70, 85, 90];
for (const score of scoreList) {
  console.log(score);
}`],
[`ما قيمة a.length إذا كانت a = [2, 0, 0, 1]؟`,`4`],
[`اطبع متوسط درجات scoreList باستخدام length حتى يبقى الحل صحيحًا إذا تغيّر عدد العناصر`,`امسح الكود أو عدّله ليصبح هكذا.`,`const scoreList = [70, 85, 90];
let sum = 0;
for (const score of scoreList) {
  sum += score;
}
console.log(sum / scoreList.length);`]],``,1]
]}
,
{id:51,title:"الفصل 51",sub:"مراجعة الفصلين 49 و50",lessons:[
[`الدرس 1: مراجعة الفصلين 49 و50`,[
[`أضف 6 كم إلى distance في كل مرة طالما أنها أقل من 100، واطبع المسافة بعد كل إضافة`,`امسح الكود أو عدّله ليصبح هكذا.`,`let distance = 0;
while (distance < 100) {
  distance = distance + 6;
  console.log(distance);
}`],
[`ابدأ بمبلغ 20000 واحسب عدد السنوات اللازمة ليتجاوز 50000 (يتضاعف بنسبة 1.2 كل سنتين)`,`امسح الكود أو عدّله ليصبح هكذا.`,`let money = 20000;
let year = 0;
while (money <= 50000) {
  year++;
  if (year % 2 == 0) {
    money = money * 1.2;
  }
}
console.log(year);`],
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`احسب عدد خطوات يوم السبت (الفهرس 5) بقسمة المسافة على 0.7 في الثابت stepCount`,`امسح الكود أو عدّله ليصبح هكذا.`,`const distanceList = [2870, 2100, 3500, 1470, 4200, 4900, 2450];
const stepCount = distanceList[5] / 0.7;
console.log(stepCount);`],
[`اطبع عدد الخطوات لكل أيام الأسبوع باستخدام for...of (اسم المتغير distance)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const distanceList = [2870, 2100, 3500, 1470, 4200, 4900, 2450];
for (const distance of distanceList) {
  const stepCount = distance / 0.7;
  console.log(stepCount);
}`]]],
[`اختبار منتصف الطريق`,[
[`اطبع كل سنة أولمبية (تقبل القسمة على 4) من 2024 إلى 2200`,`امسح الكود أو عدّله ليصبح هكذا.`,`let year = 2024;
while (year <= 2200) {
  if (year % 4 == 0) {
    console.log(year + " is an Olympic year");
  }
  year++;
}`],
[`اختر ناتج الإخراج: let num = 0; while (num < 5) { if (num == 2) { num++; continue; } console.log("Count " + num); num++; }`,`Count 0 ثم Count 1 ثم Count 3 ثم Count 4 (كل جملة في سطر)`],
[`عندما تكون a تساوي 5 زِد a فقط وتخطَّ تحديث b باستخدام continue، وإلا زِد كليهما ثم اطبعهما`,`امسح الكود أو عدّله ليصبح هكذا.`,`let a = 0;
let b = 0;
while (a < 10) {
  if (a == 5) {
    a++;
    continue;
  }
  a++;
  b++;
}
console.log(a);
console.log(b);`],
[`اجمع قيم scoreList في المتغير sum باستخدام for...of (اسم المتغير score)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const scoreList = [40, 55, 67, 52, 120];
let sum = 0;
for (const score of scoreList) {
  sum += score;
}
console.log(sum);`],
[`اطبع متوسط scoreList باستخدام length`,`امسح الكود أو عدّله ليصبح هكذا.`,`const scoreList = [40, 55, 67, 52, 120];
let sum = 0;
for (const score of scoreList) {
  sum += score;
}
console.log(sum / scoreList.length);`]],``,1]
]}
,{id:52,title:"الفصل 52",sub:"includes و indexOf و sort و reverse",lessons:[
[`الدرس 1: التحقق من وجود قيمة (includes)`,[
[`تحقق هل "dag" موجودة في wordList واطبع النتيجة`,`امسح الكود أو عدّله ليصبح هكذا.`,`const wordList = ["dog", "dog", "dog", "dog", "dog", "dag", "dog"];
console.log(wordList.includes("dag"));`],
[`تحقق هل "bell" موجودة في wordList واطبع النتيجة`,`امسح الكود أو عدّله ليصبح هكذا.`,`const wordList = ["ball", "ball", "ball", "ball", "ball", "ball", "ball"];
console.log(wordList.includes("bell"));`]]],
[`الدرس 2: ترتيب القيمة في المصفوفة (indexOf)`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`اطبع فهرس "sun" في wordList`,`امسح الكود أو عدّله ليصبح هكذا.`,`const wordList = ["sun", "moon", "star", "cloud"];
console.log(wordList.indexOf("sun"));`],
[`اطبع فهرس "pen" في wordList (غير موجودة)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const wordList = ["pan", "pan", "pan", "pan"];
console.log(wordList.indexOf("pen"));`]]],
[`الدرس 3: ترتيب القيم (sort)`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`رتّب nameList أبجديًا ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const nameList = ["Alex", "Emma", "Oliver", "Sophia"];
nameList.sort();
console.log(nameList);`],
[`رتّب nameList أبجديًا ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const nameList = ["Mia", "Noah", "Liam", "David", "Grace"];
nameList.sort();
console.log(nameList);`]]],
[`الدرس 4: عكس القيم (reverse)`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`اعكس ترتيب rankingList ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const rankingList = ["James", "Luna", "Ethan", "Ava", "Rick"];
rankingList.reverse();
console.log(rankingList);`],
[`اعكس ترتيب rankingList ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const rankingList = ["Mason", "Isabella", "William", "Charlotte", "Rick"];
rankingList.reverse();
console.log(rankingList);`]]],
[`مراجعة الفصل 52`,[
[`اختر ناتج الإخراج: const score = [80, 55, 90]; console.log(score.includes(67));`,`false`],
[`اختر ناتج الإخراج: const characterList = ["a", "n", "p"]; console.log(characterList.indexOf("n"));`,`1`],
[`رتّب fruitList أبجديًا`,`امسح الكود أو عدّله ليصبح هكذا.`,`const fruitList = ["Apple", "Lemon", "Orange", "Grape"];
fruitList.sort();
console.log(fruitList);`],
[`اعكس ترتيب قيم numList`,`امسح الكود أو عدّله ليصبح هكذا.`,`const numList = [1, 2, 3, 4, 5];
numList.reverse();
console.log(numList);`],
[`تحقق هل "Wilson" موجود في guestList`,`امسح الكود أو عدّله ليصبح هكذا.`,`const guestList = ["Johnson", "Smith", "Brown", "Davis", "Wilson"];
console.log(guestList.includes("Wilson"));`],
[`رتّب guestList أبجديًا ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const guestList = ["Johnson", "Smith", "Brown", "Davis", "Wilson"];
guestList.sort();
console.log(guestList);`]],``,1]
]}
,{id:53,title:"الفصل 53",sub:"push و pop و shift و unshift",lessons:[
[`الدرس 1: الإضافة في النهاية (push)`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`أضف "mayo" إلى نهاية المصفوفة ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const sandwichIngredients = ["bread", "lettuce", "tomato", "cheese"];
sandwichIngredients.push("mayo");
console.log(sandwichIngredients);`],
[`أضف "mayo" و"bacon" معًا إلى نهاية المصفوفة ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const sandwichIngredients = ["bread", "lettuce", "tomato", "cheese"];
sandwichIngredients.push("mayo", "bacon");
console.log(sandwichIngredients);`]]],
[`الدرس 2: حذف آخر قيمة (pop)`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`احذف آخر قيمة من المصفوفة ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const sandwichIngredients = ["bread", "lettuce", "tomato", "cheese", "mayo", "bacon", "cupcakes"];
sandwichIngredients.pop();
console.log(sandwichIngredients);`]]],
[`الدرس 3: حذف أول قيمة (shift)`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`احذف أول قيمة من burgerIngredients ثم اطبع العنوان والمصفوفة`,`امسح الكود أو عدّله ليصبح هكذا.`,`const burgerIngredients = ["lettuce", "tomato", "cheese", "meat"];
burgerIngredients.shift();
console.log("Cody's burger ingredients");
console.log(burgerIngredients);`]]],
[`الدرس 4: الإضافة في البداية (unshift)`,[
[`انقر على «تشغيل الكود» دون تعديل البرنامج`,WEB_RUN],
[`احذف آخر قيمة من rankingList ثم أضف "Rick" إلى بدايتها واطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const rankingList = ["Lily", "Noah", "Mason", "Ethan"];
rankingList.pop();
rankingList.unshift("Rick");
console.log(rankingList);`],
[`أضف "Rick" و"Cody" معًا إلى بداية rankingList ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const rankingList = ["Lily", "Noah", "Mason"];
rankingList.unshift("Rick", "Cody");
console.log(rankingList);`]]],
[`مراجعة الفصل 53`,[
[`أضف "dog" إلى نهاية letterList`,`امسح الكود أو عدّله ليصبح هكذا.`,`const letterList = ["cat", "bird"];
letterList.push("dog");
console.log(letterList);`],
[`احذف آخر قيمة من letterList`,`امسح الكود أو عدّله ليصبح هكذا.`,`const letterList = ["cat", "bird", "dog"];
letterList.pop();
console.log(letterList);`],
[`اختر ناتج الإخراج: const list = ["dog", "cat", "bird"]; list.shift(); console.log(list);`,`cat,bird (أي ["cat", "bird"])`],
[`أضف "diary" إلى بداية letterList`,`امسح الكود أو عدّله ليصبح هكذا.`,`const letterList = ["cat", "bird"];
letterList.unshift("diary");
console.log(letterList);`],
[`اطبع الكلمة program من letterList (احذف الحرف الأخير ثم اجمع الحروف)`,`امسح الكود أو عدّله ليصبح هكذا.`,`const letterList = ["p", "r", "o", "g", "r", "a", "m", "y"];
letterList.pop();
console.log(letterList.join(""));`],
[`أضف "green" في الفهرس 0 من colorList`,`امسح الكود أو عدّله ليصبح هكذا.`,`const colorList = ["red", "blue", "yellow"];
colorList.unshift("green");
console.log(colorList);`]],``,1]
]}
,{id:54,title:"الفصل 54",sub:"مراجعة الفصلين 52 و53",lessons:[
[`الدرس 1: مراجعة الفصلين 52 و53`,[
[`تحقق هل "bell" موجودة في wordList واطبع النتيجة`,`اكتب في السطر الثالث فقط.`,`const wordList = ["ball", "ball", "ball", "ball", "bell", "ball", "ball"];
const result = wordList.includes("bell");
console.log(result);`],
[`اطبع فهرس "pen" في wordList`,`اكتب في السطر الثالث فقط.`,`const wordList = ["pan", "pan", "pen", "pan", "pan"];
const index = wordList.indexOf("pen");
console.log(index);`],
[`رتّب nameList أبجديًا ثم اطبعها`,`اكتب في السطر الثالث فقط.`,`const nameList = ["Mia", "Noah", "Liam", "David", "Grace"];
nameList.sort();
console.log(nameList);`],
[`اعكس ترتيب rankingList ثم اطبعها`,`اكتب في السطر الثالث فقط.`,`const rankingList = ["James", "Luna", "Ethan", "Ava", "Rick"];
rankingList.reverse();
console.log(rankingList);`],
[`أضف "mayo" إلى نهاية sandwichIngredients ثم اطبع العنوان والمصفوفة`,`اكتب في السطر الثالث فقط.`,`const sandwichIngredients = ["bread", "lettuce", "tomato", "cheese"];
sandwichIngredients.push("mayo");
console.log("Sandwich ingredients");
console.log(sandwichIngredients);`],
[`احذف آخر مكوّن من ingredientsList ثم اطبع العنوان والمصفوفة`,`اكتب في السطر الثالث فقط.`,`const ingredientsList = ["pasta", "tomatoes", "garlic", "cheese", "ice cream"];
ingredientsList.pop();
console.log("Pasta ingredients");
console.log(ingredientsList);`],
[`احذف أول مكوّن من burgerIngredients ثم اطبع العنوان والمصفوفة`,`اكتب في السطر الثالث فقط.`,`const burgerIngredients = ["cucumber", "sauce", "shrimp", "mayo"];
burgerIngredients.shift();
console.log("Burger ingredients");
console.log(burgerIngredients);`],
[`أضف "mushroom" إلى بداية burgerIngredients ثم اطبع العنوان والمصفوفة`,`اكتب في السطر الثالث فقط.`,`const burgerIngredients = ["cucumber", "sauce", "shrimp", "mayo"];
burgerIngredients.unshift("mushroom");
console.log("Burger ingredients");
console.log(burgerIngredients);`]]],
[`اختبار منتصف الطريق`,[
[`اختر الطريقة التي تعكس ترتيب قيم numList`,``,`numList.reverse()`],
[`اختر ناتج الإخراج: const letterList = ["o", "g", "o", "o", "o", "o"]; console.log(letterList.indexOf("g"));`,`1`],
[`احذف أول فاكهة ثم اطبع المصفوفة`,`امسح الكود أو عدّله ليصبح هكذا.`,`const fruitList = ["apple", "orange", "banana"];
fruitList.shift();
console.log(fruitList);`],
[`اختر الطريقة التي تضيف "apple" إلى نهاية المصفوفة`,``,`list.push("apple")`],
[`تحقق هل "Wilson" موجود في guestList`,`امسح الكود أو عدّله ليصبح هكذا.`,`const guestList = ["Johnson", "Smith", "Brown", "Davis", "Wilson"];
console.log(guestList.includes("Wilson"));`],
[`رتّب guestList أبجديًا ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const guestList = ["Johnson", "Smith", "Brown", "Davis", "Wilson"];
guestList.sort();
console.log(guestList);`],
[`اطبع الكلمة program من letterList`,`امسح الكود أو عدّله ليصبح هكذا.`,`const letterList = ["p", "r", "o", "g", "r", "a", "m", "y"];
letterList.pop();
console.log(letterList.join(""));`],
[`أضف "green" في بداية colorList ثم اطبعها`,`امسح الكود أو عدّله ليصبح هكذا.`,`const colorList = ["red", "blue", "yellow"];
colorList.unshift("green");
console.log(colorList);`]],``,1]
]}
];
