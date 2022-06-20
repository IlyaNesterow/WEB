window.onload = () => {
  const balls = 6
  const SIZE = 30

  for(let i = 0; i <= balls; i++){
    const ball = document.createElement('div')
    const colorIndex = (255 / balls) * (balls - i)

    ball.style.height = SIZE + 'px'
    ball.style.width = SIZE + 'px'
    ball.style.backgroundColor = `rgb(${colorIndex}, ${colorIndex}, ${colorIndex})`
    ball.style.left = `${(SIZE + 10) * (i + 1)}px`
    ball.style.top = `${(SIZE + 10) * (i + 1)}px`
    ball.style.border = 'solid 1px #111'
    ball.style.borderRadius = '20px'
    ball.style.position = 'absolute'

    document.querySelector('body').appendChild(ball)
  }
}