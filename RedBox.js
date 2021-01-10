Class RedBox {
    var option = {
        restitution: 1
    };
    this.body = Bodies.rectangle(200,100,50,50,option);
    World.add(world, this.body)

    function display() {
        var pos = this.body.position; 
        rectMode(CENTER);   
        fill(225);
        rect(pos.x,pos.y,this.width,this.height);
    }
}