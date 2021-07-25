class Bob {
    constructor(x, y, radius) {
        var options={
            isStatic:false,
            restitution:1.3,
            friction:0.2,
            density:6
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("circle.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 80, 80);
        pop();
    }
}