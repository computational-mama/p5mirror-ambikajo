function setup() {
createCanvas (400, 400);
}
let x=0
function draw() {
background (220);
circle(x, 100,40)
if (x+40<windowWidth){
x++
} else {
x=0
}}