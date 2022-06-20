

const lights = Array.from(document.getElementsByClassName('light'));

let current = 0;
let direction = 'down';

setInterval(() => {
  lights.forEach(light => light.classList.add('inactive'));
  lights[current].classList.remove('inactive');

  if(direction === 'down'){
    if(current < lights.length - 1)
      current += 1;
    else{
      current -= 1;
      direction = 'up';
    }
  } else {
    if(current > 0)
      current -= 1;
    else{
      current += 1;
      direction = 'down';
    }
  }
}, 1000);