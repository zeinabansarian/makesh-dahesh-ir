
var BannerSlider = new Swiper(".Section-1 .swiper-banner", {
    slidesPerView: 1,
    effect: 'fade',

    speed:1000,
    allowTouchMove:true,
    loop: true,
    autoplay:true,
    pagination: {
        el: '.Section-1 .swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
          },
      },
 })

 //  PRODUCT SLIDER
let swiperProduct= new Swiper(".swiper-products", {
    slidesPerView:4,
    spaceBetween: 40,
      speed:1000
  });  