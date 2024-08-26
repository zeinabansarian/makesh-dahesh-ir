let filterBtn = document.querySelectorAll(".newsList nav ul li")

filterBtn[0].classList.add("activeList")
filterBtn.forEach(element => {
    element.addEventListener("click" , function (params) {
        $(".newsList nav ul li").removeClass("activeList")
        element.classList.add("activeList")
    })
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
