let table
let btn
function preload(){
   table = loadTable('data.csv','csv', 'header');
}

function setup() {
noCanvas()
  for (let r = 0; r < table.getRowCount(); r++){
      btn = createDiv("div: "+r)
      btn.addClass("btns")
      createP(table.getString(r,1))  
    }

  btn.mousePressed(act)
}

function act(){
  console.log("oka")
}