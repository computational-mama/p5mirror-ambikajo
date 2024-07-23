let x = 0;
let speed = 3

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("aquamarine")
  circle(x, 200, 100);
  if (x > width) {
    speed = -3;
  }

  x = x + speed;
  
}
