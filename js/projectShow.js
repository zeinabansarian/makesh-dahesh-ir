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

