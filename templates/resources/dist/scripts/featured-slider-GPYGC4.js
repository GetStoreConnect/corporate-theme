// Sliders
const CUSTOM_PARAMS =  {
  items: 1,
  gutter: 15,
  responsive: {
    768: { items: 3, gutter: 20},
    992: { items: 4 }
  },
  touch: true,
  mouseDrag: true,
  nav: false,
  swipeAngle: 20,
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