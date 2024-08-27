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
