let img = []; 
let c; 
function preload() { 
  for (i = 0; i < 4; i++) { 
    c = 'IMG_037' + i + '.jpeg' 
    // console.log(c) 
    img[i] = loadImage(c)
    // console.log(img[i]) 
  } 
} 
                           
function setup() { 
  createCanvas(400, 400);
  // noLoop() 
} 
function draw() { 
  background(220);
  for (i = 0; i < 4; i++) { 
    image(img[i], i * 100, 0, 100, 200) 
  } 
}