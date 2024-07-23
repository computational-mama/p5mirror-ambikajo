let resolution = 16; //be careful, it makes your computer hang
let inc = 0.1;

// let pixels = [];

const density = " ▖▔░▒▓";
// const density = '▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▉ ▊ ▋ ▌ ▍ ▎ ▏ ▐ ░ ▒ ▓'
// const density = "Ñ@#W$9876543210?!abc;:+=-,._                                      ";

let gloria;
let asciiDiv;

function preload() {
  gloria = createGraphics(50, 30);
}
function setup(){
  noCanvas()
    asciiDiv = createDiv();

}
function draw() {
  let yoff = 0;

  // noCanvas();
  // gloria.resize(80, 35);

  // filter(THRESHOLD);
    let row = "";
  gloria.loadPixels();
  for (let j = 0; j < gloria.height; j++) {
    let xoff = 0;

    for (let i = 0; i < gloria.width; i++) {
      const pixelIndex = (i + j * gloria.width) * 4;
      let rd = noise(xoff, yoff) * 255;

      gloria.pixels[pixelIndex + 0] = rd;
      gloria.pixels[pixelIndex + 1] = rd;
      gloria.pixels[pixelIndex + 2] = rd;
      gloria.pixels[pixelIndex + 3] = 255;

      const avg = (rd);
      xoff += inc*sin(frameCount*0.01);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") row += "&nbsp;";
      else row += c;
    }
    row += '<br/>'
    yoff += inc;

  }
      asciiDiv.html(row);
      // asciiDiv.style("background-color",'aqua')
  // createP("coloso");
}