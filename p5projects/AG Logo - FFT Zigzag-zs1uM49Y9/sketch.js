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
  font = loadFont("Cairo-Bold.ttf");
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
  textFont(font);

  dewberry = color(139, 88, 151);
  veryperi = color(102, 103, 171);
  eggshellblue = color(163, 204, 201);
  colArr = [dewberry, veryperi, eggshellblue];
  background(0);
}

function draw() {
  if (fftOn == true) {
    spectrum = fft.analyze();

    // console.log(spectrum)
    // translate(width/2,height/2)
    // noStroke()
    strkWght = [1, 3, 5, 8]
    strokeWeight(random(strkWght));
    strokeJoin(ROUND);
    noFill();
    for (i = 10; i > 1; i -= 4) {
      // stroke(random(colArr))
      fill(0);
      stroke(eggshellblue);
      // move = map(mouseX,0,width,0,15)
       val = slider.value();
      move = spectrum[val];
      // strokeWeight(move);

      // move = 0
      beginShape();

      vertex(213 - move * i, 561 + move * i); //bottom left of "A"
      vertex(273 - move * i, 355 + move * i); // left of "A"
      vertex(358 - move * i, 355 - move * i); // top left of "A"
      vertex(382 - move * i, 370 - move * i); // top right of "A"
      vertex(402 - move * i, 370 - move * i); //  left of "J"
      vertex(403 - move * i, 355 - move * i); //  right of "J"
      vertex(590 - move * i, 355 - move * i); //  top of "J"
      vertex(612 - move * i, 370 - move * i); //  top of "J"
      vertex(624 - move * i, 370 - move * i); //  top of "J"
      vertex(624 - move * i, 355 - move * i); //  top of "AI"
      vertex(800 + move * i, 355 - move * i); //  top of "B"
      vertex(836 + move * i, 373 + move * i); //  top of "B"
      // vertex(847 + move * i, 416 + move * i); //  top of "B"
      // vertex(829 + move * i, 451 + move * i); //  top of "B"
      vertex(847 + move * i, 461 + move * i); //  top of "B"
      vertex(847 + move * i, 521 + move * i); //  side of "B"
      vertex(829 + move * i, 561 + move * i); //  top of "r"
      vertex(859 + move * i, 581 + move * i); //  top of "r"
      vertex(859 + move * i, 635 + move * i); //  top of "r"
      vertex(838 + move * i, 675 + move * i); //  top of "B"
      vertex(877 + move * i, 760 + move * i); //  top of "H"
      vertex(484 + move * i, 760 + move * i); //  top of "H"
      vertex(484 + move * i, 740 + move * i); //  top of "H"
      vertex(434 + move * i, 740 + move * i); //  top of "H"
      vertex(434 + move * i, 760 + move * i); //  top of "H"
      vertex(234 + move * i, 760 + move * i); //  bottom left of "G"
      vertex(203 - move * i, 641 + move * i); //  bottom left of "G"
      vertex(253 - move * i, 561 + move * i); //  bottom left of "G"

      endShape(CLOSE);
      //     // circle(width/2,height/2,i*mouseX)
    }
  }
  textSize(10);

  // stx = mouseX
  // sty = mouseY
  // text(stx+","+sty,mouseX,mouseY)
  push();
  fill(eggshellblue);
  strokeWeight(0);
  // noFill()
  textSize(250);
  text("AJAIB", width / 2, height / 2);
  text("GHAR", width / 2 - 4, height / 2 + 200);
  pop();
}

// function mousePressed(){
//   save('logo')
// }

function setSpectrum() {
  mic = new p5.AudioIn();
  
  mic.start();
  fft = new p5.FFT(0.8, 32);
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
