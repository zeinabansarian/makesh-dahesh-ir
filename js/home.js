
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
let sections =document.querySelectorAll('.sec')
sections.forEach(s=>{
    gsap.to('.fadein p',{
        opacity:1,
        y:0,
        scrollTrigger:{
            trigger:s,
            start:'top 50%',
            end:'bottom bottom'
        }
      })
})
//  BRAND SLIDER
let swiperBrand= new Swiper(".swiper-brands", {
    slidesPerView:4,
    spaceBetween: 0,
      speed:1000
  });  