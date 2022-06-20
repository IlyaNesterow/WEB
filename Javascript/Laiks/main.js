const container = document.querySelector('p');

const formatNum = (val) =>
  val.toString().length < 2
    ? `0${val}`
    : val

const setDate = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  container.innerText = `${date.getHours()}:${formatNum(minutes)}:${formatNum(seconds)}`;
  document.body.style.backgroundColor = `rgb(${seconds},${seconds * 3},${seconds * 5})`;
}

setInterval(() => {
  setDate();
}, 1000);

setDate();