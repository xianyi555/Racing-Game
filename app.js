console.log("js is working!")
	
// (I am still figuing out how to reset!)
   $(document).ready(function(){
	   console.log("fully loaded!")
	

	// $(document).reset(function(){
	// 	let $(".snoopyPilot").css("marginLeft") === ("35px");

 //        let $(".snoopyDriver").css("marginLeft") === ("30px");
	// })



	let isstarted = false;

	$(".toStart").on("click", function(){
	    if (isstarted === false) {

	    	// let Winner = [];
	

	      $(window).on("keypress", function(raceActionOne){
		  	if (raceActionOne.keyCode == 100) {
          		$(".snoopyPilot").animate({"margin-left": "+=50px"})};
          		
          	        if ($(".snoopyPilot").css("marginLeft") === ("1335px")){

          	     	    alert("Game Over, SnoopyPilot Won!");
          	     	    isstarted !== false;
          	          }
          	    
          	}
          	);

	
	      $(window).on("keypress", function(raceActionTwo){
		  	if (raceActionTwo.keyCode == 46) {
          		$(".snoopyDriver").animate({"marginLeft": "+=50px"})};

          		    if ($(".snoopyDriver").css("marginLeft") === ("1330px")){

          	     	    alert("Game Over, SnoopyDriver Won!");
          	     	    isstarted !== false;
          	          }
          })
	    }

	})

})

	


