
const swiper = new Swiper('.swiper-product-Cat', {
    slideToClickedSlide: true,
    slidesPerView: 3,
   freeMode: {
      enabled: true,
      sticky: false,
      momentumBounce: false,
    },
    noSwiping: true,
    spaceBetween: 0,
    mousewheel: {
        enabled: true,
        sensitivity: 4,
    },
    direction: getDirection(),
    })
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

document.querySelector('.ProductCat').addEventListener('mousemove',(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;
})

$(".ProductCat").on("mouseenter", function(e) {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".ProductCat").on("mouseleave", function(e) {
    cursor.removeClass("active");
    follower.removeClass("active");
});
function getDirection() {
    return window.innerWidth > 767 ? 'horizontal' : 'vertical';
}
let OpBtn = document.querySelector('.DesktopHeader .Toggles')
let Menu = document.querySelector('.DesktopHeader .Menu-Container')
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
// SEARCH
let sBTN = document.querySelector('.DesktopHeader .searchIcon')
   let sCon = document.querySelector('.searchContainer')
   let sClose  = document.querySelector('.searchContainer .CloseSerch')
   let searchicon = document.querySelector('.searchContainer .sBTN')
   sBTN.addEventListener('click',()=>{
     sCon.classList.add('show')
   })
   sClose.addEventListener('click',()=>{
     sCon.classList.remove('show')
   })
   let input = document.querySelector('.searchContainer input#search')
   let Val = input.value
   
       console.log('value',input.value);
       
     input.addEventListener("keypress", function(event) {
       // If the user presses the "Enter" key on the keyboard
       if (event.key === "Enter") {
         // Cancel the default action, if needed
         if(input.value != ''){
         Val = input.value
      window.location.href =`/search.bc?q=${Val}`
     console.log('clicked');
     console.log('val',Val);
         }
       }
     });
     searchicon.addEventListener("click", function(event) {
       Val = input.value
       if(input.value != ''){
           window.location.href =`/search.bc?q=${Val}`
     console.log('clicked');
     console.log('val',Val);
       }
   console.log(Val);
   
     
     });
