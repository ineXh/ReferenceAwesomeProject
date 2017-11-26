function Cannon(){
	this.create();
}
Cannon.prototype = {
	create: function(){
		this.pos = new PVector(0,0);
		this.target = new PVector(0,0);
		this.angle = -PI/4
		this.angleLimit = -PI/2;//PI*1/16;
		this.width = height/30
		this.length = height/20
		// cannon base
		this.baseRadius = height/50
		this.baseWidth  = height/30
		// target
		this.dotRadius = height/100;

		//this.delay = 30;
		this.delay = 60;
		this.lastFireCount = 0;
	}, // end create
	init: function(x, y){
		this.pos.x = x;
		this.pos.y = y;

		this.load();
	},
	seek: function(x, y){
		this.target.x = x;
		this.target.y = y;
		this.dist = PVector.dist(this.pos, this.target)
		this.angle = Math.atan2(y - this.pos.y, x- this.pos.x)
		/*if(this.pos.x < width/2)
			this.angle = PI/3;//-PI/4
		if(this.pos.x > width/2)
			this.angle = -PI*3/4*/
		//this.target.x = Math.cos(this.angle)*width/1000/8;
		//this.target.y = Math.sin(this.angle)*width/1000/8;
		this.dist = PVector.dist(this.pos, this.target)
		//console.log(this.angle)
		if(this.angle >= -this.angleLimit && this.angle <= PI/2) this.angle = -this.angleLimit
		if(this.angle <= (-PI + this.angleLimit) || this.angle >= PI/2) this.angle = -PI + this.angleLimit
	},
	load: function(){
		this.ball = pool[constants.ObjectType.Ball].shift()
		//console.log(this.ball)
		if(this.ball == undefined || !this.ball) return;
		this.ball.init(this.pos.x, this.pos.y)
		objects[constants.ObjectType.Ball].push(this.ball);
		this.fired = false;
	},
	fire: function(){
		if(gameState == constants.GameState.GetReady) return;
		if(gameState == constants.GameState.GameOver) return;
		if(gameState == constants.GameState.InPlay || gameState == constants.GameState.Title){
			if(count - this.lastFireCount < this.delay) return;
		}
		if(!this.ball){
			this.load();
			return
		}
		//console.log('fire')
		force = PVector.fromAngle(this.angle);
		factor = (width > height*1.5) ? 1/10000 : 1/50000;
		//force.mult(this.dist*height*factor*scaleFactor)
		force.mult(500*height*factor*scaleFactor)
		//force.mult(300*height*factor*scaleFactor)
		tempb2Vec2.x = force.x;
	    tempb2Vec2.y = force.y;
		//new box2d.b2Vec2(10,-10)
		this.ball.applyForce(tempb2Vec2);
		this.ball.fired = true;
		this.ball = null;
		this.lastFireCount = count;
		//spawnDust(this.pos.x + this.length*Math.cos(this.angle),
		//		  this.pos.y + this.length*Math.sin(this.angle))
		this.load()
	},
	update: function() {
		this.seek(mouseX, mouseY)
		//this.seek(width*0.3, ground-height*0.3)
		//this.seek(width*0.115, ground-height*0.1)
		//this.fire()
		this.display()
		this.displayTarget();

	}, // end update

	display: function() {
		rectMode(CENTER);
		push();
			translate(this.pos.x,this.pos.y);
			stroke(0)
			strokeWeight(4);
			push();
				rotate(this.angle);
				rectMode(CORNER);
				fill(200)
				ellipse(0, 0, this.dotRadius, this.dotRadius)
				ellipse(this.dist/4, 0, this.dotRadius, this.dotRadius)
				ellipse(this.dist*2/4, 0, this.dotRadius, this.dotRadius)
				ellipse(this.dist*3/4, 0, this.dotRadius, this.dotRadius)

				rect(0, -this.width/2, this.length, this.width, this.baseRadius,this.baseRadius/4,this.baseRadius/4,this.baseRadius)
			pop();
			fill(255)
			rect(0, 0, this.baseWidth, this.baseWidth, this.baseRadius, this.baseRadius, this.baseRadius/4, this.baseRadius/4);
		pop();

	},
	displayTarget: function(){
		fill(220);
		stroke(0)
		strokeWeight(2)
		ellipse(this.target.x, this.target.y, height/60, height/60)
		line(this.target.x-height/80, this.target.y, this.target.x+height/80, this.target.y)
		line(this.target.x, this.target.y-height/80, this.target.x, this.target.y+height/80)
	}
} // end Cannon
