const fs = require("fs");
const path = require("path");
const ROOT = __dirname;

function wrap(body, page, title, header = "solid", noFooter = false) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | عسير</title>
  <link rel="stylesheet" href="style.css">
</head>
<body data-page="${page}" data-header="${header}"${noFooter ? ' data-no-footer="1"' : ""}>
${body}
<script src="script.js"></script>
</body>
</html>
`;
}

function inner(crumb, h1, p, img, extra, key, title) {
  return wrap(
    `  <section class="page-hero" style="background-image:url('${img}')"><div class="copy"><p class="crumb">${crumb}</p><h1>${h1}</h1><p>${p}</p></div></section>
<section class="section"><div class="container">${extra}</div></section>`,
    key,
    title
  );
}

const pages = {};

pages["experiences.html"] = inner(
  "الرئيسية  /  تجارب عسير",
  "تجارب عسير",
  "اكتشف الجبل والثقافة والطبيعة واللحظات المحلية في رحلة واحدة",
  "assets/img/hero-home.png",
  `<div class="filters"><button class="chip is-active">الكل</button><button class="chip">القمم</button><button class="chip">الطبيعة</button><button class="chip">الثقافة</button><button class="chip">المطاعم</button><button class="chip">المسارات</button><button class="chip">الجلسات</button><button class="chip">العوائل</button><button class="chip">المواسم</button></div>
<article class="panel split" style="margin-bottom:32px"><img class="thumb" src="assets/img/planner-route.png" alt="جلسة فوق السحاب" style="min-height:280px;object-fit:cover"><div><p class="muted">تجربة مختارة</p><h2>جلسة فوق السحاب</h2><p>السودة - منتزه السودة</p><p>★ 4.9   (326 تقييم)</p><p>استمتع بجلسة هادئة على ارتفاع فوق الغيم، مع مشروب دافئ وإطلالة تمنحك إحساس عسير الحقيقي.</p><a class="btn btn-gold" href="experience-details.html">احجز تجربتك الآن</a></div></article>
<h2 class="section-title">اختر تجربتك حسب المزاج</h2>
<div class="card-grid" style="margin:24px 0 40px"><a class="card" href="experiences.html"><div class="body"><h3>مغامرة</h3><p>نشاط وحماس</p></div></a><a class="card" href="experiences.html"><div class="body"><h3>هدوء</h3><p>استرخاء وتجدد</p></div></a><a class="card" href="experiences.html"><div class="body"><h3>تراث</h3><p>ثقافة وهوية</p></div></a><a class="card" href="experiences.html"><div class="body"><h3>مذاق</h3><p>نكهات محلية</p></div></a><a class="card" href="experiences.html"><div class="body"><h3>عائلة</h3><p>لحظات تجمعنا</p></div></a><a class="card" href="experiences.html"><div class="body"><h3>تصوير</h3><p>لقطات ملهمة</p></div></a></div>
<h2 class="section-title">تجارب مختارة</h2>
<div class="card-grid" style="margin-top:24px"><a class="card" href="experience-details.html"><img class="thumb" src="assets/img/region-heritage.png" alt=""><div class="body"><h3>مسار رجال ألمع الجبلي</h3><p>رجال ألمع · سهل · 4 ساعات · مغامرة</p></div></a><a class="card" href="experience-details.html"><img class="thumb" src="assets/img/event-heritage.png" alt=""><div class="body"><h3>قرية رجال ألمع التراثية</h3><p>رجال ألمع · سهل · ساعتان · ثقافة</p></div></a><a class="card" href="experience-details.html"><img class="thumb" src="assets/img/region-tihama.png" alt=""><div class="body"><h3>شلالات الدهناء</h3><p>تنومة · سهل · 3 ساعات · طبيعة</p></div></a><a class="card" href="experience-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><h3>جلسة المطل</h3><p>أبها · سهل · ساعتان · جلسات</p></div></a><a class="card" href="experience-details.html"><img class="thumb" src="assets/img/contact-hero.png" alt=""><div class="body"><h3>تجربة العشاء الجبلي</h3><p>أبها · سهل · ساعتان · مذاق</p></div></a><a class="card" href="experience-details.html"><img class="thumb" src="assets/img/cta-mountains.png" alt=""><div class="body"><h3>جولة شروق الشمس</h3><p>السودة · متوسط · 3 ساعات · تصوير</p></div></a></div>`,
  "experiences",
  "تجارب عسير"
);

