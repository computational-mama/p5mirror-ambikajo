let videoElement;
let predictions = [];
let handpose;
let hands = []
function setup() {
  createCanvas(640, 480);
  videoElement = createCapture(VIDEO);
  videoElement.size(640, 480)
  videoElement.hide();

  const options = {
    flipHorizontal: true, // boolean value for if the video should be flipped, defaults to false
    maxContinuousChecks: Infinity, // How many frames to go without running the bounding box detector. Defaults to infinity, but try a lower value if the detector is consistently producing bad predictions.
    detectionConfidence: 0.8, // Threshold for discarding a prediction. Defaults to 0.8.

  };

  handpose = ml5.handpose(videoElement, options, modelLoaded);
  handpose.on("hand", (results) => {
    hands = results;
      // console.log(predictions);

  });
}

function modelLoaded() {
  console.log("Model Loaded!");
}

function draw() {
  //
  const flippedImage = ml5.flipImage(videoElement)
  image(flippedImage,0,0,videoElement.width,videoElement.height)
  drawKeypoints()
}

function drawKeypoints() {
  for (let i = 0; i < hands.length; i += 1) {
    const hand = hands[i];
    
      // console.log(hand)
    for (let j = 0; j < hand.landmarks.length; j += 1) {
      const keypoint = hand.landmarks[j];
      //modulo of 4 gives on the top keypoints from the fingers and j == 0 is for the base of the hand near the wrist
      // if(j % 4 == 0 && j > 0){
        fill(0, 255, 0);
        noStroke();
        ellipse(keypoint[0], keypoint[1], 10, 10);
      // }
      
    }
    
    
  }
}