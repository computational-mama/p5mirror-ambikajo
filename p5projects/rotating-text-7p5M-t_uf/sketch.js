let myfont;
let inp;
let indislider;
let inpText;
let radiusslider;
function preload() {
  myfont = loadFont("assets/Archivo-Regular.ttf");
  // angleMode(DEGREES)
}

function setup() {
  createCanvas(600, 800, WEBGL);
  inp = select("#textfield");
  textFont(myfont);
  textSize(100);
  textAlign(CENTER);
  createP("individual rotate")
  indislider = createSlider(0, 360, 0);
  
  createP("radius of the cylinder")
  radiusslider = createSlider(100, 360, 250);
}

function draw() {
  background(224);
  orbitControl();

  fill(20);
  // camera(0, 150,-500, 0, 0, 0, 0, 1, 0);
  rotateY(frameCount/250)
  inpText = String(inp.value());
  // text(inp.value(),0,0)
  pieSlice = (2 * PI) / inpText.length;
  // console.log(floor(pieSlice), pieSlice)
  sep = split(inpText, "");
  // console.log(sep)
  // text(sep,0,0)
  
  radiusC = radiusslider.value()
  for (i = 0; i < inpText.length; i++) {
    var ringSpot = i % inpText.length;
    letter_select = ringSpot;
    x = radiusC * cos(i);
    y = radiusC * sin(i);
    // stack translates
    push();
    fill(20,100,200)
    rotateY(floor(i/inpText.length)*1);
    translate(0,floor(i/inpText.length)*1);
    // ring translates
    rotateY(ringSpot*pieSlice);
    
    translate(0,0,radiusslider.value());
    // console.log(x,y)
    // translate(x, 0, y);
    // rotateY(ringSpot*pieSlice)
    text(sep[i], 0,0);
    pop();
  }
}