pages["events.html"] = inner(
  "الرئيسية / الفعاليات والخريطة",
  "الفعاليات والخريطة",
  "اكتشف ما يحدث في عسير، واختر فعالياتك حسب المكان والوقت",
  "assets/img/event-balloons.png",
  `<div class="card-grid" style="margin-bottom:32px"><article class="card"><div class="body"><h3>خريطة تفاعلية</h3><p>مباشرة</p></div></article><article class="card"><div class="body"><h3>7 مناطق</h3><p>قريبة منك</p></div></article><article class="card"><div class="body"><h3>هذا الأسبوع</h3><p>18 فعالية</p></div></article></div>
<h2 class="section-title">فعاليات هذا الأسبوع</h2>
<div class="card-grid" style="margin-top:24px"><a class="card" href="event-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><h3>ليالي أبها الثقافية</h3><p>أبها · موسيقى وفنون · 22 يونيو</p></div></a><a class="card" href="event-details.html"><img class="thumb" src="assets/img/event-heritage.png" alt=""><div class="body"><h3>سوق الحرف الجبلية</h3><p>رجال ألمع · تراث وأسواق · 23 يونيو</p></div></a><a class="card" href="event-details.html"><img class="thumb" src="assets/img/planner-route.png" alt=""><div class="body"><h3>مسار الغروب</h3><p>السودة · طبيعة ومشي · 24 يونيو</p></div></a><a class="card" href="event-details.html"><img class="thumb" src="assets/img/region-tihama.png" alt=""><div class="body"><h3>جلسات المطر</h3><p>تنومة · جلسات خارجية · 24 يونيو</p></div></a></div>
<div class="map-panel" style="margin-top:40px"><img src="assets/img/map-aseer.png" alt="خريطة الفعاليات"></div>`,
  "events",
  "الفعاليات والخريطة"
);

pages["plan.html"] = inner(
  "الرئيسية  /  خطط رحلتك",
  "خطط رحلتك",
  "ابنِ رحلتك في عسير حسب وقتك، مزاجك، والمنطقة التي تناسبك",
  "assets/img/planner-route.png",
  `<div class="panel"><h2>عدد الأيام</h2><div class="filters"><button class="chip">يوم واحد</button><button class="chip">يومان</button><button class="chip is-active">٣ أيام</button><button class="chip">أسبوع</button></div><h2>اختر المنطقة أو القمة</h2><div class="filters"><a class="chip" href="abha.html">أبها</a><a class="chip" href="soudah.html">السودة</a><a class="chip" href="tanomah.html">تنومة</a><a class="chip" href="rijal-alma.html">رجال ألمع</a><a class="chip" href="al-birk.html">البرك</a></div><h2>اختر مزاج رحلتك</h2><div class="filters"><button class="chip is-active">طبيعة</button><button class="chip">ثقافة</button><button class="chip">مغامرة</button><button class="chip">عائلة</button><button class="chip">جلسات</button></div><p><a class="btn btn-gold" href="route-details.html">ابدأ التخطيط</a></p></div>
<article class="panel" style="margin-top:32px"><h2>اقتراح رحلة جاهزة</h2><h3>يوم فوق الغيم</h3><p>صباحًا: السودة — استمتع بإطلالة السودة وهوائها النقي.</p><p>ظهرًا: جلسة فوق السحاب — جلسة استرخاء في مقهى مطل على السحاب.</p><p>مساءً: عشاء جبلي — عشاء في مطعم جبلي بإطلالة خالدة.</p><a class="btn btn-green" href="route-details.html">اعتمد هذه الرحلة</a></article>`,
  "plan",
  "خطط رحلتك"
);

