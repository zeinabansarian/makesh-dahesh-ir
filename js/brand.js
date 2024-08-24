const relatedPro = new Swiper(".relatedPro", {
    // Optional parameters
    // loop: true,
    spaceBetween: 52,
    slidesPerView: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: ".prevProBtn",
      prevEl: ".nextProBtn",
    },
  });

  gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let scrollToTop = document.querySelectorAll('.scrollToTop')
scrollToTop.forEach(s=>{
      gsap.to(s , {
        scrollTrigger:{
          trigger:s,
          start : "top 70%",
          end : "bottom bottom",
        },
        opacity :1,
        y:0,
      })
 
})
