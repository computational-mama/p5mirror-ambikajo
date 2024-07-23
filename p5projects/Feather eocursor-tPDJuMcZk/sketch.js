let N = 18

function setup() {
	createCanvas(windowWidth, windowHeight)
	angleMode(DEGREES)
	// stroke()

}

function draw(){
  background(250)
    translate(width/2,height/2-N)
    // for(j=0;j<10;j++){
    for(i=0;i<360;i+=N){

      r = N*2
      x = r*cos(i)
      y = r*sin(i)
      strokeWeight(1)
      line(0,10,x,y)
            strokeWeight(2)

      line(x,y,x*2,y*2+10)
            strokeWeight(4)

      line(x*2,y*2+10,x*4+30,y*4+30)
            strokeWeight(8)

      line(x*4+30,y*4+30,x*8,y*8+10)
    // }
    }
}