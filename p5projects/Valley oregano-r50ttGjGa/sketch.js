let coverImg;
function setup() {
  noCanvas();
  coverImg = createVideo("cropped-trim-8.mp4", vidLoad);
  coverImg.id("myVideo")
  // coverImg.hide();
  // coverImg.size(100, 100);
}

function vidLoad() {
  // coverImg.loop();
  // coverImg.setAttribute("controls")
  document.getElementById("myVideo").controls = true;

  // coverImg.controls = true;
  coverImg.volume(0.5);
}
