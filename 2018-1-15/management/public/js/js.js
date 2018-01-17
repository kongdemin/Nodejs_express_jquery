$("#left>ul>li>a").click(function(){
	$(this).parent().toggleClass("current");
	$(this).parent().siblings().removeClass("current");
});

$("#left .goodlist").click(function(){
	$("#productList").css("display","block").siblings().css("display","none");
})
$("#left .addgood").click(function(){
	$("#addGood").css("display","block").siblings().css("display","none");
})

