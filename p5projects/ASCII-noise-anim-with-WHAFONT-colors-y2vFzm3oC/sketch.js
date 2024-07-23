let resolution = 16; //be careful, it makes your computer hang
let inc = 0.01;

// let pixels = [];

// const density = "  colosowethardagency";
const density = "'@B%8WM#*oahkbdpwmZO0Q1lI2xg3D4E5F6e7n'"

let gloria;
let asciiDiv;
let myFont

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const colors = chroma.scale(['#EEBC32', '#EDC8CB', '#B94982', '#B7AAD0', '#7495B1', '#CDD8E3', '#586945', '#ADD5AE', '#E0C7A3']).colors(density.length);
let fontColor = 'black';

let colorIndex = 0;

function preload() {
  gloria = createGraphics(30, 30);
  // myFont = loadFont('WetHard-Regular.otf')
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
      
      //THIS SETTING IS GIVING THE BOX TO NOISE EFFECT RETAIN IT
      xoff += inc*sin(frameCount*0.01);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") row += "&nbsp;";
      else row += "<span style='background-color: " + colors[charIndex] + "; color: " + fontColor + "'>" + c + "</span>";
  colorIndex = (colorIndex + 1) % colors.length;
      
    }
    row += '<br/>'
    yoff += inc;

  }

      asciiDiv.html(row);
      // asciiDiv.style("font-family",myFont)
  // createP("coloso");
}
