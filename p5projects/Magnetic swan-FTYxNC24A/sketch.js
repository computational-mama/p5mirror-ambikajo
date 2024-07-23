function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
      push()
    // rotate(90)

  for(i=0;i<10;i++){  
    shape1(20,i*105)
  }
      pop()

  
}

function shape1(a,b){
  strokeWeight(2)
  noFill()
  beginShape()
  vertex(a+100,b)
  vertex(a,b)
  vertex(a,b+100)
  vertex(a+100,b+100)
  vertex(a+100,b+50)
  endShape()
  
}
