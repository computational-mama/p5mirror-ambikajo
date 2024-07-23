let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
  textAlign(CENTER);
}

function draw() {
  background(220);
  // r =100
  m = mic.getLevel();
  console.log(m);
  // r = map(m,0,1,40,150)
  textSize(50);
  if (m > 0.02) {
    text("excited", width / 2, height / 2);
  } else {
    text("dull", width / 2, height / 2);
  }
}
