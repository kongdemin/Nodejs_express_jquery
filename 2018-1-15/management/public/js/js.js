$("#left>ul>li>a").click(function(){
	$(this).parent().toggleClass("current");
	$(this).parent().siblings().removeClass("current");
});
$("#addGood .nav li" ).click(function(){
	$(this).addClass("current").siblings().removeClass("current");
	$(".follow>div").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#left .goodlist").click(function(){
	$("#productList").css("display","block").siblings().css("display","none");
})
$("#left .addgood").click(function(){
	$("#addGood").css("display","block").siblings().css("display","none");
})