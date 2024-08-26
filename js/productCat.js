const titleSlider = new Swiper('.titleSlider', {
    // Optional parameters
    direction: 'vertical',

  });
const imageSlider = new Swiper('.imageSlider', {
    // Optional parameters
    direction: 'vertical',
    // mousewheel : true,
    // speed: 800,
    mousewheel: {
        sensitivity: 0.1,
      },
  });