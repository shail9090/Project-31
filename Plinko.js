class Plinko {
    constructor(x,y,r) {
        var options ={
            isStatic: true
        }
        this.x =x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
 }
display() {
    var pos = this.body.position;
   // fill("white");
   // circle(pos.x, pos.y, this.r);

    push();
    translate(pos.x,pos.y)
   // rotate(angle)
    noStroke();
    fill("green")
    ellipseMode(RADIUS);
    ellipse(0,0, this.r,this.r);
    pop();

    }
};