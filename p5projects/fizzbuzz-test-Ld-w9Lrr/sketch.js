function setup() {
  createCanvas(400, 400);
}
  let x = 0;
function draw() {
  background(220);
  if (x < 100) {
    x++;
    if (x % 3 == 0 && x % 5 != 0) {
      console.log("fizz");
    } else if (x % 5 == 0 && x % 3 != 0) {
      console.log("buzz");
    } else if (x % 5 == 0 && x % 3 == 0) {
      console.log("fizzbuzz");
    } else {
      console.log(x);
    }
  }
}