function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(255);
  noStroke();
  w = 30;
  h = 50;

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
