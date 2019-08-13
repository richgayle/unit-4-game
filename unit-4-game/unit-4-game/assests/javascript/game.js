$(document).ready(function() 
{

	var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

	var randomArray = []; 
		console.log("randomArray: " + randomArray); 

	 for (i = 0 ; i < 4 ; i++) {
	 	var gems = Math.floor(Math.random() * 12) + 1; 
			console.log("gems: " + gems); 
		randomArray.push(gems); 
	 }
	var gemOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem One: " + gemOne); 

		$("#one").html("<img src=" + "images/blue.png" + " value=" + gemOne + ">"); 

	var gemTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem TWo: " + gemTwo); 
		$("#two").html("<img src=" + "images/orange.png" + " value=" + gemTwo + ">"); 

	var gemThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem Three: " + gemThree); 
		$("#three").html("<img src=" + "images/purple.png" + " value=" + gemThree + ">");
	
	var gemFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem Four: " + gemFour); 
		$("#four").html("<img src=" + "images/red.png" + " value=" + gemFour + ">");
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var total = 0; 
		console.log("total: " + total); 

	function reset () {
		compPick = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		score = 0; 
		$(".Total").html(score); 

		one = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + gemOne); 
		$("#one").html("<img src=" + "images/blue.png" + " value=" + gemOne + ">"); 

		gemTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + gemTwo); 
		$("#two").html("<img src=" + "images/orange.png" + " value=" + gemTwo + ">"); 

		gemThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + gemThree); 
		$("#three").html("<img src=" + "images/purple.png" + " value=" + gemThree + ">");
	
		gemFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + gemFour); 
		$("#four").html("<img src=" + "images/red.png" + " value=" + gemFour + ">");

		$("img").on("click", function () {
			var total = total += parseInt($(this).attr("value")); 
				console.log("New Score: " + total); 
			$(".userTotal").html(total); 
		
			if(total === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
				
			} 

			else if(total > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var total = total += parseInt($(this).attr("value")); 
			console.log("New Score: " + total); 
		$(".total").html(total); 

		if(total === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(total > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 