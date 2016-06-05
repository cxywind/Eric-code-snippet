$(document).ready(function(){
	//setting the position of each title
	$(".flipper.front_box > span").each(function(){
		var img=$(this).parent().children("img");
		var boxTitleTop=(img.height() - $(this).height())/3;
		var boxTitleLeft=(img.width() - $(this).width())/2;
		$(this).css({"top":boxTitleTop+"px","left":boxTitleLeft+"px"}).stop().fadeTo("slow",.7);
		
		//setting dimension of back box 
		$(".back_box").css({"width":img.width(),"height":img.height()});
	});
});