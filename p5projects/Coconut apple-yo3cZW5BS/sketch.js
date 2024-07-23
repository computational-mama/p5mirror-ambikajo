let pg 
function setup() {
  createCanvas(400, 400);
  pg = createGraphics(12,12)
}

function draw() {
  background(220);
  pg.background(255)
  pg.strokeWeight(0.1)
  pg.stroke(0)
  pg.line(0,0,pg.width,pg.height)
  // scale(mouseX)
  translate(width/2,height/2)
  for(i=0;i<10;i++){
    
    image(pg,i*12,0)
  }
}