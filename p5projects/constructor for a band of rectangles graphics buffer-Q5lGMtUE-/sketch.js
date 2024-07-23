let s1;

function setup() {
  createCanvas(400, 400);
  s1 = new Stripe(0,0,100,100,0,0,20,20)
}

function draw() {
  background(220);
  noStroke();
  s1.display()
}
