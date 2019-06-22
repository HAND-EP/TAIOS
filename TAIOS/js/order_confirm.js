$(function(){
	$(".add_address").click(function(){
		//
		
		$(".address_popup").css("display","block");
		$(".black_bg").css("display","block");
	});
	$(".btn_close").click(function(){
		
		$(".address_popup").css("display","none");
		$(".black_bg").css("display","none");
	});

	$(".moren-tip").click(function(){
		$(".address_item").removeClass("selected");
		
		$(this).parents('.address_item').addClass("selected");
	})
});