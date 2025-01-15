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

  // Sliders
  const featuredSlider = (function () {

    const CUSTOM_PARAMS =  {
      items: 1,
      responsive: {
        768: { items: 3 },
        992: { items: 3 },
        1700: { items: 4 }
      },
      gutter: 20,
      nav: false,
      swipeAngle: false,
      speed: 400
    }

    let customsliders = [];
    // Check if the page has Custom Carousels before intialising them
    $(() => {
      if (document.querySelectorAll('[data-featured-slider]')) {
        [...document.querySelectorAll('[data-featured-slider]')].map(slider => {
          featuredSlider.init('[data-featured-slider=' + slider.getAttribute('data-featured-slider') + ']');
        });
      }
    })

    return {
      init: (selector, params) => {
        const container = {
          container: selector,
        },

        slider = tns({ ...CUSTOM_PARAMS, ...params, ...container });

        customsliders.push(slider);
      }
    }

  })();

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
});