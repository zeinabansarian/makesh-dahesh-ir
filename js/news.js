document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });

  


  gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let scrollToTop = document.querySelectorAll('.scrollToTop')
scrollToTop.forEach(s=>{
      gsap.to(s , {
        scrollTrigger:{
          trigger:s,
          start : "top 40%",
          end : "bottom bottom",
        },
        opacity :1,
        y:0,
      })
 
})



const relatedPro = new Swiper(".relatedPro", {
  // Optional parameters
  // loop: true,
  slidesPerView: 4,

});
const relatedProject = new Swiper(".relatedProject", {
  // Optional parameters
  // loop: true,
  slidesPerView: 2.5,
  spaceBetween: 49,
});

