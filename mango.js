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
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
    }
    
    display() {
        var pos = this.body.position;
        fill("yellow");
        //ellipseMode(CENTER);
        //ellipse(pos.x, pos.y, this.radius, this.radius);
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.radius, this.radius);

    }
}
