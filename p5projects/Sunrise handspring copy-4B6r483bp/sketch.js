let cameraL;
var tracker;
var features; //list of facial features
function setup() {
  createCanvas(300, 300);
  
  // create webcam
  cameraL = createCapture(VIDEO);
  cameraL.size(100, 100);
  // webcam.hide();
var ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(cameraL);
  
}

function draw() {
  background(0)
  
}