pages["restaurants.html"] = inner(
  "الرئيسية / المطاعم والمقاهي",
  "المطاعم والمقاهي",
  "نكهات عسير بين الإطلالة، القهوة، والمائدة المحلية",
  "assets/img/contact-hero.png",
  `<h2 class="section-title">أماكن مختارة</h2><div class="card-grid" style="margin-top:24px"><a class="card" href="restaurant-details.html"><img class="thumb" src="assets/img/event-heritage.png" alt=""><div class="body"><h3>مائدة رجال ألمع</h3><p>مطعم · رجال ألمع · ★ 4.8</p></div></a><a class="card" href="restaurant-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><h3>مقهى الضباب</h3><p>مقهى · أبها · ★ 4.6</p></div></a><a class="card" href="restaurant-details.html"><img class="thumb" src="assets/img/planner-route.png" alt=""><div class="body"><h3>مطعم السحاب الجبلي</h3><p>مطعم · السودة، أبها · ★ 4.6</p></div></a><a class="card" href="restaurant-details.html"><img class="thumb" src="assets/img/contact-hero.png" alt=""><div class="body"><h3>تراس أبها</h3><p>مقهى · أبها · ★ 4.5</p></div></a></div>`,
  "restaurants",
  "المطاعم والمقاهي"
);

pages["stays.html"] = inner(
  "الرئيسية / الإقامة",
  "إقامتك في عسير",
  "تجارب إقامة استثنائية وسط الطبيعة الخلابة",
  "assets/img/cta-mountains.png",
  `<h2 class="section-title">إقامات مميزة</h2><div class="card-grid" style="margin-top:24px"><a class="card" href="stay-details.html"><img class="thumb" src="assets/img/region-peaks.png" alt=""><div class="body"><h3>شاليهات قمم السودة</h3><p>السودة · ★ 4.8 · 850 ريال / ليلة</p></div></a><a class="card" href="stay-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><h3>منتجع شدا أزل</h3><p>أبها · ★ 4.8 · 1200 ريال / ليلة</p></div></a><a class="card" href="stay-details.html"><img class="thumb" src="assets/img/region-tihama.png" alt=""><div class="body"><h3>بيت حسين التراثي</h3><p>محايل عسير · ★ 4.8 · 650 ريال / ليلة</p></div></a><a class="card" href="stay-details.html"><img class="thumb" src="assets/img/event-heritage.png" alt=""><div class="body"><h3>منتجع رجال ألمع تراث</h3><p>رجال ألمع · ★ 4.8 · 950 ريال / ليلة</p></div></a></div>`,
  "stays",
  "أماكن الإقامة"
);

pages["contact.html"] = inner(
  "الرئيسية › تواصل معنا",
  "تواصل معنا",
  "نحن هنا لمساعدتك في التخطيط لرحلتك واستكشاف أجمل ما في عسير.",
  "assets/img/contact-hero.png",
  `<div class="panel contact-layout"><div><h2 class="section-title">أرسل لنا رسالة</h2><form class="form-grid" data-contact-form><input name="name" placeholder="الاسم" required><input type="email" name="email" placeholder="البريد الإلكتروني" required><select name="type"><option>نوع الطلب</option><option>استفسار عام</option><option>تخطيط رحلة</option></select><textarea name="message" placeholder="رسالتك" required></textarea><button class="btn btn-gold dark-text" type="submit">إرسال الرسالة</button></form></div><div><h2 class="section-title">بيانات التواصل</h2><div class="info-card"><span class="gold-ico">☏</span><div><b>الهاتف</b><div>+966 17 123 4567</div></div></div><div class="info-card"><span class="gold-ico">@</span><div><b>البريد الإلكتروني</b><div>info@aseer.sa</div></div></div><div class="info-card"><span class="gold-ico">⌖</span><div><b>الموقع</b><div>أبها، منطقة عسير</div></div></div><div class="info-card"><span class="gold-ico">◷</span><div><b>ساعات العمل</b><div>من الأحد إلى الخميس 8:00 صباحًا - 4:00 مساءً</div></div></div></div></div>
<h2 class="section-title" style="margin-top:40px">كيف يمكننا مساعدتك؟</h2>
<div class="card-grid" style="margin-top:24px"><article class="card"><div class="body" style="text-align:center"><h3>الأسئلة الشائعة</h3><p>إجابات سريعة حول التخطيط والزيارة والخدمات.</p></div></article><article class="card"><div class="body" style="text-align:center"><h3>الدعم السياحي</h3><p>مساعدة في اختيار الوجهات والتجارب المناسبة.</p></div></article><article class="card"><div class="body" style="text-align:center"><h3>اقتراحات الزوار</h3><p>شاركنا ملاحظاتك لتحسين تجربة عسير.</p></div></article></div>`,
  "contact",
  "تواصل معنا"
);

