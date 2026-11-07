const log=t=>`console.log(${t});`;
const RUN="ثم اضغط على «تشغيل الكود».";
const G1=[
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
,{id:21,title:"الفصل 21",sub:"الشروط (if / else if / && / ||)",lessons:[
["الدرس 1: الشروط المتعددة",[["أنشئ برنامجًا: أعلن science = 100، وإذا كان science يساوي 100 فاطبع \"Reward: steak\"", "", "let science = 100;\nif (science == 100) {\n  console.log(\"Reward: steak\");\n}"],
["أنشئ برنامجًا يطبع \"Reward: steak\" إذا كان science = 100، و\"Reward: ice cream\" إذا كان ≥ 80، وإلا \"No games for 1 week.\" (ابدأ من السطر 4)", "اكتب من السطر الرابع إلى الثامن.", "let science = 80;\nif (science == 100) {\n  console.log(\"Reward: steak\");\n} else if (science >= 80) {\n  console.log(\"Reward: ice cream\");\n} else {\n  console.log(\"No games for 1 week.\");\n}"]]],
["الدرس 2: العوامل المنطقية",[["أدخل الشرط: المتغيّر score أكبر من أو يساوي 80", "اكتب في المكان المخصص للشرط.", "let score = 100;\nif (score >= 80) {\n  console.log(\"Pass\");\n}"],
["أدخل الشرط: المتغيّر score أصغر من أو يساوي 40", "اكتب في المكان المخصص للشرط.", "let score = 30;\nif (score <= 40) {\n  console.log(\"Retest\");\n}"],
["أدخل الشرط: numberOfPeople ≥ 3 AND المبلغ الإجمالي يساوي 3333", "اكتب في المكان المخصص للشرط.", "let numberOfPeople = 3;\nlet total = 3333;\nif (numberOfPeople >= 3 && total == 3333) {\n  console.log(\"30% discount\");\n}"],
["أدخل الشرط: numberOfPeople ≥ 10 OR المبلغ الإجمالي ≥ 12000", "اكتب في المكان المخصص للشرط.", "let numberOfPeople = 4;\nlet total = 13500;\nif (numberOfPeople >= 10 || total >= 12000) {\n  console.log(\"Small Gift Present\");\n}"]]],
["الدرس 3: نطاق المتغيّر (Scope)",[["انقر «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["انقر «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["هل ينتج خطأ؟ → let science = 100; let bonus = 5000; if (science == 100) { console.log(bonus + \" codycoins GET\"); }", "لا ينتج عنه خطأ"],
["هل ينتج خطأ؟ → let science = 100; if (science == 100) { let bonus = 5000; } console.log(bonus + \" codycoins GET\");", "ينتج عنه خطأ (المتغيّر معرّف داخل الكتلة فقط)"],
["انقر «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["هل ينتج خطأ؟ → let score = 100; if (score == 100) { let treat = \"book voucher\"; } console.log(treat + \" GET\");", "ينتج عنه خطأ"]]],
["الدرس 4: الشروط المتداخلة (فحص المخرجات)",[["تحقّق من المخرجات عندما score = 90 و rank = 1", "اضغط «تشغيل الكود» فقط دون تعديل."],
["تحقّق من المخرجات عند تغيير rank من 1 إلى 3", "اضغط «تشغيل الكود» فقط دون تعديل."],
["تحقّق من المخرجات عند تغيير score من 90 إلى 75 وإرجاع rank إلى 1", "اضغط «تشغيل الكود» فقط دون تعديل."]]],
["الدرس 5: if داخل if",[["أعلن score = 90، وإذا كان score ≥ 80 فاطبع \"Test Passed\"", "", "let score = 90;\nif (score >= 80) {\n  console.log(\"Test Passed\");\n}"],
["أدخل البرنامج مع الانتباه لمواضع عبارات if", "امسح الكود أو عدّله ليصبح هكذا.", "let score = 90;\nlet rank = 1;\nif (score >= 80) {\n  console.log(\"Test Passed\");\n  if (rank == 1) {\n    console.log(\"Trophy Acquired\");\n  }\n}"],
["أعلن rank = 1، وإذا كان rank يساوي 1 فاطبع \"Regional Champion\"", "", "let rank = 1;\nif (rank == 1) {\n  console.log(\"Regional Champion\");\n}"],
["في السطر 2 أعلن fishCaught = 27، وإذا كان ≥ 30 فاطبع \"New Tournament Record\"", "امسح الكود أو عدّله ليصبح هكذا.", "let rank = 1;\nlet fishCaught = 27;\nif (rank == 1) {\n  console.log(\"Regional Champion\");\n  if (fishCaught >= 30) {\n    console.log(\"New Tournament Record\");\n  }\n}"]]],
["مراجعة الفصل 21",[["اختر التعبير الصحيح للشرط «المتغيّر score يساوي 50»", "", "score == 50"],
["أضف شرطًا ثانيًا: إذا كان A أصغر من B اطبع \"B is larger\"", "اكتب في المكان المخصص: else if(A < B)", "let A = 5\nlet B = 10\nif (A > B) {\n  console.log(\"A is larger\");\n} else if (A < B) {\n  console.log(\"B is larger\");\n}"],
["اختر التعبير الصحيح للشرط «A أصغر من B»", "", "A < B"],
["اختر البرنامج الذي يمثّل «score أكبر من أو يساوي 50»", "", "score >= 50"],
["اختر العامل الصحيح لـ «تحقّق عدّة شروط في الوقت نفسه» (AND)", "", "&&"],
["اختر العامل الصحيح لـ «تحقّق شرط واحد على الأقل» (OR)", "", "||"],
["اكتب شرطًا: عدد الأشخاص ≤ 10 أو الوزن الكلي ≤ 800kg (numberOfPeople, weight)", "اكتب في المكان المخصص للشرط.", "let numberOfPeople = 8;\nlet weight = 400;\nif (numberOfPeople <= 10 || weight <= 800) {\n  console.log(\"You can ride the elevator\");\n}"],
["اختر نتيجة الإخراج: let math = 100; if (math == 100) { let fee = 500; } console.log(fee + \" codycoins GET\");", "ينتج عنه خطأ"],
["اطبع \"Math is 100 points\" إذا كان math = 100، وبداخله إذا كان science = 100 اطبع \"Math and science are 100 points\" (بدون &&)", "امسح الكود أو عدّله ليصبح هكذا.", "let math = 100;\nlet science = 100;\nif (math == 100) {\n  console.log(\"Math is 100 points\");\n  if (science == 100) {\n    console.log(\"Math and science are 100 points\");\n  }\n}"]],"",1]
]}
,{id:22,title:"الفصل 22",sub:"التكرار (for)",lessons:[
["الدرس 1: حلقة for",[["اضغط على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["اطبع \"She sells seashells by the seashore.\" ثلاث مرات", "اكتب في المكان المخصص: for ( let i = 0; i < 3; i++ )", "for ( let i = 0; i < 3; i++ ) {\n  console.log(\"She sells seashells by the seashore.\");\n}"],
["استخدم حلقة for لطباعة \"Six slippery snails slid slowly seaward.\" ثلاث مرات", "", "for ( let i = 0; i < 3; i++ ) {\n  console.log(\"Six slippery snails slid slowly seaward.\");\n}"],
["استخدم حلقة for لطباعة \"silk\" عشر مرات", "", "for ( let i = 0; i < 10; i++ ) {\n  console.log(\"silk\");\n}"]]],
["الدرس 2: نطاق المتغيّر داخل الحلقة",[["اضغط على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["اضغط على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["ماذا نسمّي «النطاق الذي يمكن الوصول فيه إلى المتغيّر»؟", "Scope"],
["هل ينتج خطأ؟ → for (let i = 0; i < 5; i++) { console.log(i); } console.log(i);", "ينتج عنه خطأ"],
["هل ينتج خطأ؟ → for (let i = 0; i < 5; i++) { console.log(i); }", "لا ينتج عنه خطأ"],
["هل ينتج خطأ؟ → for (let i = 0; i < 3; i++) { let num = 100; console.log(num); }", "لا ينتج عنه خطأ"]]],
["الدرس 3: if داخل الحلقة",[["ما العادة اليومية التي بدأ ريكي مؤخرًا؟", "تمارين البطن"],
["اضغط على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["اطبع \"sit-up\" خمس مرات بحلقة for (المتغيّر i)", "", "for (let i = 0; i < 5; i++) {\n  console.log(\"sit-up\");\n}"],
["اجعل الناتج: sit-up, sit-up, sit-up, running, sit-up, sit-up", "امسح الكود أو عدّله ليصبح هكذا.", "for (let i = 0; i < 5; i++) {\n  console.log(\"sit-up\");\n  if (i == 2) {\n    console.log(\"running\");\n  }\n}"]]],
["الدرس 4: تطبيقات على الحلقة",[["اطبع \"lunch box\" خمس مرات بحلقة for (المتغيّر i)", "", "for (let i = 0; i < 5; i++) {\n  console.log(\"lunch box\");\n}"],
["إذا كان i يساوي 1 فاطبع \"library book\" (السطر 3)", "امسح الكود أو عدّله ليصبح هكذا.", "for (let i = 0; i < 5; i++) {\n  console.log(\"lunch box\");\n  if (i == 1) {\n    console.log(\"library book\");\n  }\n}"],
["اطبع \"lunch box\" خمس مرات، وبعد المرة الرابعة اطبع \"fruit\"", "", "for (let i = 0; i < 5; i++) {\n  console.log(\"lunch box\");\n  if (i == 3) {\n    console.log(\"fruit\");\n  }\n}"]]],
["الدرس 5: عامل الإسناد +=",[["أنشئ برنامجًا: let i = 0; ثم i += 3; ثم اطبع i", "امسح الكود أو عدّله ليصبح هكذا.", "let i = 0;\ni += 3;\nconsole.log(i);"],
["أسند 5 إلى num (ولكن بدون num = num + 5)", "امسح الكود أو عدّله ليصبح هكذا.", "let num = 0;\nnum += 5;\nconsole.log(num);"]]],
["مراجعة الفصل 22",[["اختر ما يُكتب في بداية البرنامج لتكرار طباعة \"apple\" عشر مرات", "", "for"],
["اختر البرنامج الصحيح لإضافة 1 إلى المتغيّر i", "", "i++"],
["اختر البرنامج الصحيح لتكرار عملية محددة 10 مرات", "", "for (let i = 0; i < 10; i++) {\n  specified process;\n}"],
["اطبع \"Programming\" ثلاث مرات (المتغيّر i يبدأ من 0 مع عامل الزيادة)", "اكتب في المكان المخصص: let i = 0; i < 3; i++", "for (let i = 0; i < 3; i++) {\n  console.log(\"Programming\");\n}"],
["اطبع \"Good morning\" سبع مرات (المتغيّر i يبدأ من 0 مع عامل الزيادة)", "", "for ( let i = 0; i < 7; i++ ) {\n  console.log(\"Good morning\");\n}"],
["اختر ناتج التنفيذ: for (let i = 0; i < 3; i++) { let num = 100; } console.log(num);", "يؤدي إلى خطأ"],
["أضف برنامجًا يطبع \"End\" عندما تكون قيمة i مساوية لـ 4", "امسح الكود أو عدّله ليصبح بهذا الشكل.", "for (let i = 0; i < 5; i++) {\n  console.log(\"sit-ups\");\n  if (i == 4) {\n    console.log(\"End\");\n  }\n}"],
["اختر ناتج التنفيذ: for (let i = 0; i < 3; i++) { console.log(\"A\"); if (i == 1) { console.log(\"B\"); } }", "AABA"],
["اختر البرنامج المعاد كتابته للتعبير عن i = i + 2", "", "i += 2"]],"",1]
]}
,{id:23,title:"الفصل 23",sub:"الدوال (Functions)",lessons:[
["الدرس 1: إنشاء دالة واستدعاؤها",[["أنشئ دالة بالاسم divide6 ومعامل total، تُسند total ÷ 6 إلى per وتُرجع per", "", "function divide6(total) {\n  let per = total / 6;\n  return per;\n}"],
["استدعِ الدالة divide6 بالوسيط 72 وأخرج الناتج إلى وحدة التحكم", "اكتب في المكان المخصص: console.log(divide6(72));", "function divide6(total) {\n  let per = total / 6;\n  return per;\n}\nconsole.log(divide6(72));"],
["أنشئ دالة split5 بمعامل total تقسم على 5 وتُرجع per، ثم استدعها بالوسيط 6250", "", "function split5(total) {\n  let per = total / 5;\n  return per;\n}\nconsole.log(split5(6250));"]]],
["الدرس 2: نطاق المتغيّر داخل الدالة",[["اضغط «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["ماذا نسمّي النطاق الذي تكون فيه المتغيّرات قابلة للاستخدام؟", "Scope"],
["هل تؤدي هذه الشيفرة إلى خطأ؟ → function split5(total) { let result = total / 5; return result; } console.log(result);", "تؤدي إلى حدوث خطأ"],
["هل تؤدي هذه الشيفرة إلى خطأ؟ → function divide6(total) { let result = total / 6; return result; } console.log(divide6(72));", "لا تؤدي إلى خطأ"]]],
["الدرس 3: دالة بدون معاملات",[["اضغط «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["أنشئ دالة goodMorning بدون معاملات تُرجع \"Good morning!\" ثم استدعها وأخرج الناتج", "", "function goodMorning() {\n  let greeting = \"Good morning!\";\n  return greeting;\n}\nconsole.log(goodMorning());"]]],
["الدرس 4: دالة بأكثر من معامل",[["أنشئ دالة sum بمعاملين num1 و num2 تُرجع مجموعهما في result", "", "function sum(num1, num2) {\n  let result = num1 + num2;\n  return result;\n}"],
["استدعِ الدالة sum بالوسيطين 50 و 100 وأخرج الناتج", "اكتب في المكان المخصص: console.log(sum(50, 100));", "function sum(num1, num2) {\n  let result = num1 + num2;\n  return result;\n}\nconsole.log(sum(50, 100));"]]],
["مراجعة الفصل 23",[["اختر البرنامج الصحيح لإنشاء دالة باسم move بدون معاملات", "", "function move() {\n  Program to Run\n}"],
["اختر المخرجات: function calc(num) { let result = num + 5; return result; } console.log(calc(50));", "55"],
["اختر المخرجات: function calc( number ){ let answer = number * 10; return answer; } console.log( calc(3) );", "30"],
["مرّر القيمة 35 إلى الدالة divide5 وأخرج الناتج إلى وحدة التحكم", "عدّل السطر الأخير ليصبح: console.log(divide5(35));", "function divide5(total) {\n  let num = total / 5;\n  return num;\n}\nconsole.log(divide5(35));"],
["اختر نتيجة تنفيذ: function calc(num) { let answer = num * 3; return answer; } console.log(answer);", "ينتج عنه خطأ"],
["أنشئ دالة goodNight بدون معاملات تُرجع \"Good night!\" ثم استدعها وأخرج الناتج", "امسح الكود أو عدّله ليصبح هكذا.", "function goodNight() {\n  let greeting = \"Good night!\";\n  return greeting;\n}\nconsole.log(goodNight());"],
["استدعِ الدالة mul ومرّر المعاملين 9 و 7 وأخرج النتيجة", "اكتب في المكان المخصص: console.log(mul(9,7));", "function mul(num1, num2) {\n  let answer = num1 * num2;\n  return answer;\n}\nconsole.log(mul(9,7));"]],"",1]
]}
,{id:24,title:"الفصل 24",sub:"مراجعة الدروس 21–23",lessons:[
["الدرس 1: مراجعة الشروط والتكرار والدوال",[["أعلن score = 82؛ إذا كان 100 فاطبع \"Perfect Score\"، وإلا إذا كان ≥ 75 فاطبع \"Pass\"، وإلا \"Retest\"", "", "let score = 82;\nif (score == 100) {\n  console.log(\"Perfect Score\");\n} else if (score >= 75) {\n  console.log(\"Pass\");\n} else {\n  console.log(\"Retest\");\n}"],
["هل ينتج خطأ؟ → let contest = 1; if (contest == 1) { let prize = 30000; } console.log(prize + \" codycoins GET\");", "ينتج عنه خطأ"],
["هل ينتج خطأ؟ → for (let i = 0; i < 7; i++) { console.log(i); }", "لا ينتج عنه خطأ"],
["هل ينتج خطأ؟ → function split5(total) { let result = total / 5; return result; } console.log(result);", "ينتج عنه خطأ"],
["اطبع \"Test Passed\" إذا كان score ≥ 80، وبداخله إذا كان rank = 1 اطبع \"Trophy Acquired\" (بدون &&)", "", "let score = 90;\nlet rank = 1;\nif (score >= 80) {\n  console.log(\"Test Passed\");\n  if (rank == 1) {\n    console.log(\"Trophy Acquired\");\n  }\n}"],
["اطبع \"Apple, Apple, Banana, Apple\" بحلقة for (\"Apple\" ثلاث مرات، و\"Banana\" عند المرة الثانية)", "", "for (let i = 0; i < 3; i++) {\n  console.log(\"Apple\");\n  if (i == 1) {\n    console.log(\"Banana\");\n  }\n}"],
["أنشئ دالة goodNight بدون معاملات تُرجع greeting = \"Good night!\" ثم استدعها واطبع", "", "function goodNight() {\n  let greeting = \"Good night!\";\n  return greeting;\n}\nconsole.log(goodNight());"],
["أنشئ دالة calc بمعاملين num1 و num2 تُرجع حاصل ضربهما، ثم استدعها بالوسيطين 55 و 75", "", "function calc(num1, num2) {\n  let result = num1 * num2;\n  return result;\n}\nconsole.log(calc(55, 75));"]]],
["مراجعة الفصل 24 (اختبار منتصف الطريق)",[["أضف شرطًا ثانيًا: إذا كان A أصغر من B اطبع \"B is larger\"", "", "let A = 5\nlet B = 10\nif (A > B) {\n  console.log(\"A is larger\");\n} else if (A < B) {\n  console.log(\"B is larger\");\n}"],
["اختر العامل الصحيح لـ «تحقّق عدّة شروط في الوقت نفسه» (AND)", "", "&&"],
["اطبع \"Science is 100 points\" إذا كان science = 100، وبداخله إذا كان math = 100 اطبع \"Science and Math are 100 points\" (بدون &&)", "", "let science = 100;\nlet math = 100;\nif (science == 100) {\n  console.log(\"Science is 100 points\");\n  if (math == 100) {\n    console.log(\"Science and Math are 100 points\");\n  }\n}"],
["اطبع \"Good morning\" سبع مرات (i يبدأ من 0 مع عامل الزيادة)", "", "for (let i = 0; i < 7; i++) {\n  console.log(\"Good morning\");\n}"],
["اختر نتيجة التنفيذ: for (let i = 0; i < 3; i++) { let num = 100; } console.log(num);", "ينتج عنه خطأ"],
["اختر نتيجة التنفيذ: for (let i = 0; i < 4; i++) { console.log(\"0\"); if (i == 2) { console.log(\"1\"); } }", "00010"],
["اختر إعادة كتابة البرنامج لـ i = i + 5", "", "i += 5"],
["مرّر القيمة 12345 إلى الدالة divide3 واطبع الناتج", "", "function divide3(num) {\n  let result = num / 3;\n  return result;\n}\nconsole.log(divide3(12345));"],
["اختر البرنامج الصحيح لإنشاء دالة move بلا معاملات", "", "function move() {\n  Program to Run\n}"],
["أنشئ دالة mul بالمعاملين num1 و num2 تُرجع حاصل ضربهما، ثم استدعها بالوسيطين 9 و 7", "", "function mul(num1, num2) {\n  let result = num1 * num2;\n  return result;\n}\nconsole.log(mul(9,7));"]],"",1]
]}
,{id:25,title:"الفصل 25",sub:"التكرار (٣): الضرب والجمع التراكمي",lessons:[
["الدرس 1: تكرار عملية الضرب",[["عندما تحتاج إلى «تكرار» عملية الضرب، أي نوع من البرامج تستخدم؟", "حلقة for"],
["اضغط على «تشغيل الكود» بدون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["اضغط على «تشغيل الكود» بدون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["اضغط على «تشغيل الكود» بدون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."]]],
["الدرس 2: حساب القوى",[["احسب 2×2×2×2×2", "امسح الكود أو عدّله ليصبح هكذا.", "let num = 1;\nfor (let i = 0; i < 5; i++) {\n  num = num * 2;\n}\nconsole.log(num);"],
["احسب 4×4×4×4: صرّح عن num = 1 وكرّر num = num * 4 أربع مرات ثم اطبع", "", "let num = 1;\nfor (let i = 0; i < 4; i++) {\n  num = num * 4;\n}\nconsole.log(num);"],
["احسب 4×4×4×4 بحلقة تبدأ من i = 1", "اكتب في المكان المخصص: let i = 1; i <= 4; i++", "let num = 1;\nfor (let i = 1; i <= 4; i++) {\n  num = num * 4;\n}\nconsole.log(num);"]]],
["الدرس 3: الضرب بقيمة i",[["اضغط على «تشغيل الكود» بدون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["احسب 1×2×3×4×5", "امسح الكود أو عدّله ليصبح هكذا.", "let num = 1;\nfor (let i = 1; i <= 5; i++) {\n  num = num * i;\n}\nconsole.log(num);"],
["احسب 1×2×3×…×10: i يبدأ من 1 والشرط i ≤ 10", "", "let num = 1;\nfor (let i = 1; i <= 10; i++) {\n  num = num * i;\n}\nconsole.log(num);"]]],
["مراجعة الفصل 25",[["اختر نتيجة التنفيذ: let num = 1; for (let i = 0; i < 3; i++) { num = num * 2; } console.log(num);", "8"],
["احسب 7×7×7×7×7 (i من 0 والشرط i < 5) واطبع النتيجة مرة واحدة في النهاية", "", "let num = 1;\nfor(let i = 0; i < 5; i++){\n  num = num * 7;\n}\nconsole.log(num);"],
["اختر التمثيل الأنسب لتغيّر قيمة i في: let num = 1; for(let i = 1; i <= 7; i++){ num = num * 2; } console.log(num);", "1→2→3→4→5→6→7"],
["احسب 0+1+2+3+4+5: num يبدأ من 0 و i من 0 والشرط i < 6", "", "let num = 0;\nfor (let i = 0; i < 6; i++) {\n  num = num + i;\n}\nconsole.log(num);"],
["احسب 5040÷1÷2÷3÷4÷5: num = 5040 و i من 1 والشرط i ≤ 5", "", "let num = 5040;\nfor(let i = 1; i <= 5; i++){\n  num = num / i;\n}\nconsole.log(num);"]],"",1]
]}
,{id:26,title:"الفصل 26",sub:"المصفوفات (Arrays)",lessons:[
["الدرس 1: إنشاء مصفوفة والوصول لقيمها",[["ما اسم البرنامج الذي يمكنه تجميع عدة قيم معًا؟", "مصفوفة (Array)"],
["أسند درجات الحرارة 36.2، 36.5، 36.3، 36.8، 36.4 إلى tempList", "", "let tempList = [36.2, 36.5, 36.3, 36.8, 36.4];"],
["ما الناتج؟ → let tempList = [36.2, 36.5, 36.3, 36.8, 36.4]; console.log(tempList[2]);", "36.3"],
["اطبع القيمة الثانية من tempList", "اكتب في السطر الثاني: console.log(tempList[2]);", "let tempList = [36.2, 36.5, 36.3, 36.8, 36.4];\nconsole.log(tempList[2]);"],
["اطبع القيمة 36.8 من tempList دون إدخالها مباشرة", "اكتب في السطر الثاني.", "let tempList = [36.2, 36.5, 36.3, 36.8, 36.4];\nconsole.log(tempList[3]);"]]],
["الدرس 2: متوسط القيم",[["أسند 7 درجات حرارة: 36.2، 36.5، 36.3، 36.8، 36.4، 36.9، 37.0 إلى tempList", "", "let tempList = [36.2, 36.5, 36.3, 36.8, 36.4, 36.9, 37.0];"],
["اعرض متوسط درجة الحرارة خلال 7 أيام (من السطر الثاني)", "اكتب من السطر الثاني إلى السادس.", "let tempList = [36.2, 36.5, 36.3, 36.8, 36.4, 36.9, 37.0];\nlet sum = 0;\nfor(let i = 0; i < 7; i++){\n  sum = sum + tempList[i];\n}\nconsole.log(sum / 7);"],
["سؤال ترفيهي: ما هي درجة حرارة جسم كودي؟", "خمّن أي اختيار، لا توجد مشكلة."]]],
["الدرس 3: خاصية length",[["اعرض عدد القيم الموجودة في المصفوفة", "اكتب في سطر جديد وأبقِ الكود المكتوب كما هو.", "let tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nconsole.log(tempList.length);"],
["متوسط درجة الحرارة خلال 14 يومًا", "اكتب 14 في المكانين المخصصين.", "let tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nlet sum = 0;\nfor (let i = 0; i < 14; i++) {\n  sum = sum + tempList[i];\n}\nconsole.log(sum / 14);"],
["متوسط درجة الحرارة باستخدام tempList.length", "اكتب في الأماكن المخصصة: let i = 0; i < tempList.length; i++ ثم tempList.length", "let tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nlet sum = 0;\nfor(let i = 0; i < tempList.length; i++){\n  sum = sum + tempList[i];\n}\nconsole.log(sum / tempList.length);"]]],
["الدرس 4: if داخل الحلقة مع المصفوفة",[["اعرض \"Be careful!\" إذا وُجدت درجة حرارة 37.0 أو أعلى", "اترك الكود المكتوب وأكمل من سطر جديد.", "let tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nfor (let i = 0; i < tempList.length; i++) {\n  if (tempList[i] >= 37.0) {\n    console.log(\"Be careful!\");\n  }\n}"],
["اعرض \"Avoid going outside!\" إذا وُجدت درجة حرارة 37.5 أو أعلى", "امسح الكود أو عدّله ليصبح هكذا.", "let tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nfor (let i = 0; i < tempList.length; i++) {\n  if (tempList[i] >= 37.5) {\n    console.log(\"Avoid going outside!\");\n  }\n}"]]],
["مراجعة الفصل 26",[["اختر نتيجة الإخراج: let scoreList = [52, 60, 79, 82, 66, 59, 88]; console.log(scoreList[2]);", "79"],
["اطبع القيمة 59 من scoreList دون إدخالها مباشرة", "اكتب في السطر الثاني.", "let scoreList = [52, 60, 79, 82, 66, 59, 88];\nconsole.log(scoreList[5]);"],
["اطبع متوسط الدرجات لـ 7 أشخاص (بدون length)", "اكتب من السطر الثاني.", "let scoreList = [52, 60, 79, 82, 66, 59, 88];\nlet sum = 0;\nfor(let i = 0; i < 7; i++){\n  sum = sum + scoreList[i];\n}\nconsole.log(sum / 7);"],
["اطبع عدد القيم الموجودة في scoreList", "اكتب في السطر الثاني.", "let scoreList = [52, 60, 79, 82, 66, 59, 88];\nconsole.log(scoreList.length);"],
["اطبع \"80 points or higher\" إذا كانت الدرجة 80 أو أكثر", "اكتب من السطر الثاني إلى السادس.", "let scoreList = [52, 60, 79, 82, 66, 59, 88];\nfor (let i = 0; i < scoreList.length; i++) {\n  if (scoreList[i] >= 80) {\n    console.log(\"80 points or higher\");\n  }\n}"]],"",1]
]}
,{id:27,title:"الفصل 27",sub:"مراجعة الفصلين 25 و26",lessons:[
["الدرس 1: مراجعة الفصلين 25 و26",[["احسب 7×7×7×7×7×7×7: num = 1 وكرّر 7 مرات (i من 0 والشرط i < 7)", "", "let num = 1;\nfor (let i = 0; i < 7; i++) {\n  num = num * 7;\n}\nconsole.log(num);"],
["احسب 1×2×3×4×5", "امسح الكود أو عدّله ليصبح هكذا.", "let num = 1;\nfor (let i = 1; i <= 5; i++) {\n  num = num * i;\n}\nconsole.log(num);"],
["اضرب الأعداد من 1 إلى 15 على التوالي", "", "let num = 1;\nfor (let i = 1; i <= 15; i++) {\n  num = num * i;\n}\nconsole.log(num);"],
["ما النتيجة؟ → let tempList = [36.2, 36.5, 36.3, 36.8, 36.4]; console.log(tempList[3]);", "36.8"],
["اطبع القيمة 36.4 من tempList دون إدخالها مباشرة", "اكتب في السطر الثاني.", "let tempList = [36.0, 36.5, 36.3, 36.8, 36.4];\nconsole.log(tempList[4]);"],
["اطبع متوسط درجة الحرارة باستخدام variableName.length", "اكتب tempList.length في المكانين المخصصين.", "let tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nlet sum = 0;\nfor(let i = 0; i < tempList.length; i++){\n  sum = sum + tempList[i];\n}\nconsole.log(sum / tempList.length);"],
["اطبع \"Be careful!\" إذا وُجدت درجة حرارة 37.0 أو أعلى", "اترك الكود المكتوب وأكمل من سطر جديد.", "let tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nfor (let i = 0; i < tempList.length; i++) {\n  if (tempList[i] >= 37.0) {\n    console.log(\"Be careful!\");\n  }\n}"]]],
["مراجعة الفصل 27",[["احسب 9×9×9 (i من 0 والشرط i < 3) واطبع النتيجة مرة واحدة", "", "let num = 1;\nfor (let i = 0; i < 3; i++) {\n  num = num * 9;\n}\nconsole.log(num);"],
["اختر التمثيل الأنسب لتغيّر i في: let num = 1; for (let i = 1; i <= 4; i++) { num = num * 2; } console.log(num);", "1→2→3→4"],
["احسب 5040÷1÷2÷3÷4÷5", "", "let num = 5040;\nfor (let i = 1; i <= 5; i++) {\n  num = num / i;\n}\nconsole.log(num);"],
["اطبع القيمة 63 من scoreList دون إدخالها مباشرة", "اكتب في المكان المخصص: scoreList[4]", "let scoreList = [52, 90, 70, 83, 63, 72, 89];\nconsole.log(scoreList[4]);"],
["اطبع عدد القيم في scoreList", "اكتب في المكان المخصص: scoreList.length", "let scoreList = [52, 90, 70, 83, 63, 72, 89];\nconsole.log(scoreList.length);"],
["اطبع \"Pass\" إذا كانت الدرجة 80 أو أعلى", "اكتب من السطر الثاني.", "let scoreList = [52, 90, 70, 83, 63, 72, 89];\nfor (let i = 0; i < scoreList.length; i++) {\n  if (scoreList[i] >= 80) {\n    console.log(\"Pass\");\n  }\n}"]],"",1]
]}
,{id:28,title:"الفصل 28",sub:"حلقة for…of",lessons:[
["الدرس 1: تكرار قيم المصفوفة",[["أضف درجات حرارة الأسبوع (2، 1، 2، 1، 0، 1، 1) إلى degreeList واطبع القيمة الرابعة دون إدخالها مباشرة", "", "let degreeList = [2, 1, 2, 1, 0, 1, 1];\nconsole.log(degreeList[4]);"],
["فيما تُستخدم حلقات for التكرارية؟", "تكرار الأشياء"],
["اطبع جميع قيم degreeList بالترتيب", "اترك الكود المكتوب واكتب من السطر الثاني إلى الرابع.", "let degreeList = [2, 1, 2, 1, 0, 1, 1];\nfor (let i = 0; i < 7; i++) {\n  console.log(degreeList[i]);\n}"],
["اطبع جميع قيم degreeList باستخدام length", "اكتب degreeList.length في المكان المخصص.", "let degreeList = [2, 1, 2, 1, 0, 1, 1];\nfor (let i = 0; i < degreeList.length; i++) {\n  console.log(degreeList[i]);\n}"]]],
["الدرس 2: for…of",[["تحقق من البرنامج وانقر على «تشغيل الكود»", "اضغط تشغيل الكود فقط."],
["اعرض جميع قيم درجات الحرارة السبعة باستخدام for…of", "اترك الكود المكتوب واكتب من السطر الثاني.", "let degreeList = [8, 6, 11, 10, 9, 7, 12];\nfor (let degree of degreeList) {\n  console.log(degree);\n}"]]],
["الدرس 3: for…of مع الأعداد والنصوص",[["اطبع جميع قيم numList باستخدام for…of (المتغيّر num)", "اترك الكود الموجود واكتب من السطر الثاني.", "let numList = [5, 10, 15, 20];\nfor (let num of numList) {\n  console.log(num);\n}"],
["أضف apple و banana و orange إلى wordList واطبعها باستخدام for…of (المتغيّر word)", "", "let wordList = [\"apple\", \"banana\", \"orange\"];\nfor (let word of wordList) {\n  console.log(word);\n}"]]],
["مراجعة الفصل 28",[["حدد نتيجة التنفيذ: let numList = [8, 6, 11, 10, 9, 7, 12]; console.log(numList[2]);", "11"],
["حدد نتيجة التنفيذ: let numList = [10, 11, 12]; for (let i = 0; i < 3; i++) { console.log(numList[i]); }", "10 ثم 11 ثم 12 (كل رقم في سطر)"],
["حدد نتيجة التنفيذ: let numList = [5, 6, 7]; for (let i = 0; i < numList.length; i++) { console.log(numList[i]); }", "5 ثم 6 ثم 7 (كل رقم في سطر)"],
["اطبع جميع قيم numList باستخدام for…of (المتغيّر num)", "اكتب من السطر الثاني.", "let numList = [2, 4, 6, 8];\nfor (let num of numList) {\n  console.log(num);\n}"],
["اطبع جميع قيم wordList باستخدام for…of (المتغيّر word)", "اكتب من السطر الثاني.", "let wordList = [\"Good morning\", \"Good night\", \"Hello\"];\nfor (let word of wordList) {\n  console.log(word);\n}"]],"",1]
]}
,{id:29,title:"الفصل 29",sub:"الشروط المتداخلة",lessons:[
["الدرس 1: if / else if / else",[["أعلن score = 100؛ وإذا كان يساوي 100 فاطبع \"Reward is steak\"", "", "let score = 100;\nif (score == 100) {\n  console.log(\"Reward is steak\");\n}"],
["أضف شرطًا ثانيًا: إذا كان score ≥ 80 فاطبع \"Reward is cake\" (score = 85)", "اكتب من السطر الرابع بعد القوس إلى السادس.", "let score = 85;\nif (score == 100) {\n  console.log(\"Reward is steak\");\n} else if (score >= 80) {\n  console.log(\"Reward is cake\");\n}"],
["أضف الحالة الأخيرة \"No games for a week\" (score = 62)", "اكتب من السطر السادس بعد القوس إلى الثامن.", "let score = 62;\nif (score == 100) {\n  console.log(\"Reward is steak\");\n} else if (score >= 80) {\n  console.log(\"Reward is cake\");\n} else {\n  console.log(\"No games for a week\");\n}"]]],
["الدرس 2: العدّاد داخل if",[["اطبع \"Big catch!\" إذا كان fish ≥ 50", "", "let fish = 50;\nif (fish >= 50) {\n  console.log(\"Big catch!\");\n}"],
["اطبع \"Big catch!\" مع عدّاد الأسماك الكبيرة \"Big fish counter:\"", "امسح الكود أو عدّله ليصبح هكذا.", "let fish = 50;\nlet count = 0;\nif (fish >= 50) {\n  console.log(\"Big catch!\");\n  count = count + 1;\n  console.log(\"Big fish counter:\" + count);\n}"],
["اطبع \"Super big catch!\" وعدّاد \"Super big fish counter:\" إذا كان fish ≥ 100 (داخل if)", "أكمل الكود من السطر الثاني إلى السابع.", "let fish = 120;\nlet count = 0;\nif (fish >= 100) {\n  console.log(\"Super big catch!\");\n  count = count + 1;\n  console.log(\"Super big fish counter:\" + count);\n}"]]],
["الدرس 3: if داخل if (النزهة)",[["إذا كان weather = \"sunny\" فاطبع \"Picnic in the park\"، وإلا \"Lunch at home\"", "اكتب الكود من السطر الثاني.", "let weather = \"sunny\";\nif (weather == \"sunny\") {\n  console.log(\"Picnic in the park\");\n} else {\n  console.log(\"Lunch at home\");\n}"],
["إذا كان الجو مشمسًا والمخبز مفتوحًا اطبع \"Let's buy bread and go for a picnic\"", "اكتب في المكان المخصص: let shop = \"OPEN\"; ثم الشرط shop == \"OPEN\"", "let weather = \"sunny\";\nlet shop = \"OPEN\";\nif (weather == \"sunny\") {\n  if (shop == \"OPEN\") {\n    console.log(\"Let's buy bread and go for a picnic\");\n  }\n} else {\n  console.log(\"Lunch at home\");\n}"],
["أضف حالة المخبز المغلق: \"Let's buy apple and go for a picnic\" (shop = \"CLOSED\")", "اكتب else { … } في الأماكن الثلاثة المخصصة.", "let weather = \"sunny\";\nlet shop = \"CLOSED\";\nif (weather == \"sunny\") {\n  if (shop == \"OPEN\") {\n    console.log(\"Let's buy bread and go for a picnic\");\n  } else {\n    console.log(\"Let's buy apple and go for a picnic\");\n  }\n} else {\n  console.log(\"Lunch at home\");\n}"]]],
["الدرس 4: الرحلة المدرسية",[["اطبع \"Let's go on the field trip\" إذا كان الجو مشمسًا، وإلا \"Field trip canceled\"", "اكتب من السطر الثاني.", "let weather = \"sunny\";\nif (weather == \"sunny\") {\n  console.log(\"Let's go on the field trip\");\n} else {\n  console.log(\"Field trip canceled\");\n}"],
["إذا كان الجو مشمسًا والمجموعة A فالوجهة zoo، وإلا museum، وإذا ممطر \"Field trip canceled\"", "امسح الكود أو عدّله ليصبح هكذا (السطر الثالث فارغ كما هو مكتوب).", "let weather = \"sunny\";\nlet group = \"Group A\";\nif (weather == \"sunny\") {\n  if (group == \"Group A\") {\n    console.log(\"Destination is the zoo\");\n  } else {\n    console.log(\"Destination is the museum\");\n  }\n} else {\n  console.log(\"Field trip canceled\");\n}"],
["أضف المجموعة B (museum) والمجموعة C (art museum) (group = \"Group C\")", "امسح الكود أو عدّله ليصبح هكذا (السطر الثالث فارغ كما هو مكتوب).", "let weather = \"sunny\";\nlet group = \"Group C\";\nif (weather == \"sunny\") {\n  if (group == \"Group A\") {\n    console.log(\"Destination is the zoo\");\n  } else if (group == \"Group B\") {\n    console.log(\"Destination is the museum\");\n  } else {\n    console.log(\"Destination is the art museum\");\n  }\n} else {\n  console.log(\"Field trip canceled\");\n}"]]],
["مراجعة الفصل 29",[["أضف شرطًا ثانيًا: إذا كان A < B اطبع \"B is bigger\"", "أكمل الكود أو عدّله ليصبح هكذا.", "let A = 5;\nlet B = 10;\nif (A > B) {\n  console.log(\"A is bigger\");\n} else if (A < B) {\n  console.log(\"B is bigger\");\n}"],
["حدد نتيجة التنفيذ: let A = 500; let B = 0; if (A >= 1) { B = B + 100; console.log(B); }", "100"],
["حدد نتيجة التنفيذ: let weather = \"sunny\"; let group = \"B group\"; if (weather == \"sunny\") { if (group == \"A group\") { console.log(\"Destination is the park\"); } else { console.log(\"Destination is the amusement park\"); } } else { console.log(\"Destination is the aquarium\"); }", "Destination is the amusement park"],
["أنشئ برنامجًا متداخلًا: إذا كان الجو مشمسًا والمتجر مفتوحًا (OPEN) فاطبع الرسالة", "امسح الكود أو عدّله ليصبح هكذا (السطر الثالث فارغ كما هو مكتوب).", "let weather = \"sunny\";\nlet shop = \"OPEN\";\nif (weather == \"sunny\") {\n  if (shop == \"OPEN\") {\n    console.log(\"Go to the store\");\n  }\n} else {\n  console.log(\"Staying at home\");\n}"],
["غيّر الوجهة حسب الوقت إذا كان الطقس ممطرًا (سينما صباحًا، مكتبة ظهرًا، المنزل في الباقي)، وإلا نزهة", "امسح الكود أو عدّله ليصبح هكذا (السطر الثالث فارغ كما هو مكتوب).", "let weather = \"rain\";\nlet time = \"morning\";\nif (weather == \"rain\") {\n  if (time == \"morning\") {\n    console.log(\"Let's go to the movie theater\");\n  } else if (time == \"noon\") {\n    console.log(\"Let's go to the library\");\n  } else {\n    console.log(\"Let's stay at home\");\n  }\n} else {\n  console.log(\"Let's go for a walk\");\n}"]],"",1]
]}
,{id:30,title:"الفصل 30",sub:"مراجعة الفصلين 28 و29",lessons:[
["الدرس 1: مراجعة الفصلين 28 و29",[["اطبع جميع قيم درجات الحرارة السبعة باستخدام for…of", "اكتب من السطر الثاني.", "let degreeList = [8, 6, 11, 10, 9, 7, 12];\nfor (let degree of degreeList) {\n  console.log(degree);\n}"],
["أضف tomato و carrot و onion إلى wordList واطبعها باستخدام for…of (المتغيّر word)", "", "let wordList = [\"tomato\", \"carrot\", \"onion\"];\nfor (let word of wordList) {\n  console.log(word);\n}"],
["اطبع \"Big catch\" وعدّاد الأسماك الكبيرة إذا كان fish ≥ 50", "امسح الكود أو عدّله ليصبح هكذا.", "let fish = 50;\nlet big = 0;\nif (fish >= 50) {\n  console.log(\"Big catch!！\");\n  big = big + 1;\n  console.log(\"Big fish counter:\" + big);\n}"],
["اطبع \"Buy bread and have a picnic\" إذا كان الجو مشمسًا والمخبز مفتوحًا، وإلا \"Lunch at home\"", "انسخ الكود أو عدّله ليصبح هكذا (السطر الثالث فارغ كما هو أمامك).", "let weather = \"sunny\";\nlet shop = \"OPEN\";\nif (weather == \"sunny\") {\n  if (shop == \"OPEN\") {\n    console.log(\"Buy bread and have a picnic\");\n  }\n} else {\n  console.log(\"Lunch at home\");\n}"],
["الرحلة المدرسية: zoo للمجموعة A، وإلا museum، و\"Field trip canceled\" إذا كان ممطرًا (group = \"Group A\")", "انسخ الكود أو عدّله ليصبح هكذا (السطر الثالث فارغ كما هو أمامك).", "let weather = \"sunny\";\nlet group = \"Group A\";\nif (weather == \"sunny\") {\n  if (group == \"Group A\") {\n    console.log(\"Destination is the zoo\");\n  } else {\n    console.log(\"Destination is the museum\");\n  }\n} else {\n  console.log(\"Field trip canceled\");\n}"]]],
["مراجعة الفصل 30 (اختبار منتصف الطريق)",[["حدد نتيجة التنفيذ: let numList = [5, 6, 7]; for (let i = 0; i < numList.length; i++) { console.log(numList[i]); }", "5 ثم 6 ثم 7 (كل رقم في سطر)"],
["اطبع جميع قيم numList باستخدام for…of (المتغيّر num)", "اكتب من السطر الثاني.", "let numList = [2, 4, 6, 8];\nfor (let num of numList) {\n  console.log(num);\n}"],
["اطبع جميع قيم wordList باستخدام for…of (المتغيّر word)", "اكتب من السطر الثاني.", "let wordList = [\"Good morning\", \"Good night\", \"Hello\"];\nfor (let word of wordList) {\n  console.log(word);\n}"],
["حدد نتيجة التنفيذ: let A = 500; let B = 0; if (A >= 1) { B = B + 100; console.log(B); }", "100"],
["حدد نتيجة التنفيذ: let weather = \"sunny\"; let group = \"B group\"; if (weather == \"sunny\") { if (group == \"A group\") { console.log(\"Destination is the park\"); } else { console.log(\"Destination is the amusement park\"); } } else { console.log(\"Destination is the aquarium\"); }", "Destination is the amusement park"],
["غيّر الوجهة حسب الوقت إذا كان الطقس ممطرًا، وإلا نزهة", "امسح الكود أو عدّله ليصبح هكذا (السطر الثالث فارغ كما هو موضح).", "let weather = \"rain\";\nlet time = \"morning\";\nif (weather == \"rain\") {\n  if (time == \"morning\") {\n    console.log(\"Let's go to the movie theater\");\n  } else if (time == \"noon\") {\n    console.log(\"Let's go to the library\");\n  } else {\n    console.log(\"Let's stay at home\");\n  }\n} else {\n  console.log(\"Let's go for a walk\");\n}"]],"",1]
]}
,{id:31,title:"الفصل 31",sub:"الدوال بأكثر من معامل",lessons:[
["الدرس 1: دالة تجمع قيمتين",[["أنشئ دالة sum بالمعاملين freestyle و breaststroke تُرجع مجموعهما في result", "", "function sum(freestyle, breaststroke) {\n  let result = freestyle + breaststroke;\n  return result;\n}"],
["استدعِ الدالة sum بالوسيطين 39.5 و 60.5 واطبع الناتج", "اكتب في المكان المخصص: console.log(sum(39.5, 60.5));", "function sum(freestyle, breaststroke) {\n  let result = freestyle + breaststroke;\n  return result;\n}\nconsole.log(sum(39.5, 60.5));"],
["أعلن teamRed وأسند إليه sum(39.5, 60.5) ثم اطبعه (من السطر 6)", "اكتب في السطر السادس والسابع بعد الأكواد المكتوبة.", "function sum(freestyle, breaststroke) {\n  let time = freestyle + breaststroke;\n  return time;\n}\n//Write your program below.\nlet teamRed = sum(39.5, 60.5);\nconsole.log(teamRed);"]]],
["الدرس 2: ثلاثة معاملات",[["أضف المعامل backstroke إلى مجموع المعاملات ومرّر 58.5 عند الاستدعاء", "اكتب في الأماكن المخصصة: backstroke ثم backstroke ثم 58.5", "function sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);"],
["أعلن teamBlue وأسند إليه sum(40, 62, 58) ثم اطبعه (من السطر 7)", "اكتب في السطرين السابع والثامن بعد الكود المكتوب.", "function sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);\nlet teamBlue = sum(40, 62, 58);\nconsole.log(teamBlue);"],
["أعلن teamGreen وأسند إليه sum(41, 59.5, 60) ثم اطبعه (من السطر 9)", "اكتب في السطرين التاسع والعاشر بعد الكود المكتوب.", "function sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);\nlet teamBlue = sum(40, 62, 58);\nconsole.log(teamBlue);\nlet teamGreen = sum(41, 59.5, 60);\nconsole.log(teamGreen);"]]],
["الدرس 3: Math.min",[["اضغط على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["اعرض أسرع زمن: Math.min(158.5, 160, 160.5) (السطر 11)", "اكتب في المكان المخصص في آخر سطر: Math.min(158.5, 160, 160.5)", "function sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);\nlet teamBlue = sum(40, 62, 58);\nconsole.log(teamBlue);\nlet teamGreen = sum(41, 59.5, 60);\nconsole.log(teamGreen);\nconsole.log(\"The fastest time is\" + Math.min(158.5, 160, 160.5));"],
["اعرض أسرع زمن باستخدام المتغيرات (السطر 11)", "اكتب في آخر سطر: Math.min(teamRed, teamBlue, teamGreen)", "function sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);\nlet teamBlue = sum(40, 62, 58);\nconsole.log(teamBlue);\nlet teamGreen = sum(41, 59.5, 60);\nconsole.log(teamGreen);\nconsole.log(\"The fastest time is\" + Math.min(teamRed, teamBlue, teamGreen));"]]],
["مراجعة الفصل 31",[["أنشئ الدالة calculation3 بالمعاملات a و b و c تُرجع a×b×c", "امسح الكود أو عدّله ليصبح هكذا.", "function calculation3(a, b, c) {\n  let result = a * b * c;\n  return result;\n}\nconsole.log(calculation3(2, 3, 4));"],
["اختر البرنامج الذي يمرر الوسائط 3 و5 و10 إلى calculation3 ويعرض الناتج", "", "console.log(calculation3(3, 5, 10));"],
["أعلن num1 وأسند إليه calculation3(5, 10, 15) (السطر الخامس)", "امسح الكود أو عدّله ليصبح هكذا.", "function calculation3(a, b, c) {\n  let result = a * b * c;\n  return result;\n}\nlet num1 = calculation3(5, 10, 15);\nconsole.log(num1);"],
["أعلن num2 وأسند إليه calculation3(4, 4, 4) ثم اطبعه (من السطر السابع)", "امسح الكود أو عدّله ليصبح هكذا.", "function calculation3(a, b, c) {\n  let result = a * b * c;\n  return result;\n}\nlet num1 = calculation3(5, 10, 15);\nconsole.log(num1);\nlet num2 = calculation3(4, 4, 4);\nconsole.log(num2);"],
["اختر البرنامج الذي يعرض أصغر قيمة بين num1 و num2 و num3", "", "console.log(Math.min(num1, num2, num3));"]],"",1]
]}
,{id:32,title:"الفصل 32",sub:"المخطط الانسيابي",lessons:[
["الدرس 1: عدّ القيم في المصفوفة",[["اطبع جميع القيم الموجودة في المصفوفة", "اكتب في المكان المخصص: let day of volunteerList", "let volunteerList = [\"Yes\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"Yes\", \"No\"];\nfor (let day of volunteerList) {\n  console.log(day);\n}"],
["احسب واطبع عدد مرات القيمة \"Yes\" في المصفوفة (من السطر الرابع)", "امسح الكود أو عدّله ليصبح هكذا.", "let volunteerList = [\"Yes\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"Yes\", \"No\"];\nlet count = 0;\nfor (let day of volunteerList) {\n  if (day == \"Yes\") {\n    count++;\n  }\n}\nconsole.log(count);"],
["احسب واطبع عدد مرات القيمة \"No\" باستخدام عامل الزيادة (increment)", "امسح الكود أو عدّله ليصبح هكذا.", "let volunteerList = [\"Yes\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"Yes\", \"No\"];\nlet count = 0;\nfor (let day of volunteerList) {\n  if (day == \"No\") {\n    count++;\n  }\n}\nconsole.log(count);"]]],
["الدرس 2: الشطائر (if / else)",[["إذا كان sandwichType هو \"savory\" فاطبع \"Check what's inside the sandwich\"، وإلا \"Eat strawberry jam sandwich\"", "اكتب من السطر الثاني.", "let sandwichType = \"strawberry jam\";\nif (sandwichType == \"savory\") {\n  console.log(\"Check what's inside the sandwich\");\n} else {\n  console.log(\"Eat strawberry jam sandwich\");\n}"],
["إذا كانت الشطيرة مالحة: اطبع \"Exchange with Cody\" إذا كانت تونة، وإلا \"Eat ham sandwich\" (من السطر الرابع)", "امسح الكود أو عدّله ليصبح هكذا.", "let sandwichType = \"savory\";\nlet savory = \"tuna\";\nif (sandwichType == \"savory\") {\n  if (savory == \"tuna\") {\n    console.log(\"Exchange with Cody\");\n  } else {\n    console.log(\"Eat ham sandwich\");\n  }\n} else {\n  console.log(\"Eat strawberry jam sandwich\");\n}"]]],
["مراجعة الفصل 32",[["اختر التعبير المناسب داخل القوسين في جملة for لعرض قيم scoreList: let scoreList = [70, 80, 66, 88, 92]; for ( ) { console.log(score); }", "", "let score of scoreList"],
["اختر ناتج الإخراج: let scoreList = [70, 80, 66, 88, 92]; for (let score of scoreList) { if (score >= 80) { console.log(score); } }", "80 ثم 88 ثم 92"],
["اكتب برنامجًا يعرض فقط القيم من heightList التي تساوي أو تزيد عن 150 (لا تحذف الأصلي)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ كما هو واضح).", "let heightList = [154, 138, 140, 180, 170];\nfor (let height of heightList) {\n  if (height >= 150) {\n    console.log(height);\n  }\n}"],
["يُستخدم المخطط الانسيابي لتحديد هل يستطيع الشخص ركوب الأفعوانية. اختر العبارة غير الصحيحة بناءً على المخطط (الأفعوانية)", "إذا كان طولك 140 سم أو أكثر، يمكنك الركوب بمفردك."],
["أنشئ برنامجًا متداخلًا بناءً على المخطط الانسيابي (height و age)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثالث فارغ كما هو واضح).", "let height = 148;\nlet age = 14;\nif (height >= 140) {\n  if (age >= 12) {\n    console.log(\"You can ride alone\");\n  } else {\n    console.log(\"Please ride with someone who is 18 years or older\");\n  }\n} else {\n  console.log(\"You cannot ride\");\n}"]],"",1]
]}
,{id:33,title:"الفصل 33",sub:"مراجعة الفصلين 31 و32",lessons:[
["الدرس 1: مراجعة الفصلين 31 و32",[["أنشئ دالة sum بالمعاملات freestyle و breaststroke و backstroke تُرجع مجموعها في result", "", "function sum(freestyle, breaststroke, backstroke) {\n  let result = freestyle + breaststroke + backstroke;\n  return result;\n}"],
["أعلن teamRed وأسند إليه sum(39.5, 60.5, 58.5) ثم اطبعه (من السطر الخامس)", "اكتب في السطرين الخامس والسادس بعد الأكواد المكتوبة.", "function sum(freestyle, breaststroke, backstroke) {\n  let result = freestyle + breaststroke + backstroke;\n  return result;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);"],
["أعلن teamBlue (40, 62, 58) و teamGreen (41, 59.5, 60) واطبعهما (من السطر 7)", "اكتب من السطر السابع إلى العاشر بعد الأكواد المكتوبة.", "function sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);\nlet teamBlue = sum(40, 62, 58);\nconsole.log(teamBlue);\nlet teamGreen = sum(41, 59.5, 60);\nconsole.log(teamGreen);"],
["اطبع أسرع زمن إجمالي بين الفرق الثلاثة (السطر 11)", "اكتب في السطر الأخير: Math.min(teamRed, teamBlue, teamGreen)", "function sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);\nlet teamBlue = sum(40, 62, 58);\nconsole.log(teamBlue);\nlet teamGreen = sum(41, 59.5, 60);\nconsole.log(teamGreen);\nconsole.log(\"The fastest time is\" + Math.min(teamRed, teamBlue, teamGreen));"],
["اطبع جميع القيم الموجودة في المصفوفة", "اكتب في المكان المخصص: let day of volunteerList", "let volunteerList = [\"Yes\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"Yes\", \"No\"];\nfor (let day of volunteerList) {\n  console.log(day);\n}"],
["احسب واطبع عدد مرات \"Yes\" في المصفوفة (من السطر الرابع)", "امسح الكود أو عدّله ليصبح هكذا.", "let volunteerList = [\"Yes\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"Yes\", \"No\"];\nlet count = 0;\nfor (let day of volunteerList) {\n  if (day == \"Yes\") {\n    count++;\n  }\n}\nconsole.log(count);"],
["بناءً على المخطط الانسيابي: إذا كان weather = \"sunny\" فاطبع \"exercise\"، وإلا \"read a book\"", "اكتب من السطر الثاني.", "let weather = \"sunny\";\nif (weather == \"sunny\") {\n  console.log(\"exercise\");\n} else {\n  console.log(\"read a book\");\n}"],
["إذا كانت الشطيرة مالحة: \"Exchange with Cody\" إذا كانت تونة، وإلا \"Eat ham sandwich\" (من السطر 4)", "امسح الكود أو عدّله ليصبح هكذا.", "let sandwichType = \"savory\";\nlet savory = \"tuna\";\nif (sandwichType == \"savory\") {\n  if (savory == \"tuna\") {\n    console.log(\"Exchange with Cody\");\n  } else {\n    console.log(\"Eat ham sandwich\");\n  }\n} else {\n  console.log(\"Eat strawberry jam sandwich\");\n}"]]],
["مراجعة الفصل 33 (اختبار منتصف الطريق)",[["اختر البرنامج الذي يمرّر 3 و5 و10 إلى calc3 ويعرض الناتج", "", "console.log(calc3(3, 5, 10));"],
["أعلن num1 وأسند إليه calc3(5, 10, 15) (السطر الخامس)", "امسح الكود أو عدّله ليصبح هكذا.", "function calc3(a, b, c) {\n  let result = a * b * c;\n  return result;\n}\nlet num1 = calc3(5, 10, 15);\nconsole.log(num1);"],
["أعلن num2 وأسند إليه calc3(4, 4, 4) ثم اطبعه (من السطر السابع)", "امسح الكود أو عدّله ليصبح هكذا.", "function calc3(a, b, c) {\n  let result = a * b * c;\n  return result;\n}\nlet num1 = calc3(5, 10, 15);\nconsole.log(num1);\nlet num2 = calc3(4, 4, 4);\nconsole.log(num2);"],
["اختر البرنامج الذي يعرض أصغر قيمة بين num1 و num2 و num3", "", "console.log(Math.min(num1, num2, num3));"],
["اختر ناتج الإخراج: let scoreList = [70, 80, 66, 88, 92]; for (let score of scoreList) { if (score >= 80) { console.log(score); } }", "80 ثم 88 ثم 92"],
["اكتب برنامجًا يعرض فقط القيم من heightList التي تساوي أو تزيد عن 150", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ كما هو واضح).", "let heightList = [154, 138, 140, 180, 170];\nfor (let height of heightList) {\n  if (height >= 150) {\n    console.log(height);\n  }\n}"],
["يُستخدم المخطط الانسيابي لتحديد هل يستطيع الشخص ركوب الأفعوانية. اختر العبارة غير الصحيحة بناءً على المخطط (الأفعوانية)", "إذا كان عمرك 12 سنة أو أكثر وكان طولك 140 سم أو أكثر، يمكنك الركوب بمفردك."]],"",1]
]}
,{id:34,title:"الفصل 34",sub:"HTML (القوائم والصور والنماذج)",lessons:[
["الدرس 1: برنامج البطولة الرياضية",[["أظهر العنوان: <h1>Sports Tournament Program</h1>", "", "<h1>Sports Tournament Program</h1>"],
["أضف عنوان الأحداث في السطر الثاني: <p>Events</p>", "اكتب في السطر الثاني.", "<h1>Sports Tournament Program</h1>\n<p>Events</p>"],
["أضف قائمة الأحداث (Frisbee, Softball, Bread-eating race) من السطر الثالث", "اكتب من السطر الثالث.", "<h1>Sports Tournament Program</h1>\n<p>Events</p>\n<ul>\n  <li>Frisbee</li>\n  <li>Softball</li>\n  <li>Bread-eating race</li>\n</ul>"],
["أضف صورة في السطر الثامن: <img src=\"sports.png\">", "اكتب في السطر الثامن بعد الأكواد المكتوبة.", "<h1>Sports Tournament Program</h1>\n<p>Events</p>\n<ul>\n  <li>Frisbee</li>\n  <li>Softball</li>\n  <li>Bread-eating race</li>\n</ul>\n<img src=\"sports.png\">"]]],
["الدرس 2: وسم span والأصناف (class)",[["انقر على تشغيل الكود دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["انقر على تشغيل الكود دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["انقر على تشغيل الكود دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["غيّر لون كلمة sea في السطر الأول إلى الأزرق باستخدام span", "اكتب <span> و </span> في الأماكن المخصصة في السطر الأول.", "<p>Let's go to the <span>sea</span></p>\n<p class=\"mountain\">Let's go to the mountains</p>"],
["غيّر لون sea إلى الأزرق و mountain إلى الأخضر", "اكتب في الأماكن المخصصة: class=\"sea\" ثم class=\"mountain\"", "<p>Let's go to the <span class=\"sea\">sea</span></p>\n<p>Let's go to the <span class=\"mountain\">mountain</span></p>"],
["غيّر لون Apple إلى الأحمر و Giraffe إلى الأصفر و Light blue sneakers إلى الأزرق الفاتح (span + class)", "امسح الكود أو عدّله ليصبح هكذا.", "<p>My favorite fruit is <span class=\"apple\">Apple</span></p>\n<p>My favorite animal is <span class=\"giraffe\">Giraffe</span></p>\n<p>Today's shoes are <span class=\"sneaker\">Light blue sneakers</span></p>"]]],
["الدرس 3: حقل الإدخال والزر",[["انقر على تشغيل الكود دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["أظهر حقل إدخال الرأي في السطر الثالث", "اكتب في السطر الثالث.", "<h1>Event Content Survey</h1>\n<p>Opinion</p>\n<input type=\"text\">"],
["أظهر زرًّا بجانب حقل الإدخال في السطر الرابع", "اكتب في السطر الرابع.", "<h1>Event Content Survey</h1>\n<p>Opinion</p>\n<input type=\"text\">\n<input type=\"button\">"],
["اجعل الزر مكتوبًا عليه Submit (عدّل السطر الرابع)", "امسح الكود أو عدّله ليصبح هكذا.", "<h1>Event Content Survey</h1>\n<p>Opinion</p>\n<input type=\"text\">\n<input type=\"button\" value=\"Submit\">"],
["أظهر حقل إدخال رأي وزر Submit من السطر الثالث", "اكتب في السطرين الثالث والرابع.", "<h1>Event Content Survey</h1>\n<p>Opinion</p>\n<input type=\"text\">\n<input type=\"button\" value=\"Submit\">"]]],
["مراجعة الفصل 34",[["أنشئ قائمة نقطية (ul) بالعناصر Hamburger و Pizza و Sandwich أسفل كلمة Menu", "امسح الكود أو عدّله ليصبح هكذا.", "<p>Menu</p>\n<ul>\n  <li>Hamburger</li>\n  <li>Pizza</li>\n  <li>Sandwich</li>\n</ul>"],
["اختر كود HTML الصحيح الذي يعرض صورة باسم الملف cody.png", "", "<img src=\"cody.png\">"],
["اختر النتيجة الصحيحة عند تنفيذ: <p><span class=\"tomato\">Tomato</span>Hamburger</p> مع .tomato { color: red; }", "يتم عرض النص \"Tomato\" باللون الأحمر"],
["اختر كود HTML الذي يُعرض كما في الصورة (Phone Number + حقل + زر Enter)", "", "<p>Phone Number</p>\n<input type=\"text\">\n<input type=\"button\" value=\"Enter\">"],
["أضف السمة value إلى كود HTML واجعل القيمة \"Submit\"", "امسح الكود أو عدّله ليصبح هكذا.", "<input type=\"button\" value=\"Submit\">"]],"",1]
]}
,{id:35,title:"الفصل 35",sub:"CSS (الألوان والتحويل والإطارات)",lessons:[
["الدرس 1: ألوان وخطوط قائمة الواجبات",[["انقر على «تشغيل الكود» دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["اجعل عنوان Homework List باللون الأحمر", "", "h1 {\n  color: red;\n}"],
["اجعل لون خلفية العنوان ورديًا", "اكتب في السطر الثالث: background-color: pink;", "h1 {\n  color: red;\n  background-color: pink;\n}"],
["غيّر حجم النص وسمكه لعناصر القائمة (من السطر الخامس)", "اكتب من السطر الخامس إلى الثامن.", "h1 {\n  color: red;\n  background-color: pink;\n}\nli {\n  font-size: 24px;\n  font-weight: 900;\n}"],
["أضف خاصية class إلى عنصر Math Practice (عدّل السطر الرابع)", "امسح الكود أو عدّله ليصبح هكذا.", "<h1>Homework List</h1>\n<ul>\n  <li>History Study</li>\n  <li class=\"blue\">Math Practice</li>\n  <li>Essay</li>\n</ul>"],
["اجعل نص Math Practice فقط أزرق (من السطر التاسع)", "اكتب بعد الأكواد المكتوبة من السطر التاسع.", "h1 {\n  color: red;\n  background-color: pink;\n}\nli {\n  font-size: 24px;\n  font-weight: 900;\n}\n.blue {\n  color: blue;\n}"]]],
["الدرس 2: تأثير hover",[["انقر على «تشغيل الكود» دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["انقر على «تشغيل الكود» دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["اجعل زر First one باللون الأزرق الفاتح", "اكتب في المكان المخصص: background-color: aqua;", ".btn1 {\n  background-color: aqua;\n}"],
["اجعل زر Second one يتحول إلى الأصفر عند تمرير الفأرة فقط (من السطر الرابع)", "اكتب من السطر الرابع.", ".btn1 {\n  background-color: aqua;\n}\n.btn2:hover {\n  background-color: yellow;\n}"],
["اجعل زر First one يتحول إلى الأصفر المخضر (lime) عند تمرير الفأرة", "امسح الكود أو عدّله ليصبح هكذا (الأسطر من 1 إلى 3).", ".btn1:hover {\n  background-color: lime;\n}\n.btn2:hover {\n  background-color: yellow;\n}"]]],
["الدرس 3: الانتقال التدريجي (transition)",[["انقر على «تشغيل الكود» دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["انقر على «تشغيل الكود» دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["اجعل تحوّل First one تدريجيًا خلال ثانيتين", "امسح الكود أو عدّله ليصبح هكذا.", ".btn1:hover {\n  background-color: lime;\n  transition: 2s;\n}\n.btn2:hover {\n  background-color: yellow;\n}"],
["اجعل تحوّل Second one تدريجيًا خلال خمس ثوانٍ", "امسح الكود أو عدّله ليصبح هكذا.", ".btn1:hover {\n  background-color: lime;\n  transition: 2s;\n}\n.btn2:hover {\n  background-color: yellow;\n  transition: 5s;\n}"]]],
["الدرس 4: الإطار (border)",[["انقر على «تشغيل الكود» دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["انقر على «تشغيل الكود» دون إجراء أي تغييرات", "اضغط تشغيل الكود فقط."],
["أضف خطًا واحدًا كإطار حول العنوان Packing List", "امسح الكود أو عدّله ليصبح هكذا.", "h1 {\n  border: solid;\n}"],
["أضف إطارًا مزدوج الخطوط", "امسح الكود أو عدّله ليصبح هكذا.", "h1 {\n  border: double;\n}"],
["اجعل الإطار المزدوج أكثر سُمكًا", "اكتب في المكان المخصص: 10px", "h1 {\n  border: 10px double;\n}"],
["اجعل الإطار المزدوج باللون الأزرق", "اكتب في المكان المخصص: blue", "h1 {\n  border: 10px double blue;\n}"],
["اجعل الإطار بخط أحمر واحد: النوع solid والسُمك 5px واللون red (بترتيب السُمك، النوع، اللون)", "امسح الكود أو عدّله ليصبح هكذا.", "h1 {\n  border: 5px solid red;\n}"]]],
["مراجعة الفصل 35",[["اختر الطريقة الصحيحة لإضافة خاصية class إلى <p>CAT</p>", "", "<p class=\"cat\">CAT</p>"],
["اختر كود CSS الذي يجعل الزر (class=\"btn\") يتحول إلى الأحمر عند لمس الفأرة له", "", ".btn:hover {\n  background-color: red;\n}"],
["اختر كود CSS الذي يغيّر لون الزر إلى الأحمر خلال 5 ثوانٍ عند لمس الفأرة له", "", ".btn:hover {\n  background-color: red;\n  transition: 5s;\n}"],
["اختر القيمة التي تضيف حدًّا مزدوج الخطوط في خاصية border", "", "double"],
["اختر كود CSS الذي يضيف حدًا إلى h1: خط واحد، 10px، أزرق", "", "h1 {\n  border: 10px solid blue;\n}"]],"",1]
]}
,{id:36,title:"الفصل 36",sub:"مراجعة الفصلين 34 و35",lessons:[
["الدرس 1: مراجعة الفصلين 34 و35",[["اعرض العنوان h1 «Sports Festival Program» ثم الصورة sports.png", "", "<h1>Sports Festival Program</h1>\n<img src=\"sports.png\">"],
["غيّر لون Apple إلى الأحمر و Giraffe إلى الأصفر (span + class)", "امسح الكود أو عدّله ليصبح هكذا.", "<p>My favorite fruit is <span class=\"apple\">Apple</span></p>\n<p>My favorite animal is <span class=\"giraffe\">Giraffe</span></p>"],
["أظهر خانة إدخال الرأي وزر Submit (من السطر الثالث)", "اكتب في السطرين الثالث والرابع.", "<h1>Event Content Survey</h1>\n<p>Opinion</p>\n<input type=\"text\">\n<input type=\"button\" value=\"Submit\">"],
["زيّن قائمة الواجبات: خلفية h1 pink، وخط li bold، ولون العنصر ذي الفئة red أحمر", "امسح الكود أو عدّله ليصبح هكذا.", "h1 {\n  background-color: pink;\n}\nli {\n  font-weight: bold;\n}\n.red {\n  color: red;\n}"],
["اجعل First one يتحول إلى lime، و Second one إلى yellow خلال ثانيتين عند لمس الفأرة", "امسح الكود أو عدّله ليصبح هكذا.", ".btn1:hover {\n  background-color: lime;\n}\n.btn2:hover {\n  background-color: yellow;\n  transition: 2s;\n}"],
["أحط عنوان Packing List بإطار: border: 10px double red;", "امسح الكود أو عدّله ليصبح هكذا.", "h1 {\n  border: 10px double red;\n}"]]],
["مراجعة الفصل 36 (اختبار منتصف الطريق)",[["أنشئ قائمة نقطية (ul) بالعناصر Hamburger و Pizza و Sandwich أسفل العنوان Menu", "امسح الكود أو عدّله ليصبح هكذا.", "<p>Menu</p>\n<ul>\n  <li>Hamburger</li>\n  <li>Pizza</li>\n  <li>Sandwich</li>\n</ul>"],
["اختر النتيجة الصحيحة عند تنفيذ: <p><span class=\"tomato\">Tomato</span>Hamburger</p> مع .tomato { color: red; }", "يتم عرض النص \"Tomato\" باللون الأحمر"],
["اختر كود HTML الذي يُعرض كما في الصورة (Phone Number + حقل + زر Enter)", "", "<p>Phone Number</p>\n<input type=\"text\">\n<input type=\"button\" value=\"Enter\">"],
["أضف خاصية value إلى كود HTML واجعل القيمة \"Submit\"", "امسح الكود أو عدّله ليصبح هكذا.", "<input type=\"button\" value=\"Submit\">"],
["اختر كود CSS الذي يجعل الزر (Agree) يتحول إلى الأحمر عند لمس الفأرة", "", ".btn:hover {\n  background-color: red;\n}"],
["اختر كود CSS الذي يجعل لون الزر يتحول إلى الأحمر خلال 5 ثوانٍ عند لمس الفأرة", "", ".btn:hover {\n  background-color: red;\n  transition: 5s;\n}"],
["اختر القيمة التي تضيف إطارًا مزدوج الخطّين", "", "double"],
["اختر كود CSS لإضافة إطار إلى h1: خط واحد، سماكة 10px، أزرق", "", "h1 {\n  border: 10px solid blue;\n}"]],"",1]
]}
,{id:37,title:"الفصل 37",sub:"جمل switch",lessons:[
["الدرس 1: التنبؤ بالحظ بـ if / else if",[["اضغط على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["إذا كانت فصيلة الدم A فاعرض \"Today's fortune is decent\" (من السطر الثالث)", "اكتب من السطر الثالث واترك السطر الثاني فارغًا.", "let bloodType = \"A\";\nif (bloodType == \"A\") {\n  console.log(\"Today's fortune is decent\");\n}"],
["أضف فصائل الدم B و O و AB باستخدام else if (من السطر الخامس)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let bloodType = \"B\";\nif (bloodType == \"A\") {\n  console.log(\"Today's fortune is decent\");\n} else if (bloodType == \"B\") {\n  console.log(\"Today's fortune is excellent!\");\n} else if (bloodType == \"O\") {\n  console.log(\"Today's fortune looks good!\");\n} else if (bloodType == \"AB\") {\n  console.log(\"Today's fortune might not be so good...\");\n}"],
["اعرض \"Let's find out your blood type!\" إذا لم يتحقق أي شرط (من السطر 11)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let bloodType = \"Unknown\";\nif (bloodType == \"A\") {\n  console.log(\"Today's fortune is decent\");\n} else if (bloodType == \"B\") {\n  console.log(\"Today's fortune is excellent!\");\n} else if (bloodType == \"O\") {\n  console.log(\"Today's fortune looks good!\");\n} else if (bloodType == \"AB\") {\n  console.log(\"Today's fortune might not be so good...\");\n} else {\n  console.log(\"Let's find out your blood type!\");\n}"]]],
["الدرس 2: جملة switch",[["اضغط على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["تم تعيين القيمة C للمتغير bloodType. اضغط «تشغيل الكود» دون تعديل", "اضغط «تشغيل الكود» فقط دون تعديل."],
["أكمل البرنامج باستخدام switch و case و break (bloodType = \"B\")", "اكتب في الأماكن المخصصة: switch ثم case ثم break", "let bloodType = \"B\";\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n  case \"O\":\n    console.log(\"Today's fortune looks good!\");\n    break;\n  case \"AB\":\n    console.log(\"Today's fortune might not be so good...\");\n    break;\n  default:\n    console.log(\"Let's find out your blood type!\");\n    break;\n}"],
["أضف الحالة default من السطر 16 (bloodType = \"C\")", "اكتب في الأماكن المخصصة في السطور 16–18: default ثم break", "let bloodType = \"C\";\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n  case \"O\":\n    console.log(\"Today's fortune looks good!\");\n    break;\n  case \"AB\":\n    console.log(\"Today's fortune might not be so good...\");\n    break;\n  default:\n    console.log(\"Let's find out your blood type!\");\n    break;\n}"]]],
["الدرس 3: بناء switch خطوة بخطوة",[["اعرض \"Today's fortune is decent\" إذا كانت فصيلة الدم A باستخدام switch", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let bloodType = \"A\";\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n}"],
["أضف الحالة B: \"Today's fortune is excellent!\" (السطران 7 و9)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let bloodType = \"B\";\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n}"],
["أضف فصيلتي O و AB (من السطر 10 ومن السطر 13) (bloodType = \"AB\")", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let bloodType = \"AB\";\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n  case \"O\":\n    console.log(\"Today's fortune looks good!\");\n    break;\n  case \"AB\":\n    console.log(\"Today's fortune might not be so good...\");\n    break;\n}"],
["أضف default لعرض \"Let's find out your blood type!\" (bloodType = \"Unknown\")", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let bloodType = \"Unknown\";\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n  case \"O\":\n    console.log(\"Today's fortune looks good!\");\n    break;\n  case \"AB\":\n    console.log(\"Today's fortune might not be so good...\");\n    break;\n  default:\n    console.log(\"Let's find out your blood type!\");\n    break;\n}"],
["جدول اليوم بـ switch: Saturday → \"Go to lessons\"، Sunday → \"Go shopping\"، غير ذلك → \"Go to school\"", "اكتب في الأماكن المخصصة: switch ثم day ثم case ثم break ثم case ثم break ثم default ثم break", "let day = \"Sunday\";\nswitch (day) {\n  case \"Saturday\":\n    console.log(\"Go to lessons\");\n    break;\n  case \"Sunday\":\n    console.log(\"Go shopping\");\n    break;\n  default:\n    console.log(\"Go to school\");\n    break;\n}"]]],
["مراجعة الفصل 37",[["أضف من السطر الخامس: إذا كان color = \"blue\" فاطبع \"Blue\"، وإذا \"green\" فاطبع \"Green\" باستخدام else if", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let color = \"green\";\nif (color == \"red\") {\n  console.log(\"Red\");\n} else if (color == \"blue\") {\n  console.log(\"Blue\");\n} else if (color == \"green\") {\n  console.log(\"Green\");\n}"],
["في أي الحالات تُنفَّذ العملية المكتوبة في قسم default من عبارة switch؟", "عندما لا تتطابق القيمة مع أيٍّ من الحالات (cases)"],
["اختر نتيجة الإخراج: let era = \"Medieval\"; switch (era) { case \"Modern\": console.log(\"1900~\"); break; case \"Industrial\": console.log(\"1760~1900\"); break; case \"Medieval\": console.log(\"500~1500\"); break; case \"Ancient\": console.log(\"3000 BC ~ 500 AD\"); break; }", "500~1500"],
["أنشئ switch على letter: A → \"Well done!\"، B → \"Keep up the good work\"، C → \"Let's try a little harder\"", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let letter = \"B\";\nswitch (letter) {\n  case \"A\":\n    console.log(\"Well done!\");\n    break;\n  case \"B\":\n    console.log(\"Keep up the good work\");\n    break;\n  case \"C\":\n    console.log(\"Let's try a little harder\");\n    break;\n}"],
["أضف default يطبع \"The notation is incorrect\" (letter = \"D\")", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let letter = \"D\";\nswitch (letter) {\n  case \"A\":\n    console.log(\"Well done!\");\n    break;\n  case \"B\":\n    console.log(\"Keep up the good work\");\n    break;\n  case \"C\":\n    console.log(\"Let's try a little harder\");\n    break;\n  default:\n    console.log(\"The notation is incorrect\");\n    break;\n}"]],"",1]
]}
,{id:38,title:"الفصل 38",sub:"الباقي (Modulo)",lessons:[
["الدرس 1: عامل الباقي %",[["أخرج قيمة cookies مقسومة على 3 (20 قطعة بسكويت)", "اكتب في المكان المخصص: cookies / 3", "let cookies = 20;\nconsole.log(cookies / 3);"],
["اضغط على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["أخرج الباقي عند قسمة snacks على 6 (35 وجبة)", "اكتب في المكان المخصص: snacks % 6", "let snacks = 35;\nconsole.log(snacks % 6);"]]],
["الدرس 2: الباقي مع الشرط",[["أخرج الباقي عند قسمة members على 6 (40 شخصًا)", "امسح الكود أو عدّله ليصبح هكذا.", "let members = 40;\nconsole.log(members % 6);"],
["اطبع \"Rick gets it\" إذا وُجد باقي عند قسمة 13 وجبة على 3", "اكتب من السطر الثاني إلى الرابع.", "let snacks = 13;\nif (snacks % 3 > 0) {\n  console.log(\"Rick gets it\");\n}"]]],
["الدرس 3: الباقي مع switch",[["اضغط على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["اعرض \"Let's clean up the trash neatly\" عندما يكون الباقي 0 (من السطر الثالث)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let donuts = 20;\nswitch (donuts % 3) {\n  case 0:\n    console.log(\"Let's clean up the trash neatly\");\n    break;\n}"],
["أضف الحالتين: الباقي 1 → \"Give it to Mom\"، والباقي 2 → \"Give it to Mom and Dad\" (من السطر السابع)", "اكتب من السطر السابع إلى الثاني عشر، وبعده في السطر الثالث عشر قوس الإغلاق.", "let donuts = 20;\nswitch (donuts % 3) {\n  case 0:\n    console.log(\"Let's clean up the trash neatly\");\n    break;\n  case 1:\n    console.log(\"Give it to Mom\");\n    break;\n  case 2:\n    console.log(\"Give it to Mom and Dad\");\n    break;\n}"]]],
["مراجعة الفصل 38",[["اختر ناتج التشغيل: console.log(5 % 4);", "1"],
["اختر التعبير الشرطي الذي يعني: year قابلة للقسمة على 12 بدون باقي", "", "year % 12 == 0"],
["اطبع \"Let's eat a hamburger!\" إذا كان باقي قسمة dayCount على 7 يساوي 0", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let dayCount = 14;\nif (dayCount % 7 == 0) {\n  console.log(\"Let's eat a hamburger!\");\n}"],
["باستخدام switch: الباقي 0 → \"Let's eat a hamburger!\"، والباقي 4 → \"Let's eat steak!\"", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let dayCount = 11;\nswitch (dayCount % 7) {\n  case 0:\n    console.log(\"Let's eat a hamburger!\");\n    break;\n  case 4:\n    console.log(\"Let's eat steak!\");\n    break;\n}"],
["باستخدام switch: باقي قسمة number على 3: 0 → \"Group A\"، 1 → \"Group B\"، 2 → \"Group C\"", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let number = 20;\nswitch (number % 3) {\n  case 0:\n    console.log(\"Group A\");\n    break;\n  case 1:\n    console.log(\"Group B\");\n    break;\n  case 2:\n    console.log(\"Group C\");\n    break;\n}"]],"",1]
]}
,{id:39,title:"الفصل 39",sub:"مراجعة الفصلين 37 و38",lessons:[
["الدرس 1: مراجعة الفصلين 37 و38",[["انقر على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["أكمل switch للتنبؤ بالحظ: A → decent، B → excellent!، وغير ذلك default (bloodType = \"Unknown\")", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let bloodType = \"Unknown\";\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n  default:\n    console.log(\"Let's find out your blood type!\");\n    break;\n}"],
["أخرج باقي قسمة cookies (20) على 3", "امسح الكود أو عدّله ليصبح هكذا.", "let cookie = 20;\nconsole.log(cookie % 3);"],
["اطبع \"Cody gets it\" إذا كان باقي قسمة cookies على 3 أكبر من 0 (في السطر 2)", "امسح الكود أو عدّله ليصبح هكذا.", "let cookie = 20;\nif (cookie % 3 > 0) {\n  console.log(\"Cody gets it\");\n}"],
["اقسم 85 برتقالة على 3 أشخاص: الباقي 1 → \"Give it to Grandma\"، والباقي 2 → \"Give it to the neighbors\" (من السطر 7 والسطر 10)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let orange = 85;\nswitch (orange % 3) {\n  case 0:\n    console.log(\"They were divided equally\");\n    break;\n  case 1:\n    console.log(\"Give it to Grandma\");\n    break;\n  case 2:\n    console.log(\"Give it to the neighbors\");\n    break;\n}"]]],
["مراجعة الفصل 39 (اختبار منتصف الطريق)",[["في أي الحالات تُنفَّذ العملية المكتوبة في قسم default من جملة switch؟", "عندما لا تتطابق القيمة مع أي من الحالات"],
["اختر الناتج الصحيح: let era = \"Medieval\"; switch (era) { case \"Modern\": console.log(\"1900~\"); break; case \"Industrial\": console.log(\"1760~1900\"); break; case \"Medieval\": console.log(\"500~1500\"); break; case \"Ancient\": console.log(\"3000 BC ~ 500 AD\"); break; }", "500~1500"],
["أنشئ switch على letter: A → \"Well done!\"، B → \"Keep up the good work\"، C → \"Let's try a little harder\"", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let letter = \"B\";\nswitch (letter) {\n  case \"A\":\n    console.log(\"Well done!\");\n    break;\n  case \"B\":\n    console.log(\"Keep up the good work\");\n    break;\n  case \"C\":\n    console.log(\"Let's try a little harder\");\n    break;\n}"],
["اختر ناتج الإخراج: console.log(5 % 4);", "1"],
["اطبع \"Let's eat a hamburger!\" إذا كان باقي قسمة dayCount على 7 يساوي 0 (باستخدام if)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let dayCount = 14;\nif (dayCount % 7 == 0) {\n  console.log(\"Let's eat a hamburger!\");\n}"],
["اطبع \"Group A\" أو \"Group B\" أو \"Group C\" حسب باقي قسمة number على 3 (باستخدام switch)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "let number = 20;\nswitch (number % 3) {\n  case 0:\n    console.log(\"Group A\");\n    break;\n  case 1:\n    console.log(\"Group B\");\n    break;\n  case 2:\n    console.log(\"Group C\");\n    break;\n}"]],"",1]
]}
,{id:40,title:"الفصل 40",sub:"const وعدم المساواة !=",lessons:[
["الدرس 1: let و const",[["انقر على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["أسند 3 إلى num ثم أعد إسناد 5 إليه واطبع النتيجة (باستخدام let)", "اكتب في المكان المخصص: let", "let num = 3;\nnum = 5;\nconsole.log(num);"],
["أسند 3 إلى الثابت num ثم حاول إعادة إسناد 5 واطبع (باستخدام const)", "اكتب في المكان المخصص: const", "const num = 3;\nnum = 5;\nconsole.log(num);"]]],
["الدرس 2: متى نستخدم const؟",[["أيٌّ مما يلي هو تعريف ثابت؟", "const"],
["انقر على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["اطبع عدد الأيام في الأسبوع: أعلن day بالقيمة 7 في سطر واحد", "اكتب في السطر الأول.", "const day = 7;\nconsole.log(\"One week is \" + day + \" days\");"],
["اطبع عدد أيام الشهر الحالي: أعلن day بالقيمة 30 (ستتغير قيمته لاحقًا)", "اكتب في السطر الأول.", "let day = 30;\nconsole.log(\"September has \" + day + \" days\");\nday = 31;\nconsole.log(\"October has \" + day + \" days\");"],
["اطبع تاريخ الميلاد: أعلن الثابت myBirthday بالقيمة September 1st", "اكتب في السطر الأول.", "const myBirthday = \"September 1st\";\nconsole.log(\"My birthday is \" + myBirthday);"]]],
["الدرس 3: عامل عدم المساواة !=",[["اطبع \"Play soccer\" إذا لم تكن قيمة الثابت weather هي \"Rainy\" (weather = Cloudy)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "const weather = \"Cloudy\";\nif (weather != \"Rainy\"){\n  console.log(\"Play soccer\");\n}"],
["اطبع \"Aim for a perfect score!\" إذا لم تكن درجتك 100 (الثابت myScore)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "const myScore = 90;\nif (myScore != 100){\n  console.log(\"Aim for a perfect score!\");\n}"]]],
["مراجعة الفصل 40",[["اكتب تعبير الشرط لبرنامج يطبع \"Let's review once more!\" عندما تكون answer1 و answer2 مختلفتين (باستخدام !=)", "", "answer1 != answer2"],
["اختر طريقة الإعلان التي تُستخدم عند الحاجة لإعادة الإسناد (reassignment)", "let"],
["شغّل البرنامج وتأكد من ظهور خطأ، ثم أعد كتابة طريقة الإعلان في السطر 1 بشكل صحيح", "امسح الكود أو عدّله ليصبح هكذا.", "let num;\nnum = 3;\nnum = 5;\nconsole.log(num);"],
["اختر تعبير الشرط الذي يعني أن قيمة a ليست مساوية لـ 100", "", "a != 100"],
["اكتب البرنامج الكامل: اطبع \"Let's review once more!\" عندما تكون answer1 و answer2 مختلفتين", "امسح الكود أو عدّله ليصبح هكذا (السطر الثالث فارغ).", "const answer1 = 1023;\nconst answer2 = 1024;\nif (answer1 != answer2) {\n  console.log(\"Let's review once more!\");\n}"]],"",1]
]}
,{id:41,title:"الفصل 41",sub:"حلقة while",lessons:[
["الدرس 2: حلقة while الأساسية",[["انقر على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["اعرض المبلغ المتبقي بعد شراء القصص المصورة طالما أن money أكبر من سعر comics", "اكتب في الأماكن المخصصة: while ثم money > comics", "let money = 7500;\nconst comics = 425;\nwhile (money > comics) {\n  money = money - comics;\n  console.log(money);\n}"]]],
["الدرس 3: عدّ مرات التكرار",[["ماذا يجب أن نأكل؟", "اختر ما يناسبك، على سبيل المثال: هامبرغر."],
["انقر على «تشغيل الكود» دون تعديل البرنامج", "اضغط «تشغيل الكود» فقط دون تعديل."],
["كرّر عملية الادخار حتى يصل المال إلى 3800 وأظهر عدد مرات المساعدة (while عندما money < 3800)", "امسح الكود أو عدّله ليصبح هكذا.", "let money = 520;\nlet count = 0;\nwhile (money < 3800) {\n  count ++;\n  money += 450;\n}\nconsole.log(\"Save for \" + count + \" times\");"]]],
["مراجعة الفصل 41",[["اطبع \"Programming\" ثلاث مرات (المتغير i يبدأ من 0 مع عامل الزيادة)", "امسح الكود أو عدّله ليصبح هكذا.", "for (let i = 0; i < 3; i++) {\n  console.log(\"Programming\");\n}"],
["اختر الوصف الصحيح للبرنامج الذي يُكرر عمليةً طالما أن شرطًا معينًا متحقق", "", "while ( condition ) {\n  process;\n}"],
["اختر ناتج الإخراج: let numA = 0; let numB = 3; while (numA < numB) { console.log(numA); numA = numA + 1; }", "0 ثم 1 ثم 2 (كل رقم في سطر)"],
["اشترِ الوجبات الخفيفة طالما أن money أكبر من سعر snacks", "امسح الكود أو عدّله ليصبح هكذا.", "let money = 1000;\nconst snacks = 230;\nwhile (money > snacks) {\n  money = money - snacks;\n  console.log(money);\n}"],
["احسب عدد الأشهر اللازمة للوصول إلى 4000 كودي كوين (while عندما money < 4000)", "امسح الكود أو عدّله ليصبح هكذا.", "let money = 600;\nlet month = 0;\nwhile (money < 4000) {\n  month ++;\n  money += 800;\n}\nconsole.log(\"Save for \" + month + \" months\");"]],"",1]
]}
,{id:42,title:"الفصل 42",sub:"مراجعة الفصلين 40 و41",lessons:[
["الدرس 1: مراجعة الفصلين 40 و41",[["أيٌّ منها هو تعريف ثابت (constant)؟", "const"],
["اعرض الفصل الحالي: عرّف season في السطر 1 (ستتغير قيمته)", "اكتب في المكان المخصص: let", "let season = \"spring\";\nconsole.log(\"The current season is \" + season);\nseason = \"summer\";\nconsole.log(\"The next season is \" + season);"],
["اعرض عدد الأيام في الأسبوع: عرّف day بالقيمة 7 في سطر واحد", "اكتب في السطر الأول.", "const day = 7;\nconsole.log(\"One week is \" + day + \" days\");"],
["اطبع \"Play soccer\" إذا كانت قيمة الثابت weather لا تساوي Rainy (weather = Cloudy)", "امسح الكود أو عدّله ليصبح هكذا (السطر الثاني فارغ).", "const weather = \"Cloudy\";\nif (weather != \"Rainy\"){\n  console.log(\"Play soccer\");\n}"],
["كرّر عملية الادخار حتى يصل المال إلى 3800 وأظهر عدد المرات (while عندما money < 3800)", "امسح الكود أو عدّله ليصبح هكذا.", "let money = 520;\nlet count = 0;\nwhile (money < 3800) {\n  count ++;\n  money += 450;\n}\nconsole.log(\"Save for \" + count + \" times\");"]]],
["مراجعة الفصل 42 (اختبار منتصف الطريق)",[["اختر طريقة التعريف التي تُستخدم عند الحاجة إلى إعادة الإسناد", "let"],
["شغّل البرنامج وتأكد من حدوث خطأ، ثم أعد كتابة طريقة التعريف في السطر 1 بشكل صحيح", "امسح الكود أو عدّله ليصبح هكذا.", "let num;\nnum = 3;\nnum = 5;\nconsole.log(num);"],
["اختر تعبير الشرط الذي يمثل أن قيمة a لا تساوي 100", "", "a != 100"],
["اختر الوصف الصحيح للبرنامج الذي يُكرر عمليةً طالما أن الشرط متحقق", "", "while ( condition ) {\n  process;\n}"],
["اشترِ الوجبات الخفيفة طالما أن money أكبر من سعر snacks (money = 1000، snacks = 230)", "امسح الكود أو عدّله ليصبح هكذا.", "let money = 1000;\nconst snacks = 230;\nwhile (money > snacks) {\n  money = money - snacks;\n  console.log(money);\n}"],
["احسب عدد الأشهر اللازمة للوصول إلى 4000 كودي كوين (money = 600، month = 0)", "امسح الكود أو عدّله ليصبح هكذا.", "let money = 600;\nlet month = 0;\nwhile (money < 4000) {\n  month ++;\n  money += 800;\n}\nconsole.log(\"Save for \" + month + \" months\");"]],"",1]
]}
];
let DATA=G1;

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
const PY_RULES=[
 ["c",/#[^\n]*/y],
 ["s",/"(?:[^"\\\n]|\\.)*"?|'(?:[^'\\\n]|\\.)*'?/y],
 ["n",/\b\d+(?:\.\d+)?\b/y],
 ["k",/\b(?:if|elif|else|while|for|in|def|return|break|continue|and|or|not|is|pass|import|from|as|True|False|None)\b/y],
 ["b",/\b(?:print|str|int|float|input|type|len|range|bool|list)\b/y],
 ["f",/[A-Za-z_]\w*(?=\s*\()/y],
 ["o",/[=+\-*\/%<>!&|?:]+|[{}()\[\];,.]/y]
];
function hlJS(c){return scan(c,JS_RULES)}
function hlPY(c){return scan(c,PY_RULES)}
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
    else if(depth===0&&!/^\s*\{/.test(c.slice(i))&&/^\s*[\w-]+\s*:/.test(t)){
      const d=/^(\s*)([\w-]+)(\s*:)([\s\S]*)$/.exec(t);
      out+=esc(d[1])+sp("p",d[2])+sp("o",d[3])+scan(d[4],CSS_VAL);
    }
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
function detectWeb(c){
  if(/^\s*<[A-Za-z!]/.test(c))return"html";
  if(/^\s*[\w-]+\s*=\s*"/.test(c))return"html";
  if(/\{[\s\S]*:[\s\S]*\}/.test(c))return"css";
  if(/^\s*[\w-]+\s*:\s*[^;]+;?\s*$/.test(c)||/^\s*#[0-9a-f]{3,8}\s*$/i.test(c))return"css";
  return"html";
}
const LANG={html:["index.html",hlHTML],css:["style.css",hlCSS],js:["main.js",hlJS],py:["main.py",hlPY]};
const hl=c=>LANG[detect(c)][1](c);
window.__hl={hlHTML,hlCSS,hlJS,hlPY,detect};

/* ---------- UI helpers ---------- */
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.id);toast.id=setTimeout(()=>t.classList.remove("on"),1600)};

const codeToast=(kind,g,l,k)=>{
  const t=$("#codeToast");if(!t)return;
  const file=k==="g2py"?"main.py":k==="g2js"?"main.js":"main.js";
  const msg=kind==="grade"?`تم التغيير إلى ${g}`:`تم التغيير إلى ${l}`;
  t.innerHTML=`<div class="bar"><i></i><i></i><i></i><span>${file}</span></div><div class="msg">${esc(msg)}</div>`;
  t.classList.add("on");clearTimeout(codeToast.id);codeToast.id=setTimeout(()=>t.classList.remove("on"),2400);
};
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
  if(!ch)return;
  const forced=ch.lang==="py"?LANG.py:null;
  $("#lvl").value=cur;$("#prev").disabled=cur==0;$("#next").disabled=cur==DATA.length-1;
  $("#lvlInfo").textContent=`${cur+1} / ${DATA.length}`;
  const box=document.createElement("div");
  box.innerHTML=ch.lessons.map(([name,qs,note,rev],li)=>{
    const f=qs.filter(([q,a,c])=>!term||(q+(a||"")+(c||"")).replace(/[\u2066\u2069]/g,"").toLowerCase().includes(term));
    if(!f.length)return"";any=true;
    return `<details class="lesson ${rev?"review":""}" ${term||li==0?"open":""}><summary>${esc(name)}<span class="count">${f.length} أسئلة</span><span class="chev">‹</span></summary><div class="qs">`+
    f.map(([q,a,c])=>{
      const lang=c?(forced||LANG[(ch.lang==="web"?detectWeb:detect)(c)]):null;
      return `<article class="qcard"><h4><span>${mark(q)}</span></h4><button class="reveal">إظهار الإجابة</button><div class="ans">${a?`<p class="t">${esc(a)}</p>`:""}${c?`<div class="mac"><div class="bar"><i></i><i></i><i></i><span>${lang[0]}</span><button class="copy">نسخ</button></div><pre dir="ltr"><code>${lang[1](c)}</code></pre></div>`:""}</div></article>`}).join("")+
    (note?`<p class="note">ملحوظة: ${esc(note)}</p>`:"")+`</div></details>`}).join("");
  $("#chapter").replaceChildren(box);
  $("#empty").hidden=any;
}
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

/* ---------- الأقسام: الصف الأول / الصف الثاني (بايثون – جافا سكربت) ---------- */
const heroJS=$("#heroCode").innerHTML;
const heroPY='<span class="c"># محمد أحمد حلمي</span>\nauthor = <span class="s">"محمد أحمد حلمي"</span>\n<span class="b">print</span>(author)<span class="cur"></span>';
const SEC={
  g1:{grade:1,data:G1,file:"helmy.js",code:heroJS,store:"lvl",
      h1:"حلول منصة كيريو<br>للصف الأول الثانوي",
      p:"البرمجة والذكاء الاصطناعي · عام 2026-2027. اختر الفصل، افتح الدرس، وانسخ الكود جاهزًا.",
      title:"حلول منصة كيريو – الصف الأول الثانوي 2026-2027"},
  g2py:{grade:2,data:G2PY,file:"helmy.py",code:heroPY,store:"lvl_g2py",
      h1:"حلول كيريو · بايثون<br>للصف الثاني الثانوي",
      p:"البرمجة والذكاء الاصطناعي · لغة بايثون (Python). اختر الفصل، افتح الدرس، وانسخ الكود جاهزًا.",
      title:"حلول منصة كيريو – الصف الثاني الثانوي – بايثون"},
  g2js:{grade:2,data:G2JS,file:"helmy.js",code:heroJS,store:"lvl_g2js",
      h1:"حلول كيريو · جافا سكربت<br>للصف الثاني الثانوي",
      p:"البرمجة والذكاء الاصطناعي · لغة جافا سكربت (JavaScript). الفصول من 43 إلى 54.",
      title:"حلول منصة كيريو – الصف الثاني الثانوي – جافا سكربت"}
};
let curSec="g1";
const hashFor=(k,i)=>k==="g1"?"#"+DATA[i].id:DATA.length?"#"+k+"-"+DATA[i].id:"#"+k;
function parseHash(h){
  let m=/^#(\d+)$/.exec(h);
  if(m)return{key:"g1",idx:G1.findIndex(c=>String(c.id)===m[1])};
  m=/^#g2(py|js)(?:-(\d+))?$/.exec(h);
  if(m){const key="g2"+m[1];return{key,idx:m[2]?SEC[key].data.findIndex(c=>String(c.id)===m[2]):-1}}
  return null;
}
function fillSelect(){$("#lvl").innerHTML=DATA.map((c,i)=>`<option value="${i}">${esc(c.title)} — ${esc(c.sub)}</option>`).join("")}
function paintStats(){
  const t=DATA.reduce((s,c)=>s+c.lessons.reduce((a,l)=>a+l[1].length,0),0);
  $("#stats").innerHTML=DATA.length?`<span><b>${DATA.length}</b> ${DATA.length>=3&&DATA.length<=10?"فصول":"فصلًا"}</span><span><b>${DATA.reduce((s,c)=>s+c.lessons.length,0)}</b> دروس</span><span><b>${t}</b> سؤالًا محلولًا</span>`:`<span>قريبًا</span>`;
}
function setSection(key,idx,fromHash){
  const sec=SEC[key];curSec=key;DATA=sec.data;
  document.querySelectorAll("[data-sec]").forEach(b=>{
    const on=b.dataset.sec===key||(b.dataset.sec==="g2"&&sec.grade===2);
    b.classList.toggle("on",on);b.setAttribute("aria-selected",on)});
  $("#subLang").hidden=sec.grade!==2;
  $("#subLang1").hidden=sec.grade!==1;
  $("#g2jsNote").hidden=key!=="g2js";
  const empty=!DATA.length;
  $("#soon").hidden=!empty;
  document.querySelectorAll(".picker,.tools,#chapter").forEach(e=>e.hidden=empty);
  $("#empty").hidden=true;
  store.set("sec",key);
  all=false;$("#toggleAll").textContent="إظهار كل الإجابات";term="";$("#q").value="";
  paintStats();
  if(empty){$("#chapter").replaceChildren();if(!fromHash)history.replaceState(null,"",hashFor(key,0));return}
  fillSelect();
  if(idx==null||idx<0){const sv=store.get(sec.store);idx=DATA.findIndex(c=>String(c.id)===sv)}
  cur=idx>=0?idx:0;
  if(!fromHash)history.replaceState(null,"",hashFor(key,cur));
  render();
}
const go=i=>{if(i<0||i>=DATA.length)return;cur=i;store.set(SEC[curSec].store,DATA[i].id);history.replaceState(null,"",hashFor(curSec,i));render();window.scrollTo({top:$("main").offsetTop-60,behavior:"smooth"})};
$("#lvl").onchange=e=>go(+e.target.value);
$("#prev").onclick=()=>go(cur-1);
$("#next").onclick=()=>go(cur+1);
let lastG2="g2py";
document.querySelectorAll("[data-sec]").forEach(b=>b.onclick=()=>{
  let k=b.dataset.sec;if(k==="g2")k=lastG2;
  if(k.startsWith("g2"))lastG2=k;
  if(k!==curSec){setSection(k,null,false);const g=SEC[k].grade===1?"الصف الأول الثانوي":"الصف الثاني الثانوي";const l=k==="g2py"?"بايثون":"جافا سكربت";codeToast(b.closest(".seg-sub")||k==="g1"?(SEC[k].grade===1?"grade":"lang"):"grade",g,l,k)}
});
$("#g2jsBack").onclick=()=>{
  const b=document.querySelector('.sections [data-sec="g1"]');if(b)b.click();
  scrollTo({top:0,behavior:"smooth"});
};
window.addEventListener("hashchange",()=>{
  const h=parseHash(location.hash);if(!h)return;
  if(h.key!==curSec){if(h.key.startsWith("g2"))lastG2=h.key;setSection(h.key,h.idx,true)}
  else if(h.idx>=0&&h.idx!==cur){cur=h.idx;render()}
});
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

/* ---------- Boot ---------- */
(function(){
  let h=parseHash(location.hash),key="g1",idx=null;
  if(h){key=h.key;idx=h.idx}
  else{const sv=store.get("sec");if(sv&&SEC[sv])key=sv}
  if(key.startsWith("g2"))lastG2=key;
  setSection(key,idx,!!h);
})();
