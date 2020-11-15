class Ground{  //making the class
    constructor (x,y,width,height){ //making the constructor and the argument
        var options = { //properties
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height; 
        World.add(world1, this.body); //adding to world1
    }

    display(){ //creating the display function
        var pos = this.body.position; //storing the position of the body in pos
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height); //drawing the rectangle for the ground
    }
}