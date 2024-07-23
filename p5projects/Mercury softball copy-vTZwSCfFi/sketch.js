
let images = []


let img 
function preload(){
	img = loadImage("https://huggingface.co/computational-mama-research/corporateshwari/resolve/main/image-0.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
	 img.resize(100,100);
imageMode(CENTER)
rectMode(CENTER)
angleMode(RADIANS)
}

function draw() {
	background(25)
	orbitControl()
	translate(-img.width,-height/2+30,0)
	scale(8)
	// image(img,-100,-50)
	
	img.loadPixels();
  // Loop over every pixel in the image
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      // Read the pixel's color
      let originalColor = img.get(x, y);

		let avgCol = (red(originalColor)+green(originalColor)+blue(originalColor))/3
		
		avgDepX = map(avgCol,0,255,-0.1,.1)*70
		avgDepY =map(avgCol,0,255,-0.1,.1)
		// movement = 10*sin(avgDep)
      push()
            rotateY(frameCount/50)
            rotateX(frameCount/50)

      translate(0,0,avgDepX+sin(avgDepX+frameCount/5))
      noStroke()
      fill(originalColor)
      rect(x,y,1)
      pop()
    }
  }
  img.updatePixels();
  	// image(img,0,0	)

}

