

gsap.registerPlugin(ScrollTrigger) 


let timelineTitle= [...document.querySelectorAll('.faceTimeline .timeline-title')]
let timelineText= [...document.querySelectorAll('.faceTimeline .timeline-text')]
let timelineIMG= [...document.querySelectorAll('.faceTimeline .timeline-img')]
// console.log('timelineTitle',timelineTitle);
// console.log('timelineText',timelineText);
// console.log('timelineIMG',timelineIMG);
let template
let imgSrc
let tempParent = document.querySelector('.timeline__slides .swiper-wrapper')
for(let i = timelineTitle.length-1 ; i >= 0 ; i--){
console.log(timelineTitle[i].innerHTML);

    imgSrc = timelineIMG[i].querySelector('img').getAttribute('src')
template = `   <div class="timeline__slide swiper-slide
                                w-full flex justify-start items-start" 
                                data-timeline="slide" 
                                data-timeline-year="${parseInt(timelineTitle[i].innerText)}">
                                <div class="timeline__slide__content w-full flex justify-start items-start">
                                <div class="multimedia module--margin multimedia--timeline w-full flex justify-start items-start" data-media-type="current" data-motion="">
                                    <div class="grid-row w-full grid grid-cols-[50%,50%] before:content-[''] relative
                                    before:absolute before:right-0 before:z-[-1] before:w-[80%] before:h-full before:bg-b3
                                     justify-start items-start">      
                                            <div class="multimedia__text w-[90%] mx-auto py-[5em] pb-[3em]
                                             flex justify-start items-start flex-col">          
                                             <h2 class="multimedia__headline relative faNum py-[.5em] mb-[.8em] font-IRANSansWeb500
                                             text-2xl font-medium leading-23 text-b5 before:z-1
                                             before:w-full before:absolute before:bottom-0 before:left-0
                                             before:bg-[#F37021F3] before:h-[1px]">${timelineTitle[i].innerText}</h2>         
                                                <div class="multimedia__subline rte">
                                                        <p>${timelineText[i].innerText}</p>
                                
                                                    </div>  
                                                  
                                                                                       
                                            </div>
                                
                                        
                                        <div class="multimedia__image-col translate-y-[-40px]
                                         w-full flex justify-end items-start">
                                            <div class="multimedia__image w-full flex justify-end items-start">
                                                        
                                    <img class=" ls-is-cached lazyloaded w-full object-cover" src="${imgSrc}" >   
                                    </div>
                                
                                        </div>
                                
                                    </div>
                                
                                </div>
                             </div>
                             </div>`
    tempParent.insertAdjacentHTML('afterbegin',template)
}
setTimeout(() => {
 // TIMELINE
let timelineNum = document.querySelector('.timeline__map .timeline__entry span')
timelineNum.classList.add('is--active')
let updateActiveYear = (e)=>{
   console.log(parseInt(e.slides[e.activeIndex].getAttribute('data-timeline-year')) );
   
    let slideYear =parseInt(e.slides[e.activeIndex].getAttribute('data-timeline-year')) 
    let timeLineYear = document.querySelector('[data-timeline-active-year="' + slideYear + '"]')
    let activeYears
    if (
        (document.querySelectorAll('[data-timeline="activeYear"]').forEach(function (b) {
           parseInt(b.getAttribute('data-timeline-active-year')) === slideYear ? b.classList.add("is--active") :b.classList.remove("is--active");
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
            slides[g].setAttribute('data-index',g)
        }
        document.querySelectorAll('[data-timeline="activeYear"]').forEach(function (i) {
            i.addEventListener("click", function (e) {
             
                let timelines = [...document.querySelectorAll('[data-timeline="activeYear"]')]
                timelines.map(elem=>{
                    elem.classList.remove('is--active')
                })
                e.currentTarget.classList.add('is--active')
                let activeIndex = parseInt(e.currentTarget.getAttribute('data-timeline-active-year'))
                let activeSlide = document.querySelector('[data-timeline-year="' + activeIndex + '"]')
                let index = parseInt(activeSlide.getAttribute('data-index'))
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
}, 1000);

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
  
  