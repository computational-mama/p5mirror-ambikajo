let rad = 200;
let swave;
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB)
  noLoop();
}

function draw() {
  background(255);
  let w = random(100,500)
  push();
  stroke(360,60,100)
  translate(0,height/2)
  for (i = 0; i < 4; i += 1) {
    translate(100+i*30,0);
    fill(300*i,40,100)
    flower(random(0.006,0.05));
  }
  pop();
}

function flower(inc) {
  let sizeR = 1;
  beginShape();
  for (a = 0; a < 4000; a += 1) {
    n = 10 * noise(a / 100);
    swave = n * cos(n * 400);
    twave = n * sin(n * 400);
    ra = 0;
    x_half = ra - sizeR * cos(a);
    y_half = ra - sizeR * sin(a);
    vertex(x_half + swave, y_half + twave+inc*30);
    sizeR += inc;
  }
  endShape();
}
