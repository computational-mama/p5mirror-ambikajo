let img1, img2
let webcam
function setup() {
  createCanvas(800, 800,WEBGL);
  // textureWrap(MIRROR);
  img1 = loadImage('https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/06a2a0e8-9b48-11ed-85cb-02420a00016e/gooey.ai%20-%20photo%20an%20underwater%20photo%20of%20a%20soft%20a...ground%204k%208k%20hdr%20hyper%20realistic%20high%20definition.png')
  img2 = loadImage('https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/9172c48c-9b3e-11ed-8cf2-02420a00016e/gooey.ai%20-%20photo%20a%20photo%20portrait%20of%20a%20soft%20and%20...ffect%20with%20sea%20weed%20in%20the%20background%20%204k%208k%20hdr.png')
  angleMode(DEGREES)
  webcam = createCapture(VIDEO)
  webcam.hide()
}

function draw() {
  background(220);
  // image(img1, 0, 0)
  // copy(img1, 10, 10, 40,40, 60, 60, 80, 80)
  translate(-width/2, -height/2)
  noStroke()
  let steps = 10

  for(let j = 0; j < steps; j+=1) {
    let px2 = 0, px3 = 0  

    for(let i = 0; i < steps; i+=1) {

      // let n1 = noise(i/steps)*width/steps
      // let n2 = noise((i+1)/steps)*width/steps
      let n3 = j % 2 != 0 ? width/steps * 0.5 : -(width/steps * 0.5)

      let x1 = px2 
      let x2 = x1 + 1/steps * width
      let x3 = x2 + n3
      let x4 = px3  
     
      
      let tx1 = i/steps
      let ty1 = j/steps
      let tx2 = tx1 + 1/steps
      let ty2 = ty1 + 1/steps

      
      
      
      let y1 = j/steps * height
      let y2 = y1 + 1/steps * height

      
      px2 = x2 
      px3 = x3

      let n1 = sin(x1+(noise(y1)+frameCount*0.001)*height/steps)*width/steps 
      let n2 = sin(x2+(noise(y2)+frameCount*0.001)*height/steps)*width/steps 

      // kuch to hua he, kuch ho gaya he 
      // let n1 = (x1+(noise(y1)+frameCount*0.001)*height/steps) 
      // let n2 = (x2+(noise(y2)+frameCount*0.001)*height/steps) 
      // tx1 += n1
      // ty1 += n1
      // tx2 += n1
      // ty2 += n1
      // n1 = sin(i)*width/steps
      // x1 += n1
      // let n2 = noise(x2+(noise(y2))*height/steps)*width/steps
      // x2 += n1

      if(i % 2 == 0 && j % 2 == 1 || i % 2 == 1 && j % 2 ==0) {
        texture(img1);
      }
      else {
        texture(webcam);
        
      }
      // if(i % 2 == 0){
      //   x3 = x2+10
      //   x4 = x1-10
      // } else {
      //   x3 = x2-10
      //   x4 = x1+10
      // }
      
      textureMode(NORMAL);
      beginShape();
      vertex(x1, y1, tx1, ty1); 
      vertex(x2, y1, tx2, ty1);
      vertex(x3, y2, tx2, ty2);
      vertex(x4, y2, tx1, ty2);
      endShape();
      

    }

    
  }


  // texture(img1);
  // textureMode(NORMAL);
  // beginShape();
  // vertex(-40, -40, 0, 0);
  // vertex(40, -40, 1, 0);
  // vertex(40, 40, 1, 1);
  // vertex(-40, 40, 0, 1);
  // endShape();
}

