
gsap.registerPlugin(ScrollTrigger) 
// TIMELINE
let timelineNum = document.querySelector('.timeline__map .timeline__entry span')
timelineNum.classList.add('is--active')
let updateActiveYear = (e)=>{
   
    let slideYear = e.slides[e.activeIndex].children[0].children[0].children[0].children[0].getAttribute('data-timeline-year')
    let timeLineYear = document.querySelector('[data-timeline-active-year="' + slideYear + '"]')
    let activeYears
    if (
        (document.querySelectorAll('[data-timeline="activeYear"]').forEach(function (b) {
            b.getAttribute('data-timeline-active-year') === slideYear ? b.classList.add("is--active") :b.classList.remove("is--active");
        }
    
    ),timeLineYear
)
    ){
         activeYears = document.querySelector('[data-timeline="activeYears"]')
   
        let i =activeYears.getBoundingClientRect()
        let n =timeLineYear.getBoundingClientRect();
        console.log( 'i',i.left);
        console.log('n' ,n.left);
        n.left < i.left ? (activeYears.scrollLeft -= i.left - n.left + 50) : n.right > i.right && (activeYears.scrollLeft += n.right - i.right + 50);
    }
}
let TimelineSwiper = new Swiper('.timeline__slides',{
    speed: 500,
    slidesPerView:1,
    spaceBetween: 40,
    grabCursor:true,
     navigation: {
        nextEl: ".timeline__slider .swiper-button-next",
        prevEl: ".timeline__slider .swiper-button-prev",
      },
      on: {
        init:function(e){
         let slides =e.slides
         console.log(slides);
         
        for(let g = 0 ; g < e.slides.length ; g++){
            slides[g].children[0].children[0].children[0].children[0].setAttribute('data-index',g)
        }
        document.querySelectorAll('[data-timeline="activeYear"]').forEach(function (i) {
            i.addEventListener("click", function (e) {
             
                let timelines = [...document.querySelectorAll('[data-timeline="activeYear"]')]
                timelines.map(elem=>{
                    elem.classList.remove('is--active')
                })
                e.currentTarget.classList.add('is--active')
                let activeIndex = e.currentTarget.getAttribute('data-timeline-active-year')
                let activeSlide = document.querySelector('[data-timeline-year="' + activeIndex + '"]')
                let index = activeSlide.getAttribute('data-index')
                console.log('activeSlide',activeSlide);
                console.log('index',index);
                
                TimelineSwiper.slideTo(index);
            });
        });
        },
        slideChange: function (e) {
            updateActiveYear(this)
        }
    }
})
//   PARTNER SLIDER
let PartnerSwiper = new Swiper('.swiper-partner',{
    speed: 1500,
    slidesPerView:5,
    spaceBetween: 40,
    centeredSlides: true,
    loop:true,
    grabCursor:true,

})

//  CERTIFICATE SLIDER
let swiperCertificate= new Swiper(".swiper-certificate", {
    slidesPerView:4,
    spaceBetween: 10,
      speed:1000
  });  
  // ANIMATIONS
  let sections = document.querySelectorAll('.sec')
  sections.forEach(s=>{
    gsap.to(s.querySelectorAll('.fade-in'),{
      y:0,
      opacity:1,
      stagger:.2,
      scrollTrigger:{
        trigger:s,
        start:"top 60%",
        end:"bottom bottom"
    }
  })
  gsap.to(s.querySelectorAll('.fade-in p'),{
    y:0,
    opacity:1,
    stagger:.2,
    scrollTrigger:{
      trigger:s,
      start:"top 60%",
      end:"bottom bottom"
  }
})
gsap.to(s.querySelectorAll('.fade-in h2'),{
  y:0,
  opacity:1,
  stagger:.2,
  scrollTrigger:{
    trigger:s,
    start:"top 60%",
    end:"bottom bottom"
}
})
gsap.to(s.querySelectorAll('.fade-in h3'),{
  y:0,
  opacity:1,
  stagger:.2,
  scrollTrigger:{
    trigger:s,
    start:"top 60%",
    end:"bottom bottom"
}
})
gsap.to(s.querySelectorAll('.fade-in h4'),{
  y:0,
  opacity:1,
  stagger:.2,
  scrollTrigger:{
    trigger:s,
    start:"top 60%",
    end:"bottom bottom"
}
})
gsap.to(s.querySelectorAll('.fade-in h5'),{
  y:0,
  opacity:1,
  stagger:.2,
  scrollTrigger:{
    trigger:s,
    start:"top 60%",
    end:"bottom bottom"
}
})
gsap.to(s.querySelectorAll('.fade-in h6'),{
  y:0,
  opacity:1,
  stagger:.2,
  scrollTrigger:{
    trigger:s,
    start:"top 60%",
    end:"bottom bottom"
}
})
  })
  
let textF = document.querySelectorAll('.Section-4 .fade-in')
textF.forEach(p=>{
    gsap.to(p,{
        y:0,
        opacity:1,
        scrollTrigger:{
          trigger:'.Section-3',
          start:"top 60%",
          end:"bottom bottom",
      }
    })
})



const aboutSlider = new Swiper(".aboutSlider", {
    // If we need pagination
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    autoplay: {
      delay: 2000,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 navigation: {
        nextEl: ".Gnext",
        prevEl: ".Gprev",
      },
  });
  
  let swiperPlay = document.querySelector(".swiperPlay");
  let swiperPause = document.querySelector(".swiperPause");
  
  swiperPause.addEventListener("click", function (params) {
    aboutSlider.autoplay.stop();
  });
  swiperPlay.addEventListener("click", function (params) {
    aboutSlider.autoplay.start();
  });
  
  