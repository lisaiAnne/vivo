$(".navLi").mouseenter(function(){
		$(this).children().eq(1).css({"display":"block","opacity":0.8});
		$(this).children().eq(0).css({"color":"#b2b2b2"});
	});
	
	$(".navLi").eq(1).mouseenter(function(){
		$(this).children().eq(1).children().css({"padding-left":"410px","display":"block"});
	});
	
	
	$(".navLi").eq(2).mouseenter(function(){
		$(this).children().eq(1).children().css({"padding-left":"493px","display":"block"});
	});
	
	$(".navLi").eq(3).mouseenter(function(){
		$(".navLi").eq(3).children().eq(1).children().css({"padding-left":"575px","display":"block"});
	});
	
	$(".navLi").mouseleave(function(){
		$(this).children().eq(1).css({"display":"none","opacity":1});
		$(this).children().eq(0).css({"color":"white"});
	});
	
	
	$(".uList").children().children().children().mouseover(function(){
		$(".uList").prev().css({"color":"white"});
		$(this).css({"color":"#b2b2b2"});
	})
	$(".uList").children().children().children().mouseleave(function(){
		$(this).css({"color":"white"});
	})
	
	
	//联系人的划过效果
	$(".iLi").eq(1).mouseenter(function(){
		$(this).children().eq(1).children().css({
			"display":"block",
			"background":"#ffffff"
			});
			$(".banner").css({
				"opacity":0.6
			});
			
	});
	//划过变颜色
	
	
	$(".iLi ul li a").mouseenter(function(){
		$(this).css({"color":"#0087cd"});
		$(this).children().css({"color":"#0087cd"});
		
	});
	$(".iLi ul li a").mouseleave(function(){
		$(this).css({"color":"black"});
		$(this).children().css({"color":"black"});
		
	});

	
	$(".iLi").eq(1).mouseleave(function(){
		$(this).children().eq(1).children().css({"display":"none"});
		$(".banner").css({"opacity":1});
	});
	
	$(".back").mouseenter(function(){
		$(".back1").css({"display":"none"});
		$(".back2").css({"display":"block"});
	})
	$(".back").mouseleave(function(){
		$(".back1").css({"display":"block"});
		$(".back2").css({"display":"none"});
	})
	
	
	$(".back").click(function(){
		let num=document.documentElement.scrollTop;
//		if(num<2500){
//			$(".back1").css({"display":"none"});
//		}
//		else{
//			$(".back1").css({"display":"block"});
//		}
//		num > 2000 ? $('.back1').fadeIn() : $('.back1').fadeOut();
		aa();
			function aa(){
			if(num>0){
				num=num-50;
				document.documentElement.scrollTop=num;
				setTimeout(aa,20);
			}
		}
	});
	




