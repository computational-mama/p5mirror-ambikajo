function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  background(220);
  jaali()
}

function jaali(){
  noStroke()
  rect(0,10,15)
  circle(25,10,25)
  push()
  fill(220)
  circle(25,10,10)
  pop()
  rect(50,10,15)
  rect(0,10,40,5)
  rect(40,10,20,5)
  rect(0,25,115,5)

  
  
}