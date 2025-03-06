// Sliders
const CUSTOM_PARAMS =  {
  items: 1,
  responsive: {
    576: { items: 2},
    768: { items: 3 },
    992: { items: 3 },
    1700: { items: 4 }
  },
  gutter: 20,
  nav: false,
  swipeAngle: false,
  speed: 400
}

let sliders = [];

function sliderInit() {
  ;[...document.querySelectorAll('[data-featured-slider]:not([data-initialized])')].forEach((sliderEl) => {
    sliderEl.setAttribute('data-initialized', true)
    const container = {
      container: '[data-featured-slider=' + sliderEl.getAttribute('data-featured-slider') + ']',
    }
    const slideshow = tns({ ...CUSTOM_PARAMS, ...container })

    let resizeId

    sliders.push(sliderEl)
    window.addEventListener('resize', () => {
      clearTimeout(resizeId)
      resizeId = setTimeout(() => slideshow.updateSliderHeight(), 300)
    })
  })
}

document.addEventListener('DOMContentLoaded', sliderInit);
