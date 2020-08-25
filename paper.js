class Paper{
    constructor(x,y,r){
        var option={
            isStatic : false,
            restituiton  : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.body = Bodies.circle(this.x,this.y,this.radius/2,option);
        this.image = loadImage("paper.png");
        this.radius=r;
        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        //rectMode(CENTER);
        fill("pink");
        //ellipse(0,0,this.radius,this.radius);
        image (this.image,0,5,this.radius,this.radius)
        pop ();
    }


    
}
