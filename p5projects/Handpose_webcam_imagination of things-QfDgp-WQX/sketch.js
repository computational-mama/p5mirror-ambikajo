let handpose;
let video;
let predictions = [];
let textArr = ["let", "your", "fingers", "not", "point"];
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("predict", (results) => {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
  textAlign(CENTER)
  textSize(20)
  angleMode(DEGREES);
  rectMode(CORNERS);
}


function modelReady() {
  console.log("Model ready!");
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();


      
      let index;


      // pop()
      if (j == 4 || j == 8 || j == 12 || j == 16 || j == 20 ) {
        if(j==4){ index = 0}
        if(j==8){ index = 1}
        if(j==12){ index = 2}
        if(j==16){ index = 3}
        if(j==20){ index = 4}
        ellipse(keypoint[0], keypoint[1]-15, 10, 10);
        text(textArr[index], keypoint[0], keypoint[1]-25);
      }
    }
  }
}
