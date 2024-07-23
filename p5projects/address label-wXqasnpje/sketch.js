let label

let addr = "Ambika Joshi<br>215, Panchratna Complex,<br>Bedla Road<br>Udaipur - 313001<br>Ph+91-9008639111"

let labelcol;

let numOfLabels = 25

function setup() {
 noCanvas()
  labelcol = createDiv("")
  labelcol.id("labelcol")
  for(i=0;i<numOfLabels;i++){
    label = createP(addr)
    label.addClass("label")
    label.parent("labelcol")
  }
}

function draw() {
}