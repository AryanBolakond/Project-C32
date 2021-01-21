class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      score(){
        if (this.visibilty<0 && this.visibility>-105){
          score++;
        }
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke(0);
        rect(0, 0, this.width, this.height);
        pop();
      }
}