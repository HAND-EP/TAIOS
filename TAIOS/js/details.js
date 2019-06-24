$(function () {
   //切换图片
   $(".productPictureTableMain ul li img").click(function(){
   		//去掉其他图片的选中样式
   		$(".productPictureTableMain ul li img").removeClass("productPictureSelected");
   		$(this).addClass("productPictureSelected");
   		var imgSrc=$(this).attr("src");
   		$(".productPictureImg").attr("src",imgSrc);
   });
});

$(function () {
   //切换tab
  	$(".product_tab_bar li").click(function(){
  		$(".product_tab_bar li").removeClass("product_tab_selected");
  		$(this).addClass("product_tab_selected");
  		var index = $(this).attr("data-index");
  		
  		$(".product_tab_contents li").css("display","none");
  		$(".product_tab_contents").find("li").eq(index).css("display","block");
  	});
});

