function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}
let x = 30;
let y = 100
let angle = 0;
function draw() {
  background(220);
  noFill();
  beginShape(POINTS)
  for(i=0;i<8;i++){
    m = sin(i*12+frameCount)
    vertex(x+i*30,y*m)
  }
  endShape()
  // inc+=20
}
