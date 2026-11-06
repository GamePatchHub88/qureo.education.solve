const log=t=>`console.log(${t});`;
const RUN="ثم اضغط على «تشغيل الكود».";
const DATA=[
{id:1,title:"الفصل 1",sub:"مقدمة",lessons:[
["الدرس 1: ما هي البرمجة؟ (١)",[
["انضم إلى ريكي في محادثة! أجب عن أسئلة ريكي. لنلعب على الكمبيوتر لاحقًا!","أريد أن ألعب به!"]],"علامة صح للانتقال للدرس التالي."],
["الدرس 2: ما هي البرمجة؟ (٢)",[
["كم عدد لغات البرمجة الموجودة في العالم؟","أكثر من 100 نوع"]],"علّم على النقاط الثلاث ثم «فهمت»."],
["الدرس 3: كيفية استخدام المحرر",[
["أدخل نفس البرنامج: console.log(\"Hello\");",RUN,log('"Hello"')],
["أدخل نفس البرنامج: console.log(\"Good morning\");",RUN,log('"Good morning"')]]],
["الدرس 4: وحدة التحكم",[
["ماذا تُسمى الشاشة السوداء التي تكتب فيها برنامجك؟","المحرر"],
["أدخل نفس البرنامج: console.log(\"Good evening\");",RUN,log('"Good evening"')],
["اعرض \"Good night\" في وحدة التحكم",RUN,log('"Good night"')],
["ابحث عن الأخطاء في برنامجك ثم اضغط «تشغيل الكود»","اضغط على تشغيل الكود مباشرة."],
["اعرض \"Good luck\" في وحدة التحكم",RUN,log('"Good luck"')]]],
["الدرس 5: تعليق",[
["انقر «تشغيل الكود» دون تعديل البرنامج","اضغط على تشغيل الكود."],
["عدّل السطر الأول ليصبح تعليقًا",RUN,'//When executed, the text is output to the console.\n'+log('"Hello"')]]],
["الدرس 6: التعليق خارج البرنامج",[
["ضع تعليقًا بالجملة \"Greetings for the day\"","","//Greetings for the day.\n"+log('"Good morning"')+"\n"+log('"Hello"')+"\n"+log('"Good evening"')],
["لنعدّل السطر الثاني: //console.log(\"Apple\");",RUN,log('"Eggs"')+'\n//console.log("Apple");\n'+log('"Milk"')],
["علّق البرنامج الذي يعرض \"Fish\"",RUN,log('"Lion"')+'\n//console.log("Fish");\n'+log('"Elephant"')+"\n"+log('"Giraffe"')],
["هل يبدو كل شيء جيدًا حتى الآن؟","نعم، ممتاز."]]],
["مراجعة الفصل 1",[
["اختر البرنامج الصحيح لعرض \"Hello\"","",log('"Hello"')],
["اعرض \"Good morning\" في وحدة التحكم","",log('"Good morning"')],
["اعرض \"Programming\" في وحدة التحكم","",log('"Programming"')],
["اعرض \"Hello\" في وحدة التحكم","",log('"Hello"')],
["اختر الطريقة الصحيحة لكتابة التعليق","","//Write your comments here."],
["علّق البرنامج ليكون الناتج: Hello. My name is Cody.","",log('"Hello."')+"\n"+log('"My name is"')+'\n//console.log("Rick.");\n'+log('"Cody."')]],"",1]
]},
{id:2,title:"الفصل 2",sub:"الحسابات والنصوص",lessons:[
["الدرس 1: كيف نعرض في وحدة التحكم",[
["هل تتذكر البرنامج الذي يطبع الأحرف في وحدة التحكم؟","بالطبع!"],
["اعرض \"Let's calculate.\"",RUN,log('"Let\'s calculate."')],
["أدخل نفس البرنامج: console.log(\"1+1\");",RUN,log('"1+1"')],
["عدّل البرنامج ليصبح: console.log(1+1);",RUN,log("1+1")],
["احسب 1400+3600 واعرض النتيجة",RUN,log("1400+3600")]]],
["الدرس 2: طرق الحساب",[
["احسب 432+345","",log("432+345")],
["احسب 100-50","",log("100-50")],
["احسب 5×6","",log("5*6")],
["احسب 10÷5","",log("10/5")],
["احسب 10000000000 × 10000000000","",log("10000000000*10000000000")]],"الجمع + والطرح - والضرب * والقسمة /"],
["الدرس 3: التجميع (١)",[
["انقر «تشغيل الكود» دون تعديل البرنامج","اضغط على تشغيل الكود."],
["اكتب علامتي + في الأماكن المحددة",RUN,'console.log("Set of 2 coffees " + (250 * 2) + " codycoins");'],
["اكتب (250 * 2) في المكان المحدد",RUN,'console.log("Set of 2 coffees " + (250 * 2) + " codycoins");'],
["انقر «تشغيل الكود» دون تعديل البرنامج","اضغط على تشغيل الكود."]]],
["الدرس 4: التجميع (٢)",[
["أكمل السطر الثاني للقهوة (3 أكواب)","اكتب في المكان المحدد: + (250 * 3) +"],
["أكمل البرنامج: One muffin","اكتب في المكان المحدد: + (320 * 1) +"],
["اعرض \"Two muffins 640 codycoins\" مع حساب 320 × 2","اكتب في المكان المحدد: \" + (320 * 2) + \""],
["هل تستمتع حتى الآن؟","إنه ممتع جداً!"]]],
["مراجعة الفصل 2",[
["اختر البرنامج الصحيح لحساب 50+100","",log("50 + 100")],
["اختر رمز القسمة الصحيح","","/"],
["احسب 19+40","",log("19+40")],
["احسب 7-2","",log("7-2")],
["احسب 15 ÷ 5","",log("15/5")],
["اختر البرنامج الصحيح لعرض: Today is the 17th. 7 days ago was the 10th.","",'console.log("Today is the 17th.7 days ago was the " + (17 - 7) + "th.");'],
["احسب 2*5 واعرض \"The answer is 10.\"","",'console.log("The answer is " + (2*5) + ".");']],"",1]
]},
{id:3,title:"الفصل 3",sub:"المتغيرات",lessons:[
["الدرس 1: الإعلانات والإسنادات",[
["اعرض قيمة المتغيّر fish. اكتب في السطر الخامس",RUN,log("fish")],
["اعرض \"fish\" نصًّا. اكتب في السطر الخامس",RUN,log('"fish"')]],"يمكن تغيير المتغيّرات إلى مجموعة متنوعة من القيم."],
["الدرس 2: تدريب على المتغيّرات",[
["أعلن fish وأسند 0 ثم أضف 8 ثم 12 واعرضها","","let fish;\nfish = 0;\nfish = fish + 8;\nfish = fish + 12;\nconsole.log(fish);"],
["أعلن apple وأسند 0 ثم أضف 5 ثم 8 واعرضها","","let apple;\napple = 0;\napple = apple + 5;\napple = apple + 8;\nconsole.log(apple);"],
["أعلن allowance وأسند 700 ثم 1500 واعرضها","","let allowance;\nallowance = 700;\nallowance = allowance + 1500;\nconsole.log(allowance);"]],"علّم على النقاط الثلاث ثم «فهمت»."],
["مراجعة الفصل 3",[
["اختر البرنامج الصحيح لإعلان المتغيّر score","","let score;"],
["اعرض قيمة score (تم إعلانه وإسناده)","",log("score")],
["أعلن المتغيّر number ثم اضغط Answer","","let number;"],
["السطر الثاني: أسند 100 إلى number","","let number;\nnumber = 100;"],
["السطر الثالث: اعرض قيمة number","","let number;\nnumber = 100;\n"+log("number")],
["أضف 10 إلى number ثم اعرضها","","let number;\nnumber = 3;\nnumber = number + 10;\nconsole.log(number);"]],"",1]
]},
{id:4,title:"الفصل 4",sub:"مراجعة الفهم",lessons:[
["الدرس 1: مراجعة من 1 إلى 3",[
["أنشئ برنامجك: اكتب الجملة Write the program on the line below. كتعليق، ثم اطبع \"Good evening\" في الـ console","اكتب الكود التالي ثم شغّله.",`//Write the program on the line below.
console.log("Good evening");`],
["اطبع \"Bread and coffee for 350 codycoins\" على أن يحسب الكمبيوتر الرقم 350 كـ 200+150","اكتب في المكان الفارغ: + (200 + 150) +",`console.log("Bread and coffee for " + (200 + 150) + " codycoins");`],
["أعلن المتغيّر num وأسند له 2، ثم أسند num مضافًا إليه 8، ثم اطبع قيمته","",`let num;
num = 2;
num = num + 8;
console.log(num);`]],"إذا لم تكن متأكدًا، راجع الدروس السابقة. ضع علامة صح للانتقال إلى اختبار منتصف الطريق."],
["اختبار منتصف الطريق",[
["اختر البرنامج الصحيح لإخراج \"Hello\" على الـ console","",log('"Hello"')],
["لإخراج \"Hello\" على الـ console","",log('"Hello"')],
["غيّر \"Leave this text.\" إلى تعليق (يُخرج البرنامج: Make the first line a comment.)","",`//Leave this text.
console.log("Make the first line a comment.");`],
["اختر البرنامج الصحيح الذي يحسب 5+7 ويُخرج النتيجة","",log("5 + 7")],
["اختر الرمز الصحيح للضرب","*"],
["دع الحاسوب يحسب 3*5 ويُخرج \"The answer is 15.\"","",'console.log("The answer is " + ( 3 * 5) + ".");'],
["اختر التصريح الصحيح (declaration) للمتغير number","","let number;"],
["صرّح عن المتغيّر num، أسند له 5، ثم أخرج قيمته","",`let num;
num = 5;
console.log(num);`]],"",1]
]},
{id:5,title:"الفصل 5",sub:"جملة if",lessons:[
["الدرس 1: كيفية كتابة المتغيّرات",[
["صرّح عن المتغيّر fish وأسند له 0 ثم اطبع قيمته","",`let fish;
fish = 0;
console.log(fish);`],
["أدخل البرنامج: let fish = 0; console.log(fish);","",`let fish = 0;
console.log(fish);`],
["صرّح عن apple وأسند له 0، ثم أضف 10، ثم اطبعه (ثلاثة أسطر فقط)","",`let apple = 0;
apple = apple + 10;
console.log(apple);`]],"للتصريح عن متغيّر وإسناد قيمة له في سطر واحد اكتب: let variable = value;"],
["الدرس 2: جملة if",[
["(أجب عن سؤال ريكي!) أي المواد واثق فيها؟","العلوم"],
["انقر «تشغيل الكود» بدون تعديل البرنامج","اضغط على تشغيل الكود."],
["أسند 80 للمتغيّر science","اكتب في المكان الفارغ: 80"]],"التفرّع الشرطي هو أن تفعل شيئًا عندما يتحقق شرط معيّن: «إذا حدث ~ فافعل ____»."],
["الدرس 3: تدريب على if statement",[
["أخرج \"Increased allowance!\" إذا كان science يساوي 100 (أكمل الشرط)","اكتب في المكان الفارغ: if (science == 100)",`if (science == 100){console.log("Increased allowance!");}`],
["أكمل جسم الجملة الشرطية","اكتب في المكان الفارغ: {console.log(\"Increased allowance!\");}",`if (science == 100){console.log("Increased allowance!");}`],
["أدخل البرنامج كما هو","",`let science = 100;
if (science == 100){console.log("Increased allowance!");}`],
["صرّح بالمتغيّر science وأسند له 100، وإذا كان يساوي 100 أخرج \"Increased allowance!\"","",`let science = 100;
if (science == 100){console.log("Increased allowance!");}`],
["صرّح بالمتغيّر math وأسند له 100، وإذا كان يساوي 100 أخرج \"Get a reward\"","",`let math = 100;
if (math == 100){console.log("Get a reward");}`]],"تحقّق من البنود واضغط «فهمت»."],
["الدرس 4: كيفية عمل if statements",[
["انقر «تشغيل الكود» بدون تعديل البرنامج","اضغط على تشغيل الكود."],
["انقر «تشغيل الكود» بدون تعديل البرنامج","اضغط على تشغيل الكود."],
["هل سيُخرج البرنامج التالي true أم false؟ let math = 80; console.log(math == 80);","true"]],"تحقّق من البنود واضغط «فهمت»."],
["مراجعة الفصل 5",[
["سؤال 1","",`let num = 5;
console.log(num);`],
["سؤال 2","","if (conditional){processing}"],
["سؤال 3","","num == 50"],
["سؤال 4","",`let num = 100;
if (num == 100){console.log("Correct")};`],
["سؤال 5","false"]],"",1]
]},
{id:6,title:"الفصل 6",sub:"جمل if – else",lessons:[
["الدرس 1: جملة if-else",[
["(أجب عن سؤال ريكي!) النتيجة ستظهر قريبًا، هل أنت واثق؟","أنا واثق"],
["صرّح عن science وأسند له 100، وإذا كان يساوي 100 أخرج \"Increased allowance!\"","",`let science = 100;
if (science == 100){console.log("Increased allowance!");}`],
["أسند 80 إلى science؛ وإن لم يساوِ 100 أخرج \"Weeding the garden\"","اكتب مكان الجزء الملون:",`else {console.log("Weeding the garden");}`],
["إذا لم تكن قيمة math تساوي 100 أخرج \"No reward\"","اكتب مكان الجزء الملون:",`else {console.log("No reward");}`]],"تحقّق من البنود واضغط «فهمت»."],
["الدرس 2: تدريب على جمل if-else",[
["أخرج \"Let's go buy some.\" إذا كان egg يساوي 0، وإلا \"I still have some.\"","المربع الأول: if (egg == 0) — المربع الثاني: else",`let egg = 10;
if (egg == 0){console.log("Let’s go buy some.");}
else {console.log("I still have some.");}`],
["صرّح عن num وأسند له 777؛ إذا كان 777 أخرج \"lucky\" وإلا \"better luck next time\"","",`let num = 777;
if (num == 777){console.log("lucky");}
else {console.log("better luck next time");}`]],"صيغة الجملة: if (conditional) {معالجة حالة true} else {معالجة حالة false}"],
["الدرس 3: المعامل (١)",[
["انقر «تشغيل الكود» دون تعديل البرنامج","اضغط على تشغيل الكود."],
["أخرج \"Add homework\" إذا كانت math أقل من أو تساوي 50، وإلا \"No homework!\"","",`let math = 30;
if (math <= 50){console.log("Add homework");}
else {console.log("No homework!");}`],
["إذا كانت word أكبر من أو تساوي 70 أخرج \"pass\" وإلا \"fail\"","اكتب في المربع الملون: word >= 70"]],"ضع علامة صح على النقاط الثلاث للانتقال للدرس التالي."],
["الدرس 4: المعامل (٢)",[
["إذا كانت height أكبر من 130 أخرج \"Can ride\" وإلا \"Cannot ride\"","اكتب في المربع الملون: height > 130"],
["إذا كانت height أقل من 80 أخرج \"Cannot ride\" وإلا \"Can ride\"","اكتب في المربع الملون: height < 80"],
["أخرج \"No entry\" إذا كان age أقل من أو يساوي 16، وإلا \"Entry allowed\"","",`let age = 15;
if (age <= 16){console.log("No entry");}
else {console.log("Entry allowed");}`],
["صرّح عن age وأسند له 15؛ إذا كان أكبر من أو يساوي 60 أخرج \"Cannot jump\" وإلا \"Can jump\"","",`let age = 15;
if (age >= 60){console.log("Cannot jump");}
else {console.log("Can jump");}`]],"تحقّق من البنود واضغط «فهمت»."],
["مراجعة الفصل 6",[
["سؤال 1","",`if (conditional){A}
else{B}`],
["سؤال 2","",`let num = 5;
if (num == 10){console.log("Win");}
else {console.log("Lose");}`],
["سؤال 3","","num <= 8"],
["سؤال 4","","num > 30"],
["سؤال 5","اكتب في المربع الملون: score >= 60"]],"",1]
]},
{id:7,title:"الفصل 7",sub:"else if",lessons:[
["الدرس 1: جمل else if",[
["في السطر الثالث، أدخل نفس البرنامج كما في الأسفل","",`else if (num == 2){console.log("Pair of tickets to the aquarium");}`]],"تُستخدم else if عندما تريد إضافة تعبير شرطي آخر إلى جملة if غير الشرط الأول."],
["الدرس 2: تدريب على else if (١)",[
["في السطر الرابع: إذا كانت num هي 3 اعرض \"10 bags of potato chips\"","",`else if (num == 3){console.log("10 bags of potato chips");}`],
["في السطر الخامس: إذا كانت num هي 4 اعرض \"Illustrated book of sea creatures\"","",`else if (num == 4){console.log("Illustrated book of sea creatures");}`],
["في السطر السادس: اعرض \"Stickers\" إذا لم يتحقق أي تعبير شرطي","",`else{console.log("Stickers");}`]],"تحقق من البنود واضغط «فهمت»."],
["الدرس 3: تدريب على else if (٢)",[
["اعرض 10% off إذا people = 2، و20% off إذا people ≥ 3، و retail price في غير ذلك","",`let people = 3;
if (people == 2){console.log("10% off");}
else if (people >= 3){console.log("20% off");}
else {console.log("retail price");}`],
["إذا كان egg أصغر من أو يساوي 3 اعرض \"I'm almost out of eggs\"","",`else if (egg <= 3){console.log("I'm almost out of eggs");}`],
["سؤال: عند تشغيل هذا البرنامج، ما النتيجة؟","تم عرض \"Less than or equal to 10\"."],
["اضغط على «تشغيل الكود» دون تعديل البرنامج","اضغط على تشغيل الكود."]],"ضع علامة صح على النقطتين للانتقال للدرس التالي."],
["مراجعة الفصل 7",[
["سؤال 1","",`if (conditional){A}
else if (conditional){B}`],
["سؤال 2 (السطر الثالث)","",`else if (num == 2){console.log("Two")};`],
["سؤال 3 (السطر الثالث)","",`else if (score >= 80){console.log("Pass")}`],
["سؤال 4","Pass"],
["سؤال 5","",`let egg = 5;
if (egg == 0){console.log("No stock");}
else if (egg <= 3){console.log("Low stock");}
else{console.log("In stock");}`]],"",1]
]},
{id:8,title:"الفصل 8",sub:"مراجعة الفهم",lessons:[
["الدرس 1: مراجعة من الفصل 5 إلى 7",[
["أعلن science وأسند له 100 (في سطر واحد)، وإذا كانت 100 اعرض \"The reward is a cake\"","",`let science = 100;
if (science == 100){console.log("The reward is a cake");}`],
["هل سيعرض البرنامج true أم false؟ let science = 80; console.log(science == 60);","false"],
["اعرض \"No reward\" إذا لم يتحقق التعبير الشرطي (السطر الثالث)","",`else {console.log("No reward");}`],
["اعرض \"Homework\" إذا كانت test أصغر من أو تساوي 50 (المكان الملون في السطر الثاني)","",`if (test <= 50){console.log("Homework");}`],
["أعلن test وأسند له 77؛ 100 → \"Perfect score\"، ≥ 75 → \"Pass\"، غير ذلك \"Make-up exam\"","",`let test = 77;
if (test == 100){console.log("Perfect score");}
else if (test >= 75){console.log("Pass");}
else{console.log("Make-up exam");}`]],"تحقق من البنود واضغط «فهمت»."],
["اختبار منتصف الطريق",[
["سؤال 1","",`let num = 7;
if (num == 7){console.log("Correct")}`],
["سؤال 2","true"],
["سؤال 3","","score >= 60"],
["سؤال 4","","num < 20"],
["سؤال 5","",`let num = 100;
if (num == 100){console.log("correct")}
else {console.log("miss")}`],
["سؤال 6","So close"],
["سؤال 7","اكتب في الأماكن الملونة: السطر الثاني num <= 3 — السطر الثالث num >= 6 — السطر الرابع else"]],"",1]
]},
{id:9,title:"الفصل 9",sub:"العامل المنطقي",lessons:[
["الدرس 1: المعاملات المنطقية",[
["اطبع \"20% off\" إذا كان numberOfPeople ≥ 2 و fee ≥ 3000","اكتب في المكان الملون (السطر الثالث): numberOfPeople >= 2 && fee >= 3000"],
["نفس السؤال (تكرار في المنصة)","اكتب في المكان الملون (السطر الثالث): numberOfPeople >= 2 && fee >= 3000"]],"«الشرط 1 و الشرط 2» تُكتب Condition 1 && Condition 2، و«الشرط 1 أو الشرط 2» تُكتب Condition 1 || Condition 2."],
["الدرس 2: استخدام العوامل المنطقية",[
["ماذا تُسمّى علامة &&؟","ampersand"],
["ماذا تُسمّى علامة ||؟","Vertical bar"],
["أعلن numberOfPeople = 2 و fee = 3500؛ إذا ≥ 2 و ≥ 3000 اخرج \"Free mug\"","",`let numberOfPeople = 2;
let fee = 3500;
if (numberOfPeople >= 2 && fee >= 3000){console.log("Free mug");}`],
["أعلن age = 15؛ إذا كان ≤ 12 أو ≥ 65 اخرج \"30% off\"","",`let age = 15;
if (age <= 12 || age >= 65){console.log("30% off");}`]],"and تُكتب && و or تُكتب ||."],
["مراجعة الفصل 9",[
["سؤال 1","A && B"],
["سؤال 2","A || B"],
["سؤال 3","السعر العادي"],
["سؤال 4","اكتب مكان الجزء الملون (السطر الثالث): a == 5 || b == 10"],
["سؤال 5","اكتب مكان الجزء الملون (السطر الثالث): a >= 2 && b >= 3"]],"",1]
]},
{id:10,title:"الفصل 10",sub:"العملية التكرارية",lessons:[
["الدرس 1: كسر السطر (في البرنامج)",[
["أدخل البرنامج بعد السطر الثالث","",`if (numberOfPeople >= 2 && fee >= 3000) {
　console.log("Free mug");
}`],
["أدخل البرنامج بعد السطر الخامس","",`let numberOfPeople = 2;
let fee = 3500;
if (numberOfPeople >= 2 && fee >= 3000) {
console.log("Free mug");
} else if (numberOfPeople >= 2 || fee >= 3000) {
　console.log("Complimentary cookie");
}`]],"تحقق من البنود واضغط «فهمت»."],
["الدرس 2: العملية التكرارية",[
["(قلها في عقلك 10 مرات!) حرير، حرير، حرير… ماذا تشرب البقرة؟","ماء"],
["انقر «تشغيل الكود» بدون تعديل البرنامج","اضغط على تشغيل الكود."]],"تحقق من البنود واضغط «فهمت»."],
["الدرس 3: تدريب على for (١)",[
["اطبع \"silk\" عشر مرات","اكتب في المكان الملون في السطر الأول:","( let count = 0; count < 10; count = count + 1 )"],
["اطبع \"deer\" عشر مرات (3 أسطر، المتغير count)","",`for (let count = 0; count < 10; count = count + 1) {
console.log("deer");
}`],
["اطبع \"campus\" عشر مرات (3 أسطر، المتغير count)","",`for (let count = 0; count < 10; count = count + 1) {
console.log("campus");
}`],
["كامبَس… ماذا تستخدم لقياس الزوايا؟","Protractor"]],"تحقق من البنود واضغط «فهمت»."],
["الدرس 4: الزيادة (Increment)",[
["اطبع \"campus\" عشر مرات (المتغير count)","اكتب في المكان الملون في السطر الأول:","let count = 0; count < 10; count = count + 1"],
["اطبع \"campus\" عشر مرات باستخدام ++","اكتب في المكان الملون في السطر الأول:","let count = 0; count < 10; count++"],
["أدخل البرنامج كما هو","",`for (let i = 0; i < 10; i++) {
console.log("genius");
}`]],"تحقق من البنود واضغط «فهمت»."],
["الدرس 5: تدريب (٢)",[
["أدخل البرنامج كما هو","",`for (let i = 0; i < 3; i++) {
console.log("Red lorry, yellow lorry");
}`],
["أدخل البرنامج كما هو","",`for (let i = 1; i < 3; i++) {
console.log("Red lorry, yellow lorry");
}`],
["اعرض \"Red lorry, yellow lorry\" مئة مرة (3 أسطر، المتغير i، عامل الزيادة)","",`for (let i = 0; i < 100; i++) {
console.log("Red lorry, yellow lorry");
}`]],"تحقق من البنود واضغط «فهمت»."],
["مراجعة الفصل 10",[
["سؤال 1","for"],
["سؤال 2","i++"],
["سؤال 3","",`for (let i=0; i<10; i++) {
　Specified process
}`],
["سؤال 4","اكتب بين القوسين في السطر الأول:","let i = 0; i < 5; i++"],
["سؤال 5","",`for (let i = 0; i < 7; i++ ) {
console.log("Hello");
}`]],"",1]
]},
{id:11,title:"الفصل 11",sub:"مراجعة الفهم",lessons:[
["الدرس 1: مراجعة من 9 إلى 10",[
["أعلن age = 15 و numberOfPeople = 7؛ إذا age ≤ 18 و numberOfPeople ≥ 5 اطبع \"Student group discount\"","",`let age = 15;
let numberOfPeople = 7;
if (age <= 18 && numberOfPeople >= 5) {
console.log("Student group discount");
}`],
["أعلن age = 15؛ إذا age ≤ 15 أو ≥ 70 اطبع \"Discounts available\"","",`let age = 15;
if (age <= 15 || age >= 70) {
console.log("Discounts available");
}`],
["اطبع \"Good morning\" عشر مرات (3 أسطر، المتغير i)","",`for (let i = 0; i < 10; i++) {
console.log("Good morning");
}`],
["اطبع \"Go for it\" خمس مرات (3 أسطر، المتغير i)","",`for (let i = 0; i < 5; i++) {
console.log("Go for it");
}`]],"تحقق من البنود واضغط «فهمت» للانتقال إلى اختبار منتصف الطريق."],
["اختبار منتصف الطريق",[
["سؤال 1","A || B"],
["سؤال 2","A"],
["سؤال 3","i++"],
["سؤال 4","",`for (let i=0; i<10; i++) {
　Process
}`],
["سؤال 5","Hello\nHello"],
["سؤال 6","",`for (let i = 0; i < 10; i++) {
console.log("Good morning");
}`],
["سؤال 7","اكتب في المكان الملون في السطر الثالث:","a >= 2 && b >= 3"],
["سؤال 8","اكتب في المربع الصغير: for — وفي المربع الكبير:","let i = 0; i < 3 ; i++"]],"",1]
]},
{id:12,title:"الفصل 12",sub:"الدوال والتقريب",lessons:[
["الدرس 1: تقريب الأعداد",[
["أدخل نفس البرنامج كما في الأسفل (ثلاثة أسطر Math.round)","املأ المربعات بالترتيب: 9.8 ثم 10.3 ثم 9.2",
log("Math.round(9.8)")+"\n"+log("Math.round(10.3)")+"\n"+log("Math.round(9.2)")]]],
["الدرس 2: Math.round و Math.max و Math.min",[
["أدخل نفس البرنامج: console.log(Math.round(10.6));","",log("Math.round(10.6)")],
["قرّب العدد 9.7 باستخدام Math.round واطبعه في وحدة التحكم","",log("Math.round(9.7)")],
["أدخل نفس البرنامج: console.log(Math.max(5,10,50));","",log("Math.max(5,10,50)")],
["أدخل نفس البرنامج: console.log(Math.min(5,10,50));","",log("Math.min(5,10,50)")]]],
["الدرس 3: تشغيل البرنامج",[
["دعنا نشغّل البرنامج دون تعديله","اضغط على تشغيل الكود فقط."]]],
["الدرس 4: الدالة split3",[
["أي نوع من البيتزا تريد؟","بيتزا المأكولات البحرية"],
["أدخل نفس البرنامج: function split3(total) { }","","function split3(total) { }"],
["اكتب في السطر الثاني: let result = total / 3;","","function split3(total) {\n　let result = total / 3;\n}"],
["اكتب في السطر الثالث: return result;","","function split3(total) {\n　let result = total / 3;\n　return result;\n}"],
["اكتب في السطر الخامس: console.log(split3(2800));","","function split3(total) {\n　let result = total / 3;\n　return result;\n}\n"+log("split3(2800)")]]],
["الدرس 5: الدالتان split5 و calc5",[
["ما نوع المعالجة التي تريد أن يقوم بها Mr. 5 Split the Cost؟","أريد أن يقسم المجموع على خمسة."],
["أنشئ دالة باسم split5 ووسيط باسم total","","function split5(total) {\n　let result = total / 5;\n　return result;\n}\n"+log("split5(12500)")],
["مرّر الوسيط 12500 إلى split5 وأخرج الناتج (السطر الأخير)","",log("split5(12500)")],
["أنشئ دالة باسم calc5 ووسيط باسم num (num * 5) وأعد result","","function calc5(num) {\n　let result = num * 5;\n　return result;\n}"],
["مرّر الوسيط 10 إلى calc5 وأخرجه في وحدة التحكم (السطر الخامس)","","function calc5(num) {\n　let result = num * 5;\n　return result;\n}\n"+log("calc5(10)")]]],
["مراجعة الفصل 12",[
["اختر البرنامج الصحيح لإنشاء دالة اسمها calc واسم معاملها num","","function calc(num) {　processing　}"],
["اختر الدالة الصحيحة للتقريب","","Math.round(1.8)"],
["ما ناتج: console.log(Math.max(20,40,60));","60"],
["ما الذي سيُعرض عند تشغيل دالة calc (num * 3) مع calc(5)؟","15"],
["أضف برنامجًا يستدعي الدالة calc وضع 3 كقيمة للمعامل","","calc(3)"],
["أضف برنامجًا يعيد قيمة المتغير result (السطر الثالث)","","return result"]],"",1]
]},
{id:13,title:"الفصل 13",sub:"Math والأعداد العشوائية",lessons:[
["الدرس 1: Math.max و Math.min والدالة sum",[
["ما هو الإخراج عند تشغيل: console.log(Math.round(10.4));","10"],
["أدخل نفس البرنامج: console.log(Math.max(5,50));","",log("Math.max(5,50)")],
["أخرج القيمة الأدنى بين 5 و50 باستخدام Math.min","",log("Math.min(5,50)")],
["أنشئ دالة sum بالوسيطين num1 و num2 وتُرجع مجموعهما","","function sum(num1, num2) {\n　let result = num1 + num2;\n　return result;\n}"],
["مرّر 10 و20 إلى sum واطبع الناتج (السطر الخامس)","","function sum(num1, num2) {\n　let result = num1 + num2;\n　return result;\n}\n"+log("sum(10, 20)")]]],
["الدرس 2: Math.floor",[
["انقر «تشغيل الكود» دون تعديل البرنامج","اضغط على تشغيل الكود فقط."],
["أدخل نفس البرنامج (round ثم floor للعدد 10.5)","",log("Math.round(10.5)")+"\n"+log("Math.floor(10.5)")],
["مرّر 7.8 إلى Math.floor وأخرجه إلى وحدة التحكم","",log("Math.floor(7.8)")]]],
["الدرس 3: Math.random",[
["انقر «تشغيل الكود» دون تعديل البرنامج","اضغط على تشغيل الكود فقط."],
["أدخل البرنامج: console.log(Math.random());","",log("Math.random()")],
["اكتب الشرط في السطر الأول (المكان المخصص)","","if (Math.random() >= 0.5) {\nconsole.log(\"Lucky today\");\n} else {\nconsole.log(\"Unlucky today\");\n}"],
["كيف كان حظك اليوم؟","النتيجة عشوائية: قد تظهر \"Lucky today\" أو \"Unlucky today\"."]],"Math.random() >= 0.5 هو الشرط في السطر الأول."],
["الدرس 4: الأعداد العشوائية الصحيحة",[
["استدعِ Math.random وأخرجها إلى وحدة التحكم","",log("Math.random()")],
["اكتب في المكان المخصص: Math.random() * 10","",log("Math.random() * 10")],
["اكتب في المكان المخصص: Math.floor","",log("Math.floor(Math.random() * 10)")]]],
["مراجعة الفصل 13",[
["اختر البرنامج الصحيح لإخراج القيم العشوائية","",log("Math.random()")],
["اختر الدالة الصحيحة لقطع الكسور العشرية","",log("Math.floor(10.5)")],
["ما ناتج: console.log(Math.floor(7.7));","7"],
["قرّب 5.5 بـ Math.round واقطع 8.8 بـ Math.floor","",log("Math.round(5.5)")+"\n"+log("Math.floor(8.8)")],
["اطبع \"Excellent luck\" إذا كانت القيمة العشوائية ≥ 0.5 وإلا \"Bad luck\"","اكتب في السطر الأول: Math.random() >= 0.5","if (Math.random() >= 0.5) {\nconsole.log(\"Excellent luck\");\n} else {\nconsole.log(\"Bad luck\");\n}"],
["أنشئ عددًا صحيحًا عشوائيًا (random × 10 ثم floor) في سطر واحد","",log("Math.floor(Math.random() * 10)")]],"",1]
]}
,{id:14,title:"الفصل 14",sub:"مراجعة الفصلين 12 و13",lessons:[
[ "مراجعة الفصلين 12 إلى 13: التدريب",[
[ "قرّب 5.7 باستخدام Math.round وأخرج النتيجة في الـ console","",log("Math.round(5.7)")],
[ "مرّر الوسيط 5.5 إلى Math.round ثم إلى Math.floor وأخرج كل نتيجة","",log("Math.round(5.5)")+"\n"+log("Math.floor(5.5)")],
[ "مرّر الوسيطين 10 و20 إلى Math.max ثم Math.min وأخرج النتيجتين","",log("Math.max(10,20)")+"\n"+log("Math.min(10,20)")],
[ "استدعِ Math.random وأخرج النتيجة في الـ console","",log("Math.random()")],
[ "أنشئ دالة split4 بالوسيط total تُرجع القيمة مقسومة على 4، ثم مرّر 1200 واطبع الناتج","","function split4(total) {\n　let result = total / 4;\n　return result;\n}\n"+log("split4(1200)")]
],"" ],
[ "اختبار المراجعة",[
[ "اختر الدالة الصحيحة للتقريب","","Math.round(1.8)"],
[ "اختر ناتج تشغيل: console.log(Math.max(10,50,100));","100"],
[ "اختر البرنامج الصحيح لإخراج القيم العددية العشوائية","",log("Math.random()")],
[ "اختر ناتج تشغيل: console.log(Math.floor(12.8));","12"],
[ "أنشئ برنامجًا يعيد عددًا صحيحًا عشوائيًا في سطر واحد (random × 10 ثم floor)","اكتب في المكان المخصص: Math.floor(Math.random() * 10 )",log("Math.floor(Math.random() * 10 )")],
[ "اختر البرنامج الصحيح لإنشاء دالة اسمها sum واسم الوسيط num","","function sum(num) {\n　processing\n}"],
[ "أضف برنامجًا يُرجع قيمة المتغيّر result (السطر الثالث)","اكتب في السطر الثالث: return result","function calc(num) {\n　let result = num * 7;\n　return result\n}\n"+log("calc(10)")],
[ "أضف برنامجًا يستدعي الدالة calc وأدخل 7 كوسيط (السطر الخامس)","اكتب في المكان المخصص: calc(7)","function calc(num) {\n　let result = num * 5;\n　return result;\n}\n"+log("calc(7)")]
],"",1]
]}
,{id:15,title:"الفصل 15",sub:"أنواع البيانات والمقارنة",lessons:[
[ "الدرس 1: الإعلان عن المتغيّر fee",[
[ "صرّح عن المتغيّر fee وأسند له القيمة 1000","اكتب في السطر الأول: let fee = 1000;","let fee = 1000;\nif (fee == 1000) {\n console.log(\"50 codycoins off\");\n}"],
[ "صرّح عن المتغيّر fee وأسند له القيمة \"1000 codycoins\"","اكتب في السطر الأول: let fee = \"1000 codycoins\";","let fee = \"1000 codycoins\";\nif (fee == \"1000 codycoins\") {\n console.log(\"50 codycoins off\");\n}"]
]],
[ "الدرس 2: أنواع البيانات",[
[ "ما نوع البرنامج: console.log(\"Good morning.\");","سلسلة نصية (String)"],
[ "ما نوع البرنامج: console.log(10);","القيمة العددية (Number)"],
[ "ما نوع البرنامج: console.log(\"5+7\");","سلسلة نصية (String)"]
]],
[ "الدرس 3: typeof",[
[ "اضغط على «تشغيل الكود» دون تعديل البرنامج","اضغط تشغيل الكود فقط."],
[ "اضغط على «تشغيل الكود» دون تعديل البرنامج","اضغط تشغيل الكود فقط."],
[ "أدخل نفس البرنامج (typeof لـ 500 ولـ \"500 codycoins\")","",log("typeof 500")+"\n"+log('typeof "500 codycoins"')],
[ "حدّد نوع البيانات لـ \"100\" وأخرج النتيجة إلى الكونسول","",log('typeof "100"')]
]],
[ "الدرس 4: عوامل المقارنة == و ===",[
[ "اضغط على «تشغيل الكود» دون تعديل البرنامج","اضغط تشغيل الكود فقط."],
[ "اضغط على «تشغيل الكود» دون تعديل البرنامج","اضغط تشغيل الكود فقط."],
[ "أدخل نفس البرنامج: console.log(1 === 1);","اكتب الناقص في الكود: 1 === 1",log("1 === 1")],
[ "ما الناتج: console.log(100 == \"100\");","true"],
[ "ما الناتج: console.log(100 === 500);","false"],
[ "ما الناتج: console.log(\"Good morning\" === \"Good morning\");","true"],
[ "ما الناتج: console.log(\"Good morning\" === \"Good night\");","false"]
],"== تقارن القيمة فقط، أما === فتقارن القيمة والنوع معًا."],
[ "الدرس 5: تحويل أنواع البيانات",[
[ "اضغط على «تشغيل الكود» دون تعديل البرنامج","اضغط تشغيل الكود فقط."],
[ "أنشئ برنامجك: حوّل \"10\" إلى رقم و500 إلى نص","",log('Number("10")')+"\n"+log("String(500)")]
]],
[ "مراجعة الفصل 15",[
[ "اختر نوع البيانات الصحيح: console.log(\"50+30\");","String"],
[ "اختر البرنامج الصحيح الذي يُخرج string","",log('typeof "1"')],
[ "اختر ناتج: console.log(100 === 500);","false"],
[ "اختر ناتج: console.log(Number(\"Hello\"));","NaN"],
[ "حدّد نوع البيانات لـ \"7\" واطبعه في وحدة التحكم","",log('typeof "7"')]
],"",1]
]}
,{id:16,title:"الفصل 16",sub:"المصفوفات (Arrays)",lessons:[
[ "الدرس 1: مقدمة المصفوفات",[
[ "اضغط على «تشغيل الكود» دون تعديل البرنامج","اضغط تشغيل الكود فقط."],
[ "اضغط على «تشغيل الكود» دون تعديل البرنامج","اضغط تشغيل الكود فقط."]
]],
[ "الدرس 2: الوصول إلى عناصر المصفوفة",[
[ "أنشئ برنامجك: let tempList = [36, 36, 26, 27, 28, 33, 36];","","let tempList = [36, 36, 26, 27, 28, 33, 36];"],
[ "أدخل البرنامج: console.log(tempList[2]);","اكتب في السطر الثاني: console.log(tempList[2]);","let tempList = [36, 36, 26, 27, 28, 33, 36];\nconsole.log(tempList[2]);"],
[ "استخرج العنصر 33 من tempList وأخرجه إلى وحدة التحكم","اكتب في السطر الثاني: console.log(tempList[5]);","let tempList = [36, 36, 26, 27, 28, 33, 36];\nconsole.log(tempList[5]);"],
[ "أخرج قيمة المتغير tempList إلى وحدة التحكم","اكتب في السطر الثاني: console.log(tempList);","let tempList = [36, 36, 26, 27, 28, 33, 36];\nconsole.log(tempList);"]
],"الفهرس يبدأ من 0؛ لذلك tempList[2] هو العنصر الثالث."],
[ "الدرس 3: حساب المجموع والمتوسط",[
[ "أنشئ برنامجك: let tempList = [36, 36, 26, 27, 28, 33, 36];","","let tempList = [36, 36, 26, 27, 28, 33, 36];"],
[ "أدخل نفس البرنامج لحساب المجموع (حلقة for)","اكتب الكود من السطر الثاني واترك السطر الأول كما هو.","let tempList = [36, 36, 26, 27, 28, 33, 36];\nlet total = 0;\nfor(let i = 0; i < 7; i++){\n total = total + tempList[i];\n}\nconsole.log(total);"],
[ "أدخل نفس البرنامج: console.log(total / 7);","ضع total / 7 داخل console.log في آخر سطر.","let tempList = [36, 36, 26, 27, 28, 33, 36];\nlet total = 0;\nfor(let i = 0; i < 7; i++){\n total = total + tempList[i];\n}\nconsole.log(total / 7);"]
]],
[ "الدرس 4: متوسط مسافة الجري والخطوات",[
[ "المسافات: 5، 2، 4، 1، 3، 3 كم. أسند مصفوفة إلى runLogs","","let runLogs = [5, 2, 4, 1, 3, 3];"],
[ "احسب مجموع المسافات (السطور 2 إلى 5)","اكتب الكود من السطر الثاني إلى الخامس.","let runLogs = [5, 2, 4, 1, 3, 3];\nlet total = 0;\nfor (let i = 0; i < 6; i++) {\ntotal = total + runLogs[i];\n}\nconsole.log(total);"],
[ "أدخل البرنامج: console.log(total / 6);","اكتبه في السطر السادس.","let runLogs = [5, 2, 4, 1, 3, 3];\nlet total = 0;\nfor (let i = 0; i < 6; i++) {\n total = total + runLogs[i];\n}\nconsole.log(total / 6);"],
[ "احسب متوسط عدد الخطوات خلال 6 أيام","اكتب من السطر الثاني: صرّح عن total وأسند 0، كرر الجمع ست مرات، ثم اقسم على 6.","let steps = [16000, 12000, 14605, 9920, 13805, 14500];\nlet total = 0;\nfor (let i = 0; i < 6; i++) {\n total = total + steps[i];\n}\nconsole.log(total / 6);"]
]],
[ "الدرس 5: إضافة عناصر وطول المصفوفة",[
[ "أضف القيم 30 و28 و29 إلى المصفوفة","اكتب الأرقام في المكان المطلوب: 30, 28, 29","let tempList = [36, 36, 26, 27, 28, 33, 36, 30, 28, 29];"],
[ "أدخل البرنامج: console.log(tempList.length);","اكتب في السطر الثاني: console.log(tempList.length);","let tempList = [36, 36, 26, 27, 28, 33, 36, 30, 28, 29];\nconsole.log(tempList.length);"],
[ "أخرج طول المصفوفة إلى وحدة التحكم","اكتب في السطر الثاني: console.log(tempList.length);","let tempList = [36, 36, 26, 27, 28, 33, 36, 30, 28, 29, 26, 30, 31, 28];\nconsole.log(tempList.length);"]
]],
[ "مراجعة الفصل 16",[
[ "ضع القيم 5 و10 و15 في المصفوفة (لن يظهر ناتج)","اكتب ما بداخل الأقواس فقط.","let num = [5, 10, 15];"],
[ "اختر ناتج: let num = [5, 10, 15, 20, 25]; console.log(num[2]);","15"],
[ "اطبع جميع القيم في المصفوفة (لا تدخل القيم مباشرة)","اكتب في المكان المخصص: num","let num = [5, 10, 15, 20, 25];\nconsole.log(num);"],
[ "اختر ناتج: مجموع عناصر [1, 2, 3] بالحلقة for","6"],
[ "اطبع طول المصفوفة (لا تدخل القيمة العددية مباشرة)","اكتب في المكان المخصص: num.length","let num = [5, 10, 15, 20, 25];\nconsole.log(num.length);"]
],"",1]
]}
,{id:17,title:"الفصل 17",sub:"مراجعة الفصلين 15 و16",lessons:[
[ "مراجعة من الفصل 15 إلى 16",[
[ "أدخل نفس البرنامج كما هو موضح","","console.log(typeof 500);\nconsole.log(typeof \"500codycoins\");"],
[ "أدخل نفس البرنامج: console.log(1 === \"1\");","","console.log(1 === \"1\");"],
[ "أدخل البرنامج: تحويل \"5\" إلى رقم و10 إلى نص","","console.log(Number(\"5\"));\nconsole.log(String(10));"],
[ "درجات الحرارة: 10، 15، 13، 16، 14، 12، 17 — أدخل نفس البرنامج","","let tempList = [10, 15, 13, 16, 14, 12, 17];\nconsole.log(tempList[2]);"],
[ "درجات الحرارة: 5، 8، 7، 10، 6، 9 — أسند مصفوفة إلى tempList","","let tempList = [5, 8, 7, 10, 6, 9];"],
[ "أخرج متوسط درجة الحرارة خلال 6 أيام","اكتب من السطر الثاني بعد سطر المصفوفة.","let tempList = [5, 8, 7, 10, 6, 9];\nlet total = 0;\nfor (let i = 0; i < 6; i++) {\n total = total + tempList[i];\n}\nconsole.log(total / 6);"],
[ "أخرج عدد القيم في المصفوفة (اطبع الطول)","اكتب في المكان المخصص: tempList.length","let tempList = [5, 8, 7, 10, 6, 9, 10, 7, 6, 11, 13, 8, 8, 7];\nconsole.log(tempList.length);"]
],"",1],
[ "مراجعة الفصل 17",[
[ "اختر نوع البيانات الصحيح: console.log(\"11\");","String"],
[ "اختر البرنامج الصحيح الذي يُخرج \"string\"","",log('typeof \"50\"')],
[ "اختر ناتج: console.log(200 === 20);","false"],
[ "اختر ناتج: console.log(Number(\"value\"));","NaN"],
[ "حدّد نوع البيانات 100 واطبعه في وحدة التحكم","",log("typeof 100")],
[ "ضع القيم 10, 50, 100, 150 في المصفوفة (لن يظهر ناتج)","اكتب بين القوسين: 10, 50, 100, 150","let num = [10, 50, 100, 150];"],
[ "اختر ناتج: let num = [5, 10, 15, 20, 25]; console.log(num[3]);","20"],
[ "اطبع جميع القيم في المصفوفة (لا تدخل القيم مباشرة)","اكتب بين القوسين في السطر الثاني: num","let num = [2, 4, 6, 8, 10];\nconsole.log(num);"],
[ "اختر ناتج: مجموع عناصر [2, 4, 6] بالحلقة for","12"],
[ "اطبع طول المصفوفة (لا تدخل الطول مباشرة)","اكتب بين القوسين في السطر الثاني: num.length","let num = [2, 4, 6, 8, 10];\nconsole.log(num.length);"]
],"",1]
]}
,{id:18,title:"الفصل 18",sub:"مقدمة HTML",lessons:[
[ "الدرس 2: العناوين والفقرات",[
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "اعرض النص في المتصفح: <h1>Cody's Notepad</h1>","اكتب في الخانات الفارغة: <h1> و </h1>",`<h1>Cody's Notepad</h1>`],
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "اعرض النص: h3 وh6","اكتب في الخانات الفارغة: <h3> </h3> <h6> </h6>",`<h3>Cody's Notepad</h3>
<h6>Today's shopping list</h6>`],
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "اكتب في السطر الثالث: <p>Bread</p>","اكتب في السطر الثالث واترك أول سطرين كما هما.",`<h1>Cody's Notepad</h1>
<h2>Today's shopping list</h2>
<p>Bread</p>`],
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "اكتب وسم <br> في السطرين الثالث والرابع","اكتب <br> في الفراغين المطلوبين.",`<h1>Cody's Notepad</h1>
<h2>Today's shopping list</h2>
<p>Bread<br>
 Ham<br>
 Cheese</p>`]
]],
[ "الدرس 3: القوائم",[
[ "أنشئ قائمة تسوق: h1 وh2 وp مع br","",`<h1>Rick's Notebook</h1>
<h2>Shopping List</h2>
<p>Tomato<br>
 Onion<br>
 Mushroom<br>
 Garlic</p>`],
[ "أنشئ قائمة نقطية (اكتب الكود كما هو موضح)","",`<h1>Shopping List</h1>
<ul>
 <li>Tomato</li>
 <li>Onion</li>
 <li>Mushroom</li>
 <li>Garlic</li>
</ul>`],
[ "حوّل الكلمات إلى قائمة نقطية باستخدام ul وli","امسح الكود أو عدّله ليصبح هكذا.",`<h1>Shopping List</h1>
<ul>
 <li>Tomato</li>
 <li>Onion</li>
 <li>Mushroom</li>
 <li>Garlic</li>
</ul>`],
[ "أنشئ جدول الحصص (قائمة مرقّمة)","",`<h1>Tomorrow's Schedule</h1>
<ol>
 <li>Science</li>
 <li>Math</li>
 <li>Music</li>
 <li>History</li>
 <li>Physical Education</li>
</ol>`],
[ "أنشئ جدول حصص باستخدام ol وli","امسح الكود أو عدّله ليصبح هكذا.",`<h1>Tomorrow's Schedule</h1>
<ol>
 <li>Science</li>
 <li>Math</li>
 <li>Music</li>
 <li>History</li>
 <li>Physical Education</li>
</ol>`]
]],
[ "الدرس 4: الصور",[
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "اعرض صورة كاري رايس (السطر الثالث)","اكتب في الخانة المخصصة: <img>",`<h1>Cooking Wishlist</h1>
<ul>
 <li>Curry rice<img></li>
 <li>Japanese rice omelette</li>
</ul>`],
[ "اعرض صورة كاري رايس: <img src=\"curry.png\">","امسح الكود أو عدّله ليصبح هكذا.",`<h1>Cooking Wishlist</h1>
<ul>
 <li>Curry rice<img src="curry.png"></li>
 <li>Japanese rice omelette</li>
</ul>`],
[ "أضف <br> قبل الصورة","اكتب <br> في الخانة المخصصة في السطر الثالث.",`<h1>Cooking Wishlist</h1>
<ul>
 <li>Curry rice<br><img src="curry.png"></li>
 <li>Japanese rice omelette</li>
</ul>`],
[ "اعرض صورة أومليت الأرز (omelette.png) في السطر الرابع","امسح الكود أو عدّله ليصبح هكذا.",`<h1>Cooking Wishlist</h1>
<ul>
 <li>Curry rice<br><img src="curry.png"></li>
 <li>Japanese rice omelette<br><img src="omelette.png"></li>
</ul>`],
[ "اعرض صورة المعكرونة (pasta.png)","امسح الكود أو عدّله ليصبح هكذا.",`<h1>Cooking Wishlist</h1>
<ul>
 <li>Curry rice<br><img src="curry.png"></li>
 <li>Japanese rice omelette<br><img src="omelette.png"></li>
 <li>Pasta<br><img src="pasta.png"></li>
</ul>`],
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "أضف وصفًا للصور (alt) في السطرين 3 و4","اكتب في السطرين الثالث والرابع: alt=\"Rice with spicy sauce\" ثم alt=\"Japanese rice omelette with ketchup\"",`<h1>Cooking Wishlist</h1>
<ul>
 <li>Curry rice<br><img src="miss.png" alt="Rice with spicy sauce"></li>
 <li>Japanese rice omelette<br><img src="miss.png" alt="Japanese rice omelette with ketchup"></li>
 <li>Pasta<br><img src="pasta.png" alt="Tomato sauce pasta"></li>
</ul>`]
]],
[ "الدرس 5: قائمة المشروبات والتعليقات",[
[ "اعرض قائمة المشروبات: h1 وp وbr","اكتب بالترتيب في الخانات الفارغة: <h1> </h1> <p> <br> </p>",`<h1>Drink Menu</h1>
<p>Orange juice: 200 codycoins<br>
 Apple juice: 150 codycoins</p>`],
[ "اجعل السطر الأول من النص تعليقًا","اكتب في الخانات الناقصة: <!-- و -->",`<!-- Prices will be revised next week. -->
<h1>Drink Menu</h1>
<p>Orange juice: 200 codycoins<br>
 Apple juice: 150 codycoins</p>`],
[ "كيف كانت تجربتك الأولى مع HTML؟","لقد كانت ممتعة!"]
]],
[ "مراجعة الفصل 18",[
[ "أحِط النص المكتوب بوسم h1","",`<h1>Hello</h1>`],
[ "اختر الطريقة الصحيحة لكتابة وسم p","",`<p>Hello</p>`],
[ "اختر الوسم المناسب لكسر السطر","br tag"],
[ "اختر الوسم المناسب لإنشاء قائمة منقّطة","ul tag"],
[ "اختر ما سيتم عرضه: ol مع Cut ingredients وStir-fry وAdd seasonings","1. Cut ingredients\n2. Stir-fry\n3. Add seasonings"],
[ "اختر الوسم لعرض صورة باسم image.png","",`<img src="image.png">`],
[ "اختر الطريقة الصحيحة لكتابة الخاصية alt","",`<img alt="This is an image.">`],
[ "اكتب تعليقًا على السطر الأول من النص","اكتب في الخانات الناقصة: <!-- و -->",`<!--The h1 tag is a heading.-->
<h1>Hello</h1>`]
],"",1]
]}
,{id:19,title:"الفصل 19",sub:"مقدمة CSS",lessons:[
[ "الدرس 1: لون النص والخلفية",[
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "غيّر لون النص داخل وسم h1 إلى الأحمر","",`h1{
 color: red;
}`],
[ "غيّر لون النص في وسم h1 إلى الأزرق","امسح الكود أو عدّله ليصبح هكذا.",`h1{
color: blue;
}`],
[ "غيّر لون نص وسم p إلى الأحمر (من السطر الرابع)","اترك أول ثلاثة أسطر كما هي واكتب من السطر الرابع.",`h1{
 color: blue;
}
p{
color: red;
}`],
[ "غيّر لون خلفية وسم h1 إلى الأصفر","اكتب في السطر الثالث في المكان المخصص: background-color: yellow;",`h1{
 color: blue;
 background-color: yellow;
}
p{
 color: red;
}`],
[ "غيّر لون خلفية وسم p إلى البرتقالي","اكتب في السطر السابع في المكان المخصص: background-color: orange;",`h1{
 color: blue;
 background-color: yellow;
}
p{
 color: red;
 background-color: orange;
}`]
],"في مقالة المدونة الأصلية ظهرت ألوان الكود النهائي في السؤال الأخير مبدّلة (h1 أحمر وp أزرق)، والصحيح ما هو موضح هنا لأنه يتبع إجاباتك السابقة."],
[ "الدرس 2: سُمك الخط وحجمه",[
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "اجعل خط وسم p عريضًا","",`p {
 font-weight: bold;
}`],
[ "اجعل حروف وسم p بسُمك عادي","امسح الكود أو عدّله ليصبح هكذا.",`p {
font-weight: normal;
}`],
[ "أدخل أي قيمة رقمية لسُمك الخط (أدخل 900)","اكتب في الخانة الفارغة: 900",`p {
 font-weight: 900;
}`],
[ "صغّر حجم النص داخل وسم p","",`p {
font-size : 10px;
}`],
[ "كبّر حجم النص داخل وسم p","",`p {
font-size : 50px;
}`]
]],
[ "الدرس 3: الأصناف (class)",[
[ "انقر على «تشغيل الكود» دون تعديل","اضغط تشغيل الكود فقط."],
[ "ليكن لون نص وسم p أزرق وأخضر","",`p{
color: blue;
}
p{
color: green;
}`],
[ "أضف اسم صنف (class) لوسم p: sea وmountains","اكتب في الخانات الفارغة: class=\"sea\" ثم class=\"mountains\"",`<p class="sea">Let's go to the sea.</p>
<p class="mountains">Let's go to the mountains.</p>`],
[ "اجعل لون p أزرق وأخضر باستخدام أسماء الأصناف","اكتب في الخانات الفارغة: .sea ثم .mountains",`.sea{
 color: blue;
}
.mountains{
 color: green;
}`],
[ "أضف اسم صنف: apple وwatermelon","اكتب في الخانات الفارغة: class=\"apple\" ثم class=\"watermelon\"",`<p class="apple">Apple</p>
<p class="watermelon">Watermelon</p>`],
[ "غيّر لون الصنفين apple وwatermelon","",`.apple{
color:red;
}
.watermelon{
color:green;
}`]
]],
[ "الدرس 4: التعليقات",[
[ "ماذا تود أن تصنع في المستقبل؟","موقع إلكتروني"],
[ "أضف تعليقًا في المحرر (CSS)","اكتب في الخانات الفارغة: /* و */",`/* Change the color of the text of the h1 tag to red. */
h1{
 color: red;
}`],
[ "اجعل السطر الأول من نص HTML تعليقًا","اكتب في الخانات الفارغة: <!-- و -->",`<!-- Let's give a class name -->
<p class="apple">Apple</p>
<p class="watermelon">Watermelon</p>`]
]],
[ "مراجعة الفصل 19",[
[ "حدّد الـ selector كـ h1 (لن يظهر شيء)","اكتب في البداية: h1",`h1{
 color: red;
}`],
[ "حدّد القيمة blue (لن يظهر شيء)","اكتب في السطر الثاني: blue;",`h1 {
 color:blue;
}`],
[ "اختر الوصف الصحيح لخاصية color","تغيير لون النص"],
[ "اختر الوصف الصحيح لخاصية background-color","تغيير لون الخلفية"],
[ "اختر الوصف الصحيح لقيمة font-weight عند كتابتها bold","يصبح النص عريضًا"],
[ "اختر القيمة الصحيحة لخاصية font-size","font-size: 10px;"],
[ "اكتب CSS لتغيير كلمة \"Dog\" إلى الأزرق","اكتب في أول الكود: .dog",`.dog{
 color: blue;
}`],
[ "اترك تعليقًا في السطر الأول من النص","اكتب في الخانات الفارغة: /* و */",`/* Change the text color to navy. */
p {
 color: navy;
}`]
],"",1]
]}
,{id:20,title:"الفصل 20",sub:"مراجعة الفصلين 18 و19",lessons:[
[ "مراجعة من الفصل 18 إلى 19",[
[ "أنشئ خطة سفر: h1 لعرض Travel Itinerary وh2 لعرض Packing List","",`<h1>Travel Itinerary</h1>
<h2>Packing List</h2>`],
[ "استخدم وسم p لعرض Wallet وHat وHandkerchief مع br بعد Wallet وHat","",`<h1>Travel Itinerary</h1>
<h2>Packing List</h2>
<p>Wallet<br>
 Hat<br>
 Handkerchief</p>`],
[ "اكتب HTML ابتداءً من السطر الثالث (قائمة نقطية)","امسح الكود أو عدّله ليصبح هكذا.",`<h1>Travel Itinerary</h1>
<h2>Packing List</h2>
<ul>
 <li>Wallet</li>
 <li>Hat</li>
 <li>Handkerchief</li>
</ul>`],
[ "أنشئ قائمة مرقّمة لطريقة عمل حساء الطماطم (ol وli)","",`<h1>How to Make Tomato Soup</h1>
<ol>
 <li>Boil water</li>
 <li>Add ingredients</li>
 <li>Adjust the seasoning</li>
</ol>`],
[ "اعرض صورة كودي في السطر الثالث: <img src=\"cody.png\">","",`<h1>Cody's Page</h1>
<p>My name is Cody.</p>
<img src="cody.png">`],
[ "اعرض صورة كودي مع alt في السطر الثالث","",`<h1>Cody's Page</h1>
<p>My name is Cody.</p>
<img src="miss.png" alt="Cody's striking pose">`],
[ "غيّر لون النص داخل وسم h1 إلى الأحمر","",`h1{ color: red; }`],
[ "غيّر خلفية h1 إلى الأصفر واجعل نص p عريضًا (لا تحذف CSS الأصلي)","",`h1 {
 color: red;
 background-color: yellow;
}
p {
 font-weight: bold;
}`],
[ "حدّد اسم صنف (class) داخل وسم p ابتداءً من السطر الثاني","",`<h1>Greetings of the World</h1>
<p class="japanese">Konnichiwa</p>
<p class="english">Hello</p>
<p class="french">Bonjour</p>`],
[ "غيّر لون كل سطر بتحديد اسم الصنف، ابتداءً من السطر الثامن","اكتب الكود التالي من السطر الثامن، واترك ما قبله كما هو.",`h1 {
 color: red;
 background-color: yellow;
}
p {
 font-weight: bold;
}
.japanese{
 color: lime;
}
.english{
 color: purple;
}
.french{
 color: navy;
}`]
]],
[ "مراجعة الفصل 20",[
[ "ضع النص المكتوب داخل وسم p","",`<p>Good morning</p>`],
[ "اختر الوسم المناسب لكسر السطر","br tag"],
[ "اختر الوسم المناسب لعرض صورة باسم image.png","",`<img src="image.png">`],
[ "اختر نوع العرض: ul مع strawberry وcherry وorange","・strawberry\n・cherry\n・orange"],
[ "حدّد القيمة yellow (لن يظهر شيء)","اكتب في الفراغ: yellow",`h1 {
 color: yellow;
}`],
[ "اختر الوصف الصحيح لخاصية background-color","تغيير لون الخلفية"],
[ "اختر الوصف الصحيح لقيمة font-weight عندما تكون bold","يصبح الخط عريضًا"],
[ "حدّد المنتقي (selector) كـ h3 (لن يظهر شيء)","اكتب في أول الكود: h3",`h3{
 color: red;
}`],
[ "اكتب CSS لجعل كلمة \"fish\" باللون الأزرق (class=\"fish\")","",`.fish{
 color: blue;
}`]
],"",1]
]}
];

