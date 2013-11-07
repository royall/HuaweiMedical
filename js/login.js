// JavaScript Document
/* Author: Yangz */
/* Time: 2013/09/22 */


$(function(){			
	setH();
	$(window).resize(setH);	
	function setH(){
		$(".login").height($(window).height()-$("#header").height()-$("#footer").height());			
	}	
	
	
	$(".login_role").click(function(){		
		$(".login_role ul").toggle();		
		});
	
	$(".login_role li").click(function(){		
		var txt=$(this).text();
		$(".login_role span").text(txt);
		$(this).parent().hide();
		return false;		
		});
			
})