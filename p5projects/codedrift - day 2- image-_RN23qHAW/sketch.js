let imageName;

function preload(){
  imageName = loadImage("walk.jpg")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(imageName,0,0,imageName.width/4,imageName.height/4)
}