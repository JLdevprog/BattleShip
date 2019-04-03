
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
		{ carrier: 		["P","/","A","A","A","A","A"]},
		{ cruiser: 		["P","/","B","B","B","B"]},
		{ destroyer: 	["P","/","C", "C", "C"]},
		{ submarine: 	["P","/","D", "D", "D"]},
		{ torpedo:		["P","/","E","E"]}
	]
}

console.log(model);

console.log(model.ships[0]);

//Ships.length;


//Generate Ships Locations

var random = Math.floor(Math.random() * 1);

var row = 0;
var clo = 1;

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
	if(random==row){
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
	else if(random==col){
		console.log("Ships Generate col Details");
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