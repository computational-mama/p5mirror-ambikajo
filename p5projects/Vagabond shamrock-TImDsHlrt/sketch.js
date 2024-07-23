let webcam;
let handpose;
let hands = [];

function setup() {
  createCanvas(640, 480);
  webcam = createCapture(VIDEO);
  webcam.size(640, 480);
  webcam.hide();
  const options = {
    flipHorizontal : true
  }
  handpose = ml5.handpose(webcam, options, modelLoaded);
  handpose.on("hand", (results) => {
    hands = results;
    // console.log(hands)
  });
}

function modelLoaded() {
  console.log("model is ready");
}

function draw() {
  background(220);
  const flipped = ml5.flipImage(webcam)
  image(flipped, 0, 0, webcam.width, webcam.height);
  drawKeypoints()
}

function drawKeypoints() {
  for (let i = 0; i < hands.length; i++) {
    const hand = hands[i];
    
      const thumbX = hand.landmarks[4][0]
      const thumbY = hand.landmarks[4][1]
      const indexFingerX = hand.landmarks[8][0]
      const indexFingerY = hand.landmarks[8][1]
      
      d = dist(thumbX,thumbY,indexFingerX,indexFingerY)
    
      textSize(d)
      text("fingerpainting",thumbX,thumbY)
      ellipse(thumbX,thumbY,10)
      ellipse(indexFingerX,indexFingerY,10)
    
   
  }
}
