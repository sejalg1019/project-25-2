class Paper {
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = 70;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,25, options);
        World.add(world1,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER); 
        image(this.image,0,0,this.r,this.r); 
        pop();
    }
}
