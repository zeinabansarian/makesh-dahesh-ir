
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