const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const sp=(c,t)=>`<span class="${c}">${esc(t)}</span>`;
let cur=0,term="";

/* ---------- Syntax highlighting (HTML / CSS / JS) ---------- */
function scan(code,rules){
  let out="",plain="",i=0;
  const flush=()=>{if(plain){out+=esc(plain);plain=""}};
  while(i<code.length){
    let hit=null;
    for(const [cls,re] of rules){re.lastIndex=i;const m=re.exec(code);if(m&&m[0]){hit=[cls,m[0]];break}}
    if(hit){flush();out+=sp(hit[0],hit[1]);i+=hit[1].length}else plain+=code[i++];
  }
  flush();return out;
}
const JS_RULES=[
 ["c",/\/\/[^\n]*|\/\*[\s\S]*?\*\//y],
 ["s",/"(?:[^"\\\n]|\\.)*"?|'(?:[^'\\\n]|\\.)*'?|`(?:[^`\\]|\\[\s\S])*`?/y],
 ["n",/\b\d+(?:\.\d+)?\b/y],
 ["k",/\b(?:let|const|var|if|else|for|while|do|function|return|break|continue|switch|case|default|new|true|false|null|undefined|typeof|of|in)\b/y],
 ["b",/\b(?:console|Math|Number|String|Array|Boolean|Object|JSON|Date|document|window)\b/y],
 ["f",/[A-Za-z_$][\w$]*(?=\s*\()/y],
 ["o",/[=+\-*\/%<>!&|?:]+|[{}()\[\];,.]/y]
];
const CSS_SEL=[
 ["sel",/[.#][\w-]+/y],["ps",/::?[\w-]+(?:\([^)]*\))?/y],["tg",/[A-Za-z][\w-]*/y],["o",/[>+~*,\[\]=]/y]
];
const CSS_VAL=[
 ["s",/"[^"]*"?|'[^']*'?/y],["n",/#[0-9a-fA-F]{3,8}\b/y],["n",/-?\d*\.?\d+(?:px|em|rem|%|vh|vw|s|ms|deg|pt|fr)?/y],
 ["k",/!important/y],["f",/[A-Za-z-]+(?=\()/y],["v",/[A-Za-z][\w-]*/y],["o",/[(),\/]/y]
];
function hlJS(c){return scan(c,JS_RULES)}
function hlAttrs(a){
  return a.replace(/(\s+)|([^\s="'<>\/]+)(?:(\s*=\s*)("[^"]*"|'[^']*'|[^\s"'<>]+))?|([^\s])/g,
   (m,ws,name,eq,val,other)=>ws?ws:name?sp("a",name)+(eq?sp("o",eq)+sp("s",val):""):esc(other));
}
function hlHTML(c){
  return c.replace(/(<!--[\s\S]*?-->)|(<\/?)([A-Za-z][\w-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)(\/?>)|([^<]+|<)/g,
   (m,cm,open,tag,attrs,close,text)=>cm?sp("c",cm):text!==undefined?esc(text):sp("o",open)+sp("tg",tag)+hlAttrs(attrs)+sp("o",close));
}
function hlCSS(c){
  const re=/\/\*[\s\S]*?\*\/|[{};]|[^{};\/]+|\//y;let out="",depth=0,i=0,m;
  while(i<c.length){
    re.lastIndex=i;m=re.exec(c);if(!m){out+=esc(c[i++]);continue}
    const t=m[0];i+=t.length;
    if(t.startsWith("/*"))out+=sp("c",t);
    else if(t==="{"){depth++;out+=sp("o",t)}
    else if(t==="}"){depth=Math.max(0,depth-1);out+=sp("o",t)}
    else if(t===";")out+=sp("o",t);
    else if(depth===0)out+=scan(t,CSS_SEL);
    else{
      const d=/^(\s*)([\w-]+)(\s*:)([\s\S]*)$/.exec(t);
      out+=d?esc(d[1])+sp("p",d[2])+sp("o",d[3])+scan(d[4],CSS_VAL):esc(t);
    }
  }
  return out;
}
function detect(c){
  if(/^\s*<[A-Za-z!]/.test(c))return"html";
  if(/\b(console|let|const|var|function|return|if|else|for|while)\b/.test(c))return"js";
  if(/\{[\s\S]*:[\s\S]*\}/.test(c)&&/^\s*[.#\w*][^;{}()]*\{/.test(c))return"css";
  return"js";
}
const LANG={html:["index.html",hlHTML],css:["style.css",hlCSS],js:["main.js",hlJS]};
const hl=c=>LANG[detect(c)][1](c);
window.__hl={hlHTML,hlCSS,hlJS,detect};

/* ---------- UI helpers ---------- */
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.id);toast.id=setTimeout(()=>t.classList.remove("on"),1600)};
const mark=t=>{
  if(!term)return esc(t);
  const l=t.toLowerCase();let o="",i=0,j;
  while((j=l.indexOf(term,i))>-1){o+=esc(t.slice(i,j))+"<mark>"+esc(t.slice(j,j+term.length))+"</mark>";i=j+term.length}
  return o+esc(t.slice(i));
};
async function copyText(txt){
  try{await navigator.clipboard.writeText(txt);return true}catch(e){}
  try{const ta=document.createElement("textarea");ta.value=txt;ta.setAttribute("readonly","");ta.style.cssText="position:fixed;opacity:0;top:0";document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,txt.length);const ok=document.execCommand("copy");ta.remove();return ok}catch(e){return false}
}

function render(){
  const ch=DATA[cur];let any=false;
  $("#lvl").value=cur;$("#prev").disabled=cur==0;$("#next").disabled=cur==DATA.length-1;
  $("#lvlInfo").textContent=`${cur+1} / ${DATA.length}`;
  const box=document.createElement("div");
  box.innerHTML=ch.lessons.map(([name,qs,note,rev],li)=>{
    const f=qs.filter(([q,a,c])=>!term||(q+(a||"")+(c||"")).toLowerCase().includes(term));
    if(!f.length)return"";any=true;
    return `<details class="lesson ${rev?"review":""}" ${term||li==0?"open":""}><summary>${esc(name)}<span class="count">${f.length} أسئلة</span><span class="chev">‹</span></summary><div class="qs">`+
    f.map(([q,a,c])=>{
      const lang=c?LANG[detect(c)]:null;
      return `<article class="qcard"><h4><span>${mark(q)}</span></h4><button class="reveal">إظهار الإجابة</button><div class="ans">${a?`<p class="t">${esc(a)}</p>`:""}${c?`<div class="mac"><div class="bar"><i></i><i></i><i></i><span>${lang[0]}</span><button class="copy">نسخ</button></div><pre dir="ltr"><code>${lang[1](c)}</code></pre></div>`:""}</div></article>`}).join("")+
    (note?`<p class="note">ملحوظة: ${esc(note)}</p>`:"")+`</div></details>`}).join("");
  $("#chapter").replaceChildren(box);
  $("#empty").hidden=any;
}
$("#lvl").innerHTML=DATA.map((c,i)=>`<option value="${i}">${esc(c.title)} — ${esc(c.sub)}</option>`).join("");
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const go=i=>{if(i<0||i>=DATA.length)return;cur=i;store.set("lvl",DATA[i].id);history.replaceState(null,"","#"+DATA[i].id);render();window.scrollTo({top:$("main").offsetTop-60,behavior:"smooth"})};
$("#lvl").onchange=e=>go(+e.target.value);
$("#prev").onclick=()=>go(cur-1);
$("#next").onclick=()=>go(cur+1);
let h0=DATA.findIndex(c=>"#"+c.id==location.hash);
if(h0<0){const s=store.get("lvl");h0=DATA.findIndex(c=>String(c.id)===s)}
if(h0>=0)cur=h0;
window.addEventListener("hashchange",()=>{const i=DATA.findIndex(c=>"#"+c.id==location.hash);if(i>=0&&i!==cur){cur=i;render()}});
$("#q").oninput=e=>{term=e.target.value.trim().toLowerCase();render()};
$("#chapter").onclick=e=>{
  const r=e.target.closest(".reveal");
  if(r){const c=r.closest(".qcard");c.classList.toggle("show");r.textContent=c.classList.contains("show")?"إخفاء الإجابة":"إظهار الإجابة"}
  const b=e.target.closest(".copy");
  if(b){copyText(b.closest(".mac").querySelector("code").textContent).then(ok=>{
    toast(ok?"تم نسخ الكود":"تعذّر النسخ، حدّد الكود يدويًا");
    if(ok){b.textContent="تم ✓";b.classList.add("done");setTimeout(()=>{b.textContent="نسخ";b.classList.remove("done")},1500)}})}
};
let all=false;
$("#toggleAll").onclick=e=>{all=!all;
  document.querySelectorAll(".qcard").forEach(c=>{c.classList.toggle("show",all);c.querySelector(".reveal").textContent=all?"إخفاء الإجابة":"إظهار الإجابة"});
  document.querySelectorAll("details.lesson").forEach(d=>d.open=all||d.open);
  e.target.textContent=all?"إخفاء كل الإجابات":"إظهار كل الإجابات"};

/* ---------- Theme ---------- */
const root=document.documentElement;
const paintTheme=()=>{const d=root.dataset.theme==="dark";$("#theme").textContent=d?"☀":"☾";$("#theme").setAttribute("aria-label",d?"الوضع الفاتح":"الوضع الداكن");
  const m=$('meta[name="theme-color"]');if(m)m.content=d?"#0e1531":"#1a2347"};
$("#theme").onclick=()=>{const d=root.dataset.theme!=="dark";root.dataset.theme=d?"dark":"light";store.set("theme",root.dataset.theme);paintTheme()};
paintTheme();

/* ---------- Back to top ---------- */
const topBtn=$("#top");
addEventListener("scroll",()=>topBtn.classList.toggle("on",scrollY>700),{passive:true});
topBtn.onclick=()=>scrollTo({top:0,behavior:"smooth"});

/* ---------- Stats ---------- */
const total=DATA.reduce((s,c)=>s+c.lessons.reduce((a,l)=>a+l[1].length,0),0);
$("#stats").innerHTML=`<span><b>${DATA.length}</b> فصلًا</span><span><b>${DATA.reduce((s,c)=>s+c.lessons.length,0)}</b> دروس</span><span><b>${total}</b> سؤالًا محلولًا</span>`;
render();
