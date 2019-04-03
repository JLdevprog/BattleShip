
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

var random = Math.random();//Random 0->1

function generateShip(n,ship){

	var numbRandL = Math.floor(Math.random() * numberCell);
	var numbRand = Math.floor(Math.random() * numberCell);

	model.ships[n][ship] = 
		[numbRandL, "/", numbRand];
		
}

generateShip(0,"carrier");
generateShip(1,"cruiser");
generateShip(2,"destroyer");
generateShip(3,"submarine");
generateShip(4,"torpedo");

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