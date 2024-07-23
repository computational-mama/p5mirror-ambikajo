// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  
  // rectMode(CORNERS)
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function mousePressed(){
  console.log(JSON.stringify(poses))
}

function draw() {
  image(video, 0, 0, width, height);
  strokeWeight(2);

  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 1) {
    let pose1 = poses[0].pose;
    let pose2 = poses[1].pose;

    // Create a pink ellipse for the nose
    fill(213, 0, 143);
    let lWrist = pose1['leftWrist'];
    ellipse(lWrist.x, lWrist.y, 10, 10);

    // Create a yellow ellipse for the right eye
    fill(255, 215, 0);
    let rWrist = pose2['leftWrist'];
    ellipse(rWrist.x, rWrist.y, 10, 10);
    
    // rect(lWrist.x, lWrist.y,rWrist.x, rWrist.y)
    // text("meta")

    // Create a yellow ellipse for the right eye
    // fill(255, 215, 0);
    // let leftEye = pose['leftEye'];
    // ellipse(leftEye.x, leftEye.y, 20, 20);
  }
}
