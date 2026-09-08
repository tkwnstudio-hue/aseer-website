(() => {
  const LANG_KEY = "aseer_lang";

  function getLang() {
    return localStorage.getItem(LANG_KEY) || "ar";
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }

  function applyDocumentLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-lang", lang);
  }

  applyDocumentLang(getLang());

  const I18N = {
    ar: {
      skip_content: "تخطَّ إلى المحتوى",
      nav_home: "الرئيسية",
      nav_explore: "استكشف عسير",
      nav_experiences: "تجارب",
      nav_events: "فعاليات",
      nav_plan: "خطط رحلتك",
      nav_restaurants: "المطاعم والمقاهي",
      nav_stays: "أماكن الإقامة",
      nav_contact: "تواصل معنا",
      nav_search: "بحث",
      nav_account: "حسابي",
      nav_search_ph: "ابحث عن تجربة أو مكان أو نشاط...",
      nav_search_go: "بحث",
      lang_switch: "English",
      menu: "القائمة",
      mega_peaks: "القمم",
      mega_heritage: "تراث",
      mega_coast: "الساحل",
      mega_desert: "الصحراء والواحات",
      mega_more: "المزيد ...",
      footer_tagline: "وجهة جبلية فاخرة تجمع بين جمال الطبيعة والثقافة الأصيلة والضيافة الراقية.",
      footer_discover: "اكتشف عسير",
      footer_discover_about: "عن عسير",
      footer_discover_regions: "المناطق",
      footer_discover_events: "الفعاليات",
      footer_discover_blog: "المدونة",
      footer_experiences: "تجارب عسير",
      footer_exp_adventures: "المغامرات",
      footer_exp_culture: "الثقافة",
      footer_exp_nature: "الطبيعة",
      footer_exp_food: "المأكولات",
      footer_info: "معلومات",
      footer_faq: "الأسئلة الشائعة",
      footer_terms: "الشروط والأحكام",
      footer_privacy: "سياسة الخصوصية",
      footer_contact: "تواصل معنا",
      footer_newsletter: "النشرة البريدية",
      footer_newsletter_sub: "اشترك للحصول على آخر الأخبار والعروض الحصرية.",
      footer_email_ph: "بريدك الإلكتروني",
      footer_subscribe: "اشترك",
      footer_rights: "جميع الحقوق محفوظة © 2026 عسير",
      footer_credit: "تصميم وتطوير استوديو تكوين",
      footer_made_ksa: "صنع في المملكة العربية السعودية",
      footer_subscribed: "تم الاشتراك في النشرة البريدية",
      hero_eyebrow: "منصة اكتشاف منطقة عسير",
      hero_title_main: "عسير",
      hero_title_sub: "حيث تلامس الجبال السحاب",
      hero_desc: "وجهة واحدة، عوالم متعددة. خطط رحلتك بين القمم والقرى والفعاليات والتجارب.",
      btn_explore: "اكتشف عسير",
      btn_plan_trip: "اصنع رحلتك",
      feat1_t: "ضيافة أصيلة",
      feat1_d: "كرم الضيافة والتقاليد في كل زاوية",
      feat2_t: "تجارب متنوعة",
      feat2_d: "مغامرات، استرخاء، وثقافة في مكان واحد",
      feat3_t: "تراث عريق",
      feat3_d: "كنوز تاريخية وحكايات قديمة وبيوت تقليدية أصيلة",
      feat4_t: "طبيعة ساحرة",
      feat4_d: "جبال شاهقة، وديان خضراء وضباب يلامس السماء",
      regions_title: "استكشف مناطق عسير",
      regions_subtitle: "كل منطقة حكاية، وكل حكاية تستحق الاكتشاف",
      regions_map: "اختر منطقتك",
      region_peaks_n: "القمم",
      region_peaks_d: "قمم شاهقة<br>وضباب لا ينتهي",
      region_heritage_n: "تراث",
      region_heritage_d: "قرى تاريخية<br>وحكاية أصيلة",
      region_coast_n: "الساحل",
      region_coast_d: "شواطئ نقية<br>وجزر خليجية",
      region_desert_n: "الصحراء والواحات",
      region_desert_d: "واحات وسهول<br>عند حافة الصحراء",
      trip_budget_l: "الميزانية",
      trip_budget_mid: "متوسطة",
      trip_budget_eco: "اقتصادية",
      trip_budget_lux: "فاخرة",
      trip_interests_l: "الاهتمامات",
      trip_interests_nature: "طبيعة وتراث",
      trip_interests_adv: "مغامرة",
      trip_interests_culture: "ثقافة",
      trip_group_l: "مع من؟",
      trip_group_family: "عائلة",
      trip_group_friends: "أصدقاء",
      trip_group_solo: "فردي",
      trip_days_l: "الأيام",
      trip_days_3: "3 أيام",
      trip_days_1: "يوم واحد",
      trip_days_2: "يومان",
      trip_days_7: "أسبوع",
      planner_t: "اصنع رحلتك في عسير",
      planner_d: "أخبرنا عن رحلتك وسنقترح لك أفضل المسارات والتجارب.",
      btn_design_route: "صمم مساري",
      trip_path_hint: "مسار مقترح · ليس خريطة",
      trip_day_1: "اليوم 1",
      trip_day_2: "اليوم 2",
      trip_day_3: "اليوم 3",
      suggested_route_t: "مثال لمسار مقترح",
      suggested_route_d1: "3 أيام — عائلة — طبيعة وتراث — ميزانية متوسطة",
      suggested_route_d2: "أبها ← رجال ألمع ← تنومة",
      ev_tab_aug: "أغسطس",
      ev_tab_jul: "يوليو",
      ev_tab_jun: "يونيو",
      events_title: "عسير هذا الصيف",
      events_desc: "فعاليات وتجارب تنتظرك في كل مكان",
      spot_title: "مختارات المناطق",
      spot_desc: "أربع عوالم في عسير — تصفّح ثم انزل لاستكشاف أعمق",
      spot_tag_region: "منطقة",
      spot_cta: "استكشف المنطقة",
      ev1_date: "20 يونيو - 10 أغسطس",
      ev1_t: "مهرجان الطيران المناطيد",
      ev1_p: "عسير",
      ev2_date: "15 - 25 يونيو",
      ev2_t: "مهرجان العسل بالمجاردة",
      ev2_p: "المجاردة",
      ev3_date: "10 - 20 يونيو",
      ev3_t: "مهرجان رجال ألمع التراثي",
      ev3_p: "رجال ألمع",
      ev4_date: "5 - 15 يونيو",
      ev4_t: "مهرجان أبها للتسوق",
      ev4_p: "أبها",
      btn_view_all: "عرض جميع الفعاليات",
      stats_message: "عسير ليست وجهة فقط<br>بل إحساس يبقى معك",
      stat_regions_n: "11",
      stat_regions_l1: "محافظة",
      stat_regions_l2: "تجربة متنوعة",
      stat_altitude_n: "3000+",
      stat_altitude_l1: "متر فوق سطح البحر",
      stat_altitude_l2: "في أعلى القمم",
      stat_routes_n: "100+",
      stat_routes_l1: "مسار سياحي",
      stat_routes_l2: "بانتظار اكتشافك",
      stat_seasons_n: "4",
      stat_seasons_l1: "فصول ساحرة",
      stat_seasons_l2: "تجربة لا تنتهي",
      cta_title: "رحلتك إلى عسير تبدأ من هنا",
      cta_desc: "وجهة لا تزار فقط، بل تُحس",
      btn_start_trip: "ابدأ رحلتك الآن",
      d_why_eyebrow: "لماذا تزورها",
      d_why_title: "أبرز أسباب الزيارة",
      d_gallery_label: "المعرض",
      d_gallery_title: "لمحات من المكان",
      d_nearby_label: "وجهات قريبة",
      d_nearby_title: "استكشف المزيد",
      d_cta_exp: "استكشف التجارب هنا",
      d_cta_plan: "خطط لزيارتك",
      d_meters: "م",
      contact_sent: "تم إرسال رسالتك، سنعود إليك خلال 24 ساعة.",
    },
    en: {
      skip_content: "Skip to content",
      nav_home: "Home",
      nav_explore: "Explore Aseer",
      nav_experiences: "Experiences",
      nav_events: "Events",
      nav_plan: "Plan Your Trip",
      nav_restaurants: "Restaurants & Cafés",
      nav_stays: "Stays",
      nav_contact: "Contact Us",
      nav_search: "Search",
      nav_account: "My Account",
      nav_search_ph: "Search an experience, place or activity...",
      nav_search_go: "Search",
      lang_switch: "العربية",
      menu: "Menu",
      mega_peaks: "Peaks",
      mega_heritage: "Heritage",
      mega_coast: "Coast",
      mega_desert: "Desert & Oases",
      mega_more: "More ...",
      footer_tagline: "A luxury mountain destination bringing together natural beauty, authentic culture and refined hospitality.",
      footer_discover: "Discover Aseer",
      footer_discover_about: "About Aseer",
      footer_discover_regions: "Regions",
      footer_discover_events: "Events",
      footer_discover_blog: "Blog",
      footer_experiences: "Aseer Experiences",
      footer_exp_adventures: "Adventures",
      footer_exp_culture: "Culture",
      footer_exp_nature: "Nature",
      footer_exp_food: "Food",
      footer_info: "Information",
      footer_faq: "FAQ",
      footer_terms: "Terms & Conditions",
      footer_privacy: "Privacy Policy",
      footer_contact: "Contact Us",
      footer_newsletter: "Newsletter",
      footer_newsletter_sub: "Subscribe for the latest news and exclusive offers.",
      footer_email_ph: "Your email",
      footer_subscribe: "Subscribe",
      footer_rights: "All rights reserved © 2026 Aseer",
      footer_credit: "Designed & built by Takween Studio",
      footer_made_ksa: "Made in Saudi Arabia",
      footer_subscribed: "You are subscribed to the newsletter",
      hero_eyebrow: "Aseer Region Discovery Platform",
      hero_title_main: "Aseer",
      hero_title_sub: "Where the mountains meet the clouds",
      hero_desc: "One destination, many worlds. Plan your trip across peaks, villages, events and experiences.",
      btn_explore: "Explore Aseer",
      btn_plan_trip: "Plan your trip",
      feat1_t: "Authentic hospitality",
      feat1_d: "Generosity and tradition in every corner",
      feat2_t: "Diverse experiences",
      feat2_d: "Adventure, rest and culture in one place",
      feat3_t: "Deep heritage",
      feat3_d: "Historic treasures, old stories and authentic homes",
      feat4_t: "Enchanting nature",
      feat4_d: "High peaks, green valleys and mist that touches the sky",
      regions_title: "Explore Aseer's regions",
      regions_subtitle: "Every region has a story worth discovering",
      regions_map: "Choose your region",
      region_peaks_n: "Peaks",
      region_peaks_d: "Towering peaks<br>and endless mist",
      region_heritage_n: "Heritage",
      region_heritage_d: "Historic villages<br>and authentic stories",
      region_coast_n: "Coast",
      region_coast_d: "Clear beaches<br>and gulf islands",
      region_desert_n: "Desert & Oases",
      region_desert_d: "Oases and plains<br>at the desert edge",
      trip_budget_l: "Budget",
      trip_budget_mid: "Moderate",
      trip_budget_eco: "Value",
      trip_budget_lux: "Luxury",
      trip_interests_l: "Interests",
      trip_interests_nature: "Nature & heritage",
      trip_interests_adv: "Adventure",
      trip_interests_culture: "Culture",
      trip_group_l: "Who's coming?",
      trip_group_family: "Family",
      trip_group_friends: "Friends",
      trip_group_solo: "Solo",
      trip_days_l: "Days",
      trip_days_3: "3 days",
      trip_days_1: "1 day",
      trip_days_2: "2 days",
      trip_days_7: "A week",
      planner_t: "Design your trip in Aseer",
      planner_d: "Tell us about your trip and we will suggest the best routes and experiences.",
      btn_design_route: "Design my route",
      trip_path_hint: "Suggested path · not a map",
      trip_day_1: "Day 1",
      trip_day_2: "Day 2",
      trip_day_3: "Day 3",
      suggested_route_t: "Suggested route example",
      suggested_route_d1: "3 days — Family — Nature & heritage — Moderate budget",
      suggested_route_d2: "Abha → Rijal Almaa → Tanomah",
      ev_tab_aug: "August",
      ev_tab_jul: "July",
      ev_tab_jun: "June",
      events_title: "Aseer this summer",
      events_desc: "Festivals and experiences waiting for you everywhere",
      spot_title: "Region highlights",
      spot_desc: "Four worlds in Aseer — browse, then explore below",
      spot_tag_region: "Region",
      spot_cta: "Explore the region",
      ev1_date: "20 June – 10 August",
      ev1_t: "Hot Air Balloon Festival",
      ev1_p: "Aseer",
      ev2_date: "15 – 25 June",
      ev2_t: "Al Majardah Honey Festival",
      ev2_p: "Al Majardah",
      ev3_date: "10 – 20 June",
      ev3_t: "Rijal Almaa Heritage Festival",
      ev3_p: "Rijal Almaa",
      ev4_date: "5 – 15 June",
      ev4_t: "Abha Shopping Festival",
      ev4_p: "Abha",
      btn_view_all: "View all events",
      stats_message: "Aseer is not just a destination<br>it is a feeling that stays with you",
      stat_regions_n: "11",
      stat_regions_l1: "Governorates",
      stat_regions_l2: "A varied experience",
      stat_altitude_n: "3000+",
      stat_altitude_l1: "Meters above sea level",
      stat_altitude_l2: "At the highest peaks",
      stat_routes_n: "100+",
      stat_routes_l1: "Tourism routes",
      stat_routes_l2: "Waiting to be discovered",
      stat_seasons_n: "4",
      stat_seasons_l1: "Charming seasons",
      stat_seasons_l2: "A journey that never ends",
      cta_title: "Your journey to Aseer starts here",
      cta_desc: "Not only a place to visit — a place to feel",
      btn_start_trip: "Start your trip now",
      d_why_eyebrow: "Why visit",
      d_why_title: "Reasons to go",
      d_gallery_label: "Gallery",
      d_gallery_title: "Glimpses of the place",
      d_nearby_label: "Nearby",
      d_nearby_title: "Explore more",
      d_cta_exp: "Explore experiences here",
      d_cta_plan: "Plan your visit",
      d_meters: "m",
      contact_sent: "Your message was sent. We will reply within 24 hours.",
    },
  };

  const PAGE_COPY = {
    restaurants: {
      ar: { crumb: "الرئيسية  /  المطاعم والمقاهي", title: "المطاعم والمقاهي", sub: "نكهات عسير بين الإطلالة، القهوة، والمائدة المحلية" },
      en: { crumb: "Home / Restaurants & Cafés", title: "Restaurants & Cafés", sub: "Aseer flavors between views, coffee and the local table" },
    },
    experiences: {
      ar: { crumb: "الرئيسية / تجارب عسير", title: "تجارب عسير", sub: "اكتشف الجبل والثقافة والطبيعة واللحظات المحلية في رحلة واحدة" },
      en: { crumb: "Home / Experiences", title: "Aseer Experiences", sub: "Discover mountain, culture, nature and local moments in one journey" },
    },
    events: {
      ar: { crumb: "الرئيسية / الفعاليات", title: "الفعاليات", sub: "اكتشف ما يحدث في عسير، واختر فعالياتك حسب المكان والوقت" },
      en: { crumb: "Home / Events", title: "Events", sub: "See what is happening in Aseer, then choose by place and time" },
    },
    stays: {
      ar: { crumb: "الرئيسية  /  الإقامة", title: "إقامتك في عسير", sub: "تجارب إقامة استثنائية وسط الطبيعة الخلابة" },
      en: { crumb: "Home / Stays", title: "Stay in Aseer", sub: "Exceptional stays in the heart of the landscape" },
    },
    plan: {
      ar: { crumb: "الرئيسية / خطط رحلتك", title: "خطط رحلتك", sub: "ابنِ رحلتك في عسير حسب وقتك، مزاجك، والمنطقة التي تناسبك" },
      en: { crumb: "Home / Plan Your Trip", title: "Plan Your Trip", sub: "Build your Aseer journey around time, mood and the region that fits you" },
    },
    contact: {
      ar: { crumb: "الرئيسية  /  تواصل معنا", title: "تواصل معنا", sub: "نحن هنا لمساعدتك في التخطيط لرحلتك واستكشاف أجمل ما في عسير." },
      en: { crumb: "Home  /  Contact Us", title: "Contact Us", sub: "We are here to help you plan your trip and discover the finest of Aseer." },
    },
    peaks: {
      ar: { crumb: "الرئيسية / القمم", title: "القمم", sub: "قمم شاهقة وضباب لا ينتهي" },
      en: { crumb: "Home / Peaks", title: "Peaks", sub: "Towering peaks and endless mist" },
    },
    heritage: {
      ar: { crumb: "الرئيسية / تراث", title: "تراث", sub: "قرى تاريخية وحكاية أصيلة" },
      en: { crumb: "Home / Heritage", title: "Heritage", sub: "Historic villages and authentic stories" },
    },
  };

  const AREAS = {
    peaks: [
      { ar: "أبها", en: "Abha", href: "abha.html", id: "abha" },
      { ar: "السودة", en: "Al Soudah", href: "soudah.html", id: "soudah" },
      { ar: "تنومة", en: "Tanomah", href: "tanomah.html", id: "tanomah" },
      { ar: "النماص", en: "Al Namas", href: "al-namas.html", id: "alnamas" },
      { ar: "بللسمر", en: "Balasmer", href: "ballasmar.html", id: "balasmer" },
    ],
    heritage: [
      { ar: "رجال ألمع", en: "Rijal Almaa", href: "rijal-alma.html", id: "rijalalma" },
      { ar: "المجاردة", en: "Al Majardah", href: "al-majardah.html", id: "almajardah" },
      { ar: "بارق", en: "Bariq", href: "bariq.html", id: "bariq" },
      { ar: "محايل عسير", en: "Muhayil Aseer", href: "muhayil.html", id: "muhayil" },
    ],
    coast: [
      { ar: "البرك", en: "Al Birk", href: "al-birk.html", id: "albirk" },
      { ar: "القحمة", en: "Al Qahmah", href: "al-qahmah.html", id: "alqahmah" },
    ],
    desert: [
      { ar: "بيشة", en: "Bisha", href: "bisha.html", id: "bisha" },
      { ar: "سراة عبيدة", en: "Sarat Abidah", href: "sarat-abidah.html", id: "saratabidah" },
      { ar: "ظهران الجنوب", en: "Dhahran Al Janub", href: "dhahran-al-janub.html", id: "dhahranaljanub" },
    ],
  };

  const NAV = [
    { key: "home", href: "index.html", i18n: "nav_home" },
    { key: "explore", href: "#", i18n: "nav_explore", mega: true },
    { key: "experiences", href: "experiences.html", i18n: "nav_experiences" },
    { key: "events", href: "events.html", i18n: "nav_events" },
    { key: "plan", href: "plan.html", i18n: "nav_plan" },
    { key: "restaurants", href: "restaurants.html", i18n: "nav_restaurants" },
    { key: "stays", href: "stays.html", i18n: "nav_stays" },
    { key: "contact", href: "contact.html", i18n: "nav_contact" },
  ];

  const DEST_FILES = {
    "abha.html": "abha",
    "soudah.html": "soudah",
    "tanomah.html": "tanomah",
    "al-namas.html": "alnamas",
    "ballasmar.html": "balasmer",
    "ballahmar.html": "balhamer",
    "rijal-alma.html": "rijalalma",
    "al-majardah.html": "almajardah",
    "bariq.html": "bariq",
    "muhayil.html": "muhayil",
    "al-birk.html": "albirk",
    "al-qahmah.html": "alqahmah",
    "bisha.html": "bisha",
    "sarat-abidah.html": "saratabidah",
    "dhahran-al-janub.html": "dhahranaljanub",
  };

  const DEST_IMAGES = {
    peaks: "assets/img/peaks/hero.jpg",
    heritage: "assets/img/heritage/hero.jpg",
    tihama: "assets/img/heritage/hero.jpg",
    coast: "assets/img/coast/hero.jpg",
    desert: "assets/img/desert/hero.jpg",
  };

  function t(key, lang) {
    const current = lang || getLang();
    return (I18N[current] && I18N[current][key]) || (I18N.ar[key] || key);
  }

  function fileName() {
    return (location.pathname.split("/").pop() || "index.html").toLowerCase();
  }

  function megaColumns(lang) {
    const current = document.body?.dataset?.destination || "";
    const groups = [
      ["mega_peaks", AREAS.peaks, "peaks.html"],
      ["mega_heritage", AREAS.heritage, "heritage.html"],
      ["mega_coast", AREAS.coast, "coast.html"],
      ["mega_desert", AREAS.desert, "desert.html"],
    ];
    return groups
      .map(
        ([titleKey, items, more]) => `
      <div class="mega-col">
        <h3 data-i18n="${titleKey}">${t(titleKey, lang)}</h3>
        <hr>
        ${items
          .map((item) => {
            const active = item.id && item.id === current ? ' class="is-active"' : "";
            return `<a${active} href="${item.href}">${item[lang]}</a>`;
          })
          .join("")}
        <a class="mega-more" href="${more}" data-i18n="mega_more">${t("mega_more", lang)}</a>
      </div>`
      )
      .join("");
  }

  function headerHTML(page, solid, lang) {
    return `
  <a class="skip-link" href="#main" data-i18n="skip_content">${t("skip_content", lang)}</a>
  <header class="site-header ${solid ? "is-solid" : "is-hero"}">
    <div class="nav-shell">
      <nav class="nav" aria-label="${t("nav_home", lang)}">
        <a class="logo" href="index.html" aria-label="Aseer">
          <img class="logo-mark" src="assets/img/logo-mark.png" width="43" height="43" alt="">
          <span class="logo-text">
            <span class="logo-ar">عسير</span>
            <span class="logo-en">ASEER</span>
          </span>
        </a>
        <ul class="nav-links">
          ${NAV.map((item) => {
            if (item.mega) {
              return `<li class="has-mega">
                <button type="button" data-mega-toggle aria-expanded="false" data-i18n="${item.i18n}">${t(item.i18n, lang)}</button>
                <div class="mega-menu" role="menu">${megaColumns(lang)}</div>
              </li>`;
            }
            const active = item.key === page ? "is-active" : "";
            return `<li><a class="${active}" href="${item.href}" data-i18n="${item.i18n}">${t(item.i18n, lang)}</a></li>`;
          }).join("")}
        </ul>
        <div class="nav-tools">
          <button class="lang-switch" type="button" data-i18n="lang_switch">${t("lang_switch", lang)}</button>
          <button class="search-btn" type="button" data-i18n-aria="nav_search" aria-label="${t("nav_search", lang)}" data-open-search>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>
          </button>
          <a class="search-btn account-btn" href="account.html" data-i18n-aria="nav_account" aria-label="${t("nav_account", lang)}">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5 19c0-3.6 3-5.8 7-5.8s7 2.2 7 5.8"/></svg>
          </a>
          <button class="menu-toggle" type="button" data-i18n-aria="menu" aria-label="${t("menu", lang)}" data-open-menu>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </div>
    <div class="mobile-panel" data-mobile-panel>
      ${NAV.map((item) =>
        item.mega
          ? `<button type="button" data-mobile-mega data-i18n="${item.i18n}">${t(item.i18n, lang)}</button>
             <div class="mobile-mega">${megaColumns(lang)}</div>`
          : `<a href="${item.href}" data-i18n="${item.i18n}">${t(item.i18n, lang)}</a>`
      ).join("")}
    </div>
  </header>
  <div class="search-overlay" data-search-overlay>
    <form action="search.html" method="get">
      <input class="search-field" type="search" name="q" data-i18n-ph="nav_search_ph" placeholder="${t("nav_search_ph", lang)}">
      <button class="btn btn-gold" type="submit" data-i18n="nav_search_go">${t("nav_search_go", lang)}</button>
    </form>
  </div>`;
  }

  function footerHTML(lang) {
    return `
  <footer class="site-footer" style="margin-block-start:40px">
    <div class="overlay-wrap">
      <div class="container footer-top">
        <div class="footer-col footer-newsletter">
          <h4 data-i18n="footer_newsletter">${t("footer_newsletter", lang)}</h4>
          <p style="font-size:14px;opacity:.7;margin-block-end:14px" data-i18n="footer_newsletter_sub">${t("footer_newsletter_sub", lang)}</p>
          <form class="flex-col gap-8" data-newsletter>
            <div class="field"><input type="email" name="email" required data-i18n-ph="footer_email_ph" placeholder="${t("footer_email_ph", lang)}"></div>
            <button class="btn btn-primary btn-block" type="submit" data-i18n="footer_subscribe">${t("footer_subscribe", lang)}</button>
          </form>
        </div>
        <div class="footer-links">
        <div class="footer-col">
          <h4 data-i18n="footer_info">${t("footer_info", lang)}</h4>
          <ul>
            <li><a href="#" data-i18n="footer_faq">${t("footer_faq", lang)}</a></li>
            <li><a href="#" data-i18n="footer_terms">${t("footer_terms", lang)}</a></li>
            <li><a href="#" data-i18n="footer_privacy">${t("footer_privacy", lang)}</a></li>
            <li><a href="contact.html" data-i18n="footer_contact">${t("footer_contact", lang)}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_experiences">${t("footer_experiences", lang)}</h4>
          <ul>
            <li><a href="experiences.html" data-i18n="footer_exp_adventures">${t("footer_exp_adventures", lang)}</a></li>
            <li><a href="experiences.html" data-i18n="footer_exp_culture">${t("footer_exp_culture", lang)}</a></li>
            <li><a href="experiences.html" data-i18n="footer_exp_nature">${t("footer_exp_nature", lang)}</a></li>
            <li><a href="restaurants.html" data-i18n="footer_exp_food">${t("footer_exp_food", lang)}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_discover">${t("footer_discover", lang)}</h4>
          <ul>
            <li><a href="index.html#regions" data-i18n="footer_discover_about">${t("footer_discover_about", lang)}</a></li>
            <li><a href="index.html#regions" data-i18n="footer_discover_regions">${t("footer_discover_regions", lang)}</a></li>
            <li><a href="events.html" data-i18n="footer_discover_events">${t("footer_discover_events", lang)}</a></li>
            <li><a href="#" data-i18n="footer_discover_blog">${t("footer_discover_blog", lang)}</a></li>
          </ul>
        </div>
        </div>
        <div class="footer-brand">
          <div class="nav-logo footer-logo" style="color:var(--white)">
            <img class="nav-logo-mark" src="assets/img/logo-mark.png" alt="">
            <span class="nav-logo-word"><b>عسير</b><small>ASEER</small></span>
          </div>
          <p data-i18n="footer_tagline">${t("footer_tagline", lang)}</p>
          <div class="footer-social">
            <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16.6 5.82c-.9-.78-1.46-1.9-1.6-3.14h-3.03v13.44c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.27 0 .53.03.78.1V10.2a5.9 5.9 0 0 0-.78-.05A5.93 5.93 0 0 0 3.14 16.1 5.93 5.93 0 0 0 9.07 22 5.93 5.93 0 0 0 15 16.1V9.05a8.16 8.16 0 0 0 4.86 1.58V7.6a4.85 4.85 0 0 1-3.26-1.78Z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10.5 9.3v5.4l4.7-2.7-4.7-2.7Z" fill="currentColor" stroke="none"/></svg></a>
            <a href="#" aria-label="X"><svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M13.85 10.6 21 3h-2.2l-6.2 6.6L7.3 3H2l7.5 10.8L2.3 21h2.2l6.6-7 5.6 7H22l-8.15-10.4Zm-2.3 2.45-.77-1.06L4.9 4.5h2.05l4.9 6.8.77 1.06 6.5 9.03h-2.05l-5.32-7.34Z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg></a>
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <span data-i18n="footer_made_ksa">${t("footer_made_ksa", lang)}</span>
        <span data-i18n="footer_credit">${t("footer_credit", lang)}</span>
        <span data-i18n="footer_rights">${t("footer_rights", lang)}</span>
      </div>
    </div>
  </footer>`;
  }

  function applyI18n(lang) {
    const dict = I18N[lang] || I18N.ar;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });
    document.querySelectorAll("[data-i18n-opt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-opt");
      if (dict[key] != null) el.textContent = dict[key];
    });
    applyPageCopy(lang);
    refreshMega(lang);
    renderDestination(lang);
    updateSuggestedRoute(lang);
  }

  function applyPageCopy(lang) {
    if (document.querySelector("[data-detail-title]")) return;
    /* Static destination pages (e.g. abha.html) keep markup; still run phrases. */
    if (document.body.dataset.destination) {
      applyPhrases(lang);
      return;
    }
    const page = document.body.dataset.page;
    const copy = PAGE_COPY[page] && PAGE_COPY[page][lang];
    if (copy) {
      const crumb = document.querySelector(".listing-hero .crumb, .page-hero .crumb");
      const title = document.querySelector(".listing-hero h1, .page-hero h1");
      const sub = document.querySelector(".listing-hero__sub, .page-hero .copy > p:not(.crumb)");
      if (crumb && copy.crumb) crumb.textContent = copy.crumb;
      if (title && copy.title) {
        title.textContent = copy.title;
        document.title = copy.title + (lang === "ar" ? " | عسير" : " | Aseer");
      }
      if (sub && copy.sub) sub.textContent = copy.sub;
    }
    applyPhrases(lang);
  }

  const UI_PHRASES = {
    "استكشف عسير / القمم": "Explore Aseer / Peaks",
    "حيث يبدأ الضباب وتعلو الحكاية": "Where the fog begins and the story rises",
    "رحلة بين قمم عسير ووجهاتها الجبلية، من أبها والسودة إلى تنومة والنماص وبللسمر.": "A journey across Aseer’s peaks — from Abha and Soudah to Tanomah, Al Namas, and Ballasmar.",
    "استكشف الوجهات": "Explore destinations",
    "خطط رحلة بين القمم": "Plan a trip among the peaks",
    "وجهات القمم": "Peak destinations",
    "اختر وجهتك بين قمم عسير ومدنها الجبلية، من أبها حتى بللسمر.": "Choose your destination among Aseer’s peaks and mountain towns, from Abha to Ballasmar.",
    "مسار زيارة مقترح يربط وجهات القمم من أبها حتى بللسمر — اختر محطة لفتح صفحتها.": "A suggested visit path linking peak destinations from Abha to Ballasmar — tap a stop to open its page.",
    "قرى وحكاية أصيلة": "Villages and an authentic story",
    "رحلة بين وجهات التراث في عسير، من رجال ألمع والمجاردة إلى بارق ومحايل عسير.": "A journey across Aseer’s heritage destinations — from Rijal Almaa and Al Majardah to Bariq and Muhayil Aseer.",
    "خطط رحلة تراثية": "Plan a heritage trip",
    "وجهات التراث": "Heritage destinations",
    "اختر وجهتك بين قرى التراث والسفوح، من رجال ألمع حتى محايل عسير.": "Choose your stop among heritage villages and slopes, from Rijal Almaa to Muhayil Aseer.",
    "لماذا التراث؟": "Why heritage?",
    "ليست محطات مرور فقط، بل ذاكرة حية: حجر، فن، أودية، ومذاق محلي.": "Not just stops along the way — living memory: stone, art, valleys, and local taste.",
    "فن وذاكرة": "Art and memory",
    "القط العسيري وحكايات القرى المفتوحة.": "Al-Qatt Al-Asiri and open-village stories.",
    "اختر تجربتك التراثية": "Choose your heritage experience",
    "تجارب قريبة من القرى والسفوح تجمع بين العمارة والطبيعة والمذاق المحلي.": "Experiences near villages and slopes that blend architecture, nature and local taste.",
    "مائدة محلية": "Local table",
    "مسار التراث": "Heritage trail",
    "مسار زيارة مقترح يربط وجهات التراث من رجال ألمع حتى محايل عسير — اختر محطة لفتح صفحتها.": "A suggested visit path linking heritage destinations from Rijal Almaa to Muhayil Aseer — tap a stop to open its page.",
    "اختر أيامك واهتماماتك، ودع عسير تقترح لك مسارًا بين القرى والسفوح.": "Pick your days and interests, and let Aseer suggest a route among villages and slopes.",
    "واحات وسهول": "Oases and plains",
    "اختر وجهتك بين قمم عسير ومدنها الجبلية، من أبها حتى بللسمر.": "Choose your destination among Aseer’s peaks and mountain towns, from Abha to Ballasmar.",
    "استكشف القمم": "Explore the peaks",
    "مدينة بين الجبال": "A city among mountains",
    "قمم شاهقة وضباب": "Towering peaks and fog",
    "غابات وممرات هادئة": "Forests and quiet trails",
    "مرتفعات وقرى هادئة": "Highlands and quiet villages",
    "غابات وضباب بارد": "Forests and cool fog",
    "مدرجات وقرى حجرية": "Terraces and stone villages",
    "قرى تراثية جبلية": "Mountain heritage villages",
    "لماذا القمم؟": "Why the peaks?",
    "ليست مناطق مرتفعة فقط، بل تجربة شعورية كاملة: برد، ضباب، هدوء، وإطلالات بعيدة.": "Not just highlands — a full sensory experience: cool air, fog, calm, and distant views.",
    "ضباب الصباح": "Morning mist",
    "لحظة الهواء الأولى فوق السحاب.": "That first breath of air above the clouds.",
    "إطلالات شاهقة": "Towering views",
    "مشاهد واسعة بين الجبال والوديان.": "Wide scenes between mountains and valleys.",
    "قرى معلّقة": "Hanging villages",
    "حكايات حجرية على أطراف المرتفعات.": "Stone stories on the highland edges.",
    "مسارات باردة": "Cool trails",
    "تجارب مشي ومشاهدة بطقس ألطف.": "Walks and viewpoints in milder weather.",
    "اختر تجربتك فوق السحاب": "Choose your experience above the clouds",
    "تجارب قريبة من القمم تجمع بين المشهد الجبلي والهواء البارد والوقت الهادئ.": "Peak-side experiences that blend mountain views, cool air, and quiet time.",
    "استكشف التجارب": "Explore experiences",
    "قرية تراثية": "Heritage village",
    "اكتشف الذاكرة الجبلية": "Discover mountain memory",
    "قهوة جبلية": "Mountain coffee",
    "جلسة هادئة فوق الغيم": "A quiet session above the clouds",
    "الممشى الجبلي": "Mountain walkway",
    "مسار بإطلالة مفتوحة": "A path with an open view",
    "إطلالة جبلية": "Mountain viewpoint",
    "نقطة مشاهدة فاخرة": "A refined lookout",
    "مسار القمم": "Peaks trail",
    "مسار زيارة مقترح يربط وجهات القمم من أبها حتى رجال ألمع — اختر محطة لفتح صفحتها.": "A suggested visit path linking peak destinations from Abha to Rijal Almaa — tap a stop to open its page.",
    "ترتيب مقترح للزيارة · ليس خريطة جغرافية": "Suggested visit order · not a geographic map",
    "نقطة الانطلاق": "Starting point",
    "اختر أيامك واهتماماتك، ودع عسير تقترح لك مسارًا يبدأ من السحاب.": "Pick your days and interests, and let Aseer suggest a route that starts in the clouds.",
    "ابدأ التخطيط": "Start planning",
    "من الجبل إلى السهل الخصب": "From mountain to fertile plain",
    "رحلة بين سفوح تهامة وأوديتها، من رجال ألمع والمجاردة إلى بارق ومحايل عسير.": "A journey across Tihama’s slopes and valleys — from Rijal Almaa and Al Majardah to Bariq and Muhayil Aseer.",
    "خطط رحلة في تهامة": "Plan a trip in Tihama",
    "وجهات تهامة": "Tihama destinations",
    "اختر وجهتك بين سفوح تهامة وأوديتها الخصبة، من رجال ألمع حتى محايل عسير.": "Choose your stop among Tihama’s slopes and fertile valleys, from Rijal Almaa to Muhayil Aseer.",
    "قرية التراث والفن الحجري": "Heritage village of stone and art",
    "سفوح تربط الجبل بالسهل": "Slopes linking mountain to plain",
    "أودية خصبة ونخيل باسق": "Fertile valleys and tall palms",
    "بوابة عسير نحو تهامة": "Aseer's gateway to Tihama",
    "لماذا تهامة؟": "Why Tihama?",
    "ليست سهولًا فقط، بل انتقال حيّ من الجبل إلى الوادي: خضرة، نخيل، تراث، ودفء لطيف.": "Not just plains — a living descent from mountain to valley: greenery, palms, heritage, and gentle warmth.",
    "تراث حجري": "Stone heritage",
    "قصور وقرى تحكي عمارة عسير الأصيلة.": "Castles and villages that tell Aseer’s authentic architecture.",
    "سفوح خضراء": "Green slopes",
    "منحدرات تربط المرتفعات بالسهول الخصبة.": "Slopes that link the highlands to fertile plains.",
    "طقس معتدل": "Mild weather",
    "دفء ألطف من القمم، وهواء عليل في الأودية.": "Gentler warmth than the peaks, and soft air in the valleys.",
    "مزارع وأودية": "Farms and valleys",
    "نخيل وموز ومانجو بين مناظر تهامة.": "Palms, bananas and mangoes among Tihama’s scenes.",
    "اختر تجربتك في تهامة": "Choose your experience in Tihama",
    "تجارب قريبة من السفوح والأودية تجمع بين التراث والطبيعة والمذاق المحلي.": "Experiences near the slopes and valleys that blend heritage, nature and local taste.",
    "اكتشف الذاكرة الحجرية": "Discover stone memory",
    "أودية خضراء": "Green valleys",
    "مسار بين النخيل والسفوح": "A path among palms and slopes",
    "مائدة تهامية": "Tihama table",
    "نكهات السهول الخصبة": "Flavors of the fertile plains",
    "أسواق شعبية": "Traditional markets",
    "جلسة قريبة من الناس": "A gathering close to people",
    "مسار تهامة": "Tihama trail",
    "مسار زيارة مقترح يربط وجهات تهامة من رجال ألمع حتى محايل عسير — اختر محطة لفتح صفحتها.": "A suggested visit path linking Tihama destinations from Rijal Almaa to Muhayil Aseer — tap a stop to open its page.",
    "اختر أيامك واهتماماتك، ودع عسير تقترح لك مسارًا بين السفوح والأودية.": "Pick your days and interests, and let Aseer suggest a route among the slopes and valleys.",
    "أطباق محلية": "Local dishes",
    "من المطبخ العسيري": "From Aseeri cuisine",
    "مقاهي بإطلالة": "Cafés with a view",
    "مطاعم مختارة": "Selected restaurants",
    "ابحث عن مكان": "Search a place",
    "ابحث عن مطعم أو مقهى...": "Search a restaurant or café...",
    "نوع المكان": "Place type",
    "كل الأنواع": "All types",
    "مطعم": "Restaurant",
    "مقهى": "Café",
    "المنطقة": "Region",
    "كل المناطق": "All regions",
    "أبها": "Abha",
    "السودة": "Al Soudah",
    "رجال ألمع": "Rijal Almaa",
    "تنومة": "Tanomah",
    "النماص": "Al Namas",
    "تصفية": "Filter",
    "الكل": "All",
    "مطاعم": "Restaurants",
    "مقاهي": "Cafés",
    "أكل محلي": "Local food",
    "إطلالة": "Viewpoint",
    "عائلي": "Family",
    "أماكن مختارة": "Selected places",
    "عرض كل الأماكن ←": "View all places ←",
    "لا توجد أماكن مطابقة. جرّب تصفية أخرى.": "No matching places. Try another filter.",
    "مائدة رجال ألمع": "Rijal Almaa Table",
    "مقهى الضباب": "Fog Café",
    "مطعم السحاب الجبلي": "Mountain Cloud Restaurant",
    "السودة، أبها": "Al Soudah, Abha",
    "تراس أبها": "Abha Terrace",
    "بيت الأكلات الشعبية": "House of Popular Dishes",
    "جلسة قهوة مطلة": "Overlook Coffee Session",
    "تجارب طعام من عسير": "Food experiences from Aseer",
    "اختر تجربة بطابع محلي وإطلالة لا تنسى": "Choose an experience with a local character and an unforgettable view",
    "فطور": "Breakfast",
    "فطور جبلي": "Mountain breakfast",
    "ابدأ صباحك بنكهة عسيرية وإطلالة على الضباب.": "Start your morning with an Aseeri flavor and a view of the fog.",
    "قهوة": "Coffee",
    "قهوة على الإطلالة": "Coffee with a view",
    "جلسة هادئة مع قهوة مختصة فوق قمم عسير.": "A quiet gathering with specialty coffee above Aseer's peaks.",
    "عشاء": "Dinner",
    "عشاء شعبي": "Traditional dinner",
    "ليلة دافئة بالنكهات المحلية وأجواء القرية.": "A warm night of local flavors and village atmosphere.",
    "18 مكان": "18 places",
    "12 مكان": "12 places",
    "10 أماكن": "10 places",
    "8 أماكن": "8 places",
    "9 أماكن": "9 places",
    "أطباق ننصح بها": "Dishes we recommend",
    "عريكة": "Areeka",
    "حنيذ": "Haneeth",
    "خبز التنور": "Tannour bread",
    "قهوة سعودية": "Saudi coffee",
    "عسل عسيري": "Aseeri honey",
    "احجز جلستك بطابع عسيري": "Book your gathering with an Aseeri character",
    "أماكن مميزة، إطلالات خالدة، ونكهات لا تُنسى": "Distinguished places, lasting views, and flavors you will not forget",
    "تجارب الطعام": "Food experiences",
    "مطاعم حسب المنطقة": "Restaurants by region",
    "أشهر الأطباق": "Signature dishes",
    "خريطة تفاعلية": "Interactive map",
    "مباشرة": "Live",
    "7 مناطق": "7 regions",
    "قريبة منك": "Near you",
    "هذا الأسبوع": "This week",
    "18 فعالية": "18 events",
    "ابحث عن فعالية": "Search an event",
    "اسم الفعالية أو المنطقة...": "Event or region name...",
    "التاريخ": "Date",
    "هذا الشهر": "This month",
    "ثقافة": "Culture",
    "طبيعة": "Nature",
    "موسيقى": "Music",
    "أسواق": "Markets",
    "خريطة الفعاليات": "Events by place",
    "استعرض فعاليات الأسبوع حسب المكان — قائمة أوضح من خريطة تقريبية": "Browse this week’s events by place — clearer than an approximate map",
    "محطات هذا الأسبوع — اختر مكانًا أو تصفّح القائمة": "This week’s stops — pick a place or browse the list",
    "محطات هذا الأسبوع · ليست خريطة": "This week’s stops · not a map",
    "أربع مناطق · اختر محطة أو بطاقة": "Four regions · pick a stop or a card",
    "مرتفعات وضباب": "Highlands and mist",
    "قرى وحكاية": "Villages and story",
    "خضرة وهواء": "Greenery and air",
    "شواطئ وجزر": "Shores and islands",
    "ليالي ثقافية": "Cultural nights",
    "سوق الحرف": "Crafts market",
    "فعاليات هذا الأسبوع": "This week's events",
    "عرض الخريطة": "Map view",
    "عرض توضيحي": "Illustrative view",
    "حسب المكان": "By place",
    "فعاليات حسب المكان": "Events by place",
    "عرض القائمة": "List view",
    "عرض كل الفعاليات": "View all events",
    "ابحث عن تجربة": "Search an experience",
    "ابحث عن تجربة أو مكان أو نشاط...": "Search an experience, place or activity...",
    "القمم": "Peaks",
    "الطبيعة": "Nature",
    "الثقافة": "Culture",
    "المطاعم": "Restaurants",
    "المسارات": "Trails",
    "الجلسات": "Gatherings",
    "العوائل": "Families",
    "المواسم": "Seasons",
    "تجربة مختارة": "Featured experience",
    "رحلة مقترحة": "Suggested trip",
    "تفاصيلك": "Your details",
    "خصص تفاصيل رحلتك": "Customize your trip details",
    "عدد المسافرين": "Travelers",
    "بالغين": "Adults",
    "وسيلة التنقل": "Transport",
    "سيارة خاصة": "Private car",
    "سهولة الوصول": "Accessibility",
    "غير متاح": "Not available",
    "متاح": "Available",
    "الميزانية": "Budget",
    "متوسطة": "Medium",
    "اقتصادية": "Economy",
    "فاخرة": "Luxury",
    "نعم": "Yes",
    "لا": "No",
    "اقتربت خطتك من الاكتمال": "Your plan is almost complete",
    "احفظ خطتك لتتمكن من الرجوع إليها ومشاركتها في أي وقت.": "Save your plan so you can return to it and share it anytime.",
    "احفظ خطتك": "Save your plan",
    "إنقاص": "Decrease",
    "زيادة": "Increase",
    "جلسة فوق السحاب": "A gathering above the clouds",
    "السودة - منتزه السودة": "Al Soudah – Soudah Park",
    "جلسات خارجية": "Outdoor gatherings",
    "مناسب للعائلة": "Family friendly",
    "طبيعة جبلية": "Mountain nature",
    "احجز تجربتك الآن": "Book your experience",
    "اختر تجربتك حسب المزاج": "Choose by mood",
    "مغامرة": "Adventure",
    "نشاط وحماس": "Energy and thrill",
    "هدوء": "Calm",
    "استرخاء وتجدد": "Rest and renewal",
    "تراث": "Heritage",
    "ثقافة وهوية": "Culture and identity",
    "مذاق": "Taste",
    "نكهات محلية": "Local flavors",
    "عائلة": "Family",
    "لحظات تجمعنا": "Shared moments",
    "تصوير": "Photography",
    "لقطات ملهمة": "Inspiring shots",
    "تجارب مختارة": "Selected experiences",
    "عرض كل التجارب ←": "View all experiences ←",
    "لا توجد تجارب مطابقة. جرّب تصفية أخرى.": "No matching experiences. Try another filter.",
    "لا توجد فعاليات مطابقة. جرّب تصفية أخرى.": "No matching events. Try another filter.",
    "جولة شروق الشمس": "Sunrise walk",
    "تجربة العشاء الجبلي": "Mountain dinner experience",
    "جلسة المطل": "Viewpoint gathering",
    "شلالات الدهناء": "Al Dahna waterfalls",
    "قرية رجال ألمع التراثية": "Rijal Almaa heritage village",
    "مسار رجال ألمع الجبلي": "Rijal Almaa mountain trail",
    "يوم فوق الغيم": "A day above the clouds",
    "٣ أيام بين القمم": "3 days among the peaks",
    "عطلة عائلية": "Family getaway",
    "تفاصيل التجربة": "Experience details",
    "تفاصيل المسار": "Route details",
    "تفاصيل الفعالية": "Event details",
    "اعتمد هذه الرحلة": "Confirm this trip",
    "كل الفعاليات": "All events",
    "ليالي أبها الثقافية": "Abha cultural nights",
    "سوق الحرف الجبلية": "Mountain crafts market",
    "مسار الغروب": "Sunset trail",
    "جلسات المطر": "Rain gatherings",
    "مهرجان القرية": "Village festival",
    "مشاهدة النجوم": "Stargazing",
    "جلسات سمر تنومة": "Tanomah evening gatherings",
    "راحة وخصوصية": "Comfort and privacy",
    "ضيافة أصيلة": "Authentic hospitality",
    "إطلالات ساحرة": "Breathtaking views",
    "مغامرة جبلية": "Mountain adventure",
    "ثقافة أصيلة": "Authentic culture",
    "طبيعة خلابة": "Stunning nature",
    "خريطة حية": "Live map",
    "مواسم متنوعة": "Varied seasons",
    "حسب المزاج": "By mood",
    "إطلالة مميزة": "Distinctive views",
    "رد سريع": "Quick reply",
    "دعم مباشر": "Direct support",
    "نخطط معك": "We plan with you",
    "نرد على رسائلكم خلال 24 ساعة": "We reply within 24 hours",
    "بتوقيت السعودية": "Saudi time",
    "المملكة العربية السعودية": "Kingdom of Saudi Arabia",
    "معلومة إضافية": "Additional note",
    "يمكنك مراسلتنا لأي استفسار متعلق بالوجهات، الفعاليات، التجارب، أو التخطيط لرحلتك القادمة في عسير.": "You can write to us about destinations, events, experiences, or planning your next trip in Aseer.",
    "ابحث عن مكان إقامة": "Search a stay",
    "التواريخ": "Dates",
    "النزلاء": "Guests",
    "النزلاء  2 بالغين": "Guests  2 adults",
    "الغرف": "Rooms",
    "الغرف  1 غرفة": "Rooms  1 room",
    "بحث": "Search",
    "إقامات مميزة": "Featured stays",
    "عرض الكل ←": "View all ←",
    "تصفح حسب نوع الإقامة": "Browse by stay type",
    "نزل وبيوت ضيافة": "Inns and guesthouses",
    "ضيافة محلية دافئة": "Warm local hospitality",
    "منتجعات": "Resorts",
    "منتجعات وشاليهات": "Resorts and chalets",
    "شاليهات": "Chalets",
    "شاليهات خاصة": "Private chalets",
    "بيوت تراثية": "Heritage houses",
    "تجربة تراثية أصيلة": "An authentic heritage stay",
    "فنادق": "Hotels",
    "الفنادق الفاخرة": "Luxury hotels",
    "استمتع بإقامة لا تُنسى": "Enjoy an unforgettable stay",
    "اكتشف مجموعة مختارة من أفضل أماكن الإقامة في عسير وعِش تجربة استثنائية": "Discover a curated set of Aseer's finest stays and live an exceptional experience",
    "اكتشف المزيد": "Discover more",
    "لا توجد إقامات مطابقة. جرّب تصفية أخرى.": "No matching stays. Try another filter.",
    "شاليه": "Chalet",
    "منتجع": "Resort",
    "شاليهات قمم السودة": "Soudah Peaks Chalets",
    "منتجع شدا أزل": "Shada Azal Resort",
    "بيت حسين التراثي": "Beit Hussein Heritage House",
    "منتجع رجال ألمع تراث": "Rijal Almaa Heritage Resort",
    "850 ريال / ليلة": "850 SAR / night",
    "1200 ريال / ليلة": "1200 SAR / night",
    "650 ريال / ليلة": "650 SAR / night",
    "950 ريال / ليلة": "950 SAR / night",
    "الأكثر حجزاً": "Most booked",
    "منتجع أبها الورود": "Abha Al Worood Resort",
    "شاليهات الضباب": "Fog Chalets",
    "فندق قصر أبها": "Abha Palace Hotel",
    "بيت المسافر التراثي": "Traveler Heritage House",
    "1100 ريال / ليلة · ★ 4.8": "1100 SAR / night · ★ 4.8",
    "780 ريال / ليلة · ★ 4.8": "780 SAR / night · ★ 4.8",
    "900 ريال / ليلة · ★ 4.8": "900 SAR / night · ★ 4.8",
    "600 ريال / ليلة · ★ 4.8": "600 SAR / night · ★ 4.8",
    "إلغاء مرن": "Flexible cancellation",
    "إلغاء مجاني وفق الشروط": "Free cancellation under the terms",
    "دعم على مدار الساعة": "24/7 support",
    "فريق دعم جاهز لخدمتك": "A support team ready to help",
    "حجز آمن وسهل": "Safe and easy booking",
    "تأكيد فوري وآمن": "Instant and secure confirmation",
    "أفضل الأسعار": "Best prices",
    "ضمان أفضل سعر": "Best price guarantee",
    "2 بالغين": "2 adults",
    "1 غرفة": "1 room",
    "22 يونيو  ←  24 يونيو": "22 Jun  ←  24 Jun",
    "عدد الأيام": "Number of days",
    "يوم واحد": "1 day",
    "يومان": "2 days",
    "٣ أيام": "3 days",
    "أسبوع": "A week",
    "اختر المنطقة أو القمة": "Choose a region or peak",
    "اختر مزاج رحلتك": "Choose your trip mood",
    "جلسات": "Gatherings",
    "ابدأ التخطيط": "Start planning",
    "اختر طريقة التخطيط": "Choose how to plan",
    "حسب الوقت": "By time",
    "خطط رحلتك بناءً على المدة التي لديك": "Plan around the time you have",
    "حسب المنطقة": "By region",
    "اكتشف الوجهات والمناطق في عسير": "Discover destinations across Aseer",
    "حسب التجربة": "By experience",
    "اختر التجارب التي تناسب اهتماماتك ومزاجك": "Pick experiences that match your mood",
    "أرسل لنا رسالة": "Send us a message",
    "الاسم": "Name",
    "البريد الإلكتروني": "Email",
    "نوع الطلب": "Request type",
    "استفسار عام": "General inquiry",
    "تخطيط رحلة": "Trip planning",
    "رسالتك": "Your message",
    "إرسال الرسالة": "Send message",
    "بيانات التواصل": "Contact details",
    "الهاتف": "Phone",
    "الموقع": "Location",
    "أبها، منطقة عسير": "Abha, Aseer Region",
    "ساعات العمل": "Working hours",
    "من الأحد إلى الخميس 8:00 صباحًا - 4:00 مساءً": "Sunday to Thursday 8:00 AM – 4:00 PM",
    "كيف يمكننا مساعدتك؟": "How can we help?",
    "الأسئلة الشائعة": "FAQs",
    "إجابات سريعة حول التخطيط والزيارة والخدمات.": "Quick answers about planning, visiting and services.",
    "الدعم السياحي": "Visitor support",
    "مساعدة في اختيار الوجهات والتجارب المناسبة.": "Help choosing the right destinations and experiences.",
    "اقتراحات الزوار": "Visitor suggestions",
    "شاركنا ملاحظاتك لتحسين تجربة عسير.": "Share your notes to improve the Aseer experience.",
    "بللسمر": "Ballasmar",
    "بللحمر": "Ballahmar",
    "المجاردة": "Al Majardah",
    "بارق": "Bariq",
    "محايل": "Muhayil",
    "البرك": "Al Birk",
    "القحمة": "Al Qahmah",
    "بيشة": "Bisha",
    "سراة عبيدة": "Sarat Abidah",
    "ظهران الجنوب": "Dhahran Al Janub",
    "محايل عسير": "Muhayil Aseer",
    "تراثي": "Heritage",
    "شعبي": "Traditional",
    "قهوة مختصة": "Specialty coffee",
    "احجز الآن": "Book now",
    "تقييم الزوار": "Guest rating",
    "متوسط": "Moderate",
    "عربي": "Arabic",
    "نوع المطبخ": "Cuisine",
    "★ 4.9   (326 تقييم)": "★ 4.9   (326 reviews)",
    "استمتع بجلسة هادئة على ارتفاع فوق الغيم، مع مشروب دافئ وإطلالة تمنحك إحساس عسير الحقيقي.": "Enjoy a quiet gathering above the clouds, with a warm drink and a view that feels like Aseer.",
    "متوسط  ·  3 ساعات": "Moderate  ·  3 hours",
    "سهل · ساعتان": "Easy · 2 hours",
    "سهل  ·  ساعتان": "Easy  ·  2 hours",
    "سهل  ·  3 ساعات": "Easy  ·  3 hours",
    "سهل  ·  4 ساعات": "Easy  ·  4 hours",
    "ابدأ من المنطقة أو القمة": "Start from a region or peak",
    "عرض كل المناطق ←": "View all regions ←",
    "22 تجربة": "22 experiences",
    "72 تجربة": "72 experiences",
    "46 تجربة": "46 experiences",
    "9 تجارب": "9 experiences",
    "29 تجربة": "29 experiences",
    "28 تجربة": "28 experiences",
    "مسارات جاهزة": "Ready routes",
    "عرض كل المسارات ←": "View all routes ←",
    "رحلة يوم واحد في السودة مع جلسة ومناظر لا تنسى.": "A one-day trip in Al Soudah with a gathering and unforgettable views.",
    "اكتشف القرى التراثية والمسارات والجلسات في قمم عسير.": "Discover heritage villages, trails and gatherings across Aseer's peaks.",
    "أنشطة هادئة، جلسات، حدائق، طبيعة ومطاعم محلية.": "Calm activities, gatherings, gardens, nature and local restaurants.",
    "يوم واحد  ·  سهل": "1 day  ·  Easy",
    "٣ أيام · متوسط": "3 days · Moderate",
    "يومان · سهل": "2 days · Easy",
    "حسب الموسم": "By season",
    "الربيع": "Spring",
    "ازدهار الطبيعة": "Nature in bloom",
    "زهور الربيع، الأجواء المعتدلة، المغامرات والرحلات.": "Spring flowers, mild weather, adventures and trips.",
    "استكشف تجارب الربيع": "Explore spring experiences",
    "الصيف": "Summer",
    "ظلال الجبل والأنشطة": "Mountain shade and activities",
    "أجواء باردة، فعاليات صيفية، وأنشطة عائلية.": "Cool weather, summer events and family activities.",
    "استكشف تجارب الصيف": "Explore summer experiences",
    "الخريف": "Autumn",
    "ألوان ومواسم": "Colors and seasons",
    "أجواء لطيفة، مهرجانات، ووجوه تراثية.": "Mild weather, festivals and heritage gatherings.",
    "استكشف تجارب الخريف": "Explore autumn experiences",
    "الشتاء": "Winter",
    "أجواء الضباب والبرد": "Fog and cold weather",
    "جلسات دافئة، ضباب كثيف، وتجارب فريدة.": "Warm gatherings, thick fog and unique experiences.",
    "استكشف تجارب الشتاء": "Explore winter experiences",
    "حان وقت المغامرة": "It's time for adventure",
    "خطط رحلتك إلى عسير واكتشف تجارب لا تنسى بين الجبال والطبيعة والثقافة المحلية.": "Plan your trip to Aseer and discover unforgettable experiences among the mountains, nature and local culture.",
    "خطط رحلتك الآن": "Plan your trip now",
    "حفظ": "Save",
    "فعاليات مميزة": "Featured events",
    "مختارة لتجربة عسير في نهاية الأسبوع": "Chosen for a weekend in Aseer",
    "تقويم الفعاليات": "Events calendar",
    "نظرة أسبوعية سريعة على الفعاليات القادمة": "A quick weekly look at upcoming events",
    "لا تفوّت فعاليات عسير": "Don't miss Aseer's events",
    "احفظ فعالياتك المفضلة وشارك خطتك مع من تحب": "Save your favorite events and share the plan",
    "ابدأ من أقرب منطقة لك وشاهد الفعاليات المتاحة": "Start from the nearest region and see what's on",
    "8 فعاليات": "8 events",
    "5 فعاليات": "5 events",
    "4 فعاليات": "4 events",
    "3 فعاليات": "3 events",
    "2 فعاليات": "2 events",
    "1 فعالية": "1 event",
    "6 أماكن": "6 places",
    "5 أماكن": "5 places",
    "22 إقامة": "22 stays",
    "36 إقامة": "36 stays",
    "14 إقامة": "14 stays",
    "11 إقامة": "11 stays",
    "18 إقامة": "18 stays",
    "9 إقامات": "9 stays",
    "8 إقامات": "8 stays",
    "حسابي": "My Account",
    "حسابي | عسير": "My Account | Aseer",
    "الرئيسية / حسابي": "Home / My Account",
    "حجوزاتي": "My bookings",
    "رحلاتي": "My trips",
    "الدعم": "Support",
    "تواصل معنا": "Contact us",
    "تجربة": "Experience",
    "رحلاتي المحفوظة": "My saved trips",
    "خطط رحلة جديدة ←": "Plan a new trip ←",
    "مسار محفوظ": "Saved route",
    "يوم واحد · سهل": "1 day · Easy",
    "٣ أيام · متوسط": "3 days · Moderate",
    "تصفح الإقامات ←": "Browse stays ←",
    "إقامة": "Stay",
    "١٢ - ١٤ يوليو ٢٠٢٦ · السودة": "12–14 Jul 2026 · Al Soudah",
    "جلسة فوق السحاب": "Session above the clouds",
    "١٣ يوليو ٢٠٢٦ · ٥ عصرًا · السودة": "13 Jul 2026 · 5 PM · Al Soudah",
    "مؤكد": "Confirmed",
    "عرض التفاصيل": "View details",
    "2 مؤكدة": "2 confirmed",
    "2 محفوظة": "2 saved",
    "هل تحتاج مساعدة؟": "Need help?",
    "فريق الدعم جاهز لأي استفسار حول حجوزاتك أو تخطيط رحلتك.": "Support is ready for any question about your bookings or trip planning.",
    "مازن المالكي": "Mazen Al-Malki",
    "م": "M",
    "تسجيل الخروج": "Log out",
    "أبها · موسيقى وفنون · 22 يونيو": "Abha · Music and arts · 22 June",
    "رجال ألمع · تراث وأسواق · 23 يونيو": "Rijal Almaa · Heritage and markets · 23 June",
    "السودة · طبيعة ومشي · 24 يونيو": "Al Soudah · Nature and walking · 24 June",
    "تنومة · جلسات خارجية · 24 يونيو": "Tanomah · Outdoor gatherings · 24 June",
    "رجال ألمع · تراث ومأكولات شعبية": "Rijal Almaa · Heritage and local food",
    "أبها · موسيقى وفنون": "Abha · Music and arts",
    "السودة · تجربة فلكية": "Al Soudah · Stargazing experience",
    "22 - 23 يونيو": "22 – 23 June",
    "22 - 24 يونيو": "22 – 24 June",
    "24 - 26 يونيو": "24 – 26 June",
    "أبها · موسيقى وفنون · 7:30 م": "Abha · Music and arts · 7:30 PM",
    "رجال ألمع · تراث وأسواق · 5:30 م": "Rijal Almaa · Heritage and markets · 5:30 PM",
    "تنومة · جلسات خارجية · 8:00 م": "Tanomah · Outdoor gatherings · 8:00 PM",
    "السبت": "Saturday",
    "الأحد": "Sunday",
    "الأثنين": "Monday",
    "الثلاثاء": "Tuesday",
    "الأربعاء": "Wednesday",
    "الخميس": "Thursday",
    "الجمعة": "Friday",
    "يونيو": "June",
    /* Destination pages (Abha Figma + generated regions) */
    "أبها | عسير": "Abha | Aseer",
    "استكشف عسير / أبها": "Explore Aseer / Abha",
    "وجهة المدينة الجبلية في عسير": "The mountain-city destination of Aseer",
    "حيث تلتقي روح المدينة بإطلالات الجبال، وتمنح أبها زائرها تجربة تجمع بين الطبيعة والثقافة والأسواق والمقاهي المطلة على قمم عسير.": "Where city life meets mountain views, and Abha gives visitors a mix of nature, culture, markets, and cafés overlooking Aseer’s peaks.",
    "خطط لزيارتك لأبها": "Plan your visit to Abha",
    "استكشف تجارب أبها": "Explore Abha experiences",
    "ارتفاع 2,270 م": "Elevation 2,270 m",
    "قلب عسير": "Heart of Aseer",
    "تراث وفنون": "Heritage & arts",
    "أجواء معتدلة": "Mild climate",
    "هوية الوجهة": "Destination identity",
    "لماذا أبها؟": "Why Abha?",
    "ثلاثة أسباب تجعل أبها بداية مثالية لاكتشاف عسير.": "Three reasons Abha is an ideal start to discovering Aseer.",
    "مدينة جبلية نابضة": "A vibrant mountain city",
    "تجمع أبها بين أجواء المرتفعات وروح المدينة، لتكون نقطة انطلاق مريحة نحو وجهات عسير.": "Abha blends highland air with city energy — a comfortable launch point toward Aseer’s destinations.",
    "ثقافة وأسواق": "Culture & markets",
    "أسواق شعبية وفنون ومذاقات محلية تمنح الزائر تجربة قريبة من هوية المنطقة.": "Folk markets, arts, and local flavors give visitors a close sense of the region’s identity.",
    "إطلالات قريبة": "Nearby viewpoints",
    "من المدينة تصل بسهولة إلى مطلات وحدائق ومواقع طبيعية تكشف جمال جبال عسير.": "From the city you reach viewpoints, gardens, and natural sites that reveal Aseer’s mountain beauty.",
    "جرّب المكان": "Try the place",
    "تجارب أبها": "Abha experiences",
    "شبكة كروت واسعة تعرض تجارب المدينة الجبلية، من الإطلالات القريبة إلى الأسواق والمقاهي والوجهات الثقافية.": "A wide set of cards covering the mountain city’s experiences — from nearby views to markets, cafés, and cultural stops.",
    "مطلات أبها": "Abha viewpoints",
    "مشاهد قريبة تكشف المدينة والجبال من زوايا مختلفة.": "Close-by scenes that reveal the city and mountains from different angles.",
    "شارع الفن": "Art Street",
    "مسار حضري يجمع الجداريات والمقاهي والحياة المسائية.": "An urban path of murals, cafés, and evening life.",
    "الأسواق الشعبية": "Folk markets",
    "تجربة محلية للمنتجات والحرف والمذاقات العسيرية.": "A local experience of products, crafts, and Aseeri flavors.",
    "قصر شدا": "Shada Palace",
    "محطة تراثية تعكس ملامح العمارة والذاكرة المحلية.": "A heritage stop reflecting local architecture and memory.",
    "حدائق ومتنزهات جبلية": "Mountain parks & gardens",
    "مساحات خضراء قريبة تناسب الجلسات العائلية.": "Nearby green spaces suited to family gatherings.",
    "توقفات هادئة بين أجواء المدينة والمرتفعات.": "Quiet pauses between city atmosphere and the highlands.",
    "اقتراح تجربة": "Suggested experience",
    "يوم في أبها": "A day in Abha",
    "تجربة هادئة تبدأ بمشهد مطل على المدينة، وتمر بالأسواق والمقاهي، وتنتهي بجلسة مسائية بين أجواء أبها الباردة.": "A calm day that starts with a city viewpoint, moves through markets and cafés, and ends with an evening gathering in Abha’s cool air.",
    "الصباح": "Morning",
    "مطل المدينة": "City viewpoint",
    "بداية هادئة مع إطلالة على أبها والمرتفعات.": "A quiet start with a view over Abha and the highlands.",
    "منتصف اليوم": "Midday",
    "جولة خفيفة بين الأسواق والفنون والمقاهي المحلية.": "A light stroll through markets, arts, and local cafés.",
    "المساء": "Evening",
    "جلسة باردة": "A cool gathering",
    "توقف مسائي هادئ بين أجواء أبها الباردة وإطلالاتها.": "A calm evening pause in Abha’s cool air and views.",
    "أقرب الوجهات": "Nearest destinations",
    "بالقرب من أبها": "Near Abha",
    "وجهات قريبة تساعدك على توسيع رحلتك من قلب المدينة إلى الجبال والتراث.": "Nearby places that extend your trip from the city heart to mountains and heritage.",
    "قمم وضباب وإطلالات باردة على مسافة قريبة من أبها.": "Peaks, fog, and cool views a short distance from Abha.",
    "قرية تراثية بطابع معماري وثقافي مميز.": "A heritage village with distinctive architecture and culture.",
    "منتزهات عسير": "Aseer parks",
    "مساحات طبيعية ومواقع عائلية بين الجبال والغابات.": "Natural spaces and family sites among mountains and forests.",
    "خميس مشيط": "Khamis Mushait",
    "مدينة قريبة للتسوق والمطاعم والخدمات.": "A nearby city for shopping, dining, and services.",
    "ابدأ رحلتك إلى أبها": "Start your journey to Abha",
    "جهّز خطتك واكتشف أبها بين إطلالات الجبال، أسواقها القريبة، ومقاهيها التي تمنح اليوم إيقاعًا مختلفًا.": "Prepare your plan and discover Abha among mountain views, nearby markets, and cafés that set a different pace for the day.",
    "استكشف التجارب": "Explore experiences",
    "احفظ الوجهة": "Save destination",
    "السودة | عسير": "Al Soudah | Aseer",
    "استكشف عسير / السودة": "Explore Aseer / Al Soudah",
    "قمم شاهقة وضباب فوق الغيوم": "Towering peaks above the clouds",
    "تضم أعلى قمة في المملكة العربية السعودية، ووجهة صيفية شهيرة بتلفريكها وغاباتها الكثيفة وإطلالاتها فوق السحاب.": "Home to the Kingdom’s highest peak — a famous summer destination for its cable car, dense forests, and views above the clouds.",
    "خطط لزيارتك للسودة": "Plan your visit to Al Soudah",
    "استكشف تجارب السودة": "Explore Al Soudah experiences",
    "ارتفاع 2,980 م": "Elevation 2,980 m",
    "أعلى قمة بالمملكة": "The Kingdom's highest peak",
    "تلفريك وغابات": "Cable car & forests",
    "أجواء باردة صيفًا": "Cool summer air",
    "لماذا السودة؟": "Why Al Soudah?",
    "ثلاثة أسباب تجعل السودة محطة لا تُفوَّت في رحلة القمم.": "Three reasons Al Soudah is a must stop on a peaks journey.",
    "وجهة ترتفع فوق الضباب، وتمنح الزائر إحساسًا بالقرب من الغيوم والإطلالات البعيدة.": "A destination above the mist, giving visitors a sense of the clouds and far views.",
    "تلفريك السودة": "The Soudah cable car",
    "رحلة هوائية مميزة بين القمم والغابات، مناسبة للعوائل ومحبي المشاهد البانورامية.": "A distinctive aerial ride between peaks and forests — ideal for families and panoramic views.",
    "غابات كثيفة": "Dense forests",
    "مسارات ومساحات خضراء باردة صيفًا، تجمع بين الطبيعة والجلسات الهادئة.": "Cool summer trails and green spaces that mix nature with quiet gatherings.",
    "تجارب السودة": "Al Soudah experiences",
    "من التلفريك والمطلات إلى المسارات والغابات والجلسات الباردة على القمم.": "From the cable car and viewpoints to trails, forests, and cool gatherings on the peaks.",
    "مطلات السودة": "Al Soudah viewpoints",
    "إطلالات عالية تكشف الجبال والضباب من زوايا مختلفة.": "High views that reveal mountains and mist from different angles.",
    "مسارات القمم": "Peak trails",
    "مشي خفيف بين الغابات والمرتفعات لهواة الطبيعة.": "Light walks among forests and highlands for nature lovers.",
    "تجربة طيران قصيرة فوق المنحدرات الخضراء.": "A short aerial experience over green slopes.",
    "شروق فوق الغيوم": "Sunrise above the clouds",
    "لحظة تصوير هادئة مع أول ضوء على القمم.": "A quiet photo moment with first light on the peaks.",
    "جلسات باردة": "Cool gatherings",
    "توقفات هادئة تناسب العوائل في أجواء الصيف الباردة.": "Quiet pauses suited to families in cool summer air.",
    "شتاء السودة": "Al Soudah winter",
    "ضباب كثيف وبرودة مميزة في موسم الشتاء.": "Dense mist and distinctive cold in winter.",
    "يوم في السودة": "A day in Al Soudah",
    "يوم يبدأ بمطل فوق الضباب، ويمر بالتلفريك والمسارات، وينتهي بجلسة باردة بين الغابات.": "A day that starts above the mist, moves through the cable car and trails, and ends with a cool gathering among the forests.",
    "مطل القمة": "Summit viewpoint",
    "بداية مع مشهد الضباب وإطلالة واسعة على المرتفعات.": "A start with mist and a wide view over the highlands.",
    "تلفريك ومسار": "Cable car & trail",
    "جولة في التلفريك ثم مشي خفيف بين الغابات.": "A cable-car ride then a light walk among the forests.",
    "توقف مسائي هادئ في أجواء السودة الباردة.": "A calm evening pause in Al Soudah’s cool air.",
    "بالقرب من السودة": "Near Al Soudah",
    "وجهات قريبة تكمل يومك بين المدينة والقرى والغابات.": "Nearby places that complete your day between city, villages, and forests.",
    "المدينة الجبلية القريبة للأسواق والمقاهي والخدمات.": "The nearby mountain city for markets, cafés, and services.",
    "شلالات ومدرجات خضراء على مسافة قصيرة.": "Waterfalls and green terraces a short distance away.",
    "بلحمر": "Balhamer",
    "قرى تراثية ومدرجات بين الجبال.": "Heritage villages and terraces among the mountains.",
    "بللسمر": "Balasmer",
    "غابات وضباب بارد ومسارات هادئة.": "Forests, cool mist, and quiet trails.",
    "ابدأ رحلتك إلى السودة": "Start your journey to Al Soudah",
    "جهّز خطتك واكتشف أعلى القمم، التلفريك، والغابات الباردة في قلب عسير.": "Prepare your plan and discover the highest peaks, the cable car, and cool forests in the heart of Aseer.",
    "تنومة | عسير": "Tanomah | Aseer",
    "استكشف عسير / تنومة": "Explore Aseer / Tanomah",
    "شلالات ومدرجات جبلية خضراء": "Waterfalls and green mountain terraces",
    "تشتهر تنومة بمدرجاتها الزراعية الخضراء وشلالاتها الموسمية المنحدرة من قمم عسير المرتفعة.": "Known for its green agricultural terraces and seasonal waterfalls cascading from Aseer's high peaks.",
    "خطط لزيارتك لتنومة": "Plan your visit to Tanomah",
    "استكشف تجارب تنومة": "Explore Tanomah experiences",
    "لماذا تنومة؟": "Why Tanomah?",
    "ثلاثة أسباب تجعل تنومة محطة تستحق الزيارة في عسير.": "Three reasons Tanomah is a stop worth visiting in Aseer.",
    "تجارب تنومة": "Tanomah experiences",
    "اختيارات من تنومة تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Tanomah mixing nature, culture, and nearby gatherings.",
    "يوم في تنومة": "A day in Tanomah",
    "اقتراح يوم يبدأ بمشهد من تنومة ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Tanomah, moves through its landmarks, and ends quietly.",
    "بالقرب من تنومة": "Near Tanomah",
    "وجهات قريبة تكمل رحلتك من تنومة إلى محيطها.": "Nearby places that extend your trip from Tanomah outward.",
    "ابدأ رحلتك إلى تنومة": "Start your journey to Tanomah",
    "جهّز خطتك واكتشف تنومة بين شلالات ومدرجات جبلية خضراء.": "Prepare your plan and discover Tanomah — Waterfalls and green mountain terraces.",
    "ارتفاع 2,400 م": "Elevation 2,400 m",
    "القمم": "Peaks",
    "شلالات موسمية": "Seasonal waterfalls",
    "شلالات موسمية من أبرز ما يميز تنومة لزوارها.": "Seasonal waterfalls is among what makes Tanomah distinctive for visitors.",
    "مدرجات زراعية": "Farming terraces",
    "مدرجات زراعية من أبرز ما يميز تنومة لزوارها.": "Farming terraces is among what makes Tanomah distinctive for visitors.",
    "أجواء باردة صيفًا من أبرز ما يميز تنومة لزوارها.": "Cool summer air is among what makes Tanomah distinctive for visitors.",
    "مطلات تنومة": "Tanomah viewpoints",
    "تجربة من تنومة تكشف ملامح الوجهة لزوارها.": "An experience in Tanomah that reveals the place to visitors.",
    "مسارات تنومة": "Tanomah trails",
    "بداية هادئة مع شلالات موسمية في تنومة.": "A calm start with Seasonal waterfalls in Tanomah.",
    "منتصف يوم يمر على مدرجات زراعية.": "Midday around Farming terraces.",
    "نهاية اليوم بجلسة هادئة في أجواء تنومة.": "End the day with a quiet pause in Tanomah.",
    "أبها": "Abha",
    "مدينة جبلية نابضة في قلب عسير": "A lively mountain city at the heart of Aseer",
    "النماص": "Al Namas",
    "مرتفعات وقرى هادئة بين الغابات": "Quiet highlands and villages among the forests",
    "بللحمر": "Balhamer",
    "مدرجات وقرى حجرية": "Terraces and stone villages",
    "السودة": "Al Soudah",
    "النماص | عسير": "Al Namas | Aseer",
    "استكشف عسير / النماص": "Explore Aseer / Al Namas",
    "وجهة جبلية هادئة تحيطها غابات العرعر الكثيفة، معروفة بمناخها المعتدل ومنتزهاتها الطبيعية.": "A tranquil mountain destination surrounded by dense juniper forests, known for its mild climate and nature parks.",
    "خطط لزيارتك لالنماص": "Plan your visit to Al Namas",
    "استكشف تجارب النماص": "Explore Al Namas experiences",
    "لماذا النماص؟": "Why Al Namas?",
    "ثلاثة أسباب تجعل النماص محطة تستحق الزيارة في عسير.": "Three reasons Al Namas is a stop worth visiting in Aseer.",
    "تجارب النماص": "Al Namas experiences",
    "اختيارات من النماص تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Al Namas mixing nature, culture, and nearby gatherings.",
    "يوم في النماص": "A day in Al Namas",
    "اقتراح يوم يبدأ بمشهد من النماص ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Al Namas, moves through its landmarks, and ends quietly.",
    "بالقرب من النماص": "Near Al Namas",
    "وجهات قريبة تكمل رحلتك من النماص إلى محيطها.": "Nearby places that extend your trip from Al Namas outward.",
    "ابدأ رحلتك إلى النماص": "Start your journey to Al Namas",
    "جهّز خطتك واكتشف النماص بين مرتفعات وقرى هادئة بين الغابات.": "Prepare your plan and discover Al Namas — Quiet highlands and villages among the forests.",
    "ارتفاع 2,260 م": "Elevation 2,260 m",
    "غابات عرعر": "Juniper forests",
    "منتزهات طبيعية": "Nature parks",
    "غابات عرعر من أبرز ما يميز النماص لزوارها.": "Juniper forests is among what makes Al Namas distinctive for visitors.",
    "مناخ معتدل": "Mild climate",
    "مناخ معتدل من أبرز ما يميز النماص لزوارها.": "Mild climate is among what makes Al Namas distinctive for visitors.",
    "منتزهات طبيعية من أبرز ما يميز النماص لزوارها.": "Nature parks is among what makes Al Namas distinctive for visitors.",
    "مطلات النماص": "Al Namas viewpoints",
    "تجربة من النماص تكشف ملامح الوجهة لزوارها.": "An experience in Al Namas that reveals the place to visitors.",
    "مسارات النماص": "Al Namas trails",
    "بداية هادئة مع غابات عرعر في النماص.": "A calm start with Juniper forests in Al Namas.",
    "منتصف يوم يمر على مناخ معتدل.": "Midday around Mild climate.",
    "نهاية اليوم بجلسة هادئة في أجواء النماص.": "End the day with a quiet pause in Al Namas.",
    "تنومة": "Tanomah",
    "غابات وضباب بارد": "Forests and cool mist",
    "بللسمر | عسير": "Balasmer | Aseer",
    "استكشف عسير / بللسمر": "Explore Aseer / Balasmer",
    "منطقة جبلية غنية بالغطاء النباتي الكثيف، تتشكل فوقها طبقات من الضباب البارد على مدار العام.": "A mountain area rich in dense vegetation, blanketed year-round in layers of cool mist.",
    "خطط لزيارتك لبللسمر": "Plan your visit to Balasmer",
    "استكشف تجارب بللسمر": "Explore Balasmer experiences",
    "لماذا بللسمر؟": "Why Balasmer?",
    "ثلاثة أسباب تجعل بللسمر محطة تستحق الزيارة في عسير.": "Three reasons Balasmer is a stop worth visiting in Aseer.",
    "تجارب بللسمر": "Balasmer experiences",
    "اختيارات من بللسمر تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Balasmer mixing nature, culture, and nearby gatherings.",
    "يوم في بللسمر": "A day in Balasmer",
    "اقتراح يوم يبدأ بمشهد من بللسمر ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Balasmer, moves through its landmarks, and ends quietly.",
    "بالقرب من بللسمر": "Near Balasmer",
    "وجهات قريبة تكمل رحلتك من بللسمر إلى محيطها.": "Nearby places that extend your trip from Balasmer outward.",
    "ابدأ رحلتك إلى بللسمر": "Start your journey to Balasmer",
    "جهّز خطتك واكتشف بللسمر بين غابات وضباب بارد.": "Prepare your plan and discover Balasmer — Forests and cool mist.",
    "ارتفاع 2,350 م": "Elevation 2,350 m",
    "غطاء نباتي كثيف": "Dense vegetation",
    "مسارات هادئة": "Quiet trails",
    "غطاء نباتي كثيف من أبرز ما يميز بللسمر لزوارها.": "Dense vegetation is among what makes Balasmer distinctive for visitors.",
    "ضباب دائم": "Year-round mist",
    "ضباب دائم من أبرز ما يميز بللسمر لزوارها.": "Year-round mist is among what makes Balasmer distinctive for visitors.",
    "مسارات هادئة من أبرز ما يميز بللسمر لزوارها.": "Quiet trails is among what makes Balasmer distinctive for visitors.",
    "مطلات بللسمر": "Balasmer viewpoints",
    "تجربة من بللسمر تكشف ملامح الوجهة لزوارها.": "An experience in Balasmer that reveals the place to visitors.",
    "مسارات بللسمر": "Balasmer trails",
    "بداية هادئة مع غطاء نباتي كثيف في بللسمر.": "A calm start with Dense vegetation in Balasmer.",
    "منتصف يوم يمر على ضباب دائم.": "Midday around Year-round mist.",
    "نهاية اليوم بجلسة هادئة في أجواء بللسمر.": "End the day with a quiet pause in Balasmer.",
    "بللحمر | عسير": "Balhamer | Aseer",
    "استكشف عسير / بللحمر": "Explore Aseer / Balhamer",
    "تتناثر بين تلالها قرى حجرية تقليدية ومدرجات زراعية توارثتها الأجيال جيلًا بعد جيل.": "Traditional stone villages and farming terraces scattered across its hills, passed down through generations.",
    "خطط لزيارتك لبللحمر": "Plan your visit to Balhamer",
    "استكشف تجارب بللحمر": "Explore Balhamer experiences",
    "لماذا بللحمر؟": "Why Balhamer?",
    "ثلاثة أسباب تجعل بللحمر محطة تستحق الزيارة في عسير.": "Three reasons Balhamer is a stop worth visiting in Aseer.",
    "تجارب بللحمر": "Balhamer experiences",
    "اختيارات من بللحمر تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Balhamer mixing nature, culture, and nearby gatherings.",
    "يوم في بللحمر": "A day in Balhamer",
    "اقتراح يوم يبدأ بمشهد من بللحمر ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Balhamer, moves through its landmarks, and ends quietly.",
    "بالقرب من بللحمر": "Near Balhamer",
    "وجهات قريبة تكمل رحلتك من بللحمر إلى محيطها.": "Nearby places that extend your trip from Balhamer outward.",
    "ابدأ رحلتك إلى بللحمر": "Start your journey to Balhamer",
    "جهّز خطتك واكتشف بللحمر بين مدرجات وقرى حجرية.": "Prepare your plan and discover Balhamer — Terraces and stone villages.",
    "ارتفاع 2,200 م": "Elevation 2,200 m",
    "قرى تراثية": "Heritage villages",
    "حرف يدوية": "Handcrafts",
    "قرى تراثية من أبرز ما يميز بللحمر لزوارها.": "Heritage villages is among what makes Balhamer distinctive for visitors.",
    "مدرجات زراعية من أبرز ما يميز بللحمر لزوارها.": "Farming terraces is among what makes Balhamer distinctive for visitors.",
    "حرف يدوية من أبرز ما يميز بللحمر لزوارها.": "Handcrafts is among what makes Balhamer distinctive for visitors.",
    "مطلات بللحمر": "Balhamer viewpoints",
    "تجربة من بللحمر تكشف ملامح الوجهة لزوارها.": "An experience in Balhamer that reveals the place to visitors.",
    "مسارات بللحمر": "Balhamer trails",
    "بداية هادئة مع قرى تراثية في بللحمر.": "A calm start with Heritage villages in Balhamer.",
    "نهاية اليوم بجلسة هادئة في أجواء بللحمر.": "End the day with a quiet pause in Balhamer.",
    "تضم أعلى قمة في المملكة العربية السعودية، ووجهة صيفية شهيرة بتلفريكها وغاباتها الكثيفة.": "Home to the Kingdom's highest peak, and a famous summer destination for its cable car and dense forests.",
    "خطط لزيارتك لالسودة": "Plan your visit to Al Soudah",
    "ثلاثة أسباب تجعل السودة محطة تستحق الزيارة في عسير.": "Three reasons Al Soudah is a stop worth visiting in Aseer.",
    "اختيارات من السودة تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Al Soudah mixing nature, culture, and nearby gatherings.",
    "اقتراح يوم يبدأ بمشهد من السودة ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Al Soudah, moves through its landmarks, and ends quietly.",
    "وجهات قريبة تكمل رحلتك من السودة إلى محيطها.": "Nearby places that extend your trip from Al Soudah outward.",
    "جهّز خطتك واكتشف السودة بين قمم شاهقة وضباب فوق الغيوم.": "Prepare your plan and discover Al Soudah — Towering peaks above the clouds.",
    "أعلى قمة بالمملكة من أبرز ما يميز السودة لزوارها.": "The Kingdom's highest peak is among what makes Al Soudah distinctive for visitors.",
    "تلفريك السودة من أبرز ما يميز السودة لزوارها.": "The Soudah cable car is among what makes Al Soudah distinctive for visitors.",
    "غابات كثيفة من أبرز ما يميز السودة لزوارها.": "Dense forests is among what makes Al Soudah distinctive for visitors.",
    "تجربة من السودة تكشف ملامح الوجهة لزوارها.": "An experience in Al Soudah that reveals the place to visitors.",
    "مسارات السودة": "Al Soudah trails",
    "بداية هادئة مع أعلى قمة بالمملكة في السودة.": "A calm start with The Kingdom's highest peak in Al Soudah.",
    "منتصف يوم يمر على تلفريك السودة.": "Midday around The Soudah cable car.",
    "نهاية اليوم بجلسة هادئة في أجواء السودة.": "End the day with a quiet pause in Al Soudah.",
    "رجال ألمع | عسير": "Rijal Almaa | Aseer",
    "استكشف عسير / رجال ألمع": "Explore Aseer / Rijal Almaa",
    "قرية التراث والفن الحجري في عسير": "Aseer's heritage village of stone and art",
    "قرية تراثية بنيت من الحجر والفن الملون، تحكي قصة العمارة الأصيل في قلب جبال عسير.": "A heritage village built of stone and painted folk art, telling the story of authentic architecture in Aseer's mountains.",
    "خطط لزيارتك لرجال ألمع": "Plan your visit to Rijal Almaa",
    "استكشف تجارب رجال ألمع": "Explore Rijal Almaa experiences",
    "لماذا رجال ألمع؟": "Why Rijal Almaa?",
    "ثلاثة أسباب تجعل رجال ألمع محطة تستحق الزيارة في عسير.": "Three reasons Rijal Almaa is a stop worth visiting in Aseer.",
    "تجارب رجال ألمع": "Rijal Almaa experiences",
    "اختيارات من رجال ألمع تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Rijal Almaa mixing nature, culture, and nearby gatherings.",
    "يوم في رجال ألمع": "A day in Rijal Almaa",
    "اقتراح يوم يبدأ بمشهد من رجال ألمع ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Rijal Almaa, moves through its landmarks, and ends quietly.",
    "بالقرب من رجال ألمع": "Near Rijal Almaa",
    "وجهات قريبة تكمل رحلتك من رجال ألمع إلى محيطها.": "Nearby places that extend your trip from Rijal Almaa outward.",
    "ابدأ رحلتك إلى رجال ألمع": "Start your journey to Rijal Almaa",
    "جهّز خطتك واكتشف رجال ألمع بين قرية التراث والفن الحجري في عسير.": "Prepare your plan and discover Rijal Almaa — Aseer's heritage village of stone and art.",
    "ارتفاع 1,800 م": "Elevation 1,800 m",
    "تهامة": "Tihama",
    "قصور حجرية شاهقة": "Towering stone castles",
    "متحف مفتوح": "An open-air museum",
    "قصور حجرية شاهقة من أبرز ما يميز رجال ألمع لزوارها.": "Towering stone castles is among what makes Rijal Almaa distinctive for visitors.",
    "فن القط العسيري": "Al-Qatt Al-Asiri art",
    "فن القط العسيري من أبرز ما يميز رجال ألمع لزوارها.": "Al-Qatt Al-Asiri art is among what makes Rijal Almaa distinctive for visitors.",
    "متحف مفتوح من أبرز ما يميز رجال ألمع لزوارها.": "An open-air museum is among what makes Rijal Almaa distinctive for visitors.",
    "مطلات رجال ألمع": "Rijal Almaa viewpoints",
    "تجربة من رجال ألمع تكشف ملامح الوجهة لزوارها.": "An experience in Rijal Almaa that reveals the place to visitors.",
    "مسارات رجال ألمع": "Rijal Almaa trails",
    "بداية هادئة مع قصور حجرية شاهقة في رجال ألمع.": "A calm start with Towering stone castles in Rijal Almaa.",
    "منتصف يوم يمر على فن القط العسيري.": "Midday around Al-Qatt Al-Asiri art.",
    "نهاية اليوم بجلسة هادئة في أجواء رجال ألمع.": "End the day with a quiet pause in Rijal Almaa.",
    "بارق": "Bariq",
    "أودية خصبة ونخيل باسق": "Fertile valleys and tall palms",
    "المجاردة | عسير": "Al Majardah | Aseer",
    "استكشف عسير / المجاردة": "Explore Aseer / Al Majardah",
    "سفوح خضراء تربط الجبل بالسهل": "Green slopes linking mountain to plain",
    "منطقة انتقالية بين مرتفعات عسير وسهول تهامة، تشتهر بمزارعها المتدرجة وطقسها المعتدل.": "A transitional area between Aseer's highlands and the Tihama plains, known for its terraced farms and mild weather.",
    "خطط لزيارتك لالمجاردة": "Plan your visit to Al Majardah",
    "استكشف تجارب المجاردة": "Explore Al Majardah experiences",
    "لماذا المجاردة؟": "Why Al Majardah?",
    "ثلاثة أسباب تجعل المجاردة محطة تستحق الزيارة في عسير.": "Three reasons Al Majardah is a stop worth visiting in Aseer.",
    "تجارب المجاردة": "Al Majardah experiences",
    "اختيارات من المجاردة تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Al Majardah mixing nature, culture, and nearby gatherings.",
    "يوم في المجاردة": "A day in Al Majardah",
    "اقتراح يوم يبدأ بمشهد من المجاردة ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Al Majardah, moves through its landmarks, and ends quietly.",
    "بالقرب من المجاردة": "Near Al Majardah",
    "وجهات قريبة تكمل رحلتك من المجاردة إلى محيطها.": "Nearby places that extend your trip from Al Majardah outward.",
    "ابدأ رحلتك إلى المجاردة": "Start your journey to Al Majardah",
    "جهّز خطتك واكتشف المجاردة بين سفوح خضراء تربط الجبل بالسهل.": "Prepare your plan and discover Al Majardah — Green slopes linking mountain to plain.",
    "ارتفاع 1,600 م": "Elevation 1,600 m",
    "سفوح متدرجة": "Terraced slopes",
    "طقس معتدل": "Mild weather",
    "سفوح متدرجة من أبرز ما يميز المجاردة لزوارها.": "Terraced slopes is among what makes Al Majardah distinctive for visitors.",
    "مزارع محلية": "Local farms",
    "مزارع محلية من أبرز ما يميز المجاردة لزوارها.": "Local farms is among what makes Al Majardah distinctive for visitors.",
    "طقس معتدل من أبرز ما يميز المجاردة لزوارها.": "Mild weather is among what makes Al Majardah distinctive for visitors.",
    "مطلات المجاردة": "Al Majardah viewpoints",
    "تجربة من المجاردة تكشف ملامح الوجهة لزوارها.": "An experience in Al Majardah that reveals the place to visitors.",
    "مسارات المجاردة": "Al Majardah trails",
    "بداية هادئة مع سفوح متدرجة في المجاردة.": "A calm start with Terraced slopes in Al Majardah.",
    "منتصف يوم يمر على مزارع محلية.": "Midday around Local farms.",
    "نهاية اليوم بجلسة هادئة في أجواء المجاردة.": "End the day with a quiet pause in Al Majardah.",
    "محايل عسير": "Muhayil Aseer",
    "بوابة عسير نحو تهامة": "Aseer's gateway to Tihama",
    "رجال ألمع": "Rijal Almaa",
    "البرك": "Al Birk",
    "سواحل هادئة على البحر الأحمر": "Quiet shores on the Red Sea",
    "بارق | عسير": "Bariq | Aseer",
    "استكشف عسير / بارق": "Explore Aseer / Bariq",
    "محافظة تتوسط أودية خصبة تشتهر بزراعة النخيل والفواكه، ومناظرها الجبلية الممتدة نحو تهامة.": "A governorate set among fertile valleys known for palm and fruit farming, with mountain views stretching toward Tihama.",
    "خطط لزيارتك لبارق": "Plan your visit to Bariq",
    "استكشف تجارب بارق": "Explore Bariq experiences",
    "لماذا بارق؟": "Why Bariq?",
    "ثلاثة أسباب تجعل بارق محطة تستحق الزيارة في عسير.": "Three reasons Bariq is a stop worth visiting in Aseer.",
    "تجارب بارق": "Bariq experiences",
    "اختيارات من بارق تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Bariq mixing nature, culture, and nearby gatherings.",
    "يوم في بارق": "A day in Bariq",
    "اقتراح يوم يبدأ بمشهد من بارق ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Bariq, moves through its landmarks, and ends quietly.",
    "بالقرب من بارق": "Near Bariq",
    "وجهات قريبة تكمل رحلتك من بارق إلى محيطها.": "Nearby places that extend your trip from Bariq outward.",
    "ابدأ رحلتك إلى بارق": "Start your journey to Bariq",
    "جهّز خطتك واكتشف بارق بين أودية خصبة ونخيل باسق.": "Prepare your plan and discover Bariq — Fertile valleys and tall palms.",
    "ارتفاع 1,500 م": "Elevation 1,500 m",
    "أودية خصبة": "Fertile valleys",
    "مناظر جبلية": "Mountain views",
    "أودية خصبة من أبرز ما يميز بارق لزوارها.": "Fertile valleys is among what makes Bariq distinctive for visitors.",
    "مزارع نخيل": "Palm farms",
    "مزارع نخيل من أبرز ما يميز بارق لزوارها.": "Palm farms is among what makes Bariq distinctive for visitors.",
    "مناظر جبلية من أبرز ما يميز بارق لزوارها.": "Mountain views is among what makes Bariq distinctive for visitors.",
    "مطلات بارق": "Bariq viewpoints",
    "تجربة من بارق تكشف ملامح الوجهة لزوارها.": "An experience in Bariq that reveals the place to visitors.",
    "مسارات بارق": "Bariq trails",
    "بداية هادئة مع أودية خصبة في بارق.": "A calm start with Fertile valleys in Bariq.",
    "منتصف يوم يمر على مزارع نخيل.": "Midday around Palm farms.",
    "نهاية اليوم بجلسة هادئة في أجواء بارق.": "End the day with a quiet pause in Bariq.",
    "المجاردة": "Al Majardah",
    "القحمة": "Al Qahmah",
    "واحة ساحلية بين البحر والجبل": "A coastal oasis between sea and mountain",
    "محايل عسير | عسير": "Muhayil Aseer | Aseer",
    "استكشف عسير / محايل عسير": "Explore Aseer / Muhayil Aseer",
    "محافظة زراعية كبرى تشتهر بمزارع الموز والمانجو، وتربط طرق عسير الجبلية بسهول تهامة الساحلية.": "A major agricultural governorate known for banana and mango farms, linking Aseer's mountain roads to the Tihama coastal plains.",
    "خطط لزيارتك لمحايل عسير": "Plan your visit to Muhayil Aseer",
    "استكشف تجارب محايل عسير": "Explore Muhayil Aseer experiences",
    "لماذا محايل عسير؟": "Why Muhayil Aseer?",
    "ثلاثة أسباب تجعل محايل عسير محطة تستحق الزيارة في عسير.": "Three reasons Muhayil Aseer is a stop worth visiting in Aseer.",
    "تجارب محايل عسير": "Muhayil Aseer experiences",
    "اختيارات من محايل عسير تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Muhayil Aseer mixing nature, culture, and nearby gatherings.",
    "يوم في محايل عسير": "A day in Muhayil Aseer",
    "اقتراح يوم يبدأ بمشهد من محايل عسير ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Muhayil Aseer, moves through its landmarks, and ends quietly.",
    "بالقرب من محايل عسير": "Near Muhayil Aseer",
    "وجهات قريبة تكمل رحلتك من محايل عسير إلى محيطها.": "Nearby places that extend your trip from Muhayil Aseer outward.",
    "ابدأ رحلتك إلى محايل عسير": "Start your journey to Muhayil Aseer",
    "جهّز خطتك واكتشف محايل عسير بين بوابة عسير نحو تهامة.": "Prepare your plan and discover Muhayil Aseer — Aseer's gateway to Tihama.",
    "ارتفاع 900 م": "Elevation 900 m",
    "مزارع استوائية": "Tropical farms",
    "أسواق شعبية": "Traditional markets",
    "مزارع استوائية من أبرز ما يميز محايل عسير لزوارها.": "Tropical farms is among what makes Muhayil Aseer distinctive for visitors.",
    "طقس دافئ": "Warm weather",
    "طقس دافئ من أبرز ما يميز محايل عسير لزوارها.": "Warm weather is among what makes Muhayil Aseer distinctive for visitors.",
    "أسواق شعبية من أبرز ما يميز محايل عسير لزوارها.": "Traditional markets is among what makes Muhayil Aseer distinctive for visitors.",
    "مطلات محايل عسير": "Muhayil Aseer viewpoints",
    "تجربة من محايل عسير تكشف ملامح الوجهة لزوارها.": "An experience in Muhayil Aseer that reveals the place to visitors.",
    "مسارات محايل عسير": "Muhayil Aseer trails",
    "بداية هادئة مع مزارع استوائية في محايل عسير.": "A calm start with Tropical farms in Muhayil Aseer.",
    "منتصف يوم يمر على طقس دافئ.": "Midday around Warm weather.",
    "نهاية اليوم بجلسة هادئة في أجواء محايل عسير.": "End the day with a quiet pause in Muhayil Aseer.",
    "البرك | عسير": "Al Birk | Aseer",
    "استكشف عسير / البرك": "Explore Aseer / Al Birk",
    "مدينة ساحلية هادئة تطل على البحر الأحمر، تجمع بين شواطئها الرملية وتراثها البحري العريق.": "A quiet coastal town on the Red Sea, combining sandy beaches with a long-standing maritime heritage.",
    "خطط لزيارتك لالبرك": "Plan your visit to Al Birk",
    "استكشف تجارب البرك": "Explore Al Birk experiences",
    "لماذا البرك؟": "Why Al Birk?",
    "ثلاثة أسباب تجعل البرك محطة تستحق الزيارة في عسير.": "Three reasons Al Birk is a stop worth visiting in Aseer.",
    "تجارب البرك": "Al Birk experiences",
    "اختيارات من البرك تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Al Birk mixing nature, culture, and nearby gatherings.",
    "يوم في البرك": "A day in Al Birk",
    "اقتراح يوم يبدأ بمشهد من البرك ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Al Birk, moves through its landmarks, and ends quietly.",
    "بالقرب من البرك": "Near Al Birk",
    "وجهات قريبة تكمل رحلتك من البرك إلى محيطها.": "Nearby places that extend your trip from Al Birk outward.",
    "ابدأ رحلتك إلى البرك": "Start your journey to Al Birk",
    "جهّز خطتك واكتشف البرك بين سواحل هادئة على البحر الأحمر.": "Prepare your plan and discover Al Birk — Quiet shores on the Red Sea.",
    "ارتفاع 10 م": "Elevation 10 m",
    "الساحل": "Coast",
    "شواطئ رملية": "Sandy beaches",
    "أسواق سمك محلية": "Local fish markets",
    "شواطئ رملية من أبرز ما يميز البرك لزوارها.": "Sandy beaches is among what makes Al Birk distinctive for visitors.",
    "تراث بحري": "Maritime heritage",
    "تراث بحري من أبرز ما يميز البرك لزوارها.": "Maritime heritage is among what makes Al Birk distinctive for visitors.",
    "أسواق سمك محلية من أبرز ما يميز البرك لزوارها.": "Local fish markets is among what makes Al Birk distinctive for visitors.",
    "مطلات البرك": "Al Birk viewpoints",
    "تجربة من البرك تكشف ملامح الوجهة لزوارها.": "An experience in Al Birk that reveals the place to visitors.",
    "مسارات البرك": "Al Birk trails",
    "بداية هادئة مع شواطئ رملية في البرك.": "A calm start with Sandy beaches in Al Birk.",
    "منتصف يوم يمر على تراث بحري.": "Midday around Maritime heritage.",
    "نهاية اليوم بجلسة هادئة في أجواء البرك.": "End the day with a quiet pause in Al Birk.",
    "القحمة | عسير": "Al Qahmah | Aseer",
    "استكشف عسير / القحمة": "Explore Aseer / Al Qahmah",
    "محافظة ساحلية تتوسط الطريق بين جازان وعسير، تشتهر بمزارع النخيل القريبة من سواحلها.": "A coastal governorate along the road between Jazan and Aseer, known for its palm farms close to the shoreline.",
    "خطط لزيارتك لالقحمة": "Plan your visit to Al Qahmah",
    "استكشف تجارب القحمة": "Explore Al Qahmah experiences",
    "لماذا القحمة؟": "Why Al Qahmah?",
    "ثلاثة أسباب تجعل القحمة محطة تستحق الزيارة في عسير.": "Three reasons Al Qahmah is a stop worth visiting in Aseer.",
    "تجارب القحمة": "Al Qahmah experiences",
    "اختيارات من القحمة تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Al Qahmah mixing nature, culture, and nearby gatherings.",
    "يوم في القحمة": "A day in Al Qahmah",
    "اقتراح يوم يبدأ بمشهد من القحمة ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Al Qahmah, moves through its landmarks, and ends quietly.",
    "بالقرب من القحمة": "Near Al Qahmah",
    "وجهات قريبة تكمل رحلتك من القحمة إلى محيطها.": "Nearby places that extend your trip from Al Qahmah outward.",
    "ابدأ رحلتك إلى القحمة": "Start your journey to Al Qahmah",
    "جهّز خطتك واكتشف القحمة بين واحة ساحلية بين البحر والجبل.": "Prepare your plan and discover Al Qahmah — A coastal oasis between sea and mountain.",
    "ارتفاع 30 م": "Elevation 30 m",
    "قرب من الشاطئ": "Close to the shore",
    "طريق ساحلي هادئ": "A quiet coastal road",
    "قرب من الشاطئ من أبرز ما يميز القحمة لزوارها.": "Close to the shore is among what makes Al Qahmah distinctive for visitors.",
    "مزارع نخيل من أبرز ما يميز القحمة لزوارها.": "Palm farms is among what makes Al Qahmah distinctive for visitors.",
    "طريق ساحلي هادئ من أبرز ما يميز القحمة لزوارها.": "A quiet coastal road is among what makes Al Qahmah distinctive for visitors.",
    "مطلات القحمة": "Al Qahmah viewpoints",
    "تجربة من القحمة تكشف ملامح الوجهة لزوارها.": "An experience in Al Qahmah that reveals the place to visitors.",
    "مسارات القحمة": "Al Qahmah trails",
    "بداية هادئة مع قرب من الشاطئ في القحمة.": "A calm start with Close to the shore in Al Qahmah.",
    "نهاية اليوم بجلسة هادئة في أجواء القحمة.": "End the day with a quiet pause in Al Qahmah.",
    "بيشة": "Bisha",
    "واحة زراعية عند حافة الصحراء": "A farming oasis at the desert's edge",
    "بيشة | عسير": "Bisha | Aseer",
    "استكشف عسير / بيشة": "Explore Aseer / Bisha",
    "محافظة زراعية واسعة عند حافة الربع الخالي، تشتهر بمزارعها الممتدة ونخيلها الباسق.": "A wide agricultural governorate at the edge of the Empty Quarter, known for its sprawling farms and tall palms.",
    "خطط لزيارتك لبيشة": "Plan your visit to Bisha",
    "استكشف تجارب بيشة": "Explore Bisha experiences",
    "لماذا بيشة؟": "Why Bisha?",
    "ثلاثة أسباب تجعل بيشة محطة تستحق الزيارة في عسير.": "Three reasons Bisha is a stop worth visiting in Aseer.",
    "تجارب بيشة": "Bisha experiences",
    "اختيارات من بيشة تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Bisha mixing nature, culture, and nearby gatherings.",
    "يوم في بيشة": "A day in Bisha",
    "اقتراح يوم يبدأ بمشهد من بيشة ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Bisha, moves through its landmarks, and ends quietly.",
    "بالقرب من بيشة": "Near Bisha",
    "وجهات قريبة تكمل رحلتك من بيشة إلى محيطها.": "Nearby places that extend your trip from Bisha outward.",
    "ابدأ رحلتك إلى بيشة": "Start your journey to Bisha",
    "جهّز خطتك واكتشف بيشة بين واحة زراعية عند حافة الصحراء.": "Prepare your plan and discover Bisha — A farming oasis at the desert's edge.",
    "ارتفاع 1,160 م": "Elevation 1,160 m",
    "الصحراء والواحات": "Desert & Oases",
    "مزارع ممتدة": "Sprawling farms",
    "سماء صافية ليلاً": "Clear night skies",
    "مزارع ممتدة من أبرز ما يميز بيشة لزوارها.": "Sprawling farms is among what makes Bisha distinctive for visitors.",
    "أجواء صحراوية": "Desert atmosphere",
    "أجواء صحراوية من أبرز ما يميز بيشة لزوارها.": "Desert atmosphere is among what makes Bisha distinctive for visitors.",
    "سماء صافية ليلاً من أبرز ما يميز بيشة لزوارها.": "Clear night skies is among what makes Bisha distinctive for visitors.",
    "مطلات بيشة": "Bisha viewpoints",
    "تجربة من بيشة تكشف ملامح الوجهة لزوارها.": "An experience in Bisha that reveals the place to visitors.",
    "مسارات بيشة": "Bisha trails",
    "بداية هادئة مع مزارع ممتدة في بيشة.": "A calm start with Sprawling farms in Bisha.",
    "منتصف يوم يمر على أجواء صحراوية.": "Midday around Desert atmosphere.",
    "نهاية اليوم بجلسة هادئة في أجواء بيشة.": "End the day with a quiet pause in Bisha.",
    "سراة عبيدة": "Sarat Abidah",
    "سهول مرتفعة عند مشارف الصحراء": "High plains at the desert's edge",
    "ظهران الجنوب": "Dhahran Al Janub",
    "مرتفعات حدودية بين الجبل والصحراء": "Border highlands between mountain and desert",
    "سراة عبيدة | عسير": "Sarat Abidah | Aseer",
    "استكشف عسير / سراة عبيدة": "Explore Aseer / Sarat Abidah",
    "محافظة تمتد سهولها المرتفعة بين جبال عسير وصحراء الربع الخالي، بمناخ معتدل ومساحات مفتوحة.": "A governorate whose high plains stretch between Aseer's mountains and the Empty Quarter desert, with mild weather and open space.",
    "خطط لزيارتك لسراة عبيدة": "Plan your visit to Sarat Abidah",
    "استكشف تجارب سراة عبيدة": "Explore Sarat Abidah experiences",
    "لماذا سراة عبيدة؟": "Why Sarat Abidah?",
    "ثلاثة أسباب تجعل سراة عبيدة محطة تستحق الزيارة في عسير.": "Three reasons Sarat Abidah is a stop worth visiting in Aseer.",
    "تجارب سراة عبيدة": "Sarat Abidah experiences",
    "اختيارات من سراة عبيدة تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Sarat Abidah mixing nature, culture, and nearby gatherings.",
    "يوم في سراة عبيدة": "A day in Sarat Abidah",
    "اقتراح يوم يبدأ بمشهد من سراة عبيدة ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Sarat Abidah, moves through its landmarks, and ends quietly.",
    "بالقرب من سراة عبيدة": "Near Sarat Abidah",
    "وجهات قريبة تكمل رحلتك من سراة عبيدة إلى محيطها.": "Nearby places that extend your trip from Sarat Abidah outward.",
    "ابدأ رحلتك إلى سراة عبيدة": "Start your journey to Sarat Abidah",
    "جهّز خطتك واكتشف سراة عبيدة بين سهول مرتفعة عند مشارف الصحراء.": "Prepare your plan and discover Sarat Abidah — High plains at the desert's edge.",
    "ارتفاع 1,400 م": "Elevation 1,400 m",
    "سهول مفتوحة": "Open plains",
    "قرب من بيشة": "Close to Bisha",
    "سهول مفتوحة من أبرز ما يميز سراة عبيدة لزوارها.": "Open plains is among what makes Sarat Abidah distinctive for visitors.",
    "مناخ معتدل من أبرز ما يميز سراة عبيدة لزوارها.": "Mild climate is among what makes Sarat Abidah distinctive for visitors.",
    "قرب من بيشة من أبرز ما يميز سراة عبيدة لزوارها.": "Close to Bisha is among what makes Sarat Abidah distinctive for visitors.",
    "مطلات سراة عبيدة": "Sarat Abidah viewpoints",
    "تجربة من سراة عبيدة تكشف ملامح الوجهة لزوارها.": "An experience in Sarat Abidah that reveals the place to visitors.",
    "مسارات سراة عبيدة": "Sarat Abidah trails",
    "بداية هادئة مع سهول مفتوحة في سراة عبيدة.": "A calm start with Open plains in Sarat Abidah.",
    "نهاية اليوم بجلسة هادئة في أجواء سراة عبيدة.": "End the day with a quiet pause in Sarat Abidah.",
    "ظهران الجنوب | عسير": "Dhahran Al Janub | Aseer",
    "استكشف عسير / ظهران الجنوب": "Explore Aseer / Dhahran Al Janub",
    "محافظة جبلية على أطراف عسير الشرقية، تمزج بين طبيعة المرتفعات وقرب الصحراء الممتدة شرقًا.": "A mountain governorate on Aseer's eastern edge, blending highland nature with the desert stretching further east.",
    "خطط لزيارتك لظهران الجنوب": "Plan your visit to Dhahran Al Janub",
    "استكشف تجارب ظهران الجنوب": "Explore Dhahran Al Janub experiences",
    "لماذا ظهران الجنوب؟": "Why Dhahran Al Janub?",
    "ثلاثة أسباب تجعل ظهران الجنوب محطة تستحق الزيارة في عسير.": "Three reasons Dhahran Al Janub is a stop worth visiting in Aseer.",
    "تجارب ظهران الجنوب": "Dhahran Al Janub experiences",
    "اختيارات من ظهران الجنوب تجمع الطبيعة والثقافة والجلسات القريبة.": "Picks from Dhahran Al Janub mixing nature, culture, and nearby gatherings.",
    "يوم في ظهران الجنوب": "A day in Dhahran Al Janub",
    "اقتراح يوم يبدأ بمشهد من ظهران الجنوب ويمر بمعالمها وينتهي بجلسة هادئة.": "A suggested day that starts with a scene from Dhahran Al Janub, moves through its landmarks, and ends quietly.",
    "بالقرب من ظهران الجنوب": "Near Dhahran Al Janub",
    "وجهات قريبة تكمل رحلتك من ظهران الجنوب إلى محيطها.": "Nearby places that extend your trip from Dhahran Al Janub outward.",
    "ابدأ رحلتك إلى ظهران الجنوب": "Start your journey to Dhahran Al Janub",
    "جهّز خطتك واكتشف ظهران الجنوب بين مرتفعات حدودية بين الجبل والصحراء.": "Prepare your plan and discover Dhahran Al Janub — Border highlands between mountain and desert.",
    "ارتفاع 2,000 م": "Elevation 2,000 m",
    "مرتفعات هادئة": "Quiet highlands",
    "طبيعة متنوعة": "Varied nature",
    "مرتفعات هادئة من أبرز ما يميز ظهران الجنوب لزوارها.": "Quiet highlands is among what makes Dhahran Al Janub distinctive for visitors.",
    "موقع حدودي": "A border setting",
    "موقع حدودي من أبرز ما يميز ظهران الجنوب لزوارها.": "A border setting is among what makes Dhahran Al Janub distinctive for visitors.",
    "طبيعة متنوعة من أبرز ما يميز ظهران الجنوب لزوارها.": "Varied nature is among what makes Dhahran Al Janub distinctive for visitors.",
    "مطلات ظهران الجنوب": "Dhahran Al Janub viewpoints",
    "تجربة من ظهران الجنوب تكشف ملامح الوجهة لزوارها.": "An experience in Dhahran Al Janub that reveals the place to visitors.",
    "مسارات ظهران الجنوب": "Dhahran Al Janub trails",
    "بداية هادئة مع مرتفعات هادئة في ظهران الجنوب.": "A calm start with Quiet highlands in Dhahran Al Janub.",
    "منتصف يوم يمر على موقع حدودي.": "Midday around A border setting.",
    "نهاية اليوم بجلسة هادئة في أجواء ظهران الجنوب.": "End the day with a quiet pause in Dhahran Al Janub.",
    "تنومة تُعرف بـ«شلالات موسمية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Tanomah is known for seasonal waterfalls, giving visitors a distinctive sense of place.",
    "تنومة تُعرف بـ«مدرجات زراعية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Tanomah is known for farming terraces, giving visitors a distinctive sense of place.",
    "تنومة تُعرف بـ«أجواء باردة صيفًا»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Tanomah is known for cool summer air, giving visitors a distinctive sense of place.",
    "محطة في تنومة تناسب الزوار الباحثين عن مطلات تنومة.": "A stop in Tanomah for visitors looking for tanomah viewpoints.",
    "محطة في تنومة تناسب الزوار الباحثين عن مسارات تنومة.": "A stop in Tanomah for visitors looking for tanomah trails.",
    "محطة في تنومة تناسب الزوار الباحثين عن شلالات موسمية.": "A stop in Tanomah for visitors looking for seasonal waterfalls.",
    "محطة في تنومة تناسب الزوار الباحثين عن مدرجات زراعية.": "A stop in Tanomah for visitors looking for farming terraces.",
    "محطة في تنومة تناسب الزوار الباحثين عن أجواء باردة صيفًا.": "A stop in Tanomah for visitors looking for cool summer air.",
    "محطة في تنومة تناسب الزوار الباحثين عن يوم في تنومة.": "A stop in Tanomah for visitors looking for a day in tanomah.",
    "النماص تُعرف بـ«غابات عرعر»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Namas is known for juniper forests, giving visitors a distinctive sense of place.",
    "النماص تُعرف بـ«مناخ معتدل»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Namas is known for mild climate, giving visitors a distinctive sense of place.",
    "النماص تُعرف بـ«منتزهات طبيعية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Namas is known for nature parks, giving visitors a distinctive sense of place.",
    "محطة في النماص تناسب الزوار الباحثين عن مطلات النماص.": "A stop in Al Namas for visitors looking for al namas viewpoints.",
    "محطة في النماص تناسب الزوار الباحثين عن مسارات النماص.": "A stop in Al Namas for visitors looking for al namas trails.",
    "محطة في النماص تناسب الزوار الباحثين عن غابات عرعر.": "A stop in Al Namas for visitors looking for juniper forests.",
    "محطة في النماص تناسب الزوار الباحثين عن مناخ معتدل.": "A stop in Al Namas for visitors looking for mild climate.",
    "محطة في النماص تناسب الزوار الباحثين عن منتزهات طبيعية.": "A stop in Al Namas for visitors looking for nature parks.",
    "محطة في النماص تناسب الزوار الباحثين عن يوم في النماص.": "A stop in Al Namas for visitors looking for a day in al namas.",
    "بللسمر تُعرف بـ«غطاء نباتي كثيف»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Balasmer is known for dense vegetation, giving visitors a distinctive sense of place.",
    "بللسمر تُعرف بـ«ضباب دائم»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Balasmer is known for year-round mist, giving visitors a distinctive sense of place.",
    "بللسمر تُعرف بـ«مسارات هادئة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Balasmer is known for quiet trails, giving visitors a distinctive sense of place.",
    "محطة في بللسمر تناسب الزوار الباحثين عن مطلات بللسمر.": "A stop in Balasmer for visitors looking for balasmer viewpoints.",
    "محطة في بللسمر تناسب الزوار الباحثين عن مسارات بللسمر.": "A stop in Balasmer for visitors looking for balasmer trails.",
    "محطة في بللسمر تناسب الزوار الباحثين عن غطاء نباتي كثيف.": "A stop in Balasmer for visitors looking for dense vegetation.",
    "محطة في بللسمر تناسب الزوار الباحثين عن ضباب دائم.": "A stop in Balasmer for visitors looking for year-round mist.",
    "محطة في بللسمر تناسب الزوار الباحثين عن مسارات هادئة.": "A stop in Balasmer for visitors looking for quiet trails.",
    "محطة في بللسمر تناسب الزوار الباحثين عن يوم في بللسمر.": "A stop in Balasmer for visitors looking for a day in balasmer.",
    "بللحمر تُعرف بـ«قرى تراثية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Balhamer is known for heritage villages, giving visitors a distinctive sense of place.",
    "بللحمر تُعرف بـ«مدرجات زراعية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Balhamer is known for farming terraces, giving visitors a distinctive sense of place.",
    "بللحمر تُعرف بـ«حرف يدوية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Balhamer is known for handcrafts, giving visitors a distinctive sense of place.",
    "محطة في بللحمر تناسب الزوار الباحثين عن مطلات بللحمر.": "A stop in Balhamer for visitors looking for balhamer viewpoints.",
    "محطة في بللحمر تناسب الزوار الباحثين عن مسارات بللحمر.": "A stop in Balhamer for visitors looking for balhamer trails.",
    "محطة في بللحمر تناسب الزوار الباحثين عن قرى تراثية.": "A stop in Balhamer for visitors looking for heritage villages.",
    "محطة في بللحمر تناسب الزوار الباحثين عن مدرجات زراعية.": "A stop in Balhamer for visitors looking for farming terraces.",
    "محطة في بللحمر تناسب الزوار الباحثين عن حرف يدوية.": "A stop in Balhamer for visitors looking for handcrafts.",
    "محطة في بللحمر تناسب الزوار الباحثين عن يوم في بللحمر.": "A stop in Balhamer for visitors looking for a day in balhamer.",
    "السودة تُعرف بـ«أعلى قمة بالمملكة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Soudah is known for the kingdom's highest peak, giving visitors a distinctive sense of place.",
    "السودة تُعرف بـ«تلفريك السودة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Soudah is known for the soudah cable car, giving visitors a distinctive sense of place.",
    "السودة تُعرف بـ«غابات كثيفة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Soudah is known for dense forests, giving visitors a distinctive sense of place.",
    "محطة في السودة تناسب الزوار الباحثين عن مطلات السودة.": "A stop in Al Soudah for visitors looking for al soudah viewpoints.",
    "محطة في السودة تناسب الزوار الباحثين عن مسارات السودة.": "A stop in Al Soudah for visitors looking for al soudah trails.",
    "محطة في السودة تناسب الزوار الباحثين عن أعلى قمة بالمملكة.": "A stop in Al Soudah for visitors looking for the kingdom's highest peak.",
    "محطة في السودة تناسب الزوار الباحثين عن تلفريك السودة.": "A stop in Al Soudah for visitors looking for the soudah cable car.",
    "محطة في السودة تناسب الزوار الباحثين عن غابات كثيفة.": "A stop in Al Soudah for visitors looking for dense forests.",
    "محطة في السودة تناسب الزوار الباحثين عن يوم في السودة.": "A stop in Al Soudah for visitors looking for a day in al soudah.",
    "رجال ألمع تُعرف بـ«قصور حجرية شاهقة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Rijal Almaa is known for towering stone castles, giving visitors a distinctive sense of place.",
    "رجال ألمع تُعرف بـ«فن القط العسيري»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Rijal Almaa is known for al-qatt al-asiri art, giving visitors a distinctive sense of place.",
    "رجال ألمع تُعرف بـ«متحف مفتوح»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Rijal Almaa is known for an open-air museum, giving visitors a distinctive sense of place.",
    "محطة في رجال ألمع تناسب الزوار الباحثين عن مطلات رجال ألمع.": "A stop in Rijal Almaa for visitors looking for rijal almaa viewpoints.",
    "محطة في رجال ألمع تناسب الزوار الباحثين عن مسارات رجال ألمع.": "A stop in Rijal Almaa for visitors looking for rijal almaa trails.",
    "محطة في رجال ألمع تناسب الزوار الباحثين عن قصور حجرية شاهقة.": "A stop in Rijal Almaa for visitors looking for towering stone castles.",
    "محطة في رجال ألمع تناسب الزوار الباحثين عن فن القط العسيري.": "A stop in Rijal Almaa for visitors looking for al-qatt al-asiri art.",
    "محطة في رجال ألمع تناسب الزوار الباحثين عن متحف مفتوح.": "A stop in Rijal Almaa for visitors looking for an open-air museum.",
    "محطة في رجال ألمع تناسب الزوار الباحثين عن يوم في رجال ألمع.": "A stop in Rijal Almaa for visitors looking for a day in rijal almaa.",
    "المجاردة تُعرف بـ«سفوح متدرجة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Majardah is known for terraced slopes, giving visitors a distinctive sense of place.",
    "المجاردة تُعرف بـ«مزارع محلية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Majardah is known for local farms, giving visitors a distinctive sense of place.",
    "المجاردة تُعرف بـ«طقس معتدل»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Majardah is known for mild weather, giving visitors a distinctive sense of place.",
    "محطة في المجاردة تناسب الزوار الباحثين عن مطلات المجاردة.": "A stop in Al Majardah for visitors looking for al majardah viewpoints.",
    "محطة في المجاردة تناسب الزوار الباحثين عن مسارات المجاردة.": "A stop in Al Majardah for visitors looking for al majardah trails.",
    "محطة في المجاردة تناسب الزوار الباحثين عن سفوح متدرجة.": "A stop in Al Majardah for visitors looking for terraced slopes.",
    "محطة في المجاردة تناسب الزوار الباحثين عن مزارع محلية.": "A stop in Al Majardah for visitors looking for local farms.",
    "محطة في المجاردة تناسب الزوار الباحثين عن طقس معتدل.": "A stop in Al Majardah for visitors looking for mild weather.",
    "محطة في المجاردة تناسب الزوار الباحثين عن يوم في المجاردة.": "A stop in Al Majardah for visitors looking for a day in al majardah.",
    "بارق تُعرف بـ«أودية خصبة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Bariq is known for fertile valleys, giving visitors a distinctive sense of place.",
    "بارق تُعرف بـ«مزارع نخيل»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Bariq is known for palm farms, giving visitors a distinctive sense of place.",
    "بارق تُعرف بـ«مناظر جبلية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Bariq is known for mountain views, giving visitors a distinctive sense of place.",
    "محطة في بارق تناسب الزوار الباحثين عن مطلات بارق.": "A stop in Bariq for visitors looking for bariq viewpoints.",
    "محطة في بارق تناسب الزوار الباحثين عن مسارات بارق.": "A stop in Bariq for visitors looking for bariq trails.",
    "محطة في بارق تناسب الزوار الباحثين عن أودية خصبة.": "A stop in Bariq for visitors looking for fertile valleys.",
    "محطة في بارق تناسب الزوار الباحثين عن مزارع نخيل.": "A stop in Bariq for visitors looking for palm farms.",
    "محطة في بارق تناسب الزوار الباحثين عن مناظر جبلية.": "A stop in Bariq for visitors looking for mountain views.",
    "محطة في بارق تناسب الزوار الباحثين عن يوم في بارق.": "A stop in Bariq for visitors looking for a day in bariq.",
    "محايل عسير تُعرف بـ«مزارع استوائية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Muhayil Aseer is known for tropical farms, giving visitors a distinctive sense of place.",
    "محايل عسير تُعرف بـ«طقس دافئ»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Muhayil Aseer is known for warm weather, giving visitors a distinctive sense of place.",
    "محايل عسير تُعرف بـ«أسواق شعبية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Muhayil Aseer is known for traditional markets, giving visitors a distinctive sense of place.",
    "محطة في محايل عسير تناسب الزوار الباحثين عن مطلات محايل عسير.": "A stop in Muhayil Aseer for visitors looking for muhayil aseer viewpoints.",
    "محطة في محايل عسير تناسب الزوار الباحثين عن مسارات محايل عسير.": "A stop in Muhayil Aseer for visitors looking for muhayil aseer trails.",
    "محطة في محايل عسير تناسب الزوار الباحثين عن مزارع استوائية.": "A stop in Muhayil Aseer for visitors looking for tropical farms.",
    "محطة في محايل عسير تناسب الزوار الباحثين عن طقس دافئ.": "A stop in Muhayil Aseer for visitors looking for warm weather.",
    "محطة في محايل عسير تناسب الزوار الباحثين عن أسواق شعبية.": "A stop in Muhayil Aseer for visitors looking for traditional markets.",
    "محطة في محايل عسير تناسب الزوار الباحثين عن يوم في محايل عسير.": "A stop in Muhayil Aseer for visitors looking for a day in muhayil aseer.",
    "البرك تُعرف بـ«شواطئ رملية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Birk is known for sandy beaches, giving visitors a distinctive sense of place.",
    "البرك تُعرف بـ«تراث بحري»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Birk is known for maritime heritage, giving visitors a distinctive sense of place.",
    "البرك تُعرف بـ«أسواق سمك محلية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Birk is known for local fish markets, giving visitors a distinctive sense of place.",
    "محطة في البرك تناسب الزوار الباحثين عن مطلات البرك.": "A stop in Al Birk for visitors looking for al birk viewpoints.",
    "محطة في البرك تناسب الزوار الباحثين عن مسارات البرك.": "A stop in Al Birk for visitors looking for al birk trails.",
    "محطة في البرك تناسب الزوار الباحثين عن شواطئ رملية.": "A stop in Al Birk for visitors looking for sandy beaches.",
    "محطة في البرك تناسب الزوار الباحثين عن تراث بحري.": "A stop in Al Birk for visitors looking for maritime heritage.",
    "محطة في البرك تناسب الزوار الباحثين عن أسواق سمك محلية.": "A stop in Al Birk for visitors looking for local fish markets.",
    "محطة في البرك تناسب الزوار الباحثين عن يوم في البرك.": "A stop in Al Birk for visitors looking for a day in al birk.",
    "القحمة تُعرف بـ«قرب من الشاطئ»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Qahmah is known for close to the shore, giving visitors a distinctive sense of place.",
    "القحمة تُعرف بـ«مزارع نخيل»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Qahmah is known for palm farms, giving visitors a distinctive sense of place.",
    "القحمة تُعرف بـ«طريق ساحلي هادئ»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Al Qahmah is known for a quiet coastal road, giving visitors a distinctive sense of place.",
    "محطة في القحمة تناسب الزوار الباحثين عن مطلات القحمة.": "A stop in Al Qahmah for visitors looking for al qahmah viewpoints.",
    "محطة في القحمة تناسب الزوار الباحثين عن مسارات القحمة.": "A stop in Al Qahmah for visitors looking for al qahmah trails.",
    "محطة في القحمة تناسب الزوار الباحثين عن قرب من الشاطئ.": "A stop in Al Qahmah for visitors looking for close to the shore.",
    "محطة في القحمة تناسب الزوار الباحثين عن مزارع نخيل.": "A stop in Al Qahmah for visitors looking for palm farms.",
    "محطة في القحمة تناسب الزوار الباحثين عن طريق ساحلي هادئ.": "A stop in Al Qahmah for visitors looking for a quiet coastal road.",
    "محطة في القحمة تناسب الزوار الباحثين عن يوم في القحمة.": "A stop in Al Qahmah for visitors looking for a day in al qahmah.",
    "بيشة تُعرف بـ«مزارع ممتدة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Bisha is known for sprawling farms, giving visitors a distinctive sense of place.",
    "بيشة تُعرف بـ«أجواء صحراوية»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Bisha is known for desert atmosphere, giving visitors a distinctive sense of place.",
    "بيشة تُعرف بـ«سماء صافية ليلاً»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Bisha is known for clear night skies, giving visitors a distinctive sense of place.",
    "محطة في بيشة تناسب الزوار الباحثين عن مطلات بيشة.": "A stop in Bisha for visitors looking for bisha viewpoints.",
    "محطة في بيشة تناسب الزوار الباحثين عن مسارات بيشة.": "A stop in Bisha for visitors looking for bisha trails.",
    "محطة في بيشة تناسب الزوار الباحثين عن مزارع ممتدة.": "A stop in Bisha for visitors looking for sprawling farms.",
    "محطة في بيشة تناسب الزوار الباحثين عن أجواء صحراوية.": "A stop in Bisha for visitors looking for desert atmosphere.",
    "محطة في بيشة تناسب الزوار الباحثين عن سماء صافية ليلاً.": "A stop in Bisha for visitors looking for clear night skies.",
    "محطة في بيشة تناسب الزوار الباحثين عن يوم في بيشة.": "A stop in Bisha for visitors looking for a day in bisha.",
    "سراة عبيدة تُعرف بـ«سهول مفتوحة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Sarat Abidah is known for open plains, giving visitors a distinctive sense of place.",
    "سراة عبيدة تُعرف بـ«مناخ معتدل»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Sarat Abidah is known for mild climate, giving visitors a distinctive sense of place.",
    "سراة عبيدة تُعرف بـ«قرب من بيشة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Sarat Abidah is known for close to bisha, giving visitors a distinctive sense of place.",
    "محطة في سراة عبيدة تناسب الزوار الباحثين عن مطلات سراة عبيدة.": "A stop in Sarat Abidah for visitors looking for sarat abidah viewpoints.",
    "محطة في سراة عبيدة تناسب الزوار الباحثين عن مسارات سراة عبيدة.": "A stop in Sarat Abidah for visitors looking for sarat abidah trails.",
    "محطة في سراة عبيدة تناسب الزوار الباحثين عن سهول مفتوحة.": "A stop in Sarat Abidah for visitors looking for open plains.",
    "محطة في سراة عبيدة تناسب الزوار الباحثين عن مناخ معتدل.": "A stop in Sarat Abidah for visitors looking for mild climate.",
    "محطة في سراة عبيدة تناسب الزوار الباحثين عن قرب من بيشة.": "A stop in Sarat Abidah for visitors looking for close to bisha.",
    "محطة في سراة عبيدة تناسب الزوار الباحثين عن يوم في سراة عبيدة.": "A stop in Sarat Abidah for visitors looking for a day in sarat abidah.",
    "ظهران الجنوب تُعرف بـ«مرتفعات هادئة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Dhahran Al Janub is known for quiet highlands, giving visitors a distinctive sense of place.",
    "ظهران الجنوب تُعرف بـ«موقع حدودي»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Dhahran Al Janub is known for a border setting, giving visitors a distinctive sense of place.",
    "ظهران الجنوب تُعرف بـ«طبيعة متنوعة»، وهذا ما يمنح الزائر طابعًا مميزًا للمكان.": "Dhahran Al Janub is known for varied nature, giving visitors a distinctive sense of place.",
    "محطة في ظهران الجنوب تناسب الزوار الباحثين عن مطلات ظهران الجنوب.": "A stop in Dhahran Al Janub for visitors looking for dhahran al janub viewpoints.",
    "محطة في ظهران الجنوب تناسب الزوار الباحثين عن مسارات ظهران الجنوب.": "A stop in Dhahran Al Janub for visitors looking for dhahran al janub trails.",
    "محطة في ظهران الجنوب تناسب الزوار الباحثين عن مرتفعات هادئة.": "A stop in Dhahran Al Janub for visitors looking for quiet highlands.",
    "محطة في ظهران الجنوب تناسب الزوار الباحثين عن موقع حدودي.": "A stop in Dhahran Al Janub for visitors looking for a border setting.",
    "محطة في ظهران الجنوب تناسب الزوار الباحثين عن طبيعة متنوعة.": "A stop in Dhahran Al Janub for visitors looking for varied nature.",
    "محطة في ظهران الجنوب تناسب الزوار الباحثين عن يوم في ظهران الجنوب.": "A stop in Dhahran Al Janub for visitors looking for a day in dhahran al janub.",
  };

  function applyPhrases(lang) {
    const arToEn = UI_PHRASES;
    const enToAr = {};
    Object.entries(arToEn).forEach(([ar, en]) => {
      if (enToAr[en] == null) enToAr[en] = ar;
    });
    const map = lang === "en" ? arToEn : enToAr;
    const skipTags = new Set(["SCRIPT", "STYLE", "TEXTAREA", "SVG", "NOSCRIPT"]);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || skipTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest("[data-i18n], [data-i18n-html], .logo-text, .site-header, .site-footer")) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const trimmed = node.nodeValue.trim();
      if (map[trimmed]) node.nodeValue = node.nodeValue.replace(trimmed, map[trimmed]);
    });
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((el) => {
      const ph = el.getAttribute("placeholder");
      if (map[ph]) el.setAttribute("placeholder", map[ph]);
    });
    document.querySelectorAll("input[value], textarea").forEach((el) => {
      if (el.closest("[data-i18n], .site-header, .site-footer")) return;
      const val = el.value;
      if (map[val]) el.value = map[val];
    });
    document.querySelectorAll("img[alt]").forEach((el) => {
      if (el.closest(".site-header, .site-footer")) return;
      const alt = el.getAttribute("alt");
      if (map[alt]) el.setAttribute("alt", map[alt]);
    });
    document.querySelectorAll("[aria-label]").forEach((el) => {
      if (el.closest("[data-i18n-aria], .site-header, .site-footer")) return;
      const label = el.getAttribute("aria-label");
      if (map[label]) el.setAttribute("aria-label", map[label]);
    });
    const pageTitle = document.title.trim();
    if (map[pageTitle]) document.title = map[pageTitle];
  }

  function refreshMega(lang) {
    document.querySelectorAll(".mega-menu, .mobile-mega").forEach((menu) => {
      menu.innerHTML = megaColumns(lang);
    });
  }

  function updateSuggestedRoute(lang) {
    const card = document.querySelector("[data-suggested-route]");
    if (!card) return;
    const days = document.querySelector('[data-trip="days"]');
    const group = document.querySelector('[data-trip="group"]');
    const interest = document.querySelector('[data-trip="interests"]');
    const budget = document.querySelector('[data-trip="budget"]');
    if (!days || !group || !interest || !budget) return;
    const line1 = [optLabel(days), optLabel(group), optLabel(interest), optLabel(budget)].join(lang === "ar" ? " — " : " — ");
    const stopsByInterest = {
      nature: [
        { href: "abha.html", img: "assets/img/peaks/abha.jpg", ar: "أبها", en: "Abha" },
        { href: "rijal-alma.html", img: "assets/img/heritage/rijalalma.jpg", ar: "رجال ألمع", en: "Rijal Almaa" },
        { href: "tanomah.html", img: "assets/img/peaks/tanomah.jpg", ar: "تنومة", en: "Tanomah" },
      ],
      adventure: [
        { href: "soudah.html", img: "assets/img/peaks/soudah.jpg", ar: "السودة", en: "Al Soudah" },
        { href: "tanomah.html", img: "assets/img/peaks/tanomah.jpg", ar: "تنومة", en: "Tanomah" },
        { href: "al-namas.html", img: "assets/img/peaks/alnamas.jpg", ar: "النماص", en: "Al Namas" },
      ],
      culture: [
        { href: "abha.html", img: "assets/img/peaks/abha.jpg", ar: "أبها", en: "Abha" },
        { href: "rijal-alma.html", img: "assets/img/heritage/rijalalma.jpg", ar: "رجال ألمع", en: "Rijal Almaa" },
        { href: "ballahmar.html", img: "assets/img/destinations/balhamer/hero.jpg", ar: "بللحمر", en: "Ballahmar" },
      ],
    };
    const stops = stopsByInterest[interest.value] || stopsByInterest.nature;
    const arrow = lang === "ar" ? " ← " : " → ";
    const line2 = stops.map((s) => s[lang] || s.ar).join(arrow);
    const p = card.querySelector("[data-route-summary]");
    const path = card.querySelector("[data-route-path]");
    if (p) p.textContent = line1;
    if (path) path.textContent = line2;
    const thumb = card.querySelector("img");
    if (thumb && stops[0]) thumb.src = stops[0].img;

    const dayCards = document.querySelectorAll("[data-trip-day]");
    dayCards.forEach((dayEl, i) => {
      const stop = stops[i];
      if (!stop) return;
      dayEl.setAttribute("href", stop.href);
      const nameEl = dayEl.querySelector("[data-trip-day-name]");
      const imgEl = dayEl.querySelector("[data-trip-day-img]");
      if (nameEl) nameEl.textContent = stop[lang] || stop.ar;
      if (imgEl) imgEl.src = stop.img;
    });
  }

  function optLabel(select) {
    return select.options[select.selectedIndex]?.text || select.value;
  }

  function destHref(id) {
    return (
      Object.keys(DEST_FILES).find((file) => DEST_FILES[file] === id) || "peaks.html"
    );
  }

  function renderDestination(lang) {
    const id = document.body.dataset.destination;
    if (!id || !window.ASEER_DATA || !window.ASEER_DATA.destinations[id]) return;
    const dest = window.ASEER_DATA.destinations[id];
    const regions = window.ASEER_DATA.regions;
    const root = document.getElementById("dest-root");
    if (!root) return;
    const regionName = regions[dest.region] ? regions[dest.region][lang] : dest.region;
    const img = DEST_IMAGES[dest.region] || DEST_IMAGES.peaks;
    document.title = dest.name[lang] + " | Aseer";
    const nearby = (dest.nearby || [])
      .map((nid) => ({ id: nid, place: window.ASEER_DATA.destinations[nid] }))
      .filter((item) => item.place);
    root.innerHTML = `
      <section class="page-hero dest-hero">
        <img class="page-hero-media" src="${img}" alt="">
        <div class="copy">
          <p class="crumb">${t("nav_explore", lang)} / ${regionName} / ${dest.name[lang]}</p>
          <h1>${dest.name[lang]}</h1>
          <p>${dest.tagline[lang]}</p>
          <div class="hero-actions">
            <span class="stat-pill">${dest.elevation} ${t("d_meters", lang)}</span>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container dest-layout">
          <p class="dest-desc">${dest.desc[lang]}</p>
          <div class="dest-block">
            <p class="eyebrow">${t("d_why_eyebrow", lang)}</p>
            <h2>${t("d_why_title", lang)}</h2>
            <div class="card-grid dest-why">
              ${dest.why
                .map(
                  (item) => `<article class="card"><div class="body"><h3>${item[lang]}</h3></div></article>`
                )
                .join("")}
            </div>
          </div>
          ${
            nearby.length
              ? `<div class="dest-block">
            <p class="eyebrow">${t("d_nearby_label", lang)}</p>
            <h2>${t("d_nearby_title", lang)}</h2>
            <div class="card-grid">
              ${nearby
                .map(({ id, place }) => `<a class="card dest-near" href="${destHref(id)}"><img class="thumb" src="${DEST_IMAGES[place.region]}" alt=""><div class="body"><h3>${place.name[lang]}</h3><p>${place.tagline[lang]}</p></div></a>`)
                .join("")}
            </div>
          </div>`
              : ""
          }
          <div class="dest-cta">
            <a class="btn btn-gold" href="experiences.html">${t("d_cta_exp", lang)}</a>
            <a class="btn btn-green" href="plan.html">${t("d_cta_plan", lang)}</a>
          </div>
        </div>
      </section>`;
  }

  function bindChrome() {
    const mega = document.querySelector("[data-mega-toggle]");
    const megaItem = document.querySelector(".has-mega");
    const menuBtn = document.querySelector("[data-open-menu]");
    const mobile = document.querySelector("[data-mobile-panel]");
    const searchBtn = document.querySelector("[data-open-search]");
    const overlay = document.querySelector("[data-search-overlay]");

    function closeMega() {
      megaItem?.classList.remove("is-open");
      mega?.setAttribute("aria-expanded", "false");
    }

    mega?.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = megaItem.classList.toggle("is-open");
      mega.setAttribute("aria-expanded", String(open));
    });

    megaItem?.addEventListener("mouseenter", () => {
      if (window.innerWidth > 1100) {
        megaItem.classList.add("is-open");
        mega?.setAttribute("aria-expanded", "true");
      }
    });

    megaItem?.addEventListener("mouseleave", () => {
      if (window.innerWidth > 1100) closeMega();
    });

    /* Keep menu open while pointer is over the dropdown panel. */
    document.querySelector(".mega-menu")?.addEventListener("mouseenter", () => {
      if (window.innerWidth > 1100) {
        megaItem?.classList.add("is-open");
        mega?.setAttribute("aria-expanded", "true");
      }
    });

    document.addEventListener("click", (e) => {
      if (!megaItem?.contains(e.target)) closeMega();
      if (overlay && !e.target.closest("[data-open-search]") && !e.target.closest("[data-search-overlay] form")) {
        overlay.classList.remove("is-open");
      }
      if (mobile && !e.target.closest("[data-open-menu]") && !e.target.closest("[data-mobile-panel]")) {
        mobile?.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      }
    });

    document.querySelectorAll(".mega-menu a, .mobile-mega a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.stopPropagation();
        closeMega();
        mobile?.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      });
    });

    menuBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      mobile?.classList.toggle("is-open");
      document.body.classList.toggle("nav-open");
    });

    document.querySelector("[data-mobile-mega]")?.addEventListener("click", () => {
      document.querySelector(".mobile-mega")?.classList.toggle("is-open");
    });

    searchBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      overlay?.classList.add("is-open");
      overlay?.querySelector("input")?.focus();
    });

    document.querySelectorAll(".lang-switch").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = getLang() === "ar" ? "en" : "ar";
        setLang(next);
        applyDocumentLang(next);
        applyI18n(next);
      });
    });

    document.querySelector("[data-newsletter]")?.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(t("footer_subscribed"));
      e.target.reset();
    });

    bindHeroNavScroll();
  }

  function bindHeroNavScroll() {
    const header = document.querySelector(".site-header.is-hero");
    if (!header) return;
    const hero = document.querySelector(
      ".listing-hero, .hero:not(.page-hero), .hero-real, .rt-hero, .rd-hero, .xd-hero, .sd-gallery"
    );
    const sync = () => {
      const navH = header.offsetHeight;
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      header.classList.toggle("is-scrolled", heroBottom <= navH);
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
  }

  const FILTER_ALIASES = {
    العوائل: ["العوائل", "عائلة", "عائلي"],
    المطاعم: ["المطاعم", "مذاق"],
    الثقافة: ["الثقافة", "تراث"],
    المسارات: ["المسارات", "مغامرة"],
    الجلسات: ["الجلسات", "هدوء"],
    المواسم: ["المواسم", "الربيع", "الصيف", "الخريف", "الشتاء"],
  };

  const SAVE_KEY = "aseer_saved";

  const DETAIL_PAGES = {
    "experience-details.html": {
      crumb: "تفاصيل التجربة",
      fallback: "clouds",
      items: {
        clouds: {
          title: "جلسة فوق السحاب",
          sub: "السودة - منتزه السودة · ★ 4.9",
          img: "assets/img/exp-featured.png",
          desc: "استمتع بجلسة هادئة على ارتفاع فوق الغيم، مع مشروب دافئ وإطلالة تمنحك إحساس عسير الحقيقي.",
          cta: "احجز تجربتك الآن",
          href: "checkout.html",
        },
        sunrise: {
          title: "جولة شروق الشمس",
          sub: "السودة · متوسط · 3 ساعات",
          img: "assets/img/exp-card-sunrise.png",
          desc: "تصوير",
          cta: "احجز تجربتك الآن",
          href: "checkout.html",
        },
        dinner: {
          title: "تجربة العشاء الجبلي",
          sub: "أبها · سهل · ساعتان",
          img: "assets/img/exp-card-dinner.png",
          desc: "مذاق",
          cta: "احجز تجربتك الآن",
          href: "checkout.html",
        },
        viewpoint: {
          title: "جلسة المطل",
          sub: "أبها · سهل · ساعتان",
          img: "assets/img/exp-card-viewpoint.png",
          desc: "جلسات",
          cta: "احجز تجربتك الآن",
          href: "checkout.html",
        },
        waterfalls: {
          title: "شلالات الدهناء",
          sub: "تنومة · سهل · 3 ساعات",
          img: "assets/img/exp-card-waterfalls.png",
          desc: "طبيعة",
          cta: "احجز تجربتك الآن",
          href: "checkout.html",
        },
        heritage: {
          title: "قرية رجال ألمع التراثية",
          sub: "رجال ألمع · سهل · ساعتان",
          img: "assets/img/exp-card-heritage-village.png",
          desc: "ثقافة",
          cta: "احجز تجربتك الآن",
          href: "checkout.html",
        },
        trail: {
          title: "مسار رجال ألمع الجبلي",
          sub: "رجال ألمع · سهل · 4 ساعات",
          img: "assets/img/exp-card-mountain-trail.png",
          desc: "مغامرة",
          cta: "احجز تجربتك الآن",
          href: "checkout.html",
        },
      },
    },
    "route-details.html": {
      crumb: "تفاصيل المسار",
      fallback: "cloud",
      items: {
        cloud: {
          title: "يوم فوق الغيم",
          sub: "يوم واحد · سهل",
          img: "assets/img/exp-route-cloud.png",
          desc: "رحلة يوم واحد في السودة مع جلسة ومناظر لا تنسى.",
          cta: "اعتمد هذه الرحلة",
          href: "checkout.html",
        },
        peaks3: {
          title: "٣ أيام بين القمم",
          sub: "٣ أيام · متوسط",
          img: "assets/img/exp-route-3days.png",
          desc: "اكتشف القرى التراثية والمسارات والجلسات في قمم عسير.",
          cta: "اعتمد هذه الرحلة",
          href: "checkout.html",
        },
        family: {
          title: "عطلة عائلية",
          sub: "يومان · سهل",
          img: "assets/img/exp-route-family.png",
          desc: "أنشطة هادئة، جلسات، حدائق، طبيعة ومطاعم محلية.",
          cta: "اعتمد هذه الرحلة",
          href: "checkout.html",
        },
      },
    },
    "event-details.html": {
      crumb: "تفاصيل الفعالية",
      fallback: "nights",
      items: {
        nights: {
          title: "ليالي أبها الثقافية",
          sub: "أبها · موسيقى وفنون · 22 يونيو",
          img: "assets/img/events/week-1.png",
          desc: "أبها · موسيقى وفنون · ثقافة · 7:30 م",
          cta: "كل الفعاليات",
          href: "events.html",
        },
        crafts: {
          title: "سوق الحرف الجبلية",
          sub: "رجال ألمع · تراث وأسواق · 23 يونيو",
          img: "assets/img/events/week-2.png",
          desc: "رجال ألمع · تراث وأسواق · أسواق · 5:30 م",
          cta: "كل الفعاليات",
          href: "events.html",
        },
        sunset: {
          title: "مسار الغروب",
          sub: "السودة · طبيعة ومشي · 24 يونيو",
          img: "assets/img/events/week-3.png",
          desc: "السودة · طبيعة ومشي",
          cta: "كل الفعاليات",
          href: "events.html",
        },
        rain: {
          title: "جلسات المطر",
          sub: "تنومة · جلسات خارجية · 24 يونيو",
          img: "assets/img/events/week-4.png",
          desc: "تنومة · جلسات خارجية · عائلي",
          cta: "كل الفعاليات",
          href: "events.html",
        },
        village: {
          title: "مهرجان القرية",
          sub: "رجال ألمع · تراث ومأكولات شعبية · 22 - 23 يونيو",
          img: "assets/img/events/feat-1.png",
          desc: "رجال ألمع · تراث ومأكولات شعبية",
          cta: "كل الفعاليات",
          href: "events.html",
        },
        stars: {
          title: "مشاهدة النجوم",
          sub: "السودة · تجربة فلكية · 24 - 26 يونيو",
          img: "assets/img/events/feat-3.png?v=2",
          desc: "السودة · تجربة فلكية",
          cta: "كل الفعاليات",
          href: "events.html",
        },
        samar: {
          title: "جلسات سمر تنومة",
          sub: "تنومة · جلسات خارجية · عائلي · 8:00 م",
          img: "assets/img/events/week-4.png",
          desc: "تنومة · جلسات خارجية · عائلي",
          cta: "كل الفعاليات",
          href: "events.html",
        },
      },
    },
  };

  function listingSearchInput() {
    return document.querySelector("[data-listing-search], .exp-discovery-search input, .listing-filter input[type=search]");
  }

  function tagsMatch(tags, filter) {
    if (!filter || filter === "all") return true;
    const list = (tags || "").split(/\s+/).filter(Boolean);
    if (list.includes(filter)) return true;
    const aliases = FILTER_ALIASES[filter];
    return Boolean(aliases && aliases.some((alias) => list.includes(alias)));
  }

  function applyListingFilter(filter, query) {
    const items = document.querySelectorAll("[data-filter-item]");
    if (!items.length) return;
    const q = (query ?? "").trim();

    items.forEach((item) => {
      const tagOk = tagsMatch(item.dataset.tags || "", filter);
      const text = (item.textContent || "").replace(/\s+/g, " ");
      item.hidden = !(tagOk && (!q || text.includes(q)));
    });

    document.querySelectorAll("[data-filter-section]").forEach((sec) => {
      const secItems = sec.querySelectorAll("[data-filter-item]");
      const any = [...secItems].some((el) => !el.hidden);
      sec.hidden = secItems.length > 0 && !any;
    });

    const empty = document.querySelector("[data-filter-empty]");
    if (empty) {
      empty.hidden = [...items].some((el) => !el.hidden);
    }

    const chips = document.querySelector("[data-filter-chips]");
    if (chips) {
      const match = chips.querySelector(`.chip[data-filter="${CSS.escape(filter)}"]`);
      chips.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("is-active"));
      if (match) match.classList.add("is-active");
    }
  }

  function setListingFilter(filter, query, opts) {
    const input = listingSearchInput();
    const q = query ?? input?.value ?? "";
    const url = new URL(location.href);
    if (!filter || filter === "all") url.searchParams.delete("filter");
    else url.searchParams.set("filter", filter);
    if (String(q).trim()) url.searchParams.set("q", String(q).trim());
    else url.searchParams.delete("q");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
    applyListingFilter(filter || "all", q);
    const scroll = opts && opts.scroll;
    if (scroll) document.querySelector(scroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function savedIds() {
    try {
      return JSON.parse(localStorage.getItem(SAVE_KEY) || "[]");
    } catch {
      return [];
    }
  }

  function bindSaves() {
    const saved = savedIds();
    document.querySelectorAll("[data-save]").forEach((btn) => {
      btn.classList.toggle("is-loved", saved.includes(btn.dataset.save));
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const next = savedIds();
        const id = btn.dataset.save;
        const index = next.indexOf(id);
        if (index >= 0) next.splice(index, 1);
        else next.push(id);
        localStorage.setItem(SAVE_KEY, JSON.stringify(next));
        btn.classList.toggle("is-loved", next.includes(id));
      });
    });
  }

  function bindCheckoutPay() {
    const root = document.querySelector("[data-co-pay]");
    if (!root) return;
    const hidden = document.querySelector("[data-co-pay-value]");
    const cardFields = document.querySelector("[data-co-card-fields]");
    root.querySelectorAll("[data-pay]").forEach((btn) => {
      btn.addEventListener("click", () => {
        root.querySelectorAll("[data-pay]").forEach((b) => {
          b.classList.remove("is-on");
          b.setAttribute("aria-checked", "false");
        });
        btn.classList.add("is-on");
        btn.setAttribute("aria-checked", "true");
        if (hidden) hidden.value = btn.dataset.pay || "card";
        if (cardFields) {
          const show = btn.dataset.pay === "card";
          cardFields.hidden = !show;
          cardFields.querySelectorAll("input").forEach((input) => {
            input.disabled = !show;
          });
        }
      });
    });
  }

  function bindConfirmationState() {
    const failed = new URLSearchParams(location.search).get("state") === "failed";
    const ok = document.querySelector("[data-cf-success]");
    const bad = document.querySelector("[data-cf-failed]");
    if (!ok || !bad) return;
    document.body.dataset.confirm = failed ? "failed" : "success";
    ok.hidden = failed;
    bad.hidden = !failed;
    document.title = (failed ? "لم تكتمل عملية الدفع" : "تأكيد الحجز") + (getLang() === "ar" ? " | عسير" : " | Aseer");
  }

  function bindStayGallery() {
    const root = document.querySelector(".sd-gallery");
    if (!root) return;
    const main = root.querySelector("[data-sd-main]");
    const countEl = root.querySelector("[data-sd-count]");
    const thumbs = Array.from(root.querySelectorAll("[data-sd-thumb]"));
    const images = [
      "assets/img/stays/details/gallery-main.png",
      "assets/img/stays/details/gallery-1.png",
      "assets/img/stays/details/gallery-2.png",
      "assets/img/stays/details/gallery-3.png",
      "assets/img/stays/details/gallery-main.png",
      "assets/img/stays/details/gallery-1.png",
      "assets/img/stays/details/gallery-2.png",
      "assets/img/stays/details/gallery-3.png",
      "assets/img/stays/details/unit-1.png",
      "assets/img/stays/details/unit-2.png",
      "assets/img/stays/details/unit-3.png",
      "assets/img/stays/details/gallery-main.png",
    ];
    let index = 4; /* Figma counter starts near 05 / 12 */

    const pad = (n) => String(n).padStart(2, "0");
    const show = (i) => {
      index = ((i % images.length) + images.length) % images.length;
      if (main) main.src = images[index];
      if (countEl) countEl.textContent = `${pad(index + 1)} / ${pad(images.length)}`;
      thumbs.forEach((thumb, t) => {
        const on = t === index % thumbs.length;
        thumb.classList.toggle("is-active", on);
        thumb.setAttribute("aria-selected", on ? "true" : "false");
      });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const t = Number(thumb.dataset.sdThumb);
        if (Number.isFinite(t)) show(t);
      });
    });
    root.querySelector("[data-sd-prev]")?.addEventListener("click", () => show(index - 1));
    root.querySelector("[data-sd-next]")?.addEventListener("click", () => show(index + 1));
    show(index);
  }

  function bindRestaurantGallery() {
    const root = document.querySelector(".rd-hero");
    if (!root) return;
    const main = root.querySelector("[data-rd-main]");
    const countEl = root.querySelector("[data-rd-count]");
    const thumbs = Array.from(root.querySelectorAll("[data-rd-thumb]"));
    const images = [
      "assets/img/restaurants/detail-hero.png",
      "assets/img/restaurants/detail-g2.png",
      "assets/img/restaurants/detail-g3.png",
      "assets/img/restaurants/detail-g4.png",
      "assets/img/restaurants/place-1.png",
      "assets/img/restaurants/place-2.png",
      "assets/img/restaurants/place-3.png",
      "assets/img/restaurants/place-4.png",
      "assets/img/restaurants/exp-1.png",
      "assets/img/restaurants/exp-2.png",
      "assets/img/restaurants/exp-3.png",
      "assets/img/restaurants/detail-hero.png",
    ];
    let index = 1; /* Figma counter near 02 / 12 */

    const pad = (n) => String(n).padStart(2, "0");
    const show = (i) => {
      index = ((i % images.length) + images.length) % images.length;
      if (main) main.src = images[index];
      if (countEl) countEl.textContent = `${pad(index + 1)} / ${pad(images.length)}`;
      thumbs.forEach((thumb, t) => {
        const on = t === index % thumbs.length;
        thumb.classList.toggle("is-active", on);
        thumb.setAttribute("aria-selected", on ? "true" : "false");
      });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const t = Number(thumb.dataset.rdThumb);
        if (Number.isFinite(t)) show(t);
      });
    });
    root.querySelector("[data-rd-prev]")?.addEventListener("click", () => show(index - 1));
    root.querySelector("[data-rd-next]")?.addEventListener("click", () => show(index + 1));
    show(index);

    const form = document.querySelector(".rd-book__form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  function bindRouteGallery() {
    const root = document.querySelector(".rt-hero");
    if (!root) return;
    const main = root.querySelector("[data-rt-main]");
    const countEl = root.querySelector("[data-rt-count]");
    const titleEl = root.querySelector("h1");
    const subEl = root.querySelector(".rt-hero__sub");
    const crumbEl = root.querySelector(".crumb");
    const thumbs = Array.from(root.querySelectorAll("[data-rt-thumb]"));
    const slides = [
      {
        src: "assets/img/routes/hero.jpg",
        crumb: "المسارات / مسارات جبلية",
        title: "مسار قمم السودة",
        sub: "رحلة ساحرة على أعلى قمم عسير، حيث الجمال الطبيعي لا ينتهي والهواء النقي ينعشك خطوة بخطوة.",
        alt: "إطلالة مسار قمم السودة عند الغروب",
      },
      {
        src: "assets/img/routes/station-1.jpg",
        crumb: "المسار / المحطة 01",
        title: "نقطة البداية",
        sub: "بوابة الانطلاق: منطقة انتظار، لوحات إرشادية، وتعليمات السلامة قبل أول خطوة.",
        alt: "نقطة بداية مسار قمم السودة",
      },
      {
        src: "assets/img/routes/station-2.jpg",
        crumb: "المسار / المحطة 02",
        title: "قرية أعلى السودة",
        sub: "محطة تراثية على الارتفاع: استراحة قصيرة، إطلالة على المدرجات، ومرافق أساسية للمتنزهين.",
        alt: "قرية أعلى السودة على المسار",
      },
      {
        src: "assets/img/routes/station-3.jpg",
        crumb: "المسار / المحطة 03",
        title: "ممر الضباب",
        sub: "ممر جبلي يلفّه الضباب معظم أيام السنة — محطة مثالية للتصوير والتقاط اللحظة.",
        alt: "ممر الضباب في مسار السودة",
      },
      {
        src: "assets/img/routes/station-4.jpg",
        crumb: "المسار / المحطة 04",
        title: "قمة المجرة",
        sub: "منصة طبيعية مفتوحة على سلسلة الجبال المحيطة، قبل الصعود الأخير نحو القمة.",
        alt: "قمة المجرة على مسار السودة",
      },
      {
        src: "assets/img/routes/station-5.jpg",
        crumb: "المسار / المحطة 05",
        title: "قمة السودة",
        sub: "نهاية المسار على أعلى نقطة في عسير — بانوراما واسعة فوق الضباب والقمم.",
        alt: "قمة السودة نهاية المسار",
      },
    ];
    let index = 0;

    const pad = (n) => String(n).padStart(2, "0");
    const show = (i) => {
      index = ((i % slides.length) + slides.length) % slides.length;
      const slide = slides[index];
      if (main) {
        main.src = slide.src;
        main.alt = slide.alt;
      }
      if (countEl) countEl.textContent = `${pad(index + 1)} / ${pad(slides.length)}`;
      if (crumbEl) crumbEl.textContent = slide.crumb;
      if (titleEl) titleEl.textContent = slide.title;
      if (subEl) subEl.textContent = slide.sub;
      thumbs.forEach((thumb, t) => {
        const on = t === index;
        thumb.classList.toggle("is-active", on);
        thumb.setAttribute("aria-selected", on ? "true" : "false");
        const img = thumb.querySelector("img");
        if (img && slides[t]) img.alt = slides[t].alt;
      });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const t = Number(thumb.dataset.rtThumb);
        if (Number.isFinite(t)) show(t);
      });
    });
    root.querySelector("[data-rt-prev]")?.addEventListener("click", () => show(index - 1));
    root.querySelector("[data-rt-next]")?.addEventListener("click", () => show(index + 1));
    show(index);
  }

  function bindRouteStops() {
    const stops = Array.from(document.querySelectorAll("[data-rt-stop]"));
    const pins = Array.from(document.querySelectorAll("[data-rt-pin]"));
    const stations = Array.from(document.querySelectorAll("[data-rt-station]"));
    const previewImg = document.querySelector("[data-rt-preview-img]");
    const previewNum = document.querySelector("[data-rt-preview-num]");
    const previewName = document.querySelector("[data-rt-preview-name]");
    const previewAlt = document.querySelector("[data-rt-preview-alt]");
    const svg = document.querySelector("[data-rt-svg]");
    if (!stops.length) return;

    const STOP_META = [
      {
        name: "نقطة البداية",
        hint: "بوابة الانطلاق · لوحات إرشاد",
        alt: "2,150 م",
        img: "assets/img/routes/station-1.jpg",
        desc: "منطقة انتظار ومعلومات عن المسار وتعليمات السلامة.",
      },
      {
        name: "قرية أعلى السودة",
        hint: "تراث جبلي · استراحة قصيرة",
        alt: "2,300 م",
        img: "assets/img/routes/station-2.jpg",
        desc: "قرية تراثية جميلة بإطلالة خلابة، استراحة ومرافق أساسية.",
      },
      {
        name: "ممر الضباب",
        hint: "ضباب كثيف · محطة تصوير",
        alt: "2,600 م",
        img: "assets/img/routes/station-3.jpg",
        desc: "منطقة ضبابية ساحرة تمنحك تجربة فريدة للتصوير والاستمتاع.",
      },
      {
        name: "قمة المجرة",
        hint: "منصة مفتوحة · قبل القمة",
        alt: "2,850 م",
        img: "assets/img/routes/station-4.jpg",
        desc: "منصة طبيعية بإطلالة واسعة على الجبال المحيطة.",
      },
      {
        name: "قمة السودة",
        hint: "نهاية المسار · بانوراما",
        alt: "2,980 م",
        img: "assets/img/routes/station-5.jpg",
        desc: "أعلى نقطة في عسير، إطلالة بانورامية لا تُنسى.",
      },
    ];

    let zoom = 1;
    const applyZoom = () => {
      if (!svg) return;
      svg.style.transform = `scale(${zoom})`;
    };

    const select = (index, { scrollStation = false } = {}) => {
      if (!Number.isFinite(index) || index < 0 || index >= STOP_META.length) return;
      const meta = STOP_META[index];
      const pad = (n) => String(n).padStart(2, "0");

      stops.forEach((el) => {
        const on = Number(el.dataset.rtStop) === index;
        el.classList.toggle("is-active", on);
        el.setAttribute("aria-pressed", on ? "true" : "false");
      });
      pins.forEach((el) => {
        el.classList.toggle("is-active", Number(el.dataset.rtPin) === index);
      });
      stations.forEach((el) => {
        const on = Number(el.dataset.rtStation) === index;
        el.classList.toggle("is-active", on);
        if (on && scrollStation) {
          el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      });

      if (previewImg) {
        previewImg.src = meta.img;
        previewImg.alt = meta.name;
      }
      if (previewNum) previewNum.textContent = `المحطة ${pad(index + 1)}`;
      if (previewName) previewName.textContent = meta.name;
      if (previewAlt) previewAlt.textContent = meta.alt;
    };

    stops.forEach((el) => {
      el.addEventListener("click", () => select(Number(el.dataset.rtStop), { scrollStation: true }));
    });
    pins.forEach((el) => {
      const activate = () => select(Number(el.dataset.rtPin), { scrollStation: true });
      el.addEventListener("click", activate);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      });
    });
    stations.forEach((el) => {
      el.addEventListener("click", () => select(Number(el.dataset.rtStation)));
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select(Number(el.dataset.rtStation));
        }
      });
    });

    document.querySelector("[data-rt-zoom='in']")?.addEventListener("click", () => {
      zoom = Math.min(1.55, +(zoom + 0.15).toFixed(2));
      applyZoom();
    });
    document.querySelector("[data-rt-zoom='out']")?.addEventListener("click", () => {
      zoom = Math.max(1, +(zoom - 0.15).toFixed(2));
      applyZoom();
    });

    select(0);
  }

  function bindSearchResults() {
    const page = document.body.matches('[data-page="search"]');
    if (!page) return;
    const params = new URLSearchParams(location.search);
    const input = document.querySelector("[data-sr-input]");
    const countEl = document.querySelector("[data-sr-count]");
    const grid = document.querySelector("[data-sr-grid]");
    const empty = document.querySelector("[data-sr-empty]");
    const chips = [...document.querySelectorAll(".sr-chips [data-filter], .sr-empty__chips [data-filter]")];

    let filter = params.get("filter") || "all";
    let query = (params.get("q") || input?.value || "").trim();
    if (input && params.has("q")) input.value = query;

    function setActiveChip(id) {
      document.querySelectorAll(".sr-chips [data-filter]").forEach((chip) => {
        chip.classList.toggle("is-active", chip.dataset.filter === id);
      });
    }

    function apply() {
      const q = query.toLowerCase();
      let shown = 0;
      document.querySelectorAll("[data-sr-grid] [data-filter-item]").forEach((item) => {
        const tags = (item.dataset.tags || "").toLowerCase();
        const text = item.textContent.toLowerCase();
        const typeOk = filter === "all" || tags.split(/\s+/).includes(filter);
        const queryOk = !q || tags.includes(q) || text.includes(q);
        const show = typeOk && queryOk;
        item.hidden = !show;
        if (show) shown += 1;
      });
      setActiveChip(filter);
      if (countEl) {
        const label = query ? `«${query}»` : "عسير";
        countEl.textContent = `${shown} نتيجة عن ${label}`;
      }
      if (grid) grid.hidden = shown === 0;
      if (empty) empty.hidden = shown !== 0;
    }

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        filter = chip.dataset.filter || "all";
        const url = new URL(location.href);
        if (filter === "all") url.searchParams.delete("filter");
        else url.searchParams.set("filter", filter);
        history.replaceState(null, "", url);
        apply();
      });
    });

    document.querySelector(".sr-bar")?.addEventListener("submit", () => {
      /* let the browser navigate with ?q= */
    });

    apply();
  }

  function bindExperienceSimilar() {
    const track = document.querySelector("[data-xd-track]");
    if (!track) return;
    const step = () => Math.max(260, Math.floor(track.clientWidth * 0.8));
    document.querySelector("[data-xd-prev]")?.addEventListener("click", () => {
      track.scrollBy({ left: step(), behavior: "smooth" });
    });
    document.querySelector("[data-xd-next]")?.addEventListener("click", () => {
      track.scrollBy({ left: -step(), behavior: "smooth" });
    });
  }

  function bindDetailPage() {
    const page = DETAIL_PAGES[fileName()];
    if (!page) return;
    const id = new URLSearchParams(location.search).get("id") || page.fallback;
    const item = page.items[id] || page.items[page.fallback];
    if (!item) return;
    const img = document.querySelector("[data-detail-img]");
    const title = document.querySelector("[data-detail-title]");
    const sub = document.querySelector("[data-detail-sub]");
    const crumb = document.querySelector("[data-detail-crumb]");
    const desc = document.querySelector("[data-detail-desc]");
    const cta = document.querySelector("[data-detail-cta]");
    if (img && item.img) {
      img.src = item.img;
      img.alt = item.title;
    }
    if (title) title.textContent = item.title;
    if (sub) sub.textContent = item.sub;
    if (crumb) crumb.textContent = page.crumb;
    if (desc) desc.textContent = item.desc || item.sub;
    if (cta) {
      cta.textContent = item.cta;
      cta.setAttribute("href", item.href);
    }
    if (title || img || sub || desc || cta) {
      document.title = item.title + (getLang() === "ar" ? " | عسير" : " | Aseer");
    }
    applyPhrases(getLang());
  }

  function bindListingFilters() {
    const params = new URLSearchParams(location.search);
    const startFilter = params.get("filter") || "all";
    const startQuery = params.get("q") || "";
    const input = listingSearchInput();
    if (input && startQuery) input.value = startQuery;
    applyListingFilter(startFilter, startQuery);

    document.querySelectorAll("[data-filter-chips] .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        if (!chip.dataset.filter) return;
        setListingFilter(chip.dataset.filter);
      });
    });

    document.querySelectorAll(".chip").forEach((chip) => {
      if (chip.closest("[data-filter-chips]")) return;
      chip.addEventListener("click", () => {
        chip.parentElement.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
      });
    });

    function currentFilter() {
      return (
        new URLSearchParams(location.search).get("filter") ||
        document.querySelector("[data-filter-chips] .chip.is-active")?.dataset.filter ||
        "all"
      );
    }

    document.querySelectorAll(".exp-discovery-bar, .listing-filter__row").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        setListingFilter(currentFilter());
      });
    });

    input?.addEventListener("input", () => {
      setListingFilter(currentFilter());
    });

    document.querySelectorAll("a[href*='filter='], a[data-filter-reset]").forEach((link) => {
      link.addEventListener("click", (e) => {
        const url = new URL(link.href, location.href);
        const dest = (url.pathname.split("/").pop() || fileName()).toLowerCase();
        if (dest && dest !== fileName()) return;
        e.preventDefault();
        const reset = link.hasAttribute("data-filter-reset");
        if (reset && input) input.value = "";
        const filter = reset ? "all" : url.searchParams.get("filter") || "all";
        setListingFilter(filter, reset ? "" : input?.value || "", {
          scroll: url.hash || (fileName() === "stays.html" ? "#stays" : "#exp-selected"),
        });
      });
    });
  }

  function bindEventsMapToggle() {
    document.querySelectorAll("[data-map-view]").forEach((row) => {
      row.querySelectorAll("[data-map-mode]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const mode = btn.dataset.mapMode;
          row.dataset.mapView = mode;
          row.querySelectorAll("[data-map-mode]").forEach((b) => {
            b.classList.toggle("is-active", b.dataset.mapMode === mode);
          });
        });
      });
    });
  }

  function bindPlanRegionSelect() {
    const wraps = document.querySelectorAll(
      'body[data-page="plan"][data-header="transparent"] .plan-region, body[data-page="restaurants"][data-header="transparent"] .plan-region, body[data-page="contact"][data-header="transparent"] .plan-region'
    );
    if (!wraps.length) return;

    const menus = [];

    function closeAll(except) {
      menus.forEach((entry) => {
        if (entry.wrap !== except) entry.close();
      });
    }

    wraps.forEach((wrap) => {
      const select = wrap.querySelector("select");
      if (!select || wrap.classList.contains("is-enhanced")) return;

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "plan-region-trigger";
      trigger.setAttribute("aria-haspopup", "listbox");
      trigger.setAttribute("aria-expanded", "false");

      const menu = document.createElement("ul");
      menu.className = "plan-region-menu";
      menu.hidden = true;
      menu.setAttribute("role", "listbox");

      Array.from(select.options).forEach((opt, index) => {
        const item = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "plan-region-opt";
        btn.setAttribute("role", "option");
        btn.dataset.index = String(index);
        btn.textContent = opt.text;
        item.appendChild(btn);
        menu.appendChild(item);
      });

      wrap.classList.add("is-enhanced");
      select.tabIndex = -1;
      select.setAttribute("aria-hidden", "true");
      wrap.append(trigger, menu);

      function sync() {
        const current = select.options[select.selectedIndex];
        trigger.textContent = current ? current.text : "";
        trigger.classList.toggle("is-chosen", select.selectedIndex > 0);
        menu.querySelectorAll(".plan-region-opt").forEach((btn) => {
          const on = Number(btn.dataset.index) === select.selectedIndex;
          btn.classList.toggle("is-active", on);
          btn.setAttribute("aria-selected", String(on));
        });
      }

      function setOpen(open) {
        menu.hidden = !open;
        trigger.setAttribute("aria-expanded", String(open));
      }

      function close() {
        setOpen(false);
      }

      menus.push({ wrap, close });

      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const willOpen = menu.hidden;
        closeAll(wrap);
        setOpen(willOpen);
      });

      menu.addEventListener("click", (e) => {
        const btn = e.target.closest(".plan-region-opt");
        if (!btn) return;
        select.selectedIndex = Number(btn.dataset.index);
        select.dispatchEvent(new Event("change", { bubbles: true }));
        sync();
        close();
      });

      document.querySelectorAll(".lang-switch").forEach((btn) => {
        btn.addEventListener("click", () => {
          requestAnimationFrame(() => {
            menu.querySelectorAll(".plan-region-opt").forEach((optBtn) => {
              const opt = select.options[Number(optBtn.dataset.index)];
              if (opt) optBtn.textContent = opt.text;
            });
            sync();
          });
        });
      });

      sync();
    });

    document.addEventListener("click", (e) => {
      if (![...wraps].some((wrap) => wrap.contains(e.target))) closeAll();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAll();
    });
  }

  function bindPlanDetails() {
    const root = document.querySelector('body[data-page="plan"][data-header="transparent"]');
    if (!root) return;

    root.querySelectorAll(".plan-stepper").forEach((stepper) => {
      const valueEl = stepper.querySelector("[data-stepper-value]");
      if (!valueEl) return;
      stepper.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-step]");
        if (!btn) return;
        let n = Number(valueEl.textContent) || 2;
        n = btn.dataset.step === "plus" ? Math.min(12, n + 1) : Math.max(1, n - 1);
        valueEl.textContent = String(n);
      });
    });
  }

  function bindHomeSpot() {
    const root = document.querySelector("[data-home-spot]");
    if (!root) return;
    const slides = [...root.querySelectorAll("[data-spot-slide]")];
    const dots = [...root.querySelectorAll("[data-spot-dot]")];
    if (!slides.length) return;
    let index = Math.max(0, slides.findIndex((s) => s.classList.contains("is-on")));
    let timer = null;

    function go(n) {
      index = (n + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("is-on", i === index));
      dots.forEach((dot) => {
        const on = Number(dot.dataset.spotDot) === index;
        dot.classList.toggle("is-on", on);
        dot.setAttribute("aria-selected", on ? "true" : "false");
      });
    }

    function next() { go(index + 1); }
    function prev() { go(index - 1); }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      stop();
      timer = setInterval(next, 5500);
    }

    root.querySelector("[data-spot-next]")?.addEventListener("click", () => { next(); start(); });
    root.querySelector("[data-spot-prev]")?.addEventListener("click", () => { prev(); start(); });
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const n = Number(dot.dataset.spotDot);
        if (!Number.isNaN(n)) go(n);
        start();
      });
    });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", (e) => {
      if (!root.contains(e.relatedTarget)) start();
    });

    go(index);
    start();
  }

  function bindRestaurantBookSelects() {
    const fields = document.querySelectorAll(".rd-book__field");
    if (!fields.length) return;

    const menus = [];

    function closeAll(except) {
      menus.forEach((entry) => {
        if (entry.field !== except) entry.close();
      });
    }

    fields.forEach((field) => {
      const select = field.querySelector("select");
      if (!select || field.classList.contains("is-enhanced")) return;

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "rd-book__trigger";
      trigger.setAttribute("aria-haspopup", "listbox");
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute("aria-label", select.getAttribute("aria-label") || select.name || "اختيار");

      const menu = document.createElement("ul");
      menu.className = "rd-book__menu";
      menu.hidden = true;
      menu.setAttribute("role", "listbox");

      Array.from(select.options).forEach((opt, index) => {
        const item = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "rd-book__opt";
        btn.setAttribute("role", "option");
        btn.dataset.index = String(index);
        btn.textContent = opt.text;
        item.appendChild(btn);
        menu.appendChild(item);
      });

      field.classList.add("is-enhanced");
      select.tabIndex = -1;
      select.setAttribute("aria-hidden", "true");
      field.append(trigger, menu);

      function sync() {
        const current = select.options[select.selectedIndex];
        trigger.textContent = current ? current.text : "";
        trigger.classList.toggle("is-chosen", select.selectedIndex > 0);
        menu.querySelectorAll(".rd-book__opt").forEach((btn) => {
          const on = Number(btn.dataset.index) === select.selectedIndex;
          btn.classList.toggle("is-active", on);
          btn.setAttribute("aria-selected", String(on));
        });
      }

      function setOpen(open) {
        menu.hidden = !open;
        field.classList.toggle("is-open", open);
        trigger.setAttribute("aria-expanded", String(open));
      }

      function close() {
        setOpen(false);
      }

      menus.push({ field, close });

      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const willOpen = menu.hidden;
        closeAll(field);
        setOpen(willOpen);
      });

      menu.addEventListener("click", (e) => {
        const btn = e.target.closest(".rd-book__opt");
        if (!btn) return;
        select.selectedIndex = Number(btn.dataset.index);
        select.dispatchEvent(new Event("change", { bubbles: true }));
        sync();
        close();
      });

      sync();
    });

    document.addEventListener("click", (e) => {
      if (![...fields].some((field) => field.contains(e.target))) closeAll();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAll();
    });
  }

  function bindAccountPage() {
    const root = document.body;
    if (root.dataset.page !== "account") return;

    const panels = [...document.querySelectorAll("[data-ac-view]")];
    const navItems = [...document.querySelectorAll("[data-ac-panel]")];
    const tabs = [...document.querySelectorAll("[data-ac-filter]")];
    const books = [...document.querySelectorAll("[data-ac-status]")];
    const list = document.querySelector("[data-ac-list]");
    const empty = document.querySelector("[data-ac-empty]");
    const forceEmpty = new URLSearchParams(location.search).get("empty") === "1";

    const showPanel = (id) => {
      panels.forEach((p) => {
        const on = p.dataset.acView === id;
        p.toggleAttribute("hidden", !on);
        p.classList.toggle("is-active", on);
      });
      navItems.forEach((btn) => {
        const on = btn.dataset.acPanel === id;
        btn.classList.toggle("is-active", on);
        if (on) btn.setAttribute("aria-current", "page");
        else btn.removeAttribute("aria-current");
      });
    };

    const applyFilter = (filter) => {
      tabs.forEach((t) => {
        const on = t.dataset.acFilter === filter;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      let shown = 0;
      books.forEach((card) => {
        const match = !forceEmpty && card.dataset.acStatus === filter;
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (list) list.hidden = shown === 0;
      if (empty) empty.hidden = shown !== 0;
    };

    navItems.forEach((btn) => {
      btn.addEventListener("click", () => showPanel(btn.dataset.acPanel));
    });
    document.querySelectorAll("[data-ac-goto]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        showPanel(el.dataset.acGoto);
      });
    });
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => applyFilter(tab.dataset.acFilter));
    });

    applyFilter(forceEmpty ? "upcoming" : "upcoming");
    if (forceEmpty) showPanel("bookings");
  }

  function bindPage() {
    document.querySelectorAll(".month-tabs button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const month = btn.dataset.month;
        const root = btn.closest(".home-ev") || document;
        root.querySelectorAll(".month-tabs button").forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
        root.querySelectorAll("[data-month-panel]").forEach((panel) => {
          const on = panel.dataset.monthPanel === month;
          panel.toggleAttribute("hidden", !on);
        });
      });
    });

    document.querySelectorAll(".ev-cal-day").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".ev-cal-day").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });

    bindHomeSpot();
    bindListingFilters();
    bindPlanRegionSelect();
    bindPlanDetails();
    bindSaves();
    bindDetailPage();
    bindStayGallery();
    bindRestaurantGallery();
    bindRestaurantBookSelects();
    bindRouteGallery();
    bindRouteStops();
    bindExperienceSimilar();
    bindSearchResults();
    bindAccountPage();
    bindCheckoutPay();
    bindConfirmationState();
    bindEventsMapToggle();

    document.querySelectorAll(".place-card__fav").forEach((heart) => {
      heart.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        heart.closest(".place-card")?.classList.toggle("is-loved");
      });
    });

    document.querySelector("[data-contact-form]")?.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(t("contact_sent"));
      e.target.reset();
    });

    document.querySelector("[data-auth-form]")?.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "account.html";
    });

    document.querySelectorAll("[data-trip]").forEach((select) => {
      select.addEventListener("change", () => updateSuggestedRoute(getLang()));
    });

    const map = document.querySelector("[data-map]");
    if (map) {
      const activate = (region) => {
        document.querySelectorAll("[data-region]").forEach((el) => {
          el.classList.toggle("is-on", el.dataset.region === region);
        });
      };
      map.querySelectorAll("[data-region]").forEach((stop) => {
        stop.addEventListener("mouseenter", () => activate(stop.dataset.region));
        stop.addEventListener("focus", () => activate(stop.dataset.region));
        stop.addEventListener("click", () => {
          const card = document.querySelector(`.region-card[data-region="${stop.dataset.region}"]`);
          if (card) card.click();
        });
      });
      document.querySelectorAll(".region-card[data-region]").forEach((card) => {
        card.addEventListener("mouseenter", () => activate(card.dataset.region));
      });
    }

    const reveal = document.querySelectorAll("[data-reveal]");
    if (reveal.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      reveal.forEach((el) => io.observe(el));
    } else {
      reveal.forEach((el) => el.classList.add("is-in"));
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.body;
    const page = root.dataset.page || "home";
    const solid = root.dataset.header !== "transparent";
    const lang = getLang();
    const destId = DEST_FILES[fileName()];
    if (destId) root.dataset.destination = destId;

    if (!root.dataset.noHeader) {
      root.insertAdjacentHTML("afterbegin", headerHTML(page, solid, lang));
    }
    if (!root.dataset.noFooter) {
      root.insertAdjacentHTML("beforeend", footerHTML(lang));
    }
    applyI18n(lang);
    bindChrome();
    bindPage();
  });
})();
