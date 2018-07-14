
Barriers.all = {};

Barriers.count = 0;
function Barriers (){

	//Game.toDraw[this.id] = this;

	this.fW = 50; // wielkośc klatki animacji px 
	this.fH = 64; // wielkośc klatki animacji w px

	Barriers.count++;
	this.id = Barriers.count
	Barriers.all[this.id] = this

	this.x = VAR.rand(VAR.W, VAR.W+500); // szerokosc ekranu od tad rysuje przeszkode
	this.y = VAR.rand(10, VAR.H-100);; // pierwsza wysokosc 

	//this.mod_x = 0; // dzieki temu porusza sie w lewo
	this.speed_barriers = 10;  // z jaka szybkoscia porusza sie w lewo


};

Barriers.prototype.draw = function (){
//207 86
	//this.mod_x+=this.speed_barriers;

	this.x= this.x - this.speed_barriers;
	//this.x = this.x;
	this.y = this.y;
	// drawImage:
	// 1. obrazek z którego ma coś zostać przeniesione do canvas (czyli nasz Sprite sheet)
	// 2. pozycja x prostokąta, który będzie wycinał fragment źródłowego obrazka (pozycja klatki na Sprite sheet)
	// 3. pozycja y prostokąta, który będzie wycinał fragment źródłowego obrazka (pozycja klatki na Sprite sheet)
	// 4. szerokość prostokąta, który będzie wycinał fragment źródłowego obrazka (wielkość klatki na Sprite sheet)
	// 5. wysokość prostokąta, który będzie wycinał fragment źródłowego obrazka (pozycja klatki na Sprite sheet)
	// 6. pozycja x gdzie w canvas ma zostać wklejony obrazek
	// 7. pozycja y gdzie w canvas ma zostać wklejony obrazek
	// 8. szerokość wklejanego obrazka (nie chcę ultra małych obrazków, dlatego mnożę je przez aktualną skalę gry)
	// 9. wysokość wklejanego obrazka
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
	if(this.x < -30){ // jezeli przeszkoda wyjdzie za lewe okno ekranu losuje mu sie nowa pozycja i zaczyna od prawej 
		this.x = VAR.rand(VAR.W, VAR.W+800);
		this.y = VAR.rand(10, VAR.H-100);
	}
	
}


Barriers.draw = function(){

	for(var r in Barriers.all){
		// rysuj tą konkretną bariere
		Barriers.all[r].draw();
	}
};
