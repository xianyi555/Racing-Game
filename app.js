console.log("js is working!")
	
// (get ready for js)
   $(document).ready(function(){
	   console.log("fully loaded!")
	
//    (reset the game)
    $(".reset").on("click", function(){

    	$(".snoopyPilot").css("margin-left" , "35px");
    	$(".snoopyDriver").css("margin-left" , "30px");
    	isstarted = false;
    })




// (set a false value to prepare the start button to use)
	var isstarted = false;

	$(".toStart").on("click", function(){
		isstarted = true
		console.log("start")
	});

	    	// (playerOne can win by these functons)
	      $(document).on("keydown", function(raceActionOne){
			if (isstarted) {
	      	console.log(raceActionOne.keyCode)
		  	if (raceActionOne.keyCode == 68) {
          		$(".snoopyPilot").animate({"margin-left": "+=130px"})};
          	        if (parseInt($(".snoopyPilot").css("marginLeft")) >= 1300){

          	     	    alert("Game Over, SnoopyPilot Won!");
          	     	    // return isstarted !== false;
          	     	    isstarted = false
          	     	    console.log(isstarted)
          	   }}});
	      // (playerTwo can win by these functions)
	      $(window).on("keydown", function(raceActionTwo){
	      	if (isstarted) {
		  	if (raceActionTwo.keyCode == 190) {
		  		console.log(parseInt($(".snoopyDriver").css("marginLeft")))
          		$(".snoopyDriver").animate({"marginLeft": "+=130px"});

          		    if (parseInt($(".snoopyDriver").css("marginLeft")) >= 1300){

          	     	    alert("Game Over, SnoopyDriver Won!");
          	     	    // return isstarted !== false;
          	     	    isstarted = false
          	 }}}
          	})

});
	


