const AREAS = {
  peaks: [
    { name: "أبها", href: "abha.html" },
    { name: "السودة", href: "soudah.html" },
    { name: "تنومة", href: "tanomah.html" },
    { name: "النماص", href: "al-namas.html" },
    { name: "بللسمر", href: "ballasmar.html" },
    { name: "بللحمر", href: "ballahmar.html" }
  ],
  tihama: [
    { name: "رجال ألمع", href: "rijal-alma.html" },
    { name: "المجاردة", href: "al-majardah.html" },
    { name: "بارق", href: "bariq.html" },
    { name: "محايل", href: "muhayil.html" }
  ],
  coast: [
    { name: "البرك", href: "al-birk.html" },
    { name: "القحمة", href: "al-qahmah.html" }
  ],
  desert: [
    { name: "بيشة", href: "bisha.html" },
    { name: "سراة عبيدة", href: "sarat-abidah.html" },
    { name: "ظهران الجنوب", href: "dhahran-al-janub.html" }
  ]
};

const NAV = [
  { label: "الرئيسية", href: "index.html", key: "home" },
  { label: "استكشف عسير", href: "#", key: "explore", mega: true },
  { label: "تجارب", href: "experiences.html", key: "experiences" },
  { label: "فعاليات", href: "events.html", key: "events" },
  { label: "خطط رحلتك", href: "plan.html", key: "plan" },
  { label: "المطاعم والمقاهي", href: "restaurants.html", key: "restaurants" },
  { label: "أماكن الإقامة", href: "stays.html", key: "stays" },
  { label: "تواصل معنا", href: "contact.html", key: "contact" }
];

function megaColumns() {
  return [
    ["القمم", AREAS.peaks],
    ["تهامة", AREAS.tihama],
    ["الساحل", AREAS.coast],
    ["الصحراء والواحات", AREAS.desert]
  ]
    .map(
      ([title, items]) => `
      <div class="mega-col">
        <h3>${title}</h3>
        <hr>
        ${items.map((i) => `<a href="${i.href}">${i.name}</a>`).join("")}
      </div>`
    )
    .join("");
}

function headerHTML(page, solid) {
  return `
  <header class="site-header ${solid ? "is-solid" : ""}">
    <nav class="nav" aria-label="التنقل الرئيسي">
      <button class="search-btn" type="button" aria-label="بحث" data-open-search>
        <img src="assets/icons/search.svg" width="26" height="26" alt="">
      </button>
      <button class="menu-toggle" type="button" aria-label="القائمة" data-open-menu>
        <span>☰</span>
      </button>
      <ul class="nav-links">
        ${NAV.map((item) => {
          if (item.mega) {
            return `<li class="has-mega">
              <button type="button" data-mega-toggle aria-expanded="false">${item.label}</button>
              <div class="mega-menu" role="menu">${megaColumns()}</div>
            </li>`;
          }
          const active = item.key === page ? "is-active" : "";
          return `<li><a class="${active}" href="${item.href}">${item.label}</a></li>`;
        }).join("")}
      </ul>
      <a class="logo" href="index.html" aria-label="عسير">
        <span class="logo-text">
          <span class="logo-ar">عسير</span>
          <span class="logo-en">A S E E R</span>
        </span>
        <img class="logo-mark" src="assets/icons/logo-mark.svg" width="43" height="43" alt="">
      </a>
    </nav>
    <div class="mobile-panel" data-mobile-panel>
      ${NAV.map((item) =>
        item.mega
          ? `<button type="button" data-mobile-mega>استكشف عسير</button>
             <div class="mobile-mega">${megaColumns()}</div>`
          : `<a href="${item.href}">${item.label}</a>`
      ).join("")}
    </div>
  </header>
  <div class="search-overlay" data-search-overlay>
    <form action="search.html" method="get">
      <input class="search-field" type="search" name="q" placeholder="ابحث عن تجربة أو مكان أو نشاط...">
      <button class="btn btn-gold" type="submit">بحث</button>
    </form>
  </div>`;
}

