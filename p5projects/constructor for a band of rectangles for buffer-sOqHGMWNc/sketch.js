let s1;
let sArr = [];
let m = 1;
let d = 20;
let pg;
function setup() {
  createCanvas(400, 400);
  pg = createGraphics(100, 100);

    //check the stripe constructor file in the left
    s1 = new Stripe(0, 0, d, pg.height);

}

function draw() {
  background(220);
  noStroke();
  buf()
  pg.background(10);

  image(myp5,0,0)
}

function buf(){
      s1.display();
      s1.move(1, 0);

}



