class Sli {
    constructor(bodyA,pointB){
        var opt={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB=pointB;
        this.body = Constraint.create(opt);
        World.add(world, this.body);
    }
    attach(body){
        this.body.bodyA=body
    }
    p(){
        this.body.bodyA=null
    }

    display(){
       if(this.body.bodyA){
         var pointA = this.body.bodyA.position;
         var pointB = this.pointB;
         strokeWeight(4);
         line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
    }
}