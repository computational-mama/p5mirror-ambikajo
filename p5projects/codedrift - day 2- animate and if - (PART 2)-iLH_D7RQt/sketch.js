let img = [];//images array
let mic;
let m;

function preload() {
  img[0] = loadImage("https://i.ibb.co/gmFvCvL/Sweet-2.png");
  img[1] = loadImage("https://i.ibb.co/KXWLsNd/More-swwets.png");
  img[3] = loadImage("https://i.ibb.co/xSjTkL9/Sweet-bowl.png");
  img[2] = loadImage("https://i.ibb.co/VvKCyTB/Pizza.png");
  img[4] = loadImage("https://i.ibb.co/4mzkqgN/3-Sweets.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  angleMode(DEGREES)

  mic = new p5.AudioIn();
  mic.start();
  
  
  for (i = 0; i < img.length; i++) {
    img[i].resize(100, 100);
  }
}

function draw() {
  background(0);
  // circle(20,100,400)
  
  
  for (r = 0; r < 360; r = r + (360 / 6)) {
    push()
    translate(width / 2, height / 2)
    rotate(r)
   // scale(micLevel*20)
    //console.log(r)
    
    
    
    for (i = 0; i < img.length; i++) {
   //  push()
      //set mic val
      micLevel = mic.getLevel();
      let scaleVal = map(micLevel, 0, 1, 1, 2);
       // img[i].resize(scaleVal, scaleVal);
      scale(scaleVal, scaleVal)
      if (i % 2 == 0) image(img[i], -img[i].width / 2, i * 80);

      for (j = 0; j < i; j++) {
        image(img[i], -img[i].width / 2 + j * 80, i * 80);
        image(img[i], -img[i].width / 2 - j * 80, i * 80);
      }
    //  pop()
    }
    
    pop()
  }
}