pages["404.html"] = wrap(
  `<section class="error-page"><div><p class="code">404</p><h1>الصفحة غير موجودة</h1><p class="muted">يبدو أنك تائه بين قمم عسير! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p><form action="search.html" style="margin:24px auto;width:min(560px,100%)"><input class="search-field" name="q" placeholder="ابحث عن تجربة أو مكان أو نشاط..."></form><div class="hero-actions"><a class="btn btn-gold dark-text" href="index.html">العودة للرئيسية</a><a class="btn btn-outline" href="abha.html">استكشف عسير</a></div></div></section>`,
  "home",
  "صفحة الخطأ"
);

pages["search.html"] = wrap(
  `<section class="section" style="padding-top:160px"><div class="container"><h1>نتائج البحث</h1><form class="panel form-grid" style="margin:24px 0"><input name="q" placeholder="ابحث عن تجربة أو مكان أو نشاط..."></form><div class="card-grid"><a class="card" href="experience-details.html"><img class="thumb" src="assets/img/cta-mountains.png" alt=""><div class="body"><p class="muted">تجربة</p><h3>جولة شروق الشمس في أبها</h3></div></a><a class="card" href="stay-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><p class="muted">إقامة</p><h3>فندق قصر أبها</h3></div></a></div></div></section>`,
  "home",
  "نتائج البحث"
);

pages["login.html"] = wrap(
  `<section class="auth-wrap"><div class="auth-card"><a href="index.html">العودة للرئيسية ←</a><h1>تسجيل الدخول</h1><p class="muted">سجّل دخولك لإدارة حجوزاتك في عسير</p><form class="form-grid" data-auth-form><input type="email" placeholder="البريد الإلكتروني"><input type="password" placeholder="كلمة المرور"><button class="btn btn-gold dark-text" type="submit">تسجيل الدخول</button></form><p style="margin-top:18px">ليس لديك حساب؟ <a href="signup.html">إنشاء حساب</a></p></div></section>`,
  "home",
  "تسجيل الدخول",
  "solid",
  true
);

pages["signup.html"] = wrap(
  `<section class="auth-wrap"><div class="auth-card"><a href="index.html">العودة للرئيسية ←</a><h1>إنشاء حساب جديد</h1><p class="muted">انضم إلينا وابدأ التخطيط لرحلتك في عسير</p><form class="form-grid" data-auth-form><input placeholder="الاسم الكامل"><input type="email" placeholder="البريد الإلكتروني"><input placeholder="رقم الجوال"><input type="password" placeholder="كلمة المرور"><input type="password" placeholder="تأكيد كلمة المرور"><button class="btn btn-gold dark-text" type="submit">إنشاء الحساب</button></form><p style="margin-top:18px">لديك حساب بالفعل؟ <a href="login.html">تسجيل الدخول</a></p></div></section>`,
  "home",
  "إنشاء حساب",
  "solid",
  true
);

pages["account.html"] = wrap(
  `<section class="section" style="padding-top:160px"><div class="container"><p class="crumb">الرئيسية › حسابي</p><h1>حسابي</h1><div class="panel" style="margin-top:24px"><h2>أحمد محمد العسيري</h2><p class="muted">ahmed.alasiri@email.com</p><div class="card-grid" style="margin-top:24px"><a class="card" href="confirmation.html"><div class="body"><h3>حجوزاتي</h3></div></a><a class="card" href="plan.html"><div class="body"><h3>رحلاتي</h3></div></a><a class="card" href="contact.html"><div class="body"><h3>الدعم</h3></div></a></div></div></div></section>`,
  "home",
  "حسابي"
);

