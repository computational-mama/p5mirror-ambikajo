let handpose;
let video;
let predictions = [];
let textArr = ["let", "your", "fingers", "not", "point"];
let startBtn
function setup() {
  createCanvas(640, 480);
  startBtn = createButton("Start Camera")
  startBtn.mousePressed(startModel)
  // textAlign(CENTER)
  angleMode(DEGREES);
  rectMode(CORNERS);
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  if(video){
      image(video, 0, 0, video.width, video.height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  }

}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      let thumbX = prediction.landmarks[4][0]; //thumb tip landmark point is 4 as per the model keypoint 0 is the x coordinate
      let thumbY = prediction.landmarks[4][1];

      let indexFingerX = prediction.landmarks[8][0]; //index tip landmark point is 4 as per the model

      let indexFingerY = prediction.landmarks[8][1];

      let dy = dist(thumbX, thumbY, indexFingerX, indexFingerY);

      // console.log(dy)
      textSize(dy);
      // rotate(dy)
      counter = ceil(dy);
      let index;
      if(counter > 0 && counter <20){
        index = 0
      } else if(counter > 21 && counter <60){
        index = 1
      } else if(counter > 61 && counter < 80){
        index = 2
      } else if(counter > 81 && counter < 100){
        index = 3
      } else {
        index = 4
      }
      text(textArr[index], indexFingerX, indexFingerY, thumbX, thumbY);

      // pop()
      if (j == 4 || j == 8) {
        ellipse(keypoint[0], keypoint[1], 10, 10);
      }
    }
  }
}

function startModel(){
  video = createCapture(VIDEO);
  video.size(640, 480);
  options = {
    flipHorizontal: true, // boolean value for if the video should be flipped, defaults to false

  }
  handpose = ml5.handpose(video, options, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("predict", (results) => {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}