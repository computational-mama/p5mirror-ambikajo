let mic 

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background("aquamarine")
  circle(100, 200, 100);

  micLevel = mic.getLevel();
  console.log(micLevel)
  ellipse(width/2, 200,200*micLevel);
}