const details = [
  ["stay-details.html", "تفاصيل الإقامة", "stays", "شاليهات قمم السودة", "السودة · ★ 4.8 · 850 ريال / ليلة", "assets/img/region-peaks.png", "checkout.html", "إتمام الحجز"],
  ["restaurant-details.html", "تفاصيل المطعم", "restaurants", "مائدة رجال ألمع", "رجال ألمع · ★ 4.8", "assets/img/event-heritage.png", "restaurants.html", "العودة للمطاعم"],
  ["experience-details.html", "تفاصيل التجربة", "experiences", "جلسة فوق السحاب", "السودة - منتزه السودة · ★ 4.9", "assets/img/planner-route.png", "checkout.html", "احجز تجربتك الآن"],
  ["event-details.html", "تفاصيل الفعالية", "events", "مهرجان الطيران المناطيد", "عسير · 20 يونيو - 10 أغسطس", "assets/img/event-balloons.png", "events.html", "كل الفعاليات"],
  ["route-details.html", "تفاصيل المسار", "plan", "يوم فوق الغيم", "أبها ← السودة", "assets/img/planner-route.png", "checkout.html", "اعتمد هذه الرحلة"],
  ["checkout.html", "إتمام الحجز والدفع", "stays", "إتمام الحجز والدفع", "راجع بيانات حجزك في عسير", "assets/img/contact-hero.png", "confirmation.html", "تأكيد الدفع"],
  ["confirmation.html", "تأكيد الحجز", "stays", "تم تأكيد حجزك", "شكراً لك، سنراك في عسير.", "assets/img/cta-mountains.png", "account.html", "عرض حسابي"],
  ["peaks.html", "القمم", "explore", "القمم", "قمم شاهقة وضباب لا ينتهي", "assets/img/region-peaks.png", "soudah.html", "استكشف السودة"]
];

for (const [f, title, key, h1, sub, img, href, cta] of details) {
  pages[f] = inner("الرئيسية / " + title, h1, sub, img, `<div class="panel"><p>${sub}</p><p><a class="btn btn-gold" href="${href}">${cta}</a></p></div>`, key, title);
}

