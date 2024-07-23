function setup() {
  createCanvas(400, 400);
  let ws = new WebSocket("ws://localhost:5500/");
  ws.onmessage = function(ev) {
    console.log(ev.data);
  }
}

function draw() {
  background(220);
}