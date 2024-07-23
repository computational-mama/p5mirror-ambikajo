let data;
let btn;
function preload() {
  data = loadJSON("data.json");
}

function setup() {
  createCanvas(400, 400);
  btn = createButton("click");
  for (i = 0; i < 144; i++) {
    if (data[i].images != null) {
      console.log(data[i].images);
      btn.mousePressed(imgL)
    }
  }
}

function draw() {
  background(220);
}

function imgL(){

        loadImage(data[i].images, 0, 0);
  
}
