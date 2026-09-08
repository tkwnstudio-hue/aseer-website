# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).parent


def page(body, page_key, title, header="solid", no_footer=False):
    nf = ' data-no-footer="1"' if no_footer else ""
    ht = 'transparent' if header == "transparent" else "solid"
    return f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | عسير</title>
  <link rel="stylesheet" href="style.css">
</head>
<body data-page="{page_key}" data-header="{ht}"{nf}>
{body}
<script src="script.js"></script>
</body>
</html>
"""


INDEX = r'''
  <section class="hero">
    <div class="hero-inner">
      <p class="hero-eyebrow">منصة اكتشاف منطقة عسير</p>
      <h1>عسير</h1>
      <h2>حيث تلامس الجبال السحاب</h2>
      <p>وجهة واحدة، عوالم متعددة. خطط رحلتك بين القمم والقرى والفعاليات والتجارب.</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="plan.html">اصنع رحلتك <img src="assets/icons/icon-calendar.svg" width="30" height="33" alt=""></a>
        <a class="btn btn-white" href="abha.html">اكتشف عسير <img src="assets/icons/icon-compass.svg" width="30" height="30" alt=""></a>
      </div>
    </div>
  </section>

  <section class="feature-strip">
    <div class="feature-item">
      <div>
        <h3>طبيعة ساحرة</h3>
        <p>جبال شاهقة، وديان خضراء وضباب يلامس السماء</p>
      </div>
      <img src="assets/icons/icon-nature.svg" width="40" height="40" alt="">
    </div>
    <div class="feature-item">
      <div>
        <h3>تراث عريق</h3>
        <p>كنوز تاريخية وحكايات قديمة وبيوت تقليدية أصيلة</p>
      </div>
      <img src="assets/icons/icon-fort.svg" width="40" height="42" alt="">
    </div>
    <div class="feature-item">
      <div>
        <h3>تجارب متنوعة</h3>
        <p>مغامرات، استرخاء، وثقافة في مكان واحد</p>
      </div>
      <img src="assets/icons/icon-tent.svg" width="40" height="25" alt="">
    </div>
    <div class="feature-item">
      <div>
        <h3>ضيافة أصيلة</h3>
        <p>كرم الضيافة والتقاليد في كل زاوية</p>
      </div>
      <img src="assets/icons/icon-hospitality.svg" width="28" height="28" alt="">
    </div>
  </section>

  <section class="section" id="regions">
    <div class="container regions-grid">
      <div class="region-cards">
        <a class="region-card" href="al-birk.html">
          <img class="cover" src="assets/img/region-coast.png" alt="الساحل">
          <div class="meta">
            <img src="assets/icons/icon-coast.svg" width="34" height="30" alt="">
            <h3>الساحل</h3>
            <p>شواطئ نقية<br>وجزر خليجية</p>
          </div>
        </a>
        <a class="region-card" href="rijal-alma.html">
          <img class="cover" src="assets/img/region-tihama.png" alt="تهامة">
          <div class="meta">
            <img src="assets/icons/icon-tihama.svg" width="34" height="30" alt="">
            <h3>تهامة</h3>
            <p>طبيعة خضراء<br>وهواء عليل</p>
          </div>
        </a>
        <a class="region-card" href="rijal-alma.html">
          <img class="cover" src="assets/img/region-heritage.png" alt="تراث">
          <div class="meta">
            <img src="assets/icons/icon-heritage.svg" width="34" height="30" alt="">
            <h3>تراث</h3>
            <p>قرى تاريخية<br>وحكاية أصيلة</p>
          </div>
        </a>
        <a class="region-card" href="soudah.html">
          <img class="cover" src="assets/img/region-peaks.png" alt="القمم">
          <div class="meta">
            <img src="assets/icons/icon-coast.svg" width="34" height="30" alt="">
            <h3>القمم</h3>
            <p>قمم شاهقة<br>وضباب لا ينتهي</p>
          </div>
        </a>
      </div>
      <div>
        <h2 class="section-title">استكشف مناطق عسير</h2>
        <p class="section-sub">كل منطقة حكاية، وكل حكاية تستحق الاكتشاف</p>
        <div class="map-panel" style="margin-top:32px">
          <img src="assets/img/map-aseer.png" alt="خريطة عسير">
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="planner">
      <div>
        <div class="planner-inputs">
          <label class="trip-input">
            <span><small>الميزانية</small><select><option>متوسطة</option><option>اقتصادية</option><option>فاخرة</option></select></span>
            <img src="assets/icons/icon-wallet.svg" width="32" height="32" alt="">
          </label>
          <label class="trip-input">
            <span><small>الاهتمامات</small><select><option>طبيعة وتراث</option><option>مغامرة</option><option>ثقافة</option></select></span>
            <img src="assets/icons/icon-leaf.svg" width="32" height="32" alt="">
          </label>
          <label class="trip-input">
            <span><small>مع من؟</small><select><option>عائلة</option><option>أصدقاء</option><option>فردي</option></select></span>
            <img src="assets/icons/icon-people.svg" width="32" height="32" alt="">
          </label>
          <label class="trip-input">
            <span><small>الأيام</small><select><option>3 أيام</option><option>يوم واحد</option><option>يومان</option><option>أسبوع</option></select></span>
            <img src="assets/icons/icon-days.svg" width="32" height="32" alt="">
          </label>
        </div>
        <div class="planner-visual">
          <img src="assets/img/planner-route.png" alt="مسار مقترح">
        </div>
      </div>
      <div class="planner-summary">
        <h2>اصنع رحلتك في عسير</h2>
        <p>أخبرنا عن رحلتك وسنقترح لك أفضل المسارات والتجارب.</p>
        <a class="btn btn-green" href="plan.html">صمم مساري <img src="assets/icons/icon-planner-cta.svg" width="20" height="20" alt=""></a>
        <article class="route-card">
          <div>
            <h3>مثال لمسار مقترح</h3>
            <p>3 أيام - عائلة - طبيعة وتراث - ميزانية متوسطة<br>أبها ← رجال ألمع ← تنومة</p>
          </div>
          <img src="assets/img/stats-thumb.png" width="104" height="80" alt="">
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="events-head">
        <div class="month-tabs">
          <button type="button" data-month="aug">أغسطس</button>
          <button type="button" data-month="jul">يوليو</button>
          <button class="is-active" type="button" data-month="jun">يونيو</button>
        </div>
        <h2 class="section-title">عسير هذا الصيف</h2>
        <p class="section-sub">فعاليات وتجارب تنتظرك في كل مكان</p>
      </div>
      <div class="event-rail">
        <a class="event-card" href="event-details.html" data-event-month="jun">
          <img src="assets/img/event-balloons.png" alt="مهرجان الطيران المناطيد">
          <div class="meta"><small>20 يونيو - 10 أغسطس</small><div><h3>مهرجان الطيران<br>المناطيد</h3><span>عسير</span></div></div>
        </a>
        <a class="event-card" href="event-details.html" data-event-month="jun">
          <img src="assets/img/event-honey.png" alt="مهرجان العسل">
          <div class="meta"><small>15 - 25 يونيو</small><div><h3>مهرجان العسل<br>بالمجاردة</h3><span>المجاردة</span></div></div>
        </a>
        <a class="event-card" href="event-details.html" data-event-month="jun">
          <img src="assets/img/event-heritage.png" alt="مهرجان رجال ألمع">
          <div class="meta"><small>10 - 20 يونيو</small><div><h3>مهرجان رجال ألمع</h3><span>التراثي</span></div></div>
        </a>
        <a class="event-card" href="event-details.html" data-event-month="jun">
          <img src="assets/img/event-shopping.png" alt="مهرجان أبها للتسوق">
          <div class="meta"><small>5 - 15 يونيو</small><div><h3>مهرجان أبها<br>للتسوق</h3><span>أبها</span></div></div>
        </a>
      </div>
      <div class="center-cta">
        <a class="btn btn-green" href="events.html">عرض جميع الفعاليات</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="stats">
      <div class="stats-brand">
        <img src="assets/icons/logo-mark.svg" width="43" height="43" alt="">
        <div class="logo-ar">عسير</div>
        <div class="logo-en">A S E E R</div>
      </div>
      <div class="stats-msg">عسير ليست وجهة فقط<br>بل إحساس يبقى معك</div>
      <div class="stats-rail">
        <div class="stat"><div><b>11</b><span>محافظة</span><span>تجربة متنوعة</span></div><img src="assets/icons/icon-stats-regions.svg" width="38" height="38" alt=""></div>
        <div class="stat"><div><b>3000+</b><span>متر فوق سطح البحر</span><span>في أعلى القمم</span></div><img src="assets/icons/icon-stats-altitude.svg" width="38" height="38" alt=""></div>
        <div class="stat"><div><b>100+</b><span>مسار سياحي</span><span>بانتظار اكتشافك</span></div><img src="assets/icons/icon-stats-routes.svg" width="38" height="38" alt=""></div>
        <div class="stat"><div><b>4</b><span>فصول ساحرة</span><span>تجربة لا تنتهي</span></div><img src="assets/icons/icon-stats-seasons.svg" width="38" height="38" alt=""></div>
      </div>
    </div>
  </section>

  <section class="footer-cta">
    <div class="footer-cta-inner">
      <div class="footer-cta-copy">
        <h2>رحلتك إلى عسير تبدأ من هنا</h2>
        <p>وجهة لا تزار فقط، بل تُحس</p>
        <a class="btn btn-gold" href="plan.html">ابدأ رحلتك الآن <img src="assets/icons/icon-pin.svg" width="28" height="28" alt=""></a>
      </div>
      <div class="footer-cta-brand">
        <a class="logo" href="index.html">
          <span class="logo-text">
            <span class="logo-ar">عسير</span>
            <span class="logo-en">A S E E R</span>
          </span>
          <img class="logo-mark" src="assets/icons/logo-mark-lg.svg" width="82" height="82" alt="">
        </a>
        <p>حيث تلامس الجبال السحاب</p>
      </div>
    </div>
  </section>
'''

AREAS = [
    ("abha.html", "أبها", "peaks", "وجهة المدينة الجبلية في عسير", "حيث تلتقي روح المدينة بإطلالات الجبال، وتمنح أبها زائرها تجربة تجمع بين الطبيعة والثقافة والأسواق والمقاهي المطلة على قمم عسير.", "ارتفاع 2,270 م", "أجواء معتدلة", "تراث وفنون", "قلب عسير", "assets/img/hero-home.png"),
    ("soudah.html", "السودة", "peaks", "قمة الضباب والغيم", "استمتع بإطلالة السودة وهوائها النقي ومساراتها بين الغابات والقمم.", "أعلى القمم", "ضباب صيفي", "منتزهات", "جلسات فوق السحاب", "assets/img/region-peaks.png"),
    ("tanomah.html", "تنومة", "peaks", "شلالات وطبيعة خضراء", "تنومة تجمع الشلالات والمطلات والمسارات الهادئة في قلب القمم.", "شلالات الدهناء", "مسارات", "طبيعة", "جلسات المطر", "assets/img/region-tihama.png"),
    ("al-namas.html", "النماص", "peaks", "غابات ومرتفعات", "النماص وجهة للغابات الكثيفة والأجواء الباردة والمشاهد الجبلية.", "غابات", "مرتفعات", "هدوء", "طبيعة", "assets/img/region-heritage.png"),
    ("ballasmar.html", "بللسمر", "peaks", "قرى على القمم", "بللسمر تجمع القرى الجبلية والإطلالات القريبة من روح عسير.", "قرى جبلية", "إطلالات", "تراث", "هدوء", "assets/img/planner-route.png"),
    ("ballahmar.html", "بللحمر", "peaks", "قمم وتجارب محلية", "بللحمر تفتح أبوابها لتجارب محلية بين الجبال والمدرجات.", "مدرجات", "تجارب محلية", "قمم", "طبيعة", "assets/img/cta-mountains.png"),
    ("rijal-alma.html", "رجال ألمع", "tihama", "القرية التراثية الملونة", "رجال ألمع حكاية حجر وألوان وتراث حي في سفوح تهامة.", "تراث عالمي", "أسواق", "قرية ملونة", "ثقافة", "assets/img/event-heritage.png"),
    ("al-majardah.html", "المجاردة", "tihama", "عسل ووديان", "المجاردة موطن مهرجان العسل والوديان الخضراء في تهامة.", "مهرجان العسل", "وديان", "طبيعة", "ضيافة", "assets/img/event-honey.png"),
    ("bariq.html", "بارق", "tihama", "تهامة النابضة", "بارق تجمع بين دفء تهامة والمسارات الزراعية والأسواق المحلية.", "أسواق", "زراعة", "دفء", "ثقافة", "assets/img/region-tihama.png"),
    ("muhayil.html", "محايل", "tihama", "بوابة تهامة", "محايل عسير ملتقى الطرق والتجارب بين الساحل والسفوح.", "بوابة تهامة", "أسواق", "إقامة تراثية", "حياة محلية", "assets/img/muhayil.jpg" if (ROOT / "assets/img/muhayil.jpg").exists() else "assets/img/contact-hero.png"),
    ("al-birk.html", "البرك", "coast", "شواطئ نقية", "البرك على ساحل البحر الأحمر بشواطئ هادئة ومشاهد خليجية.", "ساحل", "شواطئ", "جزر", "غروب", "assets/img/region-coast.png"),
    ("al-qahmah.html", "القحمة", "coast", "الساحل الجنوبي", "القحمة وجهة ساحلية للهدوء والبحر والمأكولات البحرية.", "بحر", "هدوء", "صيد", "غروب", "assets/img/region-coast.png"),
    ("bisha.html", "بيشة", "desert", "واحات وصحراء", "بيشة ملتقى الواحات والنخيل وأفق الصحراء في عسير.", "واحات", "نخيل", "صحراء", "طرق تجارية", "assets/img/stats-thumb.png"),
    ("sarat-abidah.html", "سراة عبيدة", "desert", "سراة الجنوب", "سراة عبيدة تجمع طابع السراة بأسواقها وطبيعتها الممتدة.", "سراة", "أسواق", "طبيعة", "قرى", "assets/img/region-heritage.png"),
    ("dhahran-al-janub.html", "ظهران الجنوب", "desert", "بوابة الجنوب", "ظهران الجنوب نقطة انطلاق نحو تخوم عسير الجنوبية.", "جنوب عسير", "طرق", "واحات", "تراث", "assets/img/footer-mountains.png"),
]


def area_page(file, name, region, subtitle, body, a, b, c, d, img):
    region_ar = {"peaks": "القمم", "tihama": "تهامة", "coast": "الساحل", "desert": "الصحراء والواحات"}[region]
    content = f'''
  <section class="page-hero" style="background-image:url('{img}')">
    <div class="copy">
      <p class="crumb">استكشف عسير / {name}</p>
      <h1>{name}</h1>
      <p>{subtitle}</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="panel">
        <p class="muted">{body}</p>
        <div class="filters" style="margin-top:24px">
          <span class="chip is-active">{a}</span>
          <span class="chip">{b}</span>
          <span class="chip">{c}</span>
          <span class="chip">{d}</span>
        </div>
        <h2 class="section-title">لماذا {name}؟</h2>
        <p class="section-sub">ثلاثة أسباب تجعل {name} جزءاً أصيلاً من اكتشاف {region_ar}.</p>
        <div class="card-grid" style="margin-top:28px">
          <article class="card"><div class="body"><h3>هوية الوجهة</h3><p>{body}</p></div></article>
          <article class="card"><div class="body"><h3>جرّب المكان</h3><p>استكشف تجارب {name} من الإطلالات إلى الأسواق والضيافة المحلية.</p></div></article>
          <article class="card"><div class="body"><h3>خطط لزيارتك</h3><p>اربط زيارتك لـ {name} بمسار أيامك في عسير.</p><p><a class="btn btn-gold" href="plan.html">خطط لزيارتك ل{name}</a></p></div></article>
        </div>
        <p style="margin-top:28px"><a class="btn btn-green" href="experiences.html">استكشف تجارب {name}</a></p>
      </div>
    </div>
  </section>
'''
    return page(content, "explore", name)


files = {
    "index.html": page(INDEX, "home", "الصفحة الرئيسية", header="transparent"),
}

files["experiences.html"] = page('''
  <section class="page-hero" style="background-image:url('assets/img/hero-home.png')">
    <div class="copy">
      <p class="crumb">الرئيسية  /  تجارب عسير</p>
      <h1>تجارب عسير</h1>
      <p>اكتشف الجبل والثقافة والطبيعة واللحظات المحلية في رحلة واحدة</p>
    </div>
  </section>
  <section class="section"><div class="container">
    <div class="filters">
      <button class="chip is-active">الكل</button><button class="chip">القمم</button><button class="chip">الطبيعة</button><button class="chip">الثقافة</button>
      <button class="chip">المطاعم</button><button class="chip">المسارات</button><button class="chip">الجلسات</button><button class="chip">العوائل</button><button class="chip">المواسم</button>
    </div>
    <article class="panel split" style="margin-bottom:32px">
      <img class="thumb" src="assets/img/planner-route.png" alt="جلسة فوق السحاب" style="height:100%;min-height:280px;border-radius:12px;object-fit:cover">
      <div>
        <p class="muted">تجربة مختارة</p>
        <h2>جلسة فوق السحاب</h2>
        <p>السودة - منتزه السودة</p>
        <p>★ 4.9   (326 تقييم)</p>
        <div class="filters"><span class="chip">جلسات خارجية</span><span class="chip">مناسب للعائلة</span><span class="chip">طبيعة جبلية</span></div>
        <p>استمتع بجلسة هادئة على ارتفاع فوق الغيم، مع مشروب دافئ وإطلالة تمنحك إحساس عسير الحقيقي.</p>
        <a class="btn btn-gold" href="experience-details.html">احجز تجربتك الآن</a>
      </div>
    </article>
    <h2 class="section-title">اختر تجربتك حسب المزاج</h2>
    <div class="card-grid" style="margin:24px 0 40px">
      <a class="card" href="experiences.html"><div class="body"><h3>مغامرة</h3><p>نشاط وحماس</p></div></a>
      <a class="card" href="experiences.html"><div class="body"><h3>هدوء</h3><p>استرخاء وتجدد</p></div></a>
      <a class="card" href="experiences.html"><div class="body"><h3>تراث</h3><p>ثقافة وهوية</p></div></a>
      <a class="card" href="experiences.html"><div class="body"><h3>مذاق</h3><p>نكهات محلية</p></div></a>
      <a class="card" href="experiences.html"><div class="body"><h3>عائلة</h3><p>لحظات تجمعنا</p></div></a>
      <a class="card" href="experiences.html"><div class="body"><h3>تصوير</h3><p>لقطات ملهمة</p></div></a>
    </div>
    <h2 class="section-title">تجارب مختارة</h2>
    <div class="card-grid" style="margin-top:24px">
      <a class="card" href="experience-details.html"><img class="thumb" src="assets/img/region-heritage.png" alt=""><div class="body"><h3>مسار رجال ألمع الجبلي</h3><p>رجال ألمع · سهل · 4 ساعات · مغامرة</p></div></a>
      <a class="card" href="experience-details.html"><img class="thumb" src="assets/img/event-heritage.png" alt=""><div class="body"><h3>قرية رجال ألمع التراثية</h3><p>رجال ألمع · سهل · ساعتان · ثقافة</p></div></a>
      <a class="card" href="experience-details.html"><img class="thumb" src="assets/img/region-tihama.png" alt=""><div class="body"><h3>شلالات الدهناء</h3><p>تنومة · سهل · 3 ساعات · طبيعة</p></div></a>
      <a class="card" href="experience-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><h3>جلسة المطل</h3><p>أبها · سهل · ساعتان · جلسات</p></div></a>
      <a class="card" href="experience-details.html"><img class="thumb" src="assets/img/contact-hero.png" alt=""><div class="body"><h3>تجربة العشاء الجبلي</h3><p>أبها · سهل · ساعتان · مذاق</p></div></a>
      <a class="card" href="experience-details.html"><img class="thumb" src="assets/img/cta-mountains.png" alt=""><div class="body"><h3>جولة شروق الشمس</h3><p>السودة · متوسط · 3 ساعات · تصوير</p></div></a>
    </div>
  </div></section>
''', "experiences", "تجارب عسير")

files["events.html"] = page('''
  <section class="page-hero" style="background-image:url('assets/img/event-balloons.png')">
    <div class="copy">
      <p class="crumb">الرئيسية / الفعاليات والخريطة</p>
      <h1>الفعاليات والخريطة</h1>
      <p>اكتشف ما يحدث في عسير، واختر فعالياتك حسب المكان والوقت</p>
    </div>
  </section>
  <section class="section"><div class="container">
    <div class="card-grid" style="margin-bottom:32px">
      <article class="card"><div class="body"><h3>خريطة تفاعلية</h3><p>مباشرة</p></div></article>
      <article class="card"><div class="body"><h3>7 مناطق</h3><p>قريبة منك</p></div></article>
      <article class="card"><div class="body"><h3>هذا الأسبوع</h3><p>18 فعالية</p></div></article>
    </div>
    <form class="panel form-grid" action="search.html" style="margin-bottom:32px">
      <input name="q" placeholder="اسم الفعالية أو المنطقة...">
      <div class="split">
        <select><option>هذا الأسبوع</option><option>يونيو</option><option>يوليو</option></select>
        <select><option>كل المناطق</option><option>أبها</option><option>السودة</option></select>
      </div>
    </form>
    <h2 class="section-title">فعاليات هذا الأسبوع</h2>
    <div class="card-grid" style="margin-top:24px">
      <a class="card" href="event-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><h3>ليالي أبها الثقافية</h3><p>أبها · موسيقى وفنون · 22 يونيو · الأحد</p></div></a>
      <a class="card" href="event-details.html"><img class="thumb" src="assets/img/event-heritage.png" alt=""><div class="body"><h3>سوق الحرف الجبلية</h3><p>رجال ألمع · تراث وأسواق · 23 يونيو · الاثنين</p></div></a>
      <a class="card" href="event-details.html"><img class="thumb" src="assets/img/planner-route.png" alt=""><div class="body"><h3>مسار الغروب</h3><p>السودة · طبيعة ومشي · 24 يونيو · الثلاثاء</p></div></a>
      <a class="card" href="event-details.html"><img class="thumb" src="assets/img/region-tihama.png" alt=""><div class="body"><h3>جلسات المطر</h3><p>تنومة · جلسات خارجية · 24 يونيو · الأربعاء</p></div></a>
    </div>
    <div class="map-panel" style="margin-top:40px"><img src="assets/img/map-aseer.png" alt="خريطة الفعاليات"></div>
  </div></section>
''', "events", "الفعاليات والخريطة")

files["plan.html"] = page('''
  <section class="page-hero" style="background-image:url('assets/img/planner-route.png')">
    <div class="copy">
      <p class="crumb">الرئيسية  /  خطط رحلتك</p>
      <h1>خطط رحلتك</h1>
      <p>ابنِ رحلتك في عسير حسب وقتك، مزاجك، والمنطقة التي تناسبك</p>
    </div>
  </section>
  <section class="section"><div class="container">
    <div class="panel">
      <h2>عدد الأيام</h2>
      <div class="filters"><button class="chip">يوم واحد</button><button class="chip">يومان</button><button class="chip is-active">٣ أيام</button><button class="chip">أسبوع</button></div>
      <h2>اختر المنطقة أو القمة</h2>
      <div class="filters">
        <a class="chip" href="abha.html">أبها</a><a class="chip" href="soudah.html">السودة</a><a class="chip" href="tanomah.html">تنومة</a>
        <a class="chip" href="rijal-alma.html">رجال ألمع</a><a class="chip" href="al-birk.html">البرك</a>
      </div>
      <h2>اختر مزاج رحلتك</h2>
      <div class="filters"><button class="chip is-active">طبيعة</button><button class="chip">ثقافة</button><button class="chip">مغامرة</button><button class="chip">عائلة</button><button class="chip">جلسات</button></div>
      <p><a class="btn btn-gold" href="route-details.html">ابدأ التخطيط</a></p>
    </div>
    <div class="card-grid" style="margin-top:32px">
      <article class="card"><div class="body"><h3>حسب الوقت</h3><p>خطط رحلتك بناءً على المدة التي لديك</p></div></article>
      <article class="card"><div class="body"><h3>حسب المنطقة</h3><p>اكتشف الوجهات والمناطق في عسير</p></div></article>
      <article class="card"><div class="body"><h3>حسب التجربة</h3><p>اختر التجارب التي تناسب اهتماماتك ومزاجك</p></div></article>
    </div>
    <article class="panel" style="margin-top:32px">
      <h2>اقتراح رحلة جاهزة</h2>
      <h3>يوم فوق الغيم</h3>
      <p>صباحًا: السودة — استمتع بإطلالة السودة وهوائها النقي.</p>
      <p>ظهرًا: جلسة فوق السحاب — جلسة استرخاء في مقهى مطل على السحاب.</p>
      <p>مساءً: عشاء جبلي — عشاء في مطعم جبلي بإطلالة خالدة.</p>
      <a class="btn btn-green" href="route-details.html">اعتمد هذه الرحلة</a>
    </article>
  </div></section>
''', "plan", "خطط رحلتك")

files["restaurants.html"] = page('''
  <section class="page-hero" style="background-image:url('assets/img/contact-hero.png')">
    <div class="copy">
      <p class="crumb">الرئيسية / المطاعم والمقاهي</p>
      <h1>المطاعم والمقاهي</h1>
      <p>نكهات عسير بين الإطلالة، القهوة، والمائدة المحلية</p>
    </div>
  </section>
  <section class="section"><div class="container">
    <div class="card-grid" style="margin-bottom:32px">
      <article class="card"><div class="body"><h3>أطباق محلية</h3><p>من المطبخ العسيري</p></div></article>
      <article class="card"><div class="body"><h3>مقاهي بإطلالة</h3><p>12</p></div></article>
      <article class="card"><div class="body"><h3>مطاعم مختارة</h3><p>24</p></div></article>
    </div>
    <h2 class="section-title">أماكن مختارة</h2>
    <div class="card-grid" style="margin-top:24px">
      <a class="card" href="restaurant-details.html"><img class="thumb" src="assets/img/event-heritage.png" alt=""><div class="body"><h3>مائدة رجال ألمع</h3><p>مطعم · رجال ألمع · ★ 4.8 · أكل محلي · تراثي</p></div></a>
      <a class="card" href="restaurant-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><h3>مقهى الضباب</h3><p>مقهى · أبها · ★ 4.6 · إطلالة · قهوة مختصة</p></div></a>
      <a class="card" href="restaurant-details.html"><img class="thumb" src="assets/img/planner-route.png" alt=""><div class="body"><h3>مطعم السحاب الجبلي</h3><p>مطعم · السودة، أبها · ★ 4.6 · إطلالة · أكل محلي</p></div></a>
      <a class="card" href="restaurant-details.html"><img class="thumb" src="assets/img/contact-hero.png" alt=""><div class="body"><h3>تراس أبها</h3><p>مقهى · أبها · ★ 4.5 · إطلالة · موسيقى</p></div></a>
    </div>
  </div></section>
''', "restaurants", "المطاعم والمقاهي")

files["stays.html"] = page('''
  <section class="page-hero" style="background-image:url('assets/img/cta-mountains.png')">
    <div class="copy">
      <p class="crumb">الرئيسية / الإقامة</p>
      <h1>إقامتك في عسير</h1>
      <p>تجارب إقامة استثنائية وسط الطبيعة الخلابة</p>
    </div>
  </section>
  <section class="section"><div class="container">
    <div class="filters"><span class="chip is-active">راحة وخصوصية</span><span class="chip">ضيافة أصيلة</span><span class="chip">إطلالات ساحرة</span></div>
    <h2 class="section-title">إقامات مميزة</h2>
    <div class="card-grid" style="margin-top:24px">
      <a class="card" href="stay-details.html"><img class="thumb" src="assets/img/region-peaks.png" alt=""><div class="body"><h3>شاليهات قمم السودة</h3><p>السودة · ★ 4.8 · 850 ريال / ليلة · تراثي</p></div></a>
      <a class="card" href="stay-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><h3>منتجع شدا أزل</h3><p>أبها · ★ 4.8 · 1200 ريال / ليلة · تراثي</p></div></a>
      <a class="card" href="stay-details.html"><img class="thumb" src="assets/img/region-tihama.png" alt=""><div class="body"><h3>بيت حسين التراثي</h3><p>محايل عسير · ★ 4.8 · 650 ريال / ليلة · تراثي</p></div></a>
      <a class="card" href="stay-details.html"><img class="thumb" src="assets/img/event-heritage.png" alt=""><div class="body"><h3>منتجع رجال ألمع تراث</h3><p>رجال ألمع · ★ 4.8 · 950 ريال / ليلة · تراثي</p></div></a>
    </div>
    <h2 class="section-title" style="margin-top:40px">تصفح حسب نوع الإقامة</h2>
    <div class="card-grid" style="margin-top:24px">
      <article class="card"><div class="body"><h3>نزل وبيوت ضيافة</h3><p>ضيافة محلية دافئة</p></div></article>
      <article class="card"><div class="body"><h3>منتجعات</h3><p>منتجعات وشاليهات</p></div></article>
      <article class="card"><div class="body"><h3>شاليهات</h3><p>إطلالات وخصوصية</p></div></article>
    </div>
  </div></section>
''', "stays", "أماكن الإقامة")

files["contact.html"] = page('''
  <section class="page-hero" style="background-image:url('assets/img/contact-hero.png')">
    <div class="copy">
      <p class="crumb">الرئيسية › تواصل معنا</p>
      <h1>تواصل معنا</h1>
      <p>نحن هنا لمساعدتك في التخطيط لرحلتك واستكشاف أجمل ما في عسير.</p>
    </div>
  </section>
  <section class="section"><div class="container">
    <div class="panel contact-layout">
      <div>
        <h2 class="section-title">أرسل لنا رسالة</h2>
        <form class="form-grid" data-contact-form>
          <input name="name" placeholder="الاسم" required>
          <input type="email" name="email" placeholder="البريد الإلكتروني" required>
          <select name="type"><option>نوع الطلب</option><option>استفسار عام</option><option>تخطيط رحلة</option><option>اقتراح</option></select>
          <textarea name="message" placeholder="رسالتك" required></textarea>
          <button class="btn btn-gold dark-text" type="submit">إرسال الرسالة</button>
        </form>
      </div>
      <div>
        <h2 class="section-title">بيانات التواصل</h2>
        <div class="info-card"><span class="gold-ico">☏</span><div><b>الهاتف</b><div>+966 17 123 4567</div></div><small class="muted">من الأحد إلى الخميس 8:00 صباحًا - 4:00 مساءً</small></div>
        <div class="info-card"><span class="gold-ico">@</span><div><b>البريد الإلكتروني</b><div>info@aseer.sa</div></div><small class="muted">نرد على رسائلكم خلال 24 ساعة</small></div>
        <div class="info-card"><span class="gold-ico">⌖</span><div><b>الموقع</b><div>أبها، منطقة عسير</div></div><small class="muted">المملكة العربية السعودية</small></div>
        <div class="info-card"><span class="gold-ico">◷</span><div><b>ساعات العمل</b><div>من الأحد إلى الخميس</div></div><small class="muted">8:00 صباحًا - 4:00 مساءً بتوقيت السعودية</small></div>
      </div>
    </div>
    <h2 class="section-title" style="margin-top:40px">كيف يمكننا مساعدتك؟</h2>
    <div class="card-grid" style="margin-top:24px">
      <article class="card"><div class="body" style="text-align:center"><div class="gold-ico" style="font-size:38px;margin:0 auto 8px">؟</div><h3>الأسئلة الشائعة</h3><p>إجابات سريعة حول التخطيط والزيارة والخدمات.</p></div></article>
      <article class="card"><div class="body" style="text-align:center"><div class="gold-ico" style="font-size:38px;margin:0 auto 8px">◎</div><h3>الدعم السياحي</h3><p>مساعدة في اختيار الوجهات والتجارب المناسبة.</p></div></article>
      <article class="card"><div class="body" style="text-align:center"><div class="gold-ico" style="font-size:38px;margin:0 auto 8px">✦</div><h3>اقتراحات الزوار</h3><p>شاركنا ملاحظاتك لتحسين تجربة عسير.</p></div></article>
    </div>
    <div class="panel" style="margin-top:28px"><b>معلومة إضافية</b><p class="muted">يمكنك مراسلتنا لأي استفسار متعلق بالوجهات، الفعاليات، التجارب، أو التخطيط لرحلتك القادمة في عسير.</p></div>
  </div></section>
''', "contact", "تواصل معنا")

files["404.html"] = page('''
  <section class="error-page">
    <div>
      <p class="code">404</p>
      <h1>الصفحة غير موجودة</h1>
      <p class="muted">يبدو أنك تائه بين قمم عسير! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
      <form action="search.html" style="margin:24px auto;width:min(560px,100%)">
        <input class="search-field" name="q" placeholder="ابحث عن تجربة أو مكان أو نشاط...">
      </form>
      <div class="hero-actions">
        <a class="btn btn-gold dark-text" href="index.html">العودة للرئيسية</a>
        <a class="btn btn-outline" href="abha.html">استكشف عسير</a>
      </div>
    </div>
  </section>
''', "home", "صفحة الخطأ")

files["search.html"] = page('''
  <section class="section" style="padding-top:160px">
    <div class="container">
      <h1>نتائج البحث</h1>
      <form class="panel form-grid" style="margin:24px 0">
        <input name="q" placeholder="ابحث عن تجربة أو مكان أو نشاط...">
      </form>
      <div class="card-grid">
        <a class="card" href="experience-details.html"><img class="thumb" src="assets/img/cta-mountains.png" alt=""><div class="body"><p class="muted">تجربة</p><h3>جولة شروق الشمس في أبها</h3><p>سهل · 4 ساعات</p></div></a>
        <a class="card" href="stay-details.html"><img class="thumb" src="assets/img/hero-home.png" alt=""><div class="body"><p class="muted">إقامة</p><h3>فندق قصر أبها</h3><p>أبها</p></div></a>
      </div>
    </div>
  </section>
''', "home", "نتائج البحث")

files["login.html"] = page('''
  <section class="auth-wrap">
    <div class="auth-card">
      <a href="index.html">العودة للرئيسية ←</a>
      <div class="logo" style="color:var(--green);margin:18px 0 8px;justify-content:flex-end">
        <span class="logo-text"><span class="logo-ar">عسير</span><span class="logo-en">A S E E R</span></span>
        <img class="logo-mark" src="assets/icons/logo-mark.svg" width="43" height="43" alt="">
      </div>
      <h1>تسجيل الدخول</h1>
      <p class="muted">سجّل دخولك لإدارة حجوزاتك في عسير</p>
      <form class="form-grid" data-auth-form>
        <input type="email" placeholder="البريد الإلكتروني" value="ahmed.alasiri@email.com">
        <input type="password" placeholder="كلمة المرور" value="password">
        <a href="#">نسيت كلمة المرور؟</a>
        <button class="btn btn-gold dark-text" type="submit">تسجيل الدخول</button>
      </form>
      <p class="muted" style="text-align:center;margin:18px 0">أو</p>
      <button class="btn btn-outline" type="button" style="width:100%">المتابعة عبر جوجل</button>
      <p style="margin-top:18px">ليس لديك حساب؟ <a href="signup.html">إنشاء حساب</a></p>
    </div>
  </section>
''', "home", "تسجيل الدخول", no_footer=True)

files["signup.html"] = page('''
  <section class="auth-wrap">
    <div class="auth-card">
      <a href="index.html">العودة للرئيسية ←</a>
      <h1>إنشاء حساب جديد</h1>
      <p class="muted">انضم إلينا وابدأ التخطيط لرحلتك في عسير</p>
      <form class="form-grid" data-auth-form>
        <input placeholder="الاسم الكامل" value="أحمد محمد العسيري">
        <input type="email" placeholder="البريد الإلكتروني" value="ahmed.alasiri@email.com">
        <input placeholder="رقم الجوال" value="+966 55 123 4567">
        <input type="password" placeholder="كلمة المرور">
        <input type="password" placeholder="تأكيد كلمة المرور">
        <label class="muted"><input type="checkbox" checked> أوافق على الشروط وسياسة الخصوصية</label>
        <button class="btn btn-gold dark-text" type="submit">إنشاء الحساب</button>
      </form>
      <p style="margin-top:18px">لديك حساب بالفعل؟ <a href="login.html">تسجيل الدخول</a></p>
    </div>
  </section>
''', "home", "إنشاء حساب", no_footer=True)

files["account.html"] = page('''
  <section class="section" style="padding-top:160px">
    <div class="container">
      <p class="crumb">الرئيسية › حسابي</p>
      <h1>حسابي</h1>
      <div class="panel" style="margin-top:24px">
        <h2>أحمد محمد العسيري</h2>
        <p class="muted">ahmed.alasiri@email.com</p>
        <div class="card-grid" style="margin-top:24px">
          <a class="card" href="confirmation.html"><div class="body"><h3>حجوزاتي</h3><p>إدارة حجوزات الإقامة والتجارب</p></div></a>
          <a class="card" href="plan.html"><div class="body"><h3>رحلاتي</h3><p>مساراتك المحفوظة في عسير</p></div></a>
          <a class="card" href="contact.html"><div class="body"><h3>الدعم</h3><p>تواصل مع فريق عسير</p></div></a>
        </div>
      </div>
    </div>
  </section>
''', "home", "حسابي")

DETAIL_PAGES = {
    "stay-details.html": ("تفاصيل الإقامة", "stays", "شاليهات قمم السودة", "السودة · ★ 4.8 · 850 ريال / ليلة", "assets/img/region-peaks.png", "checkout.html", "إتمام الحجز"),
    "restaurant-details.html": ("تفاصيل المطعم", "restaurants", "مائدة رجال ألمع", "رجال ألمع · ★ 4.8 · أكل محلي", "assets/img/event-heritage.png", "restaurants.html", "العودة للمطاعم"),
    "experience-details.html": ("تفاصيل التجربة", "experiences", "جلسة فوق السحاب", "السودة - منتزه السودة · ★ 4.9", "assets/img/planner-route.png", "checkout.html", "احجز تجربتك الآن"),
    "event-details.html": ("تفاصيل الفعالية", "events", "مهرجان الطيران المناطيد", "عسير · 20 يونيو - 10 أغسطس", "assets/img/event-balloons.png", "events.html", "كل الفعاليات"),
    "route-details.html": ("تفاصيل المسار", "plan", "يوم فوق الغيم", "أبها ← السودة ← جلسة فوق السحاب", "assets/img/planner-route.png", "checkout.html", "اعتمد هذه الرحلة"),
    "checkout.html": ("إتمام الحجز والدفع", "stays", "إتمام الحجز والدفع", "راجع بيانات حجزك في عسير", "assets/img/contact-hero.png", "confirmation.html", "تأكيد الدفع"),
    "confirmation.html": ("تأكيد الحجز", "stays", "تم تأكيد حجزك", "شكراً لك، سنراك في عسير.", "assets/img/cta-mountains.png", "account.html", "عرض حسابي"),
    "peaks.html": ("القمم", "explore", "القمم", "قمم شاهقة وضباب لا ينتهي", "assets/img/region-peaks.png", "soudah.html", "استكشف السودة"),
}

for fname, (title, key, h1, sub, img, href, cta) in DETAIL_PAGES.items():
    files[fname] = page(f'''
  <section class="page-hero" style="background-image:url('{img}')">
    <div class="copy">
      <p class="crumb">الرئيسية / {title}</p>
      <h1>{h1}</h1>
      <p>{sub}</p>
    </div>
  </section>
  <section class="section"><div class="container">
    <div class="panel">
      <p>{sub}</p>
      <p class="muted">حافظنا على ترتيب الأقسام والنصوص كما في تصميم عسير، مع نفس الهوية البصرية للألوان والبطاقات والأزرار.</p>
      <p><a class="btn btn-gold" href="{href}">{cta}</a></p>
    </div>
  </div></section>
''', key, title)

for area in AREAS:
    files[area[0]] = area_page(*area)

for name, html in files.items():
    (ROOT / name).write_text(html, encoding="utf-8")
    print("wrote", name)

print("total", len(files))
