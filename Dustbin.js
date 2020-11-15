class Dustbin{ //creating the class
    constructor(x,y){ //creating the constructor and arguments
        var options = { //properties
           isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.angle = 0;
        this.thickness = 20;

        this.image = loadImage("dustbingreen.png");

        this.leftBody = Bodies.rectangle(this.x-100,this.y-50,20,100,options);
        Matter.Body.setAngle(this.leftBody,this.angle);
        World.add(world1,this.leftBody); //adding into world1

        this.rightBody = Bodies.rectangle(this.x+100,this.y-50,20,100,options);
        Matter.Body.setAngle(this.rightBody,-1*this.angle);
        World.add(world1,this.rightBody);

        this.bottomBody = Bodies.rectangle(this.x,this.y,200,20,options);
        World.add(world1,this.bottomBody);
    }
    display(){
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;
        var bottomPos = this.bottomBody.position;

        push(); //set
        translate(leftPos.x, leftPos.y); //shifting the box by pos.x, pos.y
        rotate(this.angle); //rotating the box 
        rectMode(CENTER);
        fill("green");
        rect(15,100,20,100); //drawing the rectangle
        pop(); //reset

        push(); //set
        translate(rightPos.x, rightPos.y); //shifting the box by pos.x, pos.y
        rotate(-1*this.angle); //rotating the box 
        rectMode(CENTER);
        fill("green");
        rect(-15,100,20,100); //drawing the rectangle
        pop(); //reset

        push(); //set
        translate(bottomPos.x, bottomPos.y); //shifting the box by pos.x, pos.y
        imageMode(CENTER);
        image(this.image,0,0,200,200); //drawing the rectangle
        pop(); //reset
    }
}