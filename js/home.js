
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

// CUSOR FOLLOWER
let cursor = $(".Cursor"),
    follower = $(".Cursor-follower");
let posX = 0,
    posY = 0;

    let mouseX = 0,
    mouseY = 0;
TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
       
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

document.querySelector('.ProductCats').addEventListener('mousemove',(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;
})

$(".ProductCats").on("mouseenter", function(e) {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".ProductCats").on("mouseleave", function(e) {
    cursor.removeClass("active");
    follower.removeClass("active");
});

// PROJECT SLIDER
let swiperProject = new Swiper('.swiper-projects',{
    slidesPerView:2.2,
    loop: true,
    loopedSlides: 4,
    spaceBetween: 30,
    grabCursor: true,
    speed:5000,
    effect:'slide' ,
    autoplay: {
        delay: 0,
    },

})