$(document).ready(function(){

	var audioFight = new Audio("assets/audio/fight.mp3");
	var audioKitana = new Audio("assets/audio/kitana.mp3");
	var audioSubzero = new Audio("assets/audio/subzero.mp3");
	var audioScorpion = new Audio("assets/audio/scorpion.mp3");
	var audioRaiden = new Audio("assets/audio/raiden.mp3");
	
	var hitPoints = 0;
	var selectCharacter = 0;
	var counterAttack = 0;
	var oppHitPoints = 0;
	var attackHit = 0;
	var newHitPoints = 0;
	var newAttackHit = 0;
	var opponetsBeaten = 0;
	var yth = 0;
	var oth = 0;
	var finalEnemy = 0;



$(".characters").on("click", function() {
	
	// This selects the user's fighter
	if (selectCharacter === 0) {
		$(this).fadeOut(1000);
		selectCharacter = 1;
		$("#instructionText").text("Now choose your opponent.");

			 if (this.value === "125") {
			 	hitPoints = 125;
			 	attackHit = 17;
			 	yth = 125;
			 	$("#yourFighter").attr("src","assets/images/subzero.gif");
			 	$("#charHealth").text(hitPoints);
			 	subZero();
			 	audioSubzero.play(); }

			 else if (this.value === "150") {
			 	hitPoints = 150;
			 	attackHit = 11;
			 	yth = 150;
			 	$("#yourFighter").attr("src","assets/images/kitana.gif");
			 	$("#charHealth").text(hitPoints);
			 	kitana();
			 	audioKitana.play(); }

			 else if (this.value === "175") {
			 	hitPoints = 175;
			 	attackHit = 9;
			 	yth = 175;
			 	$("#yourFighter").attr("src","assets/images/raiden.gif");
			 	$("#charHealth").text(hitPoints);
			 	raiden();
			 	audioRaiden.play(); }

			 else  {
			 	hitPoints = 200;
			 	attackHit = 6;
			 	yth = 200;
			 	$("#yourFighter").attr("src","assets/images/scorpion.gif");
			 	$("#charHealth").text(hitPoints);
			 	scorpion();
			 	audioScorpion.play(); }

	}

	// This selects the opponent's fighter
	else if (selectCharacter === 1) {
		if (finalEnemy === 2) { $("#lastEnemy").show(); }
		selectCharacter = 9;
		$("#fight").show();
		$(this).fadeOut(1000);
		$("#oH").width("100%");
		$("#instructionText").text("Click the FIGHT button until you or your opponent wins.  GOOD LUCK!");

		// This changes the background for each new opponent
		if (finalEnemy === 1) { $("body").css("background-image","url('assets/images/backdrop2.jpg')"); }
		else if (finalEnemy === 2) { $("body").css("background-image","url('assets/images/backdrop3.jpg')"); }





			if (this.value === "125") {
			 	oppHitPoints = 125;
			 	counterAttack = 11;
			 	oth = 125;
			 	$("#yourOpponent").attr("src","assets/images/subzero_opp.gif");
			 	$("#oppHealth").text(oppHitPoints);
			 	subZero();
			 	audioSubzero.play(); }

			 else if (this.value === "150") {
			 	oppHitPoints = 150;
			 	counterAttack = 12;
			 	oth = 150;
			 	$("#yourOpponent").attr("src","assets/images/kitana_opp.gif");
			 	$("#oppHealth").text(oppHitPoints);
			 	kitana();
			 	audioKitana.play(); }

			 else if (this.value === "175") {
			 	oppHitPoints = 175;
			 	counterAttack = 13;
			 	oth = 175;
			 	$("#yourOpponent").attr("src","assets/images/raiden_opp.gif");
			 	$("#oppHealth").text(oppHitPoints);
			 	raiden();
			 	audioRaiden.play(); }

			 else  {
			 	oppHitPoints = 200;
			 	counterAttack = 14;
			 	oth = 200;
			 	$("#yourOpponent").attr("src","assets/images/scorpion_opp.gif");
			 	$("#oppHealth").text(oppHitPoints);
			 	scorpion();
			 	audioScorpion.play(); }

			audioFight.play();

			if (selectCharacter === 3) { $("#lastEnemy").fadeIn(1000); }
	}
		
		


});


	$("#fight").click(function() {
		fightSounds();
		$("#yourFighter").css("margin-left", "0"); 

// ********** Alt animations???
// ********** Alt animations???
// ********** Alt animations???
// ********** Alt animations???		
// ********** Alt animations???
		// if (yth === 125) { $("#yourFighter").attr("src","assets/images/subzero_attack.gif"); }
		// else if (yth === 150) { $("#yourFighter").attr("src","assets/images/kitana_attack.gif"); }
		// else if (yth === 175) { $("#yourFighter").attr("src","assets/images/raiden_attack.gif"); }
		// else $("#yourFighter").attr("src","assets/images/scorpion_attack.gif");

		// if (oth === 125) { $("#yourOpponent").attr("src","assets/images/subzero_attack_opp.gif");
		// 				   $("#yourOpponent").css("margin-left", "0px"); }
		// else if (oth === 150) { $("#yourOpponent").attr("src","assets/images/kitana_attack_opp.gif"); }
		// else if (oth === 175) { $("#yourOpponent").attr("src","assets/images/raiden_attack_opp.gif"); }
		// else $("#yourOpponent").attr("src","assets/images/scorpion_attack_opp.gif");

		
		




		hitPoints = hitPoints - counterAttack;
		newAttackHit = newAttackHit + attackHit;
		oppHitPoints = oppHitPoints - newAttackHit;

		$("#damageDealt").text("You atatcked for " + newAttackHit);
		$("#damageTaken").text("Opponent attacked you for " + counterAttack);
		$("#charHealth").text(hitPoints);
		$("#oppHealth").text(oppHitPoints);

		var percent = (Math.round(hitPoints / yth * 100));
		$("#yH").width(percent + '%');

		var percent2 = (Math.round(oppHitPoints / oth * 100));
		$("#oH").width(percent2 + '%');

		if (hitPoints <= 0) { youLose(); }
		else if (oppHitPoints <= 0) { youWin(); }

	});






function subZero() { }
function kitana() { }
function raiden() { }
function scorpion() { }
function youLose() {
	alert("You have been defeated"); 
	$("#instructionText").text("Choose your next opponent.");
	selectCharacter === 1;
	
	


}

function fightSounds() {
	var audioFightSound1 = new Audio("assets/audio/fightsound1.mp3");
	var audioFightSound2 = new Audio("assets/audio/fightsound2.mp3");
	var audioFightSound3 = new Audio("assets/audio/fightsound3.mp3");
	var audioFightSound4 = new Audio("assets/audio/fightsound4.mp3");
	var audioFightSound5 = new Audio("assets/audio/fightsound5.mp3");
	var audioFightSound6 = new Audio("assets/audio/fightsound6.mp3");
	var audioFightSound7 = new Audio("assets/audio/fightsound7.mp3");
	var audioFightSound8 = new Audio("assets/audio/fightsound8.mp3");
	var audioFightSound9 = new Audio("assets/audio/fightsound9.mp3");
	var audioFightSound10 = new Audio("assets/audio/fightsound10.mp3");



	var j = (Math.floor((Math.random() * 10) + 1));
		if (j === 1) { audioFightSound1.play(); }
		else if (j === 2) { audioFightSound2.play(); }
		else if (j === 3) { audioFightSound3.play(); }
		else if (j === 4) { audioFightSound4.play(); }
		else if (j === 5) { audioFightSound5.play(); }
		else if (j === 6) { audioFightSound6.play(); }
		else if (j === 7) { audioFightSound7.play(); }
		else if (j === 8) { audioFightSound8.play(); }
		else if (j === 9) { audioFightSound9.play(); }
		else { audioFightSound10.play(); }

	
}

function youWin() {
		selectCharacter = 1;
		finalEnemy++;
		console.log(finalEnemy);
		$("#oppHealth").text(0); 
		$("#instructionText").text("Choose your next opponent.");
		$("#yourOpponent").attr("src","");
		$("#damageDealt").text("You have vanquished your foe.");
		$("#damageTaken").text("");
		$("#fight").hide();

		if (yth === 125) { $("#yourFighter").attr("src","assets/images/subzero.gif"); }
		else if (yth === 150) { $("#yourFighter").attr("src","assets/images/kitana.gif"); }
		else if (yth === 175) { $("#yourFighter").attr("src","assets/images/raiden.gif"); }
		else $("#yourFighter").attr("src","assets/images/scorpion.gif");
		 }



});

