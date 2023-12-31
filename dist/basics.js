const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const particlesArray = []

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const mouse = { x: -1000, y: -1000 }

canvas.addEventListener('click', () => {
  canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    drawCircle(mouse.x, mouse.y, 15)
  })
})

function drawCircle(mouseX, mouseY, radius) {
  ctx.fillStyle = 'darkblue'
  ctx.beginPath()
  ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2)
  ctx.fill()
}

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 5 + 1
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
  }
  draw() {
    ctx.fillStyle = 'blue'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 25, 0, Math.PI * 2)
    ctx.fill()
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle())
  }
}
init()

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
    particlesArray[i].draw()
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  handleParticles()
  requestAnimationFrame(animate)
}

animate()