const regionAr = { peaks: "القمم", tihama: "تهامة", coast: "الساحل", desert: "الصحراء والواحات" };
const muhayil = fs.existsSync(path.join(ROOT, "assets/img/muhayil.jpg")) ? "assets/img/muhayil.jpg" : "assets/img/contact-hero.png";
const areas = [
  ["abha.html", "أبها", "peaks", "وجهة المدينة الجبلية في عسير", "حيث تلتقي روح المدينة بإطلالات الجبال، وتمنح أبها زائرها تجربة تجمع بين الطبيعة والثقافة والأسواق والمقاهي المطلة على قمم عسير.", "ارتفاع 2,270 م", "أجواء معتدلة", "تراث وفنون", "قلب عسير", "assets/img/hero-home.png"],
  ["soudah.html", "السودة", "peaks", "قمة الضباب والغيم", "استمتع بإطلالة السودة وهوائها النقي ومساراتها بين الغابات والقمم.", "أعلى القمم", "ضباب صيفي", "منتزهات", "جلسات فوق السحاب", "assets/img/region-peaks.png"],
  ["tanomah.html", "تنومة", "peaks", "شلالات وطبيعة خضراء", "تنومة تجمع الشلالات والمطلات والمسارات الهادئة في قلب القمم.", "شلالات الدهناء", "مسارات", "طبيعة", "جلسات المطر", "assets/img/region-tihama.png"],
  ["al-namas.html", "النماص", "peaks", "غابات ومرتفعات", "النماص وجهة للغابات الكثيفة والأجواء الباردة والمشاهد الجبلية.", "غابات", "مرتفعات", "هدوء", "طبيعة", "assets/img/region-heritage.png"],
  ["ballasmar.html", "بللسمر", "peaks", "قرى على القمم", "بللسمر تجمع القرى الجبلية والإطلالات القريبة من روح عسير.", "قرى جبلية", "إطلالات", "تراث", "هدوء", "assets/img/planner-route.png"],
  ["ballahmar.html", "بللحمر", "peaks", "قمم وتجارب محلية", "بللحمر تفتح أبوابها لتجارب محلية بين الجبال والمدرجات.", "مدرجات", "تجارب محلية", "قمم", "طبيعة", "assets/img/cta-mountains.png"],
  ["rijal-alma.html", "رجال ألمع", "tihama", "القرية التراثية الملونة", "رجال ألمع حكاية حجر وألوان وتراث حي في سفوح تهامة.", "تراث عالمي", "أسواق", "قرية ملونة", "ثقافة", "assets/img/event-heritage.png"],
  ["al-majardah.html", "المجاردة", "tihama", "عسل ووديان", "المجاردة موطن مهرجان العسل والوديان الخضراء في تهامة.", "مهرجان العسل", "وديان", "طبيعة", "ضيافة", "assets/img/event-honey.png"],
  ["bariq.html", "بارق", "tihama", "تهامة النابضة", "بارق تجمع بين دفء تهامة والمسارات الزراعية والأسواق المحلية.", "أسواق", "زراعة", "دفء", "ثقافة", "assets/img/region-tihama.png"],
  ["muhayil.html", "محايل", "tihama", "بوابة تهامة", "محايل عسير ملتقى الطرق والتجارب بين الساحل والسفوح.", "بوابة تهامة", "أسواق", "إقامة تراثية", "حياة محلية", muhayil],
  ["al-birk.html", "البرك", "coast", "شواطئ نقية", "البرك على ساحل البحر الأحمر بشواطئ هادئة ومشاهد خليجية.", "ساحل", "شواطئ", "جزر", "غروب", "assets/img/region-coast.png"],
  ["al-qahmah.html", "القحمة", "coast", "الساحل الجنوبي", "القحمة وجهة ساحلية للهدوء والبحر والمأكولات البحرية.", "بحر", "هدوء", "صيد", "غروب", "assets/img/region-coast.png"],
  ["bisha.html", "بيشة", "desert", "واحات وصحراء", "بيشة ملتقى الواحات والنخيل وأفق الصحراء في عسير.", "واحات", "نخيل", "صحراء", "طرق تجارية", "assets/img/stats-thumb.png"],
  ["sarat-abidah.html", "سراة عبيدة", "desert", "سراة الجنوب", "سراة عبيدة تجمع طابع السراة بأسواقها وطبيعتها الممتدة.", "سراة", "أسواق", "طبيعة", "قرى", "assets/img/region-heritage.png"],
  ["dhahran-al-janub.html", "ظهران الجنوب", "desert", "بوابة الجنوب", "ظهران الجنوب نقطة انطلاق نحو تخوم عسير الجنوبية.", "جنوب عسير", "طرق", "واحات", "تراث", "assets/img/footer-mountains.png"]
];

for (const [f, name, region, sub, body, a, b, c, d, img] of areas) {
  pages[f] = inner(
    "استكشف عسير / " + name,
    name,
    sub,
    img,
    `<div class="panel"><p class="muted">${body}</p><div class="filters" style="margin-top:24px"><span class="chip is-active">${a}</span><span class="chip">${b}</span><span class="chip">${c}</span><span class="chip">${d}</span></div><h2 class="section-title">لماذا ${name}؟</h2><p class="section-sub">ثلاثة أسباب تجعل ${name} جزءاً أصيلاً من اكتشاف ${regionAr[region]}.</p><div class="card-grid" style="margin-top:28px"><article class="card"><div class="body"><h3>هوية الوجهة</h3><p>${body}</p></div></article><article class="card"><div class="body"><h3>جرّب المكان</h3><p>استكشف تجارب ${name} من الإطلالات إلى الأسواق والضيافة المحلية.</p></div></article><article class="card"><div class="body"><h3>خطط لزيارتك</h3><p>اربط زيارتك لـ ${name} بمسار أيامك في عسير.</p><p><a class="btn btn-gold" href="plan.html">خطط لزيارتك</a></p></div></article></div><p style="margin-top:28px"><a class="btn btn-green" href="experiences.html">استكشف تجارب ${name}</a></p></div>`,
    "explore",
    name
  );
}

for (const [name, html] of Object.entries(pages)) {
  fs.writeFileSync(path.join(ROOT, name), html, "utf8");
  console.log("wrote", name);
}
console.log("total", Object.keys(pages).length);
