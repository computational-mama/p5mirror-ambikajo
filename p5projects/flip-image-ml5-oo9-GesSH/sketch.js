let video;
let posenet;
let poses;
let pose;
let flippedVideo

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
video.size(640, 480);
  video.hide();
 
  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on("pose", (results) => {
    poses = results;
    if (poses.length > 0) {
    // console.log(poses)
          pose = poses[0].pose;
    }
  });
}

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

function draw() {
  background(220);
  flippedVideo = ml5.flipImage(video);

  image(flippedVideo, 0, 0, width, height);
  // image(video, 0, 0, width, height);
  if (pose) {
    circle(width-pose.nose.x, pose.nose.y, 20);
    
    } 
}
