window.addEventListener('load', () => {
  const toggleCircle = document.querySelector('.circle');
  const toggleRounded = document.querySelector('.rounded-rectangle');
  toggleCircle.addEventListener('click', () => {
    toggleCircle.style.transition = 'all 0.5s';
    toggleCircle.style.transform = 'translateX(60px)';
    toggleRounded.style.transition = 'all 0.2 ease 0.4';
    toggleRounded.style.backgroundColor = '#2AC999';
  });
});
