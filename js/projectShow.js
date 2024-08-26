document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });