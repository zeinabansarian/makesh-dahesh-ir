gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let gallerys = document.querySelectorAll('.Gallery')
gallerys.forEach(gallery=>{
    gsap.to(gallery,{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:gallery,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
})