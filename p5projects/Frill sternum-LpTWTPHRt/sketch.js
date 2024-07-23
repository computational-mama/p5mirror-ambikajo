let data 

function preload(){
  data = loadTable('data.csv', 'csv', 'header')
}

function setup() {
  noCanvas()
  info = data.getString(9,2)
  block = createDiv(info)
}

function keyPressed(){
  console.log(key)
}
