window.onload = () => {
  const select = document.getElementsByName('city')[0]
  const clock = document.getElementById('clock')
  let difference = 0
  let local = true
  
  const updateclock = (e) => {
    const { options } = e.target 
    if(options.selectedIndex === 0){
      local = true
      return 
    } else {
      difference = parseInt(options[options.selectedIndex].value)
      local = false
    }
  }
  
  const formatNum = (val) =>
    val.toString().length < 2
      ? `0${val}`
      : val
  
  const getTime = () => {
    const date = new Date()
    if(local) return date
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * (difference)))
  }
  
  setInterval(() => {
    const time = getTime()
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    clock.innerText = `${formatNum(time.getHours())}:${formatNum(minutes)}:${formatNum(seconds)}`;
  }, 1000)

  select.addEventListener('change', updateclock)
};