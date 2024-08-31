
var BannerSlider = new Swiper(".Section-1 .swiper-banner", {
    slidesPerView: 1,
    effect: 'fade',

    speed:1000,
    allowTouchMove:true,
    loop: true,
    autoplay:true,
    pagination: {
        el: '.Section-1 .swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
          },
      },
 })

 //  PRODUCT SLIDER
let swiperProduct= new Swiper(".swiper-products", {
    slidesPerView:4,
    spaceBetween: 40,
      speed:1000
  });  

//  BRAND SLIDER
let swiperBrand= new Swiper(".swiper-brands", {
    slidesPerView:4,
    spaceBetween: 0,
      speed:1000
  });  

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

document.querySelector('.ProductCats').addEventListener('mousemove',(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;
})

$(".ProductCats").on("mouseenter", function(e) {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".ProductCats").on("mouseleave", function(e) {
    cursor.removeClass("active");
    follower.removeClass("active");
});

// PROJECT SLIDER
let swiperProject = new Swiper('.swiper-projects',{
    slidesPerView:2.2,
    loop: true,
    loopedSlides: 4,
    spaceBetween: 30,
    grabCursor: true,
    speed:5000,
    effect:'slide' ,
    autoplay: {
        delay: 0,
    },

})

// SERVICE DROP
 document.querySelectorAll('.Service .Bottom-S').forEach(i=>{
  i.style.display='none'
 })
$(document).ready(function() {
    // $('.Service .Bottom-S').slideUp();
    // $(document.querySelector('.Service .Bottom-S')).slideDown();
    document.querySelector('.Service .Bottom-S').style.display='flex'

    let MainIMG  =document.querySelector('.IMG-SecviceContainer .IMG')
  let navBtns = document.querySelectorAll('.Service')
  for(let i=0 ; i<navBtns.length ; i++){
    navBtns[i].setAttribute('IS-OP',false)
  }
  navBtns[0].setAttribute('IS-OP',true)
  navBtns[0].classList.add('active')
  navBtns.forEach(nav=>{
    let IsOpen = false;
  nav.addEventListener('mouseenter',(e)=>{
    IsOpen =Boolean(`${e.currentTarget.getAttribute('IS-OP')}`) 
    e.currentTarget.children[0].classList.add('active')
    let navBtns = document.querySelectorAll('.Service')
    for(let i=0 ; i<navBtns.length ; i++){
      navBtns[i].classList.add('colorB')
    }
    e.currentTarget.classList.add('colorN')
    e.currentTarget.children[1].style.display='flex'

    let current = e.currentTarget.getAttribute('data-img')
    console.log('current img',current);
    MainIMG.classList.remove('Show')
    MainIMG.querySelector('img').setAttribute('src',current)
    setTimeout(() => {

    MainIMG.classList.add('Show')

    }, 500);

    IsOpen =false;
    e.currentTarget.setAttribute('IS-OP',true)
      })
 nav.addEventListener('mouseleave',(e)=>{
    IsOpen =Boolean(`${e.currentTarget.getAttribute('IS-OP')}`) 
    e.currentTarget.children[0].classList.remove('active')
    e.currentTarget.children[1].style.display='none'
    e.currentTarget.setAttribute('IS-OP',false)
    let navBtns = document.querySelectorAll('.Service')
    for(let i=0 ; i<navBtns.length ; i++){
      navBtns[i].classList.add('colorB')
      navBtns[i].classList.remove('colorN')

    }
    IsOpen =true;
     })
  })

  })
  document.querySelector('.Text-ServiceContainer').addEventListener('mouseleave',(e)=>{
    let navBtns = document.querySelectorAll('.Service')
    for(let i=0 ; i<navBtns.length ; i++){
      navBtns[i].classList.remove('colorB')
      navBtns[i].classList.remove('colorN')

    }
  })

  //  BLOG SLIDER
let swiperBlog= new Swiper(".swiper-blogs", {
    slidesPerView:3,
    spaceBetween:30,
      speed:1000
  });  
  let SlidesLength = [...document.querySelectorAll('.swiper-gallery .swiper-slide')]
        console.log(SlidesLength);
        document.querySelector('.Gallery-Container .Total').innerHTML = SlidesLength.length
        let slides= document.querySelectorAll('.swiper-gallery .swiper-slide')
        let i =1
        slides.forEach((s)=>{
        s.setAttribute('data-num',i)
        i++
        if(i>=SlidesLength){
        return
         }
        })
//  GALLERY SLIDER
let swiperGallery= new Swiper(".swiper-gallery", {
    slidesPerView:2.4,
    spaceBetween: 40,
      speed:1000,
      navigation: {
        nextEl: ".navigationBTN .swiper-button-next",
        prevEl: ".navigationBTN .swiper-button-prev",
      },
  }); 
  swiperGallery.on('slideChange', (e) => {  
    console.log(e.realIndex);
      var num = e.realIndex+1
      document.querySelector('.Current').textContent = num
  })
  if( document.querySelectorAll('.swiper-gallery .swiper-slide')){
    var count =1
    document.querySelector('.Current').textContent = count
  }
   

  let servicess = document.querySelectorAll('.Service')
  servicess.forEach(s=>{
      gsap.to(s,{
          y:0,
          opacity:1,
          scale:1,
          stagger:.2,
          scrollTrigger:{
              trigger:s,
              start:"top 60%",
              end:"bottom bottom"
          }
      })
    })