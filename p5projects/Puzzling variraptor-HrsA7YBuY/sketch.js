let n = 120

function setup() {
	createCanvas(windowWidth, windowHeight)
	angleMode(DEGREES)
}

function draw() {
	background(255)
	strokeWeight(n/3)
	noFill()
	let y = -n
	for(let j = 0; j <= height; j+=80) {
	beginShape()
	for(let i = 0; i <= width; i+=n) {
		let r = map(sin(i+j+frameCount),-1,1,0,30)
		push()
		vertex(i+r, y/2+j)
		if(y == -n) {
			y = n;
		} else {
			y = -n;
		}
		pop()
	endShape()
	}
	
	}
}