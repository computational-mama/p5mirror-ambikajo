let img1, img2, img3, img4
let rW, rH
function preload(){
  img1 = loadImage('IMG_0428.PNG')
  img2 = loadImage('IMG_0429.PNG')
  img3 = loadImage('IMG_0430.PNG')
  img4 = loadImage('IMG_0431.PNG')
}

function setup() {
  createCanvas(400, 400);
  rW = random(0,random(img1.width))
  rH = random(0,random(img1.width))
}

function draw() {
  background(220);
  image(img1,0,rH,img1.width/4,img1.height/4)
  image(img2,rW,0,img2.width/4,img2.height/4)
  image(img3,140,rH,img3.width/4,img3.height/4)
  // image(img4,130,120)
  
 
}

function mousePressed() {
  // x += 1;
  redraw();
}
