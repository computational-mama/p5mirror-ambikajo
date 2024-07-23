
let resolution = 16;//be careful, it makes your computer hang

// let pixels = [];

const density = " ▖▔░▒▓";

let gloria;

function preload() {
  gloria = loadImage("struc.png");
}

function setup() {
  noCanvas();
    gloria.resize(80, 35);
  filter(THRESHOLD);
  gloria.loadPixels();
  for (let j = 0; j < gloria.height; j++) {
    let row = "";
    for (let i = 0; i < gloria.width; i++) {
      const pixelIndex = (i + j * gloria.width) * 4;
      const r = gloria.pixels[pixelIndex + 0];
      const g = gloria.pixels[pixelIndex + 1];
      const b = gloria.pixels[pixelIndex + 2];

      const avg = (r + g + b) / 3;

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") row += "&nbsp;";
      else row += c;
    }
    createDiv(row);
  }
    createP('coloso')
}
