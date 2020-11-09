class Rope{
    constructor(body1, pointB, length, stiffness){
        var slingshot_options = {
            bodyA: body1,
            pointB: pointB,
            length: length,
            stiffness: stiffness
        }

        this.string = Constraint.create(slingshot_options);
        this.pointB = pointB;
        World.add(world, this.string);
    }

    display(){
        stroke("red");
    strokeWeight("6")

        var pointA = this.string.bodyA;
        var pointB = this.pointB;

        line(pointA.position.x, pointA.position.y, pointB.x, pointB.y);
    }
}