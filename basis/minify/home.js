var BannerSlider=new Swiper(".Section-1 .swiper-banner",{slidesPerView:1,effect:"fade",speed:1e3,allowTouchMove:!0,loop:!0,autoplay:!0,pagination:{el:".Section-1 .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"><span class="line"></span></span>'}}});let swiperProduct=new Swiper(".swiper-products",{slidesPerView:4,spaceBetween:40,speed:1e3}),swiperBrand=new Swiper(".swiper-brands",{slidesPerView:4,spaceBetween:0,speed:1e3}),cursor=$(".Cursor"),follower=$(".Cursor-follower"),posX=0,posY=0,mouseX=0,mouseY=0;TweenMax.to({},.016,{repeat:-1,onRepeat:function(){posX+=(mouseX-posX)/9,posY+=(mouseY-posY)/9,TweenMax.set(follower,{css:{left:posX-12,top:posY-12}}),TweenMax.set(cursor,{css:{left:mouseX,top:mouseY}})}}),document.querySelector(".ProductCats").addEventListener("mousemove",(e=>{mouseX=e.clientX,mouseY=e.clientY})),$(".ProductCats").on("mouseenter",(function(e){cursor.addClass("active"),follower.addClass("active")})),$(".ProductCats").on("mouseleave",(function(e){cursor.removeClass("active"),follower.removeClass("active")}));let swiperProject=new Swiper(".swiper-projects",{slidesPerView:2.2,loop:!0,loopedSlides:4,spaceBetween:30,grabCursor:!0,speed:5e3,effect:"slide",autoplay:{delay:0}});document.querySelectorAll(".Service .Bottom-S").forEach((e=>{e.style.display="none"})),$(document).ready((function(){document.querySelector(".Service .Bottom-S").style.display="flex";let e=document.querySelector(".IMG-SecviceContainer .IMG"),t=document.querySelectorAll(".Service");for(let e=0;e<t.length;e++)t[e].setAttribute("IS-OP",!1);t[0].setAttribute("IS-OP",!0),t[0].classList.add("active"),t.forEach((t=>{let r=!1;t.addEventListener("mouseenter",(t=>{r=Boolean(`${t.currentTarget.getAttribute("IS-OP")}`),t.currentTarget.children[0].classList.add("active"),t.currentTarget.children[1].style.display="flex";let s=t.currentTarget.getAttribute("data-img");console.log("current img",s),e.classList.remove("Show"),e.querySelector("img").setAttribute("src",s),setTimeout((()=>{e.classList.add("Show")}),200),r=!1,t.currentTarget.setAttribute("IS-OP",!0)})),t.addEventListener("mouseleave",(e=>{r=Boolean(`${e.currentTarget.getAttribute("IS-OP")}`),e.currentTarget.children[0].classList.remove("active"),e.currentTarget.children[1].style.display="none",e.currentTarget.setAttribute("IS-OP",!1),r=!0}))}))}));let swiperBlog=new Swiper(".swiper-blogs",{slidesPerView:3,spaceBetween:30,speed:1e3}),SlidesLength=[...document.querySelectorAll(".swiper-gallery .swiper-slide")];console.log(SlidesLength),document.querySelector(".Gallery-Container .Total").innerHTML=SlidesLength.length;let slides=document.querySelectorAll(".swiper-gallery .swiper-slide"),i=1;slides.forEach((e=>{e.setAttribute("data-num",i),i++}));let swiperGallery=new Swiper(".swiper-gallery",{slidesPerView:2.4,spaceBetween:40,speed:1e3,navigation:{nextEl:".navigationBTN .swiper-button-next",prevEl:".navigationBTN .swiper-button-prev"}});if(swiperGallery.on("slideChange",(e=>{console.log(e.realIndex);var t=e.realIndex+1;document.querySelector(".Current").textContent=t})),document.querySelectorAll(".swiper-gallery .swiper-slide")){var count=1;document.querySelector(".Current").textContent=count}let servicess=document.querySelectorAll(".Service");servicess.forEach((e=>{gsap.to(e,{y:0,opacity:1,scale:1,stagger:.2,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}})}));