function footerHTML() {
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="logo" href="index.html">
          <span class="logo-text">
            <span class="logo-ar">عسير</span>
            <span class="logo-en">A S E E R</span>
          </span>
          <img class="logo-mark" src="assets/icons/logo-mark-lg.svg" width="82" height="82" alt="">
        </a>
        <p>وجهة جبلية فاخرة تجمع بين<br>جمال الطبيعة والثقافة الأصيلة<br>والضيافة الراقية.</p>
        <div class="socials">
          <a href="#" aria-label="إنستغرام">ig</a>
          <a href="#" aria-label="إكس">x</a>
          <a href="#" aria-label="يوتيوب">yt</a>
          <a href="#" aria-label="تيك توك">tt</a>
        </div>
      </div>
      <div class="footer-links">
        <div>
          <h4>اكتشف عسير</h4>
          <a href="index.html">عن عسير</a>
          <a href="abha.html">المناطق</a>
          <a href="events.html">الفعاليات</a>
          <a href="experiences.html">المدونة</a>
        </div>
        <div>
          <h4>تجارب عسير</h4>
          <a href="experiences.html">المغامرات</a>
          <a href="experiences.html">الثقافة</a>
          <a href="experiences.html">الطبيعة</a>
          <a href="restaurants.html">المأكولات</a>
        </div>
        <div>
          <h4>معلومات</h4>
          <a href="contact.html">الأسئلة الشائعة</a>
          <a href="contact.html">الشروط والأحكام</a>
          <a href="contact.html">سياسة الخصوصية</a>
          <a href="contact.html">تواصل معنا</a>
        </div>
      </div>
      <form class="newsletter" data-newsletter>
        <h4>النشرة البريدية</h4>
        <p>اشترك للحصول على آخر الأخبار<br>والعروض الحصرية.</p>
        <input type="email" name="email" placeholder="بريدك الإلكتروني" required>
        <button type="submit">اشترك</button>
      </form>
    </div>
    <div class="footer-bottom">
      <span>صنع في المملكة العربية السعودية</span>
      <span>تصميم وتطوير استديو تكوين</span>
      <span>جميع الحقوق محفوظة © 2026 عسير</span>
    </div>
  </footer>`;
}

function bindChrome() {
  const mega = document.querySelector("[data-mega-toggle]");
  const megaItem = document.querySelector(".has-mega");
  const menuBtn = document.querySelector("[data-open-menu]");
  const mobile = document.querySelector("[data-mobile-panel]");
  const mobileMegaBtn = document.querySelector("[data-mobile-mega]");
  const mobileMega = document.querySelector(".mobile-mega");
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

  document.addEventListener("click", (e) => {
    if (!megaItem?.contains(e.target)) closeMega();
    if (overlay && !e.target.closest("[data-open-search]") && !e.target.closest("[data-search-overlay] form")) {
      overlay.classList.remove("is-open");
    }
  });

  document.querySelectorAll(".mega-menu a, .mobile-mega a").forEach((a) => {
    a.addEventListener("click", () => {
      closeMega();
      mobile?.classList.remove("is-open");
    });
  });

  menuBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    mobile?.classList.toggle("is-open");
  });

  mobileMegaBtn?.addEventListener("click", () => {
    mobileMega?.classList.toggle("is-open");
  });

  searchBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    overlay?.classList.add("is-open");
    overlay?.querySelector("input")?.focus();
  });

  document.querySelector("[data-newsletter]")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("تم الاشتراك في النشرة البريدية");
    e.target.reset();
  });
}

function bindPage() {
  document.querySelectorAll(".month-tabs button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".month-tabs button").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const month = btn.dataset.month;
      document.querySelectorAll("[data-event-month]").forEach((card) => {
        card.style.display = !month || card.dataset.eventMonth === month ? "" : "none";
      });
    });
  });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      chip.parentElement.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const filter = chip.dataset.filter;
      if (!filter) return;
      document.querySelectorAll("[data-filter-item]").forEach((item) => {
        const tags = item.dataset.tags || "";
        item.hidden = filter !== "all" && !tags.includes(filter);
      });
    });
  });

  document.querySelector("[data-contact-form]")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك، سنعود إليك خلال 24 ساعة.");
    e.target.reset();
  });

  document.querySelector("[data-auth-form]")?.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "account.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.body;
  const page = root.dataset.page || "home";
  const solid = root.dataset.header !== "transparent";
  root.insertAdjacentHTML("afterbegin", headerHTML(page, solid));
  if (!root.dataset.noFooter) {
    root.insertAdjacentHTML("beforeend", footerHTML());
  }
  bindChrome();
  bindPage();
});
