function getArrays(){
var count = 1;
var randomArray = [];
var powerBall = 0;
var loop = setInterval(getRandomNumber, 50); 
	function getRandomNumber(){ 
		for(var i = 0; i <=6; i++){// Random Number Creator 
				randomArray[i] = Math.floor(Math.random()*35 + 1);
    } // End of Random Number Creator
    
    /* Generating Final values to HTML after certain condition true */
    for(var i = 0; i <=6; i++){
      for(var y = i+1; y <=7; y++){
        if(randomArray[i] === randomArray[y]){
              getRandomNumber();
        }else{
        	var getElement = document.querySelector(".container .left li:nth-child(" + (i+1) + ")");
             getElement.innerHTML = randomArray[i];
        };
      };
    }; // Final Values Generated 
    
		powerBall = Math.floor(Math.random()*20 + 1);
		document.querySelector(".power-ball").innerHTML = powerBall;
		count++;
		if(count === 50){ // Let loop runs for 50 times before showing final Random Numbers
			clearInterval(loop);
		}
};
}; // End of getArrays()

function quickPick(){
  var tr = document.createElement("tr");
  var tbl = document.querySelector(".table1");
  for(var i = 1; i <=7; i++){
  		var td = document.createElement("td");
	  	var getWinningNumber = document.querySelector(".container .left li:nth-child(" + i + ")").innerHTML;
	  	var setWinningNumber = document.createTextNode(getWinningNumber);
	  	tbl.appendChild(tr);
	  	tr.appendChild(td);
	  	td.appendChild(setWinningNumber); 
	}
	var getPowerBall = document.querySelector(".container .left .power-ball").innerHTML;
	var setPowerBall = document.createTextNode(getPowerBall);
  	tr.appendChild(td);
  	td.appendChild(setPowerBall);
  
  
}

