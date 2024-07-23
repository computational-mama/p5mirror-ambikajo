function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
}
let r = 10;
let rs = 300;
function draw() {
  background(120);
  orbitControl();
  noStroke();
  // rotateX(90)
  cylinder(120, 180);
}
