
function setup() {
  createCanvas(600,600);
  frameRate(1)
}



function draw()
{
background('#f5f5dc');

  for (x=50; x<(width-50); x=(x + random(2,5)))
  {
    strokeWeight(random(0.5,2))
    line(x,random(2,5),x,random(40,60))
  }


  for (x=50; x<(width-50); x=(x + random(2,5)))
  {
    strokeWeight(random(0.5,2))
    line(x,random(595,596),x,random(560,540))
  }
}
