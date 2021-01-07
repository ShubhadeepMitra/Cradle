class Bob {
  constructor(x,y){
      var options={
          'friction':0.2,
          'density':0.5,
          'restituition':0.7
      }
  this.body = Bodies.circle(x,y,15,options);
  this.radius=15;
  World.add(world,this.body)
    }
  display(){
  var pos=this.body.position;
  var angle=this.body.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle)
  ellipseMode(RADIUS)
  ellipse(0,0,this.radius,this.radius)
  pop()  
}
}
