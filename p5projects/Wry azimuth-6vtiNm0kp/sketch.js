let video
// const URL = "https://teachablemachine.withgoogle.com/models/0AY-2cvEY/";
const modelURL = URL + "model.json";
const metadataURL = URL + "metadata.json";
let startBtn
function preload() {
        
  // metadata = loadJSON(metadataURL)

}


function setup() {
noCan
  startBtn = select('#startbtn')
  startBtn.mousePressed()
}

function draw() {
  background(220);
  image(video,0,0, width,height)
}