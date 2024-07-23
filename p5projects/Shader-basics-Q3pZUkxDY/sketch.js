let theShader

function preload() {
  theShader = loadShader('testshader.vert', 'testshader.frag')
}

function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke()
}

function draw() {
  theShader.setUniform('u_resolution', [width, height])
  shader(theShader)
  rect(0, 0, width, height)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}