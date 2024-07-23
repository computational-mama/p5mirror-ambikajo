let img1;
let img2;

function preload() {
  img1 = loadImage("1.png");
  img2 = loadImage("2.png");
}
function setup() {
  createCanvas(550, 400);
  // noLoop()
  textAlign(CENTER)
}

function draw() {
  background(0);
  fill(255)
  text("This project is personal, shaped by our conversations with 50 (and counting...) women about our experiences of studying to be filmmakers in the premier state financed film school in India, The Film and Television Institute of India (FTII).", width/2-100, 100, 300,100)
  push();
  // rotate(-frameCount / 10);
  image(img2, 50 - frameCount * 13, 150- frameCount * 3);
  pop();
  
  push()
    // rotate(-frameCount / 100);

  image(img1, 250 + frameCount * 13, 150+ frameCount * 3);
  pop()
  // const myTimeout1 = setTimeout(set1, 5000);
  // const myTimeout2 = setTimeout(set2,2000);
}
