let filterBtn = document.querySelectorAll(".filterBtn")
filterBtn.forEach(element => {
  element.addEventListener("click" , function (params) {
    $(".filterBtn").removeClass("activeSchemaList")
    element.classList.add("activeSchemaList")
    
  })
});


  $(document).ready(function () {
    $(".filterBtn").click(function (e) {
        var url4 = $(this).attr("data-project");
        $(".listContainer").load(url4);
    });
  });
  let schTitle = document.querySelectorAll(".schTitle")
  schTitle.forEach(element => {
    element.addEventListener("click" , function (params) {
      element.classList.toggle("activeElement")
        element.nextElementSibling.classList.toggle("activeSchema")
        
    })
  });



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
            start : "top 75%",
            end : "bottom bottom",
          },
          opacity :1,
          y:0,
        })
   
  })
  