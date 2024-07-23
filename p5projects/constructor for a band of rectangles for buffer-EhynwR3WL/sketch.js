let s1;
let sArr = [];
let m = 1;
let d = 20;
let pg;
function setup() {
  createCanvas(400, 400);
  // pg = createGraphics(100, 100);
  for (i = 0; i < d; i++) {
    //check the stripe constructor file in the left
    sArr[i] = new Stripe(100,100,i * d, 0, d,100);
  }
}

function draw() {
  background(220);
  noStroke();
  // pg.background(20);
  buf()
   // pg.rect(0,0,20,10)
  // image(pg, 0, 0);
}

function buf(){
  for (i = 0; i < d; i++) {
    if (i % 2 == 0) {
      sArr[i].display();
      sArr[i].move(1, 0);
    }
    if (sArr[i].x > width) {
      sArr[i].x = -1;
    }
    sArr[i].show()
  }
}