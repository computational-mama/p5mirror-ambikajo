let webcam;
function setup() {
  createCanvas(400, 400);
  webcam = createCapture(VIDEO);
  // imageMode(CENTER);
  webcam.hide();
  angleMode(DEGREES)
  // rectMode(CENTER)
}

function draw() {
  background(220);
noStroke()
  // Mask out the same shapes
  beginClip();
  for (y = 0; y < height; y+=50) {
    for (x = 0; x < width; x+=50) {
        push();

      translate(x, y);
            rotate(10*sin(x+y))

      rect(0,0,40)
      pop()
      // rect(x+24,y+24, 40);
    }
  }
  endClip();

  image(webcam, 0, 0);
  // pop();
}
