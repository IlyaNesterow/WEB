const container = document.getElementById('container');

container.style.transition = 'transform .5s';

const rotate = () => 
  !container.style.transform
    ? container.style.transform = 'rotate(180deg)'
    : container.style.transform = ''

document.getElementById('rotator').addEventListener('click', rotate);