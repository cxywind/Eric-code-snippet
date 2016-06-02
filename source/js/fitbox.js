//Author: Eric Chen
//Email: ericitnz@gmail.com

$(document).ready(function(){
	//Change shirt bg 
	//compability: background-clip, also good if it is not supported
	$(".bgbox_bg > img").click(function(){
		$(".probox").css({"background-image":"url(images/bigbg/"+$(this).attr("src").split("/")[2]+")",
			"background-repeat":"no-repeat",
			"background-size":"cover",
			"background-clip":"content-box" 
		});
	});

	// Chang suit
	$(".bgbox_front > img").click(function(){
		var imgName=$(this).attr("src").split("/")[2].split(".")[0];
		var frontBg=$(".probox_frontbg").attr("style");
		switch (imgName) 
		{
			// Add stripe for suit when the suit is selected
			case "pinstripped":  
				if (frontBg && frontBg.indexOf("background")!=-1 && frontBg.indexOf("none")==-1){
					$(".probox_stripe").css({
						"background-image":"url(images/bigbg/"+imgName+".png)",
						"background-repeat":"no-repeat",
						"background-size":"cover"});	
				}
				else {
					$(".probox_stripe").html("<p>Please choose a suit first!<p>");
				}			
			break;
			case "none":
				//remove suit and stripe 
				$(".probox_frontbg").css("background","none");
				$(".probox_stripe").css("background","none");
				$(".probox_stripe").html("")
				break;
			default:
				//Add suit
				$(".probox_stripe").html("")
				$(".probox_frontbg").css({
					"background-image":"url(images/bigbg/"+imgName+".png)",
					"background-repeat":"no-repeat",
					"background-size":"cover"});
			  }
	});
});

