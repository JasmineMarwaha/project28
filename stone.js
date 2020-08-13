class Stone {
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos3 = this.body.position;
        fill("grey");
        ellipseMode(CENTER);
        ellipse(pos3.x, pos3.y, this.r, this.r);
        
    }
}

