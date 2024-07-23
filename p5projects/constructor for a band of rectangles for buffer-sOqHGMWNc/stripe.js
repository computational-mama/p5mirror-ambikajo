
class Stripe {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  move(posX, posY){
    this.x = this.x+posX  
    this.y = this.y+posY  
  }
  
  display(){
    rect(this.x,this.y,this.w,this.h)
  }
}