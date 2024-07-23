let webcam;
let posenet;
let pose;

function setup() {
  createCanvas(640, 480);
  webcam = createCapture(VIDEO);
  webcam.hide();
  posenet = ml5.poseNet(webcam, modelLoaded);
  posenet.on("pose", gotPoses);
}

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
    // console.log(pose)
  }
}

function modelLoaded() {
  console.log("posenet ready");
}

function draw() {
  background(220);
  image(webcam, 0, 0); 
  if (pose) {
    // circle(pose.leftWrist.x, pose.leftWrist.y, 10);
    if(pose.leftWrist.confidence > 0.45 && pose.leftEar.confidence > 0.45){
      textWrap(WORD);
      let d = dist(pose.leftEar.x, pose.leftEar.y,pose.leftWrist.x, pose.leftWrist.y )
      textSize(d/10)
      fill(255)
    text("LOVE IS AN ACT OF WILL, ", pose.leftEar.x, pose.leftEar.y,d );
    } 
    // else {
      // text("LOVE IS AN ACT OF WILL, BOTH AN INTENTION AND AN ACTION", pose.rightWrist.x, pose.rightWrist.y,100)
    // }
  }
}
