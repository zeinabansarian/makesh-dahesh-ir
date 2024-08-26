let OpBtn = document.querySelector('.DecktopHeader .Toggles')
let Menu = document.querySelector('.DecktopHeader .Menu-Container')
let ClBtn = document.querySelector('.Menu-Container .Close-Icon')
OpBtn.addEventListener('click',()=>{
    Menu.classList.add('Open')
    gsap.to('.Menu-Container .Menu-item .menu-link ',{
        x:0,
        opacity:1,
        delay:1.5
    })
})
ClBtn.addEventListener('click',()=>{
    gsap.to('.Menu-Container .Menu-item .menu-link ',{
        x:'100%',
        opacity:0
    })
    setTimeout(() => {
        Menu.classList.remove('Open')
    }, 1000);
 
})

let DropNavs =document.querySelectorAll('.navbtn')
DropNavs.forEach(d=>{
    d.addEventListener('click',(e)=>{
     e.currentTarget.children[1].classList.toggle('openNav')
    })
})
let header = document.querySelector('header')
window.addEventListener('scroll',(s)=>{
    if(scrollY > 0){
        header.classList.add('GoBottom')
    }
    else{
        header.classList.remove('GoBottom')
    }
    
})