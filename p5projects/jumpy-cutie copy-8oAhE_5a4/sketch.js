let a = 0
let r = 0
let rad = 140
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  rectMode(CENTER)
      background(220);

}

function draw() {

  translate(0,height/2)
  if(a>179){
    a = 0
    r += rad
  } else {
    a+=5
    r = r
  }
   // console.log(a)
  x = -rad/2*cos(a)
  y = -rad/2*sin(a)
  push()
  translate(x+r,y)
  rotate(a)
  rect(0,0,40)
  // rect(0,a,20)
  pop()
}