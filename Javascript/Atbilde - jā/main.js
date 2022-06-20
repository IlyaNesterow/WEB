const noBtn = document.getElementById('no-btn');

const move = () => {
  noBtn.style.top = Math.floor((Math.random() * window.innerHeight) + 10) + 'px';
  noBtn.style.left = Math.floor((Math.random() * window.innerWidth) + 10) + 'px';
}

noBtn.addEventListener('mouseover', move);