const rippleButton = document.querySelector('.ripple-button');

function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty('--x', posX + "px")
    element.style.setProperty('--y', posY + "px")
}

rippleButton.addEventListener('mousedown', (e) =>{
  mousePositionToCustomProp(e, rippleButton);
  rippleButton.classList.add('pulse');
  rippleButton.addEventListener('animationend', () =>{
    rippleButton.classList.remove('pulse');
  })
    console.log(posX, posY);
});