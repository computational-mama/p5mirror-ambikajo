 
//  https://teachablemachine.withgoogle.com/models/kaCZztZz/

let modelUrl = 'https://teachablemachine.withgoogle.com/models/kaCZztZz/model.json'

let classifier;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(modelUrl);
}

function setup() {
  createCanvas(400, 400);
  
  video = createCapture(VIDEO);
  
  console.log(classifier)
}

function modelReady(){
  console.log(classifier);
  // classifier.classify(video, gotResults);
}

function gotResults(err, results){
  if(err) console.log(err);
  
  console.log(results);
  
  classifier.classify(video, gotResults);
}

function draw() {
  background(220);
}