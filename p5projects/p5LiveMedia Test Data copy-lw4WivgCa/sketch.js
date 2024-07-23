// This is a test of the data sharing capabilities of p5LiveMedia webrtc library and associated service.
// Open this sketch up 2 times to send data back and forth

let x = 0;
let y = 0;

let p5lm;

// Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/KgUnskXT_/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";

// Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }


function setup() {
  let myCanvas = createCanvas(400, 400);
  p5lm = new p5LiveMedia(this, "DATA", null, "w83C-S6DU");
  p5lm.on('data', gotData);
  p5lm.on('disconnect', gotDisconnect);
  video = createCapture(VIDEO);
    video.size(32, 24);
    // video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
}

function draw() {
  background(220);
  background(0);
    // Draw the video
    // image(flippedVideo, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
  stroke(255);
  
  fill(255,0,0);
  // ellipse(x,y,100,100); 
  
}

function gotDisconnect(id) {
  print(id + ": disconnected");
}

function gotData(data, id) {
  print(id + ":" + data);
  
  // If it is JSON, parse it
  let d = JSON.parse(data);
  // x = d.x;
  // y = d.y;
  label = d.label
}

function mousePressed() {
  x = mouseX;
  y = mouseY;

  let dataToSend = {x: mouseX, y: mouseY, label: label};
  
  // Have to send string
  p5lm.send(JSON.stringify(dataToSend));
  
  //ssp.send("hi");
}

function mouseDragged() {
  x = mouseX;
  y = mouseY;
  let dataToSend = {x: mouseX, y: mouseY, label: label};
  
  // Have to send string
  p5lm.send(JSON.stringify(dataToSend));
}

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }