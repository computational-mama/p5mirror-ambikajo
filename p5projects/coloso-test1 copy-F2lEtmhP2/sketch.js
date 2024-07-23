let inp1, inp2, inp3, inp4, inp5;
let slider1, slider2, slider3, slider4, slider5;
let pg;
function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
}
let r = 10;
let rs = 300
function draw() {
  background(0);
  orbitControl();
  lights();
  rotateY(frameCount * 0.15);
  noStroke();
  // stroke(200);
  // strokeWeight(0.3);
  for (i = 0; i < 360; i += 10) {
    x = 100 * cos(i);
    y = 100 * sin(i);

    push();
    rotateZ(x);
    translate(x, 0, y);
    // fill(120, 180, 10);
    specularMaterial(120, 50, 210);
    shininess(120);
    box(10, 100, 10);
    pop();

    push();
    if (i % 3 == 0) {
      translate(x, -80, y);
      specularMaterial("pink");
      shininess(120);
      sphere(10);
    }
    pop();

    push();
    if (i % 3 == 0) {
      translate(x, 100, y);
      // noStroke()
      // rotateY(60);
      // rotateY(frameCount / 10);
      specularMaterial("red");
      shininess(120);

      torus(40 + x, 4);
    }
    pop();

    push();
    if (i % 5 == 0) {
      specularMaterial("aqua");
      shininess(120);
      rotateZ(y + frameCount / 3);
      translate(x, -150, y);

      cone(-20, -100+y, 15);
      pop();
    }

  }
  r++;

  specularMaterial("grey");
  shininess(20);
  rotateX(frameCount);
  sphere(width);
}
