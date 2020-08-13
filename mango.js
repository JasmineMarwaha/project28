class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }
    
    display() {
        var pos = this.body.position;
        fill("yellow");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);

    }
}