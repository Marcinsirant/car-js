
function Car (){

	Game.toDraw[this.id] = this;

	this.fW = 164;
	this.fH = 54;

	this.point = 0;
	this.lastPoint=0;

	this.mod_jump = 1;
	this.mod_x = 60;
	this.mod_y = 30;

	this.move_car= 100;

};

Car.prototype.hitTest = function(){
	for(var r in Barriers.all){
		if((Barriers.all[r].x < this.mod_x + this.fW && Barriers.all[r].x > this.mod_x && Barriers.all[r].y<this.mod_y && Barriers.all[r].y+Barriers.all[r].fH >this.mod_y) || (Barriers.all[r].x < this.mod_x + this.fW && Barriers.all[r].x > this.mod_x && Barriers.all[r].y<this.mod_y+this.fH && Barriers.all[r].y+Barriers.all[r].fH >this.mod_y+this.fH)){
			VAR.fps = 0;
			const gameOver = document.createElement("div");
			gameOver.id = "gameOver";
			gameOver.innerText = "GAME OVER";
			//gameOver.style.setProperty("background-color", "#FF6633");
			document.body.appendChild(gameOver);
			gameOver.style.opacity = 0.95;
			document.getElementById('point').style.fontSize = 17+"vh";
			document.getElementById('point').style.top = VAR.H/2+"px";
			document.getElementById('point').style.width = VAR.W+'px';
			document.getElementById('point').style.textAlign = "center";
		}
	}
}

Car.prototype.draw = function (){
//207 86

	this.hitTest();

	Game.ctx.drawImage(
			Game.spr,
			0,
			0,
			this.fW,
			this.fH,
			this.mod_x,
			this.mod_y+this.mod_jump,
			this.fW*VAR.scale,
			this.fH*VAR.scale
	);

	if(this.mod_x <30){
		this.mod_x=30;
	}else if(this.mod_x >600){
		this.mod_x = 600;
	}
	
}



Car.prototype.slowloop = function(){
	if(VAR.slowloop==15){
		this.point++;
		this.mod_jump = -this.mod_jump;
		VAR.slowloop=0
		if(this.point==this.lastPoint+15){
			this.lastPoint=this.point;
			Game.street.speed++;
			for(var r in Barriers.all){
				// rysuj tą konkretną bariere
				Barriers.all[r].speed_barriers++;
			}
		}
		
		localStorage.setItem('BestScore', this.point)
		}
		VAR.slowloop++;
		document.getElementById('point').innerHTML = 'POINTS: '+this.point+' SPEED: '+Game.street.speed 'BEST SCORE:' ;
}
