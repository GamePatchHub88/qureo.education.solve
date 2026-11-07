/* ===== الصف الثاني الثانوي — جافا سكربت (JavaScript) =====
   الفصول 43 إلى 45 (HTML / CSS). نفس صيغة بقية الأقسام: [السؤال، الإجابة النصية، الكود]
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
];
