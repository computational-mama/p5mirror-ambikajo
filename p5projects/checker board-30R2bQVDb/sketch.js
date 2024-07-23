function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(220);
  w = 40;
  h = 40;
  noStroke();
  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
      if (j % 2 == 0) {
        if (i % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        }
      } else {
        if (i % 2 == 0) {
          fill(255);
        } else {
          fill(0);
        }
      }
      rect(i * w, j * h, w, h);
    }
  }
}
