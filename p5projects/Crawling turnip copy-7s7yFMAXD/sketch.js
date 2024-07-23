function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  for (x = 100; x < width - 100; x += 5) {

    rect(x, 10, 5, 75);
  }
  
  for (x = 100; x < width - 100; x += 5) {

    rect(10, x, 75, 5);
  }
  
  for (x = 100; x < width - 100; x += 5) {

    rect(300, x, 75, 5);
  }
  
  for (x = 100; x < width - 100; x += 5) {

    rect(x, 10, 5, 75);
  }
  
  for (x = 100; x < width - 100; x += 5) {

    rect(x, 310, 5, 75);
  }
}