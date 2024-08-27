gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
let filterBtn = document.querySelectorAll(".filterBtn")
let panels = gsap.utils.toArray(".card");
let panels2 = gsap.utils.toArray(".listProject li");
let listProject = document.querySelectorAll(".listProject li");
let listProjectA = document.querySelectorAll(".listProject li a");
listProjectA.forEach((element, i) => {
  element.setAttribute("href", `#image-${i}`);
  element.addEventListener("click", function (event) {
      let hash = element.getAttribute("href");

      gsap.to(window, {
        duration: 2,
        scrollTo: hash,
      });

  });
});



panels.forEach((item, i) => {
  item.setAttribute("id",`image-${i}`);
  ScrollTrigger.create({
    trigger: item,
    start: "top 50%",
    end: "bottom 50%",

    snap: { snapTo: [0.5], duration: 1, delay: 0 },

    onEnter: ({ progress, direction, isActive }) => {
      setTimeout(() => {
        $(".listProject li").removeClass("activeProjectList");
        listProject[i].classList.add("activeProjectList");
      }, 300);
    },
    onEnterBack: ({ progress, direction, isActive }) => {
      setTimeout(() => {
        $(".listProject li").removeClass("activeProjectList");
        listProject[i].classList.add("activeProjectList");
      }, 300);
    },
  });
});



gsap.to(".listProject ul", {
  yPercent: -80,
  ease: "none",
  scrollTrigger: {
    trigger: ".listProject ul",
    start: "top top",
    end: "max",
    scrub: 1,
    pin: ".listProject",
  },
});

filterBtn[0].classList.add("activeFilter")
filterBtn.forEach(element => {
    element.addEventListener("click" , function(params) {
    $(".filterBtn").removeClass("activeFilter")
    element.classList.add("activeFilter")
    })
});