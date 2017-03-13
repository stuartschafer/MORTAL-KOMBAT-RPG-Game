$(document).ready(function(){

	var audioFight = new Audio("assets/audio/fight.mp3");
	var audioKitana = new Audio("assets/audio/kitana.mp3");
	var audioSubzero = new Audio("assets/audio/subzero.mp3");
	var audioScorpion = new Audio("assets/audio/scorpion.mp3");
	var audioRaiden = new Audio("assets/audio/raiden.mp3");
	var audioToasty = new Audio("assets/audio/toasty.mp3");
	var audioFatality = new Audio("assets/audio/fatality.mp3");
	
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
	var enemiesDefeated = 0;


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
			 	$("#yourFighter").show("slide", { direction: "left" }, 3000);
			 	$("#charHealth").text(hitPoints);
			 	audioSubzero.play(); }

			 else if (this.value === "160") {
			 	hitPoints = 160;
			 	attackHit = 11;
			 	yth = 160;
			 	$("#yourFighter").attr("src","assets/images/kitana.gif");
			 	$("#charHealth").text(hitPoints);
			 	audioKitana.play(); }

			 else if (this.value === "175") {
			 	hitPoints = 175;
			 	attackHit = 9;
			 	yth = 175;
			 	$("#yourFighter").attr("src","assets/images/raiden.gif");
			 	$("#charHealth").text(hitPoints);
			 	audioRaiden.play(); }

			 else  {
			 	hitPoints = 200;
			 	attackHit = 6;
			 	yth = 200;
			 	$("#yourFighter").attr("src","assets/images/scorpion.gif");
			 	$("#charHealth").text(hitPoints);
			 	audioScorpion.play(); }

	}

	// This selects the opponent's fighter
	else if (selectCharacter === 1) {
		
		// This shows the final box on the last opponent
		if (finalEnemy === 2) { setTimeout(function() { $("#lastEnemy").show(); }, 1000); }
		selectCharacter = 9;
		$("#yourOpponent").css("paddingTop", 0);
		
		$("#fight").show();
		$(this).fadeOut(1000);
		$("#oH").width("100%");
		$("#instructionText").text("Click the FIGHT button until you or your opponent wins.  GOOD LUCK!");

		// This changes the background for each new opponent
		if (finalEnemy === 1) { $("body").css("background-image","url('assets/images/backdrop2.jpg')"); }
		else if (finalEnemy === 2) { $("body").css("background-image","url('assets/images/backdrop3.jpg')"); }

			// This is for SubZero's info
			if (this.value === "125") {
			 	oppHitPoints = 125;
			 	counterAttack = 14;
			 	oth = 125;
			 	$("#yourOpponent").attr("src","assets/images/subzero_opp.gif");
			 	$("#oppHealth").text(oppHitPoints);
			 	audioSubzero.play(); }

			 // This is for Kitana's info
			 else if (this.value === "160") {
			 	oppHitPoints = 160;
			 	counterAttack = 15;
			 	oth = 160;
			 	$("#yourOpponent").attr("src","assets/images/kitana_opp.gif");
			 	$("#oppHealth").text(oppHitPoints);
			 	audioKitana.play(); }

			 // This is for Raiden's info
			 else if (this.value === "175") {
			 	oppHitPoints = 175;
			 	counterAttack = 16;
			 	oth = 175;
			 	$("#yourOpponent").attr("src","assets/images/raiden_opp.gif");
			 	$("#oppHealth").text(oppHitPoints);
			 	audioRaiden.play(); }

			 // This is for Scorpion's info
			 else  {
			 	oppHitPoints = 200;
			 	counterAttack = 15;
			 	oth = 200;
			 	$("#yourOpponent").attr("src","assets/images/scorpion_opp.gif");
			 	$("#oppHealth").text(oppHitPoints);
			 	audioScorpion.play(); }

				setTimeout(function() { audioFight.play(); }, 900);

				if (selectCharacter === 3) { $("#lastEnemy").fadeIn(1000); }
	}
		

});

	// This appears when the user is ready to fight. It disappears when the user is selecting a character.
	$("#fight").click(function() {
		fightSounds();
		fighting();

		hitPoints = hitPoints - counterAttack;
		newAttackHit = newAttackHit + attackHit;
		oppHitPoints = oppHitPoints - newAttackHit;

		$("#damageDealt").text("You atatcked for " + newAttackHit);
		$("#damageTaken").text("Opponent attacked you for " + counterAttack);
		$("#charHealth").text(hitPoints);
		$("#oppHealth").text(oppHitPoints);

		// This adjusts the health bars for player and opponent
		var percent = (Math.round(hitPoints / yth * 100));
		$("#yH").width(percent + '%');

		var percent2 = (Math.round(oppHitPoints / oth * 100));
		$("#oH").width(percent2 + '%');


		if (hitPoints <= 0) { youLose(); }
		else if (oppHitPoints <= 0) { youWin();

		setTimeout(function() { audioToasty.play(); }, 700);

		enemiesDefeated++; }


$("#lastEnemy").click(function() {
	
	if (enemiesDefeated === 3) {
	location.reload(); }
});


	});







