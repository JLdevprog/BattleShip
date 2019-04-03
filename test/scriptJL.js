
var numberCell = prompt("Enter the number of Cell (Raw/Col) required:")-1;
var numb = 0;
var numbTt = 0;
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
		numbTt++;
		numb++;
	}

	numb = 0;
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



var model = {
  	ships: [
		{ carrier: 		["A","A","A","A","A"]},
		{ cruiser: 		["B","B","B","B"]},
		{ destroyer: 	["C", "C", "C"]},
		{ submarine: 	["D", "D", "D"]},
		{ torpedo:		["E","E"]}
	]
}



//Generate Ships Locations

function generateShip(n,ship){

	var numbRandL = Math.floor(Math.random() * numberCell);
	var numbRand = Math.floor(Math.random() * numberCell);

	model.ships[n][ship]["pos"] = 
		[numbRandL, "/", numbRand];
		
}

generateShip(0,"carrier");
generateShip(1,"cruiser");
generateShip(2,"destroyer");
generateShip(3,"submarine");
generateShip(4,"torpedo");


//generate Ships Directions


function generateShipDirection(n,ship){

	var random = Math.random();//Random 0->1
	//console.log(random);

	if(random<0.5){
		//row
		model.ships[n][ship]["pos"][3] = "row";
			model.ships[n][ship]["pos"][4] = 
				model.ships[n][ship]["pos"][2]+1;

		for (i = 0; i < model.ships[n][ship].length; i++) {
		}
	}
	else if(random>0.5){
		//col
		model.ships[n][ship]["pos"][3] = "col";
			model.ships[n][ship]["pos"][4] = 
				model.ships[n][ship]["pos"][0]+1;
				
		for (i = 0; i < model.ships[n][ship].length; i++) {
		}
	}
}

generateShipDirection(0,"carrier");
generateShipDirection(1,"cruiser");
generateShipDirection(2,"destroyer");
generateShipDirection(3,"submarine");
generateShipDirection(4,"torpedo");



console.log("Ships Generate Details");

console.log(model);






/*
var random = Math.random();

var numbRandL1 = Math.floor(Math.random() * numberCell);
var numbRandL2 = Math.floor(Math.random() * numberCell);
var numbRandL3 = Math.floor(Math.random() * numberCell);
var numbRandL4 = Math.floor(Math.random() * numberCell);
var numbRandL5 = Math.floor(Math.random() * numberCell);

var numbRand1 = Math.floor(Math.random() * numberCell);
var numbRand2 = Math.floor(Math.random() * numberCell);
var numbRand3 = Math.floor(Math.random() * numberCell);
var numbRand4 = Math.floor(Math.random() * numberCell);
var numbRand5 = Math.floor(Math.random() * numberCell);

function generateShip(){
	if(random>0.5){
		console.log("Ships Generate row Details");
		model.ships[0]["carrier"] = 
		[numbRandL1,"/", numbRand1 ,numbRand1+1, numbRand1+2, numbRand1+3, numbRand1+4];
		model.ships[1]["cruiser"] = 
		[numbRandL2,"/",numbRand2 ,numbRand2+1, numbRand2+2, numbRand2+3];
		model.ships[2]["destroyer"] = 
		[numbRandL3,"/",numbRand3 ,numbRand3+1, numbRand3+2];
		model.ships[3]["submarine"] = 
		[numbRandL4,"/",numbRand4 ,numbRand4+1, numbRand4+2];
		model.ships[4]["torpedo"] = 
		[numbRandL5,"/",numbRand5 ,numbRand5+1];
	}
	else if(random<0.5){
		console.log("Ships Generate col Details");
		model.ships[0]["carrier"] = 
		[numbRandL1,numbRandL1+1,numbRandL1+2,numbRandL1+3,numbRandL1+4,"/",numbRand1];
	}
	else{
	}
}

generateShip();

console.log(model.ships[0]);
console.log(model);
console.log(random);

*/