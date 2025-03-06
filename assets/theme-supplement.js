document.addEventListener('DOMContentLoaded', function () {
  // Sticky header
  const headerEl = document.querySelector('[data-header]');
  const headerHeight = headerEl.getBoundingClientRect().height;
  const headerHeightCalc = headerHeight / 2;
  const navEl = document.querySelector('[data-header-wrapper]');

  const stickyNav = (entries) => {
    entries.forEach(entry => {
      const target = entry.target;
      if(!entry.isIntersecting) {
        navEl.classList.add('sticky');
      } else {
        navEl.classList.remove('sticky');
      }
    });
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.5,
    rootMargin: `${headerHeightCalc}px`,
  });

  headerObserver.observe(headerEl);

  sliderInit();

  // Banner height
  const bannerHeightSetter = (h, c) => {
    if (window.innerWidth >= 1280) {
      c.style.setProperty('min-height', `calc(100vh - ${h}px)`);
    }
  }

  let banners = document.querySelectorAll('[data-banner]');

  banners.forEach((banner) => {
    let container = banner.querySelector('[data-banner-container]');
    bannerHeightSetter(headerHeight, container);
  });

  // Scroll reveal 

  const sections = document.querySelectorAll('[data-scroll-reveal]');

  const revealSection = (entry, observer) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('item');
      entry.target.classList.remove('item-hidden');
      observer.unobserve(entry.target);
    }
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => revealSection(entry, observer));
  }, {
    root: null,
    threshold: 0.01,
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);    
  });

});