function youLose() {
    $("h1").text("YOU LOST");
    $("#fight").hide();
	$(".hitPoints").text("CLICK ME TO PLAY AGAIN!!!");
	$("h1").css("font-size", 20);
	$("h1").css("color", "black");
	$("#lastEnemy").css("background-color", "grey");
	opponetsBeaten = 3;
	$("#yourFighter").fadeOut("slow");
	$("#fightScene").fadeOut("slow");
	$("#yourOpponent").fadeOut("slow");



	// This button only appears after the game is over
	$("#lastEnemy").click(function() {
	if (opponetsBeaten === 3) {
	location.reload(); }
});

	// This button chnages from the character if the player does not even get to the final opponent
	$(".characters").click(function() {
	if (opponetsBeaten === 3) {
	location.reload(); }
});

}

// This plays random figting sounds each time the "Fight" button is clicked.
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

// This shows the action in the middle of the page when the fight button is clicked.
function fighting() {
		
		$("#yourOpponent").fadeOut("slow");
		$("#yourOpponent").css("paddingTop", 100);
		$("#yourOpponent").fadeIn("fast");
		$("#yourFighter").css("paddingTop", 100);

		$("#fightScene").fadeIn("slow");
		$("#fightScene").css({'width' : '300px' , 'height' : '300px'});
		// $("#fightScene").attr("src","assets/images/fighting_scene.png");

		// Alt fightscene....
		var i = (Math.floor((Math.random() * 6) + 1));
		console.log(i);
		if (i === 1) { $("#fightScene").attr("src","assets/images/mk_meme1.gif"); }
		else if (i === 2) { $("#fightScene").attr("src","assets/images/mk_meme2.gif"); }
		else if (i === 3) { $("#fightScene").attr("src","assets/images/mk_meme3.gif"); }
		else if (i === 4) { $("#fightScene").attr("src","assets/images/mk_meme4.gif"); }
		else if (i === 5) { $("#fightScene").attr("src","assets/images/mk_meme5.gif"); }
		else { $("#fightScene").attr("src","assets/images/mk_meme6.gif"); }

		if (yth === 125) { $("#yourFighter").attr("src","assets/images/subzero_attack.gif"); }
		else if (yth === 160) { $("#yourFighter").attr("src","assets/images/kitana_attack.gif"); }
		else if (yth === 175) { $("#yourFighter").attr("src","assets/images/raiden_attack.gif");
								$("#yourFighter").css("paddingTop", 50); }
	 	else { $("#yourFighter").attr("src","assets/images/scorpion_attack.gif");
	 		   $("#yourFighter").css("paddingTop", 50); }

	 	if (oth === 125) { $("#yourOpponent").attr("src","assets/images/subzero_hurt.gif"); }
		else if (oth === 160) { $("#yourOpponent").attr("src","assets/images/kitana_hurt.gif"); }
		else if (oth === 175) { $("#yourOpponent").attr("src","assets/images/raiden_hurt.gif"); }
	 	else { $("#yourOpponent").attr("src","assets/images/scorpion_hurt.gif"); }

}

function youWin() {
		selectCharacter = 1;
		finalEnemy++;
		$("#oppHealth").text(0);
		$("#yourFighter").css("paddingTop", 0); 
		$("#instructionText").text("Choose your next opponent.");
		$("#fightScene").fadeOut("slow");
		$("#yourOpponent").attr("src","");
		$("#damageDealt").text("You have vanquished your foe.");
		$("#damageTaken").text("");
		$("#fight").hide();

		if (yth === 125) { $("#yourFighter").attr("src","assets/images/subzero.gif"); }
		else if (yth === 160) { $("#yourFighter").attr("src","assets/images/kitana.gif"); }
		else if (yth === 175) { $("#yourFighter").attr("src","assets/images/raiden.gif"); }
		else $("#yourFighter").attr("src","assets/images/scorpion.gif");
		

		if (finalEnemy === 3) { $("h1").css("font-size", 20);
								$("h1").css("color", "aqua");
								$("#lastEnemy").css("background-color", "red");
								$("h1").text("YOU WON WITH ONLY " + hitPoints + " health remaining!!");
								$(".hitPoints").text("CLICK ME TO PLAY AGAIN!!!");
								setTimeout(function() { audioFatality.play(); }, 1500);

		
								if (yth === 125) { $("#fightScene").attr("src","assets/images/subzero_fatality_win.gif"); }
								else if (yth === 160) { $("#fightScene").attr("src","assets/images/kitana_fatality_win.gif"); }
								else if (yth === 175) { $("#fightScene").attr("src","assets/images/raiden_fatality_win.gif"); }
								else { $("#fightScene").attr("src","assets/images/scorpion_fatality_win.gif"); }
								$("#fightScene").fadeIn("fast");
								}
		}



});

