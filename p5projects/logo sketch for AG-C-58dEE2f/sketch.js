let mic;
let c = ["#42bcf5", "#2248a8", "#eb9d17"];

function setup() {
  createCanvas(400, 400);
    rectMode(CENTER);
  angleMode(DEGREES);
  mic = new p5.AudioIn();

  mic.start();
  fft = new p5.FFT(0.8, 32);
  fft.setInput(mic);
  // fft.smooth(1)
  
  textSize(50)
  textAlign(CENTER)
  textFont("Cairo")
    // background("#02217d");
  background(255)
  // frameRate(4)

}

function draw() {
  // background(255,10);
  let spectrum = fft.analyze();
//   noStroke();
//   x1 = map(spectrum[0], 0, 255, -50, 50);
//   y1 = map(spectrum[0], 0, 255, -50, 50);
//   x2 = map(spectrum[1], 0, 255, -50, 150);
//   y2 = map(spectrum[1], 0, 255, -50, 150);
//   x3 = map(spectrum[8], 0, 255, -50, 150);
//   y3 = map(spectrum[3], 0, 255, -50, 150);
//   x4 = map(spectrum[8], 0, 255, -50, 150);
//   y4 = map(spectrum[8], 0, 255, -50, 50);
//   x5 = map(spectrum[3], 0, 255, -50, 50);
//   y5 = map(spectrum[10], 0, 255, -50, 50);

//   // rect(100, 100, x, y);
//   fill(105, 0, 205, 100);
//   beginShape();
//   vertex(150 + x1, 50 + y1);
//   vertex(300, 150 + y2);
//   vertex(100 + x3, 200);
//   vertex(50, 100 + y4);
//   vertex(100 + x5, 100);
//   endShape(CLOSE);

//   fill(50, 150, 205, 100);
//   beginShape();
//   vertex(100 + x3 / 3, 200);
//   vertex(50, 100 + y4);
//   vertex(150 + x1, 50 + y1 / 4);
//   vertex(300, 150 + y2);
//   vertex(100 + x5 / 3, 100);
//   endShape(CLOSE);

//   fill(50, 150, 05, 100);
//   beginShape();
//   vertex(100 + x3 / 3, 200);
//   vertex(50+x3, 100 + y4);
//   vertex(300, 150 + y2);
//   vertex(300 + x5 / 3, 100);
//   vertex(150 + x1, 50 + y1 / 4);
//   endShape(CLOSE);
  
// for (let i = 7; i< spectrum.length; i++){
//     let x = map(i, 0, spectrum.length, 0, width);
//     let h = -height + map(spectrum[i], 0, 255, height, 0);
//     rect(x, height, width / spectrum.length, h )
//   }
  
  noStroke();
  translate(width / 2, height / 2);
  let outerR = 135;
  push()
  for (i = 0; i < 360; i += 30) {

    for (j = 0; j < outerR; j += 30) {
      fill(random(c));
      
//       rotate(random(15, 30));
//       rect(0, j - 30, j / 35, 50);
      
      // rotate(random(15, 30));
      // rect(0, j - 30, j / 20, 50);
      // push()
      rotate(spectrum[8]);
      // console.log(spectrum[8])
      rect(0, j +0, j / 80, random(5,30));
      // pop()
    }
    
//     for (k = 0; k < outerR; k += 30) {
//       fill(random(c));
      
//       rotate(random(15, 30));
//       rect(0, k - 30, k / 15, random(15,25));
//   }
}
  pop()
  
  fill(255)
  rotate(0)
  text("AJAIB",0,0)
  text("GHAR",0,50)
}
