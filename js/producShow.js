const thumbSlider = new Swiper(".thumbSlider", {
  slidesPerView: 3.6,
  spaceBetween: 15,
  navigation: {
    nextEl: ".nextThumb",
    prevEl: ".prevThumb",
  },
});

const imageSwiper = new Swiper(".imageSwiper", {
  thumbs: {
    swiper: thumbSlider,
  },
  speed: 800,
});

document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });



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


  
  jQuery(document).ready(function() {
	
	jQuery('.openPara').readmore({
		speed: 100,
		collapsedHeight:66,
		moreLink: '<button class="font-IRANSansWeb400 text-xs text-b2" dir="ltr">مشاهده بیشتر +</button>',
		lessLink: '<button class="font-IRANSansWeb400 text-xs text-b2" dir="ltr">مشاهده کمتر -</button>',
		heightMargin: 16,
        afterToggle: function(trigger, element, expanded) {
            
            if(! expanded) { // The "Close" link was clicked
              $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
            }
          },
	});
	
});




let starsRating = document.querySelectorAll(".star-rating input")

for (let i = 0; i < starsRating.length; i++) {
  const element = starsRating[i];
  
  element.addEventListener("click" , function(params) {
    $(".star-rating input").prop('checked', false);
    console.log(i);
    setTimeout(() => {
      
      element.checked = true;
    }, 100);
  })
}



gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let scrollToTop = document.querySelectorAll('.scrollToTop')
scrollToTop.forEach(s=>{
      gsap.to(s , {
        scrollTrigger:{
          trigger:s,
          start : "top 60%",
          end : "bottom bottom",
        },
        opacity :1,
        y:0,
      })
 
})
