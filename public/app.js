window.addEventListener('load', () => {
  let buttonState = false;
  const toggleCircle = document.querySelector('.circle');
  const toggleRounded = document.querySelector('.rounded-rectangle');

  const turnOn = () => {
    toggleCircle.style.transition = 'all 0.5s';
    toggleCircle.style.transform = 'translateX(60px)';
    toggleRounded.style.transition = 'all 0.2 ease 0.4';
    toggleRounded.style.backgroundColor = '#2AC999';
  };

  const turnOff = () => {
    toggleCircle.style.transition = 'all 0.5s';
    toggleCircle.style.transform = 'translateX(0px)';
    toggleRounded.style.transition = 'all 0.2 ease 0.4';
    toggleRounded.style.backgroundColor = 'grey';
  };

  toggleCircle.addEventListener('click', () => {
    if(buttonState)
    {
      turnOff();
    } else {
      turnOn();
    }
    buttonState = !buttonState;
  });
});
