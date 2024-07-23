let mic
function setup() {
  createCanvas(400, 400,WEBGL);
    mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(220);
   let vol = mic.getLevel();
  

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1,40, height/2);
  rotateX(frameCount/100)
  box(h)
}