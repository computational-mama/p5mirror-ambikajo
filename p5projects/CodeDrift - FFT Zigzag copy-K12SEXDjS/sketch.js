let font;
let mic;
let dewberry;
let veryperi;
let eggshellblue;
let colArr = [];
let spectrum;
let fftOn = false;
let micOn = false;
let slider
let val 
function preload() {
  font = loadFont("Barlow-Bold.ttf");
}
function setup() {
  slider = createSlider(0, 32, 8, 1);
  slider.position(200, 0);
  slider.style('width', '180px');  
  sliderAmount = createP("spectrum value: "+val)
  sliderAmount.position(400, -15);

  startAudio = select("#startmic");
  startAudio.mousePressed(setSpectrum);
  toggleMic = select("#togglemute");
  toggleMic.mousePressed(muteToggle);
  createCanvas(1080, 1080);
  rectMode(CENTER);
  textAlign(CENTER);
  textFont("Eczar");

  dewberry = color(139, 88, 151);
  veryperi = color(102, 103, 171);
  eggshellblue = color(163, 204, 201);
  colArr = [dewberry, veryperi, eggshellblue];
  displayDensity(4)
}

function draw() {
  background(255);
  if (fftOn == true) {
    spectrum = fft.analyze();

    // console.log(spectrum)
    // translate(width/2,height/2)
    // noStroke()
    strkWght = [1, 3, 5, 8]
    strokeWeight(2);
    strokeJoin(ROUND);
    noFill();
     let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(veryperi);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
  }
  textSize(10);

  // stx = mouseX
  // sty = mouseY
  // text(stx+","+sty,mouseX,mouseY)
  push();
  fill(veryperi);
  strokeWeight(0);
  // noFill()
  textSize(250);
  text("कोड", width / 2, height / 2);
  text("drift", width / 2 - 4, height / 2 + 200);
  pop();
}

// function mousePressed(){
//   save('logo')
// }

function setSpectrum() {
  mic = new p5.AudioIn();
  
  mic.start();
  fft = new p5.FFT(0.8, 16);
  fft.setInput(mic);
  // fft.smooth(1)
  // frameRate(4);

  console.log("fft on");
  fftOn = true;
  micOn = true;
  
}

function muteToggle() {
  micOn = !micOn
  if(micOn == true){
      mic.stop();
  } else {
    // micOn = !micOn
    mic.start()
  }
  console.log(micOn)
}
