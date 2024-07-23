let imgUDR
function preload(){
  imgUDR = loadImage('udaipur_01-cut.png')
}

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(200);
  filter()
  image(imgUDR,0,0)
    filter(THRESHOLD);

}
