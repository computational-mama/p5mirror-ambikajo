let mic 

function setup() {
  createCanvas(400, 400);
  mousePressed(userStartAudio)
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic)
}

function draw() {
  background("aquamarine")
  circle(100, 200, 100);

//   micLevel = mic.getLevel();
//   console.log(micLevel)
//   ellipse(width/2, 200,200*micLevel);
  
    let spectrum = fft.analyze(16,16);
 noFill();
  stroke(255, 0, 255);
  rect(200,200,spectrum[8])
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x*40, height, width / spectrum.length*40, h )
    // ellipse(width/2, 200,h);

  }
  
  
  let wavy = fft.waveform(512);
  noFill();
  beginShape();
  stroke(20);
  for (let i = 0; i < wavy.length; i++){
    let x = map(i, 0, wavy.length, 0, width);
    let y = map( wavy[i], -1, 1, 0, height);
    vertex(x,y);
        // ellipse(width/2, 200,y);

  }
  endShape();
}
