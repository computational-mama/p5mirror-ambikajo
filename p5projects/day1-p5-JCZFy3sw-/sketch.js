function setup() {
  createCanvas(400, 400);
background(200, 128, 20)

}

function draw() {

  stroke(200,200,0)
  noFill()
  strokeWeight(0.3)
  circle(200, 200, mouseX);
  
  noStroke()
  fill(0,100,233,mouseX)
  textSize(mouseX)
  text("codedrift",200,200)

}
