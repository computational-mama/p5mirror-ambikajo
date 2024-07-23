let mic;
let c = ["#42bcf5", "#2248a8", "#eb9d17"];
let points
let points2
let bounds
let font
function preload(){
    font = loadFont('Barlow-Bold.ttf');

}
function setup() {
  createCanvas(400, 400);
  // textSize(20)
    rectMode(CENTER);
  angleMode(DEGREES);
  // let n = `
    points = font.textToPoints('AJAIB', 0, 0,0.4, {
    sampleFactor: 100,
    simplifyThreshold: 0
  });
  
  console.log(points)
   points2 = font.textToPoints('GHAR', 0, 0, {
    sampleFactor: 10,
    simplifyThreshold: 0
  });
  
    bounds = font.textBounds(' p5 ', 0, 0, 10);

  
  mic = new p5.AudioIn();

  mic.start();
  fft = new p5.FFT(0.8, 32);
  fft.setInput(mic);
  // fft.smooth(1)
  
  textAlign(CENTER)
  textFont("Cairo")
    // background("#02217d");
  // background(255)
  // frameRate(4)
  noLoop()
}

function draw() {
  background(255);
  let spectrum = fft.analyze();
  
  beginShape();
  translate(width/2,height/2)
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    vertex(
      p.x*width,
      p.y *height
    );
  }
  
  endShape(CLOSE);
  
}
