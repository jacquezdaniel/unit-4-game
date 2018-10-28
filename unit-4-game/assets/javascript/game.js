var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var red = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var blue = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var yellow = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var green = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var yourScore = 0;


function changeValues(){
	red = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	blue = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	yellow = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	green = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gamePlay(){
	if(yourScore === computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#targetScore').text(computerChoice);
		yourScore = 0;
		$('yourScore').text(yourScore);
		changeValues();
	} else if(yourScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#targetScore').text(computerChoice);
		yourScore = 0;
		$('#yourScore').text(yourScore);
		changeValues();
	}
}



$('#targetScore').text(computerChoice);



$('#red').on('click', function(){
	yourScore += red;
	$('#yourScore').text(yourScore);
	gamePlay();
});


$('#blue').on('click', function(){
	yourScore += blue;
	$('#yourScore').text(yourScore);
	gamePlay();
});


$('#yellow').on('click', function(){
	yourScore += yellow;
	$('#yourScore').text(yourScore);
	gamePlay();
});


$('#green').on('click', function(){
	yourScore += green;
	$('#yourScore').text(yourScore);
	gamePlay();
});