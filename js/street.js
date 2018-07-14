
function Street (){

	//Game.toDraw[this.id] = this;

	this.W = 10;
	this.H = 30;
	this.mod_x = 0;
	this.speed = 10;//7.6
	this.row = VAR.H/100;
	this.column = Math.round((VAR.W/30)*2);


};

Street.prototype.draw = function (){

	for(var j = 0; j<this.row; j++){
		for (var i=1; i<this.column; i=i+2){
		Game.ctx.beginPath();
		Game.ctx.moveTo(30+(i*30)+this.mod_x, 100+(j*100));
		Game.ctx.lineTo(60+(i*30)+this.mod_x, 100+(j*100));
		Game.ctx.lineTo(60+(i*30)+this.mod_x, 110+(j*100));
		Game.ctx.lineTo(30+(i*30)+this.mod_x, 110+(j*100));
		Game.ctx.lineTo(30+(i*30)+this.mod_x, 100+(j*100));

		// Game.ctx.moveTo(90, 100);
		// Game.ctx.lineTo(120, 100);
		// Game.ctx.lineTo(120, 110);
		// Game.ctx.lineTo(90, 110);
		// Game.ctx.lineTo(90, 100);
		if(this.mod_x < -900){
			this.mod_x=0;
		}
		Game.ctx.stroke();

		};
	}
}