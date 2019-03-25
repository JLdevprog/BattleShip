var model = {
	boardSize: 7,
	numShips: 3,
	shipLenght: 3,
	shipSunk: 0,

	ships: [
		{ locations: [0,0,0], hits: ["","","",]},
		{ locations: [0,0,0], hits: ["","","",]},
		{ locations: [0,0,0], hits: ["","","",]}
	],

	fire: function(guess){
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.location.indexOf(guess);

			if(ship.hits[indexp] === "hit"){
				view.displayMessage("You already Shout & Hit this location");
				return true;
			}
			else if(index >= 0 ){
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT?!");

				if (this.isSunk(ship)){
					view.displayMessage("You Sunk my Ship!");
					this.shipSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You Missed...");
		return false;
	},

	isSunk: function(ship){
		for (var i=0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit"){
				return false;
			}
		}
		return true;
	},

	generateShipLocations: function() {
		var locations;

		for (var i = 0; i < this.numShips; i++){
			
			do {
				locations = this.generateShip();	
			}
			while (this.collision(locations));
			this.ships[i].locations = locations;
		}
		console.log("Ships array : ");
		console.log(this.ships);
	},

	generateShip: function(){
		var direction = math.floor(math.random()*2);
		var row, col;

		if (direction === 1) {
			row = math.floor(math.random()*this.boardSize);
			col = 
			math.floor(math.random()*(this.boardSize-this.shipLength+1));
		}
		else{
			col = math.floor(math.random()*this.boardSize);
			row = 
			math.floor(math.random()*(this.boardSize-this.shipLength+1));
		}

		var newShipLocations = [];

		for (var i=0; i < this.shipLength; i++){
			if (direction === 1){
				newShipLocations.push(row+""+(col+i));
			}
			else{
				newShipLocations.push((row+i)+""+col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations){
		for (var i = 0; i < this.numShips; i++){
			var ship = this.ships[i];
			for (var j = 0; j<locations.length; j++){
				if (ship.locations.indexOf(locations[j]) >= 0){
					return true;
				}
			}
		}
		return false;
	}

};

//38.05

