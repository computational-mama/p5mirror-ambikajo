
class Stripe {
  constructor(gx,gy,gw,gh, x, y, w, h) {
    this.gx = gx;
    this.gy = gy;
    this.gw = gw;
    this.gh = gh;
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
    pr = createGraphics(this.gw,this.gh)
    pr.rect(this.x,this.y,this.w,this.h)
    image(pr,this.gx,this.gy)
  }
}