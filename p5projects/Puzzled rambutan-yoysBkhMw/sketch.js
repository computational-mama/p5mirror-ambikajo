let imagePattern;
let graphicsPattern;

let img;
let buffer;

function preload() {
  img = loadImage("modern_vampires_of_the_city.png");
}

function setup() {
  createCanvas(500, 500);
  // pixelDensity(1);

  // create an image pattern based on the image we loaded
  imagePattern = createPattern(img);

  // create an empty graphics
  buffer = createGraphics(15, 15);
  // set the pixel density to 1 to make sure it looks as intended
  buffer.pixelDensity(1);
  // draw a diagonal black line
  buffer.background(255);
  buffer.stroke(0);
  buffer.strokeWeight(1);
  // buffer.rect(0, 0, 15, 9);
  buffer.line(0, 0, 15, 9);

  // create a battern based on our graphics object
  graphicsPattern = createPattern(buffer);
}

function draw() {
  // fill the background with our image pattern;
  // backgroundPattern(imagePattern);
  background(255);
  // set the fill style to our graphics pattern
  fillPattern(graphicsPattern);
  push();
  translate(mouseX, mouseY);
  rect(0, 0, 200, 200);
  pop();
  
}
