gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let faders = document.querySelectorAll('.fadeIN')
faders.forEach(fade=>{
    gsap.to(fade.querySelectorAll('p'),{
        y:0,
        opacity:1,
        scale:1,
        stagger:.2,
        scrollTrigger:{
            trigger:fade,
            start:"top 90%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('a'),{
        y:0,
        opacity:1,
        scale:1,
        stagger:.2,
        scrollTrigger:{
            trigger:fade,
            start:"top 90%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('span'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 90%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h1'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 90%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h2'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 90%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h3'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 90%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h4'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 90%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h5'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 90%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h6'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 90%",
            end:"bottom bottom"
        }
    })
})
