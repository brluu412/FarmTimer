//checks if textbox input is a number
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

let farm = 0;
let loot = 0;
let farmTime = 0;
let lootTime = 0;
let accTime = 0;
let type = true;
let stopInt = false;
var timerInt = null;//var to loop via intervals of 1000ms

//start button
function start(){
	clearInterval(timerInt);
	stopInt = false;
	farm = parseInt(document.getElementById("farmInput").value);
	loot = parseInt(document.getElementById("lootInput").value);
	accTime = 0;
	console.log("initial farm: " + farm);
	console.log("initial loot: " + loot);
	farmTime = farm;
	lootTime = loot;
	type = true;
	timer();

	timerInt = setInterval(function(){
		if(stopInt){
			clearInterval(timerInt);
		}else{
			timer();
		}
	},1000);
}

//stop button
function stop(){
  stopInt = true;
}


//returns time
function timer(){
	document.getElementById("accBox").value = accTime;
	accTime++;
		if(farmTime == null || lootTime == null){
			farmTime = 0;
			lootTime = 0;
		}
		if(type){//farm time is active
			if(farmTime > 1){
				document.getElementById("actBox").value = farmTime;
				console.log("farm: " + farmTime);
				farmTime--;//count down 1 second
			}else if(farmTime == 1){//reaches 1 second
				document.getElementById("actBox").value = farmTime;
				console.log("farm: " + farmTime);
				farmTime = farm;
				type = false;
		}
		}else{//loot time is active
			if(lootTime > 1){
				document.getElementById("actBox").value = lootTime;
				console.log("loot: " + lootTime);
				lootTime--;//count down 1 second
			}else if(lootTime == 1){//reaches 1 second
				document.getElementById("actBox").value = lootTime;
				console.log("loot: " + lootTime);
				lootTime = loot;
				type = true;
			}
		}
}
	