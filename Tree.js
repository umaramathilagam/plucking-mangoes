class Tree
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.dustbinWidth = 450;
		this.wallThickness = 10;
        this.dustbinHeight = 600;
        
	this.image=loadImage("tree.png");
	this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
	this.leftWallBody = Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false});
	this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false});
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var pos = this.bottomBody.position;
			push()
			translate(pos.x, pos.y+10);
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
			pop()
			
	}

}