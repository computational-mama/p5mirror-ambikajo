let webcam;
let posenet;
let pose1, pose2;
let pose 

function setup() {
  createCanvas(640, 480);
  webcam = createCapture(VIDEO);
  webcam.hide();
  posenet = ml5.poseNet(webcam, modelLoaded);
  posenet.on("pose", gotPoses);
    textFont('Comfortaa')

}

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 1) {
    pose1 = poses[0].pose;
    pose2 = poses[1].pose;
    // console.log("pose1: ", pose1,"pos2: " ,pose2)
  }
}

function modelLoaded() {
  console.log("posenet ready");
}

function draw() {
  background(220);
  image(webcam, 0, 0); 
  if (pose1 && pose2) {
    circle(pose1.nose.x, pose1.nose.y, 10);
    circle(pose2.nose.x, pose2.nose.y, 10);
    if(pose1.nose.confidence > 0.45 && pose2.nose.confidence > 0.45){
      textWrap(WORD);
      let d = dist(pose1.nose.x, pose1.nose.y,pose2.nose.x-50, pose2.nose.y )
      textSize(d/10)
      fill(255)
    text("LOVE IS AN ACT OF WILL, ", pose1.nose.x+30, pose1.nose.y,d );
    } 
    
  }
}
