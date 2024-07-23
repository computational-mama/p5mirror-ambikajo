let video;
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  const flippedVideo = ml5.flipImage(video);
  image(flippedVideo, 0, 0, width, height);
}
