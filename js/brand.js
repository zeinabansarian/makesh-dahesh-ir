const relatedPro = new Swiper(".relatedPro", {
    // Optional parameters
    // loop: true,
    slidesPerView: 4,

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


document.querySelectorAll('.toggle-button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.parentElement.classList.toggle('share__wrapper--active');
    e.target.classList.toggle('toggle-button--active');
  });
});