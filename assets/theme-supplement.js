document.addEventListener('DOMContentLoaded', function () {

  const headerEl = document.querySelector('#sc-header');
  const headerHeight = headerEl.getBoundingClientRect().height / 2;
  const navEl = document.querySelector('nav.sc-header_inner');

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
    rootMargin: `${headerHeight}px`,
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

});