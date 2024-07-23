let myFont
let slider
function preload(){
  myFont = loadFont("CirrusCumulus.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont)
  slider = createSlider(90,300,100)
}

function draw() {
  background(220);
  textSize(slider.value())
  textLeading(200)
  text("code as a practice of care",100,200,width-100)
}