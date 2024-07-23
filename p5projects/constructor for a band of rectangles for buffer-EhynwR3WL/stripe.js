
class Stripe {
  constructor(gx,gy,x, y, w, h) {
    this.gx = gx;
    this.gy = gy;
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
    pg = createGraphics(this.gx,this.gy)
    pg.pixelDensity(4)
    pg.rect(this.x,this.y,this.w,this.h)
    
  }
  
  show(){
    image(pg,this.gx,this.gy)
    
  }
}