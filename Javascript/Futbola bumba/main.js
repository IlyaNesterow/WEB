const ball = document.getElementById('ball');
const field = document.getElementById('field');


const animate = (options) => {
  const start = performance.now();
  const { duration, timing, draw } = options;

  const _animate = (time) => {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = timing(timeFraction);
    
    draw(progress);
 
    if (timeFraction < 1) requestAnimationFrame(_animate);
  }
  requestAnimationFrame(_animate);
}

const easeOut = (timing) => (timeFraction) => 1 - timing(1 - timeFraction);

const bounce = (timeFraction) => {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return Math.pow(b, 2) - Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2); 
    }
  }
};

const handleClick = () => {
  const floor = field.clientHeight - ball.clientHeight;

  animate({
    duration: 1700,
    timing: easeOut(bounce),
    draw(progress) {
      ball.style.top = floor * progress + 'px'
    }
  });
};
 
ball.addEventListener('click', handleClick);
