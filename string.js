class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            bodyB: stand.body,
            stiffness: 1,
            length: 400
        }
        world = engine.world;
        this.string = Constraint.create(options);
        this.xOfset = pointB.x
        this.yOfset = pointB.y
        World.add(world, this.string);
    }

    display(){
        if (this.string.bodyA) {
            var pointA = this.string.bodyA.position;
            var pointB = this.string.bodyB.position;
            strokeWeight(4);
            stroke("black");
            line(pointA.x, pointA.y, pointB.x + this.xOfset, pointB.y + this.yOfset);
        }
    }
}