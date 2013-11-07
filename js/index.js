// JavaScript Document
/* Author: Yangz */
/* Time: 2013/09/22 */


$(function () {

    /*首页预约展开*/
    $(".slide_down").click(function () {
        var p = $(this).parents("li");
        p.find(".appointment_meta1").hide().siblings(".appointment_meta2").show();
        $(this).hide().siblings(".ap_btn2").show();
    });

    /*首页预约收起*/
    $(".slide_up").click(function () {
        var p = $(this).parents("li");
        p.find(".appointment_meta2").hide().siblings(".appointment_meta1").show();
        p.find(".slide_down").show().siblings(".ap_btn2").hide();
    });

    $(".list").each(function () {
        $(this).find("li").last().css("border", "none");
    });

    /*读取在线状态*/
    var statusArray = ['<span class="satuts_show status_1">在线</span>', '<span class="satuts_show status_2">离开</span>', '<span class="satuts_show status_3">忙碌</span>'];
    switch ($.cookie('status')) {
        case "1": $(".img_satus").attr("src", "images/icon04.png"); $(".status").children(".satuts_show").remove().end().prepend(statusArray[0]); break;
        case "2": $(".img_satus").attr("src", "images/icon08.png"); $(".status").children(".satuts_show").remove().end().prepend(statusArray[1]); break;
        case "3": $(".img_satus").attr("src", "images/icon09.png"); $(".status").children(".satuts_show").remove().end().prepend(statusArray[2]); break;
    }

    /*切换状态*/
    $(".status_btn").click(function () {
        $(".status_other").toggle();
    });
		
    $(".status_other li").click(function () {
        var s = $(this).html();
		
        if (s.indexOf("在线")>0) {
            $(".img_satus").attr("src", "images/icon04.png");
            $.cookie('status', 1);		
			
        }
        if (s.indexOf("离开")>0) {
            $(".img_satus").attr("src", "images/icon08.png");
            $.cookie('status', 2);
        }
        if (s.indexOf("忙碌")>0) {
            $(".img_satus").attr("src", "images/icon09.png");
            $.cookie('status', 3);
        }
        $(".status").children(".satuts_show").remove().end().prepend(s);
        $(".status_other").hide();
    });

	
	/*一号通设置*/
	$(".edit_code").click(function(){		
		$(".yht_input").removeClass("yht_input_d").removeAttr("disabled").focus().select();		
		return false;
		});
	
	$(".yht_input").focusout(function(){
		
		$(this).addClass("yht_input_d").attr("disabled","disabled");
		
		});
	
	
	/*附件查看*/
	$(".a_img").each(function(){
		var index=$(this).index(".a_img");		
		$(this).find("a").attr("rel","r_"+index);		
		});
	
	$(".a_img a").fancybox({
		padding:0
		
		});

})