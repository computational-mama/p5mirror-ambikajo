let resolution = 16; //be careful, it makes your computer hang
let inc = 0.01;

// let pixels = [];

// const density = " ▖▔░▒▓";
const density = '▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▉ ▊ ▋ ▌ ▍ ▎ ▏ ▐ ░ ▒ ▓'

let gloria;

function preload() {
  gloria = createGraphics(100, 100);
}

function setup() {
  let yoff = 0;

  noCanvas();
  // gloria.resize(80, 35);

  // filter(THRESHOLD);
  gloria.loadPixels();
  for (let j = 0; j < gloria.height; j++) {
    let row = "";
    let xoff = 0;

    for (let i = 0; i < gloria.width; i++) {
      const pixelIndex = (i + j * gloria.width) * 4;
      let rd = noise(xoff*0.9 + frameCount * 0.1 , yoff + frameCount * 0.2 ) * 255;
      d = dist(i,j, 200,200)
      if(d > 100){
        gloria.pixels[pixelIndex + 0] = 0;
      gloria.pixels[pixelIndex + 1] = 0;
      gloria.pixels[pixelIndex + 2] = 0;
      gloria.pixels[pixelIndex + 3] = 255;
      } else {
        
      gloria.pixels[pixelIndex + 0] = rd;
      gloria.pixels[pixelIndex + 1] = rd;
      gloria.pixels[pixelIndex + 2] = rd;
      gloria.pixels[pixelIndex + 3] = 255;
      }

      const avg = (rd);
      xoff += inc;

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") row += "&nbsp;";
      else row += c;
    }
    yoff += inc;

    createDiv(row);
  }
  createP("coloso");
}
