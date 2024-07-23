// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/KgUnskXT_/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let p5lm;
let one;
let two;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
  p5lm = new p5LiveMedia(this, "DATA", null, "ag-server");
  
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  
  //initiate p5lm with classify video
  p5lm.on('data', gotData);
  p5lm.on('disconnect', gotDisconnect);
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

function gotDisconnect(id) {
  print(id + ": disconnected");
}

function gotData(data, id) {
  print(id + ":" + data);
  
  if(label != "" || label != null){
    
  
  let dataToSend = {one: label};
 
  // Have to send string
  p5lm.send(JSON.stringify(dataToSend));
   }
}

// function mousePressed() {
//   x = mouseX;
//   y = mouseY;

//   //ssp.send("hi");
// }

