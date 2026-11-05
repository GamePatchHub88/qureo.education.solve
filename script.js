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
];

const $=s=>document.querySelector(s),esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
let cur=0,term="";
const hl=c=>esc(c).replace(/(\/\/.*$)|("[^"\n]*")|\b(let|const|var)\b|\b(\d+)\b|\b(log)\b/gm,
 (m,a,b,k,n,f)=>a?`<span class="c">${a}</span>`:b?`<span class="s">${b}</span>`:k?`<span class="k">${k}</span>`:n?`<span class="n">${n}</span>`:`<span class="f">${f}</span>`);
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("on");setTimeout(()=>t.classList.remove("on"),1600)};

function render(){
  const ch=DATA[cur];let any=false;
  $("#lvl").value=cur;$("#prev").disabled=cur==0;$("#next").disabled=cur==DATA.length-1;$("#lvlInfo").textContent=`${cur+1} / ${DATA.length}`;
  const h=document.createDocumentFragment(),box=document.createElement("div");
  box.innerHTML=ch.lessons.map(([name,qs,note,rev],li)=>{
    const f=qs.filter(([q,a,c])=>!term||(q+a+(c||"")).toLowerCase().includes(term));
    if(!f.length)return"";any=true;
    return `<details class="lesson ${rev?"review":""}" ${term||li==0?"open":""}><summary>${name}<span class="count">${f.length} أسئلة</span><span class="chev">‹</span></summary><div class="qs">`+
    f.map(([q,a,c])=>`<article class="qcard"><h4>${q}</h4><button class="reveal">إظهار الإجابة</button><div class="ans">${a?`<p class="t">${a}</p>`:""}${c?`<div class="mac"><div class="bar"><i></i><i></i><i></i><span>main.js</span><button class="copy">نسخ</button></div><pre dir="ltr"><code>${hl(c)}</code></pre></div>`:""}</div></article>`).join("")+
    (note?`<p class="note">ملحوظة: ${note}</p>`:"")+`</div></details>`}).join("");
  $("#chapter").replaceChildren(box);
  $("#empty").hidden=any;
}
$("#lvl").innerHTML=DATA.map((c,i)=>`<option value="${i}">${c.title} — ${c.sub}</option>`).join("");
const go=i=>{if(i<0||i>=DATA.length)return;cur=i;history.replaceState(null,"","#"+DATA[i].id);render();window.scrollTo({top:$("main").offsetTop-60,behavior:"smooth"})};
$("#lvl").onchange=e=>go(+e.target.value);
$("#prev").onclick=()=>go(cur-1);
$("#next").onclick=()=>go(cur+1);
const h0=DATA.findIndex(c=>"#"+c.id==location.hash);if(h0>=0)cur=h0;
$("#q").oninput=e=>{term=e.target.value.trim().toLowerCase();render()};
$("#chapter").onclick=e=>{
  const r=e.target.closest(".reveal");
  if(r){const c=r.closest(".qcard");c.classList.toggle("show");r.textContent=c.classList.contains("show")?"إخفاء الإجابة":"إظهار الإجابة"}
  const b=e.target.closest(".copy");
  if(b){navigator.clipboard.writeText(b.closest(".mac").querySelector("code").textContent).then(()=>toast("تم نسخ الكود"))}
};
let all=false;
$("#toggleAll").onclick=e=>{all=!all;document.querySelectorAll(".qcard").forEach(c=>{c.classList.toggle("show",all);c.querySelector(".reveal").textContent=all?"إخفاء الإجابة":"إظهار الإجابة"});
  document.querySelectorAll("details.lesson").forEach(d=>d.open=all||d.open);e.target.textContent=all?"إخفاء كل الإجابات":"إظهار كل الإجابات"};
$("#theme").onclick=()=>{const d=document.documentElement,dark=d.dataset.theme=="dark";d.dataset.theme=dark?"":"dark";$("#theme").textContent=dark?"☾":"☀"};
const total=DATA.reduce((s,c)=>s+c.lessons.reduce((a,l)=>a+l[1].length,0),0);
$("#stats").innerHTML=`<span><b>${DATA.length}</b> فصول</span><span><b>${DATA.reduce((s,c)=>s+c.lessons.length,0)}</b> دروس</span><span><b>${total}</b> سؤالًا محلولًا</span>`;
render();
