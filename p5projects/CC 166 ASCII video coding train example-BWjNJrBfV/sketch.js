// Image to ASCII
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/166-ascii-image.html
// https://youtu.be/55iwMYv8tGI

// ASCII video: https://editor.p5js.org/codingtrain/sketches/KTVfEcpWx
// ASCII image canvas: https://editor.p5js.org/codingtrain/sketches/r4ApYWpH_
// ASCII image DOM: https://editor.p5js.org/codingtrain/sketches/ytK7J7d5j
// ASCII image source text: https://editor.p5js.org/codingtrain/sketches/LNBpdYQHP
// ASCII image weather API: https://editor.p5js.org/codingtrain/sketches/DhdqcoWn4

const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
// const density = '       .:-i|=+%O#@'
// const density = '        .:░▒▓█';
// const density = " ○•◘███";


let video;
let asciiDiv;
let gifv
let inp_gif
let f

function preload(){
  gifv = loadImage('ezgif.com-gif-maker.gif')
}

function setup() {
  // noCanvas();
  f = createGraphics(40,40)
  // inp_gif = createImg('ezgif.com-gif-maker.gif',"gifmaker")
  // video = createCapture(VIDEO);
  // video.size(64, 48);
  asciiDiv = createDiv();
}

function draw() {
  f.background(200,10)
  f.fill(120)
  f.triangle(mouseX-10,mouseY-10,mouseX,mouseY,mouseX+10,mouseY+10,)
  f.circle(mouseX,mouseY,10)
  image(f,0,0)
  f.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < f.height; j++) {
    for (let i = 0; i < f.width; i++) {
      const pixelIndex = (i + j * f.width) * 4;
      const r = f.pixels[pixelIndex + 0];
      const g = f.pixels[pixelIndex + 1];
      const b = f.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
