// Podobnie jak przy pociskach w „all” są przechowywane wszystkie instancje Rock
Barriers.all = {};
// Liczy wszystkie asteroidy dzięki czemu mamy unikatowe id
Barriers.count = 0;

function Barriers(x,y){//size może się równać 0, 1 lub 2 (dwa to największe klocki)
	// rośnie count o jeden
	Barriers.count++;
	// id oraz wrzucenie all
	this.id = Barriers.count;
	Barriers.all[this.id] = this;
	// tablica ze wszystkimi punktami, które tworzą pojedynczy kamień
	this.points = [];

	this.x = VAR.W;
	this.y = VAR.rand(0, VAR.H);
	// o ile pixeli będzie się przemieszczał kamień po osi x i osi y
	this.modX = -10;

}

Barriers.prototype.draw = function() {
	// Aktualny x i y

	this.x= this.x - this.speed_barriers;
	Game.ctx.drawImage(
				Game.spr,
				166,
				0,
				this.fW,
				this.fH,
				this.x,
				this.y,
				this.fW*VAR.scale,
				this.fH*VAR.scale
		);
	if(this.x < -30){
		this.x = VAR.W;
		this.y = VAR.rand(0, VAR.H);
	}
};
// rysowanie wszystkich kamieni
Barriers.draw = function(){
	// liczy kamienie (jak nie będzie kamieni to znaczy, że gracz wygrał)
	Barriers.num = 0;
	for(var r in Barriers.all){
		Barriers.num ++;
		// rysuj ten konkretny kamień
		Barriers.all[r].draw();
	}
};