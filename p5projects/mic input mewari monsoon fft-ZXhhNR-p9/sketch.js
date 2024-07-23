let mic;
let fft;
let imgUDR
function setup() {
  createCanvas(800, 400);
  mic = new p5.AudioIn();
  mic.start();
   fft = new p5.FFT(0.9,1024);
  fft.setInput(mic)
  textAlign(CENTER);
}

function draw() {
  background(220);
  // r =100
 
  let spectrum = fft.analyze();
  noStroke();
  fill(255, 0, 255);
  // for (let i = 0; i< spectrum.length; i++){
  //   let x = map(i, 0, spectrum.length, 0, width);
  //   let h = -height + map(spectrum[i], 0, 255, height, 0);
  //   rect(x, height, width / spectrum.length, h )
  // }

  let ener1 = fft.getEnergy("treble")
  let ener2 = fft.getEnergy("highMid")
  let ener3 = fft.getEnergy("mid")
  let ener4 = fft.getEnergy("lowMid")
  let ener5 = fft.getEnergy("bass")
   circle(100, 100, ener1 )
   circle(200, 100, ener2 )
   circle(300, 100, ener3 )
   circle(400, 100, ener4 )
   circle(500, 100, ener5 )

}
