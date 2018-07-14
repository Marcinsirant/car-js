// Inicjuję grę dopiero po załadowaniu całej strony
window.onload = function(){
	Game.spr = new Image ();
	Game.spr.onload = Game.init;
	Game.spr.src = 'carone.png';// zaladowanie obrazka
}
// Obiekt, w którym będą przechowywane „podręczne” wartości
VAR = {
	fps:60,// fps gry
	W:0,// szerokość okna
	H:0,// wysokość okna
	scale:1,// elementy gry w odpowiedniej skali
	slowloop:0, // zwolnienie pętli animationloop
	//
	currentTruck:0,
	lastTime:0,
	rand:function(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	}
}
// Obiekt zawierający bazowe funckje związane z grą.
// Game nie ma konstruktora, jest jedynie obiektem grupującym funkcje.
Game = {
	// init zostanie odpalone raz po załadowaniu strony.
	init:function(){
		// Tworzę canvas
		Game.canvas = document.createElement('canvas');
		// Przypisuję kontekst 2D do zmiennej ctx, która jest właściwością obiektu Game
		Game.ctx = Game.canvas.getContext('2d');
		// odpalam metodę obiektu Game
		Game.layout();
		// metoda layout odpali się przy każdej zmianie wielkości okna
		window.addEventListener('resize', Game.layout, false);
		// Canvas zostaje dodany do DOM
		document.body.appendChild(Game.canvas);
		//
		Game.toDraw = {};
		//
			
		for(var i=0; i<4; i++){
		new Barriers();
		}
		
		
		Game.street = new Street();

		//Game.barriers = new Barriers();
		
		Game.car = new Car();

		window.addEventListener('keydown', Game.onKey, false);

		

		// rozpoczęcie pętli gry
		Game.animationLoop();
	},
	onKey: function (event){
		console.log(event);//keyCode 38 gora 40 dol
		if(event.keyCode == 40 || event.keyCode==38 || event.keyCode==39 || event.keyCode==37){

			if(event.keyCode == 40 && VAR.currentTruck<Math.floor(VAR.H/100-1)){
				Game.car.mod_y+=Game.car.move_car;
				VAR.currentTruck++;
			};
			if (event.keyCode==38 && !VAR.currentTruck==0){
				Game.car.mod_y-=Game.car.move_car;
				VAR.currentTruck--;
			};
			if (event.keyCode==39){
				Game.car.mod_x+=10;
			};
			if (event.keyCode==37){
				Game.car.mod_x-=10;
			}
		}
	},
	// Ta metoda będzie odpalana przy każdej zmianie wielkości okna
	layout:function(ev){
		// Dla łatwiejszego pisania wielkość okna zostaje przypisana do właściwości W i H obiektu VAR
		VAR.W = window.innerWidth;
		VAR.H = window.innerHeight;
		// Chwilowo do canvas przypiszemy wielkość okna
		Game.canvas.width = VAR.W;
		Game.canvas.height = VAR.H;
		//
		Game.ctx.mozImageSmoothingEnabled = false;
		Game.ctx.webkitImageSmoothingEnabled = false;
		Game.ctx.msImageSmoothingEnabled = false;
		Game.ctx.imageSmoothingEnabled = false;


	},
	// Funkcja, która odpala się 60 razy na sekundę
	animationLoop:function(time){
		requestAnimationFrame( Game.animationLoop );
		// ograniczenie do ilości klatek zdefiniowanych w właściwości obiektu VAR (nie więcej niż VAR.fps)
		if(time-VAR.lastTime>=1000/VAR.fps){
			VAR.lastTime = time;
			//
			Game.street.mod_x = Game.street.mod_x-Game.street.speed;
			//
			// if(VAR.slowloop==10){
			// Game.car.mod_jump = -Game.car.mod_jump;
			// VAR.slowloop=0
			// }
			// VAR.slowloop++;
			Game.car.slowloop(); // dodatkowo oblicza punkty
			// oczyszczenie canvas
			Game.ctx.clearRect(0,0,VAR.W, VAR.H);
			//Game.car.draw();
			Game.street.draw();
			
			Barriers.draw();
			
			Game.car.draw();
			
		}
	}
}