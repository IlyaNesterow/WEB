const train = document.getElementById('train');

const handleClick = () => {
  let count = 0

  const interval = setInterval(() => {
    train.style.left = (count++ * 10) + 'px';
    if(((count * 10) + train.width) > window.innerWidth / 2) clearInterval(interval);
  }, 20);
}

train.addEventListener('click', handleClick);