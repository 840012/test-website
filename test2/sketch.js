function setup() {
  createCanvas(windowWidth, windowHeight);
  fill
  console.log("Hello.")
}

var balls = []

function draw() {
  background(mouseX, mouseY, 100);
  //noStroke()
  strokeWeight(1)
  circle(mouseX, mouseY, 20);
  noFill()
}

function draw() { 
  background(0)
  balls.forEach(ball => {
    ball.draw()
  })
}

function mouseClicked() {
  balls.push(new Ball(mouseX, mouseY, random(-5, 5), random(-5, 5)))
}

class Ball {
  constructor(x, y, speedX, speedY){
    this.x = x
    this.y = y
    this.speedX = speedX
    this.speedY = speedY
  }

  draw() {
    this.x += this.speedX
    this.y += this.speedY
    this.x = (this.x + width) % width
    this.y = (this.y + width) % height
    circle (this.x, this.y, 15)
  }
}
