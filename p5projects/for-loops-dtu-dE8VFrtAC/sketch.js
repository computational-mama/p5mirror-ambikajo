let move = 0;

function setup() {
  createCanvas(400, 400);
  // console.log(width)
}

function draw() {
  background(220);

  for (let p = 50; p < width; p += 100) {
    for (let q = 50; q < height; q += 100) {
      circle(p, q, 50);
    }
  }

}