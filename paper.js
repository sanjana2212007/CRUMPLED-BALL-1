class Paper{
constructor(x,y,r){
    var options={
        isStatic :false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
  this.body=Bodies.circle(x,y,r/2,options)
  World . add(world,this.body)
  this.r=r/2
}
display(){
var pos=this.body.position;
ellipseMode(RADIUS)
fill ("pink")
ellipse(pos.x,pos.y,this.r,this.r)

}





}