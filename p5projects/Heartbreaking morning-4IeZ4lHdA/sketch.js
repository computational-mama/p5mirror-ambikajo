let ambi = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,20,20,10);

  if(ambi > 400 ){
    ambi = 0
  }
  circle(ambi, 100, 100);
  rect(100,ambi,30)
  ambi = ambi + 10
}
