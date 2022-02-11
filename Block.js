class Block{
  constructor(x,y,w,h,vx){
    this.x = x
    this.y = y    
    this.w = w
    this.h = h   
    this.vx = vx
  }
  
  render(){   
    noStroke()
    fill(92, 245, 248, 140)
    rect(this.x,this.y,this.w,this.h)
    this.x = this.x - this.vx;
  }
  
}