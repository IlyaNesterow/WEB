const TEXT = 'nepareizi'

const onKeyPress = function(e){
  if(e.key.length < 2){
    const len = e.target.value.length + 1
    e.target.value = TEXT.repeat(Math.floor((len) / TEXT.length)) + TEXT.slice(0, (len) % TEXT.length)
  }
  return false;
}

document.querySelector('input[type=text]').onkeypress = onKeyPress