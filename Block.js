class Block{
    constructor(x,y){
        var options = {
            'restitution': 0.6,
            'density': 1.0,
            'isStatic': false
        }
        this.body = bodies.rectangle(x,y,100,30,options);
        this.width= 100;
        this.height = 30;
        this.image = loadImage("sprites/pxblock.png");
        world.add(myWorld, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}