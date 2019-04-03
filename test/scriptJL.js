
var numberCell = prompt("Enter the number of Cell (Raw/Col) required:")-1;
var numb = 0;
var numbTr = 0;
var numbTd = 0;

var pawnLength = 5;



document.write("<table>");

for (i=0;i<=numberCell; i++)
{
	document.write("<tr id="+numbTr+">");

	for (j=0;j<=numberCell; j++){
		document.write("<td id="+numbTd+">");
			document.write(numbTr+"/"+numbTd);
		document.write("</td>");
		numbTd++;

		numb++;
	}


	numbTd = 0;

	numbTr++;

	document.write("</tr>");
}
document.write("</table>");

if (numberCell >14 ) {
	ventier = 14;
	alert("Number Cell max Limit 15"); 
	location.reload();
}
else if(numberCell<7){
	ventier = 7;
	alert("Number Cell min Limit 8"); 
	location.reload();
}
else{

}




//Ships State
/*
var carrier = ["","","","",""];
var cruiser = ["","","",""];
var destroyer = ["","",""];
var submarine = ["","",""];
var torpedo = ["",""];

document.write(carrier);
*/

var model = {
  	ships: [
		{ carrier: 		["A","A","A","A","A"]},
		{ cruiser: 		["B","B","B","B"]},
		{ destroyer: 	["C", "C", "C"]},
		{ submarine: 	["D", "D", "D"]},
		{ torpedo:		["E","E"]}
	]
}

console.log(model);

console.log(model.ships[0]);

//Ships.length;


//Generate Ships Locations
var numbRand1 = Math.floor(Math.random() * numb);
var numbRand2 = Math.floor(Math.random() * numb);
var numbRand3 = Math.floor(Math.random() * numb);
var numbRand4 = Math.floor(Math.random() * numb);
var numbRand5 = Math.floor(Math.random() * numb);

function generateShip(){
	if(numberCell){
		console.log("Ships Generate Details");
		model.ships[0]["carrier"] = 
		[numbRand1 ,numbRand1+1, numbRand1+2, numbRand1+3, numbRand1+4];
		model.ships[1]["cruiser"] = 
		[numbRand2 ,numbRand2+1, numbRand2+2, numbRand2+3];
		model.ships[2]["destroyer"] = 
		[numbRand3 ,numbRand3+1, numbRand3+2];
		model.ships[3]["submarine"] = 
		[numbRand4 ,numbRand4+1, numbRand4+2];
		model.ships[4]["torpedo"] = 
		[numbRand5 ,numbRand5+1];
	}
	else{
	}
}

generateShip();

console.log(model.ships[0]);
console.log(model);

/*
// event handlers
function handleFireButton () {
	var guessInput = document.getElementById("guessInput");
	guessInput.value = "";
};

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

}

window.onload = init;
*/