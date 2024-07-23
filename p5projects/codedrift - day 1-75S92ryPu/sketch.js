function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("magenta");
  circle(100, 100, 120);
  triangle(200, 150, 350, 150, 200, 220);
  rect(50, 250, 150, 100);
  text("codedrift", 250, 50);
  circle(mouseX, mouseY, 120);
}
