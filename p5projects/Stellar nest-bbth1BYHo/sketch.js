
function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  orbitControl()
  let r =200
  // rotateY(frameCount/10)
  // rotateX(frameCount/10)
  fill(255,100,100,70)
  stroke(100,50)
  rotateX(70)
      beginShape()
  for (theta = 180; theta < 270; theta += 10) {
    for (phi = 0; phi < 360; phi += 12) {
      

      x = r * sin(theta) * cos(phi);
      y = r * sin(theta) * sin(phi);
      z = r * cos(theta);
      
      // vertex(0,0,0)
      vertex(x,y,z)
      
  
    }
  }
      endShape()
}
