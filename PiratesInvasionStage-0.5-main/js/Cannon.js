class Cannon{
    constructor(x, y, cannon_w, cannon_h){

        this.image_cannon = loadImage("assets/CANON.png");
        //this.image_base = loadImage("assets/cannon_base.png");
        this.width = cannon_w;
        this.height = cannon_h;
        //this.width2 = base_w;
        //this.height2 = base_h;
        this.body1 = Bodies.rectangle(x, y, this.width, this.height);
        //this.body2 = Bodies.rectangle(x, y+20, this.width2, this.height2);
        this.angle = angle;

        World.add(world, this.body1);
        //World.add(world, this.body2);

    }

    display() {
        /*if (keyDown(RIGHT_ARROW)){
            angle = angle + 1;
        }*/

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image_cannon, 0, 0, this.width, this.height);
        pop();

    }





}