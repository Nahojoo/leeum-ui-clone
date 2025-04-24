//헤더 색상 변경
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 옵션설정
const settingToggleBtn = document.getElementById("settingToggleBtn");
const settingOverlay = document.querySelector(".ui-setting-overlay");
// 사이트맵
const menuToggleBtn = document.querySelector(".menu-btn");
const sitemapOverlay = document.querySelector(".sitemap-overlay");
const sitemapInner = document.querySelector(".sitemap");
let isSitemapOpen = false;

//세팅옵션오버레이 닫기
function closeSettingOverlay() {
  settingOverlay.classList.remove("open");
  settingOverlay.setAttribute("aria-hidden", "true");
  settingToggleBtn.classList.remove("active");
}

settingToggleBtn.addEventListener("click", () => {
  const isNowOpen = settingOverlay.classList.toggle("open");
  settingToggleBtn.classList.toggle("active");
  settingOverlay.setAttribute("aria-hidden", String(!isNowOpen));
});

settingOverlay.addEventListener("click", (e) => {
  if (e.target === settingOverlay) {
    settingToggleBtn.classList.remove("active");
    settingOverlay.classList.remove("open");
  }
});

menuToggleBtn.addEventListener("click", () => {
  if (!isSitemapOpen) {
    sitemapOverlay.classList.add("open");
    sitemapOverlay.setAttribute("aria-hidden", "false");
    menuToggleBtn.classList.add("active");
    isSitemapOpen = true;
  } else {
    sitemapOverlay.classList.remove("open");
    sitemapOverlay.setAttribute("aria-hidden", "true");
    menuToggleBtn.classList.remove("active");
    isSitemapOpen = false;
  }
  closeSettingOverlay();
});

//메인화면 스와이퍼
const collectionSwiper = new Swiper(".collection-swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 4, // 태블릿 이상
    },
  },
});
