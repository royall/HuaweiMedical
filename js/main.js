// JavaScript Document
/* Author: Yangz */
/* Time: 2013/09/22 */


$(function () {


    /*读取在线状态*/
    switch ($.cookie('status')) {
        case "1":
            $(".img_satus").attr("src", "images/icon04.png");
            break;
        case "2":
            $(".img_satus").attr("src", "images/icon08.png");
            break;
        case "3":
            $(".img_satus").attr("src", "images/icon09.png");
            break;
    }

    /*tab切换*/
    $(".west_tab li").click(function () {
        var index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".west_content .content_box").eq(index).show().siblings().hide();
        if (index == 2) {
            $(".monitor_has").perfectScrollbar('update');
        }		
		if(index==3&&$(".whiteboard .toolbar").length<=0){			
			$('.literally').literallycanvas();
			$(window).resize();
			}
		$(window).resize();
        return false;
    });



    /*侧边通讯录*/
    $(".sidebar").click(function () {
        var _this = $(this), sidebar = $(".side_address"), during = 300;
        if (_this.hasClass("on")) {
            _this.css("background-position", "right top").removeClass("on");
            sidebar.animate({
                width: 22
            }, during)
        } else {
            _this.css("background-position", "left top").addClass("on");
            sidebar.animate({
                width: 270
            }, during)
        }
    });


    /**/
    $(".monitor_has").perfectScrollbar();
    

    /*地图点击*/
    $(".point").click(function () {
        $(".point_tips").hide();
        var index = $(this).index(".map .point");
        $(".point_tips").eq(index).show();
    });

    $(".map_img").click(function () {
        $(".point_tips").hide();

    });


    /*视频接通*/
//    video()
    function video() {
        $(".map").hide();
        $(".video").fadeIn();
        $("#map_small").show();
        $("#photo_self").show();
        $(".tips .tips_box").eq(3).show().siblings().hide();

        var dateStar = new Date;
        timer_count = setInterval(function () {
            var dateNow = new Date;
            var amount = dateNow.getTime() - dateStar.getTime() + 5;
            amount1 = Math.floor(amount / 1000);
            var days = 0;
            hours = 0;
            mins = 0;
            secs = 0;
            var out = "";
            amount = Math.floor(amount / 1e3);
            days = Math.floor(amount / 86400);
            amount = amount % 86400;
            hours = Math.floor(amount / 3600);
            amount = amount % 3600;
            mins = Math.floor(amount / 60);
            amount = amount % 60;
            secs = Math.floor(amount);
            if (secs < 10) {
                secs1 = "0" + secs;
            }
            else {
                secs1 = secs;
            }
            if (mins < 10) {
                mins1 = "0" + mins;
            }
            else {
                mins1 = mins;
            }
            $(".m").text(mins1);
            $(".s").text(secs1);
            $(".tips_time").text(mins1 + ":" + secs1);
        }, 1000);


    }

    setTimeout(video, 3000);


    /*小地图点击*/
    $("#map_small").click(function () {
        if ($(".map").is(":hidden")) {
            $(".video").hide();
            $(".map").show();
            var imgSrc = $(".video img").attr("src");
            $(this).find("img").attr("src", imgSrc)
        } else {
            $(".map").hide();
            $(".video").show();
            $(this).find("img").attr("src", "images/map-s.jpg")
        }
    });


    /*挂断视频*/
    $("#btn_close").click(function () {
        $(".video").hide();
        $(".map").show();
        $(".tips_box").hide();
        $(".small_box").hide();
        clearInterval(timer_count);
    });


    /*邀请医生*/

    var s1 = 0;
    $(".address_list li").click(function () {
      //  if ($(".small_window .small_box:visible").length < 3) {
            var name = $(this).find(".as_name").text();
            var name2 = name.substring(3, name.length)
            $("#tips_yq strong").text(name2);
            $("#tips_yq").show().siblings().hide();
            if (s1 != 0) {
                clearTimeout(s1)
            }
            s1 = setTimeout(function () {
                $("#tips_yq").hide();
                $("#tips_time").show();
                $("#doctor").show();
            }, 3000);


      //  }


    });


    var eleDustbin = $(".east_top")[0], eleDrags = $(".address_list li .as_photo img"), lDrags = eleDrags.length, eleDrag = null;
    for (var i = 0; i < lDrags; i += 1) {
        eleDrags[i].onselectstart = function () {
            return false;
        };
        eleDrags[i].ondragstart = function (ev) {
            ev.dataTransfer.effectAllowed = "move";
            //ev.dataTransfer.setData("text", ev.target.innerHTML);
            ev.dataTransfer.setDragImage(ev.target, 0, 0);
            eleDrag = ev.target;
            return true;
        };
        eleDrags[i].ondragend = function (ev) {
            //ev.dataTransfer.clearData("text");
            eleDrag = null;
            return false
        };
    }

    eleDustbin.ondragover = function (ev) {
        ev.preventDefault();
        return true;
    };

    eleDustbin.ondragenter = function (ev) {
        //this.style.color = "#ffffff";
        return true;
    };
    eleDustbin.ondrop = function (ev) {
        if (eleDrag) {

           // if ($(".small_window .small_box:visible").length < 3) {
                var p = $(eleDrag).parents("li");
                var name = p.find(".as_name").text();

                var name2 = name.substring(3, name.length)
                $("#tips_yq strong").text(name2);
                $("#tips_yq").show().siblings().hide();
                if (s1 != 0) {
                    clearTimeout(s1)
                }
                s1 = setTimeout(function () {
                    $("#tips_yq").hide();
                    $("#tips_time").show();
                    $("#doctor").show();
                }, 3000)
           // }
        }

        return false;
    };
	
/*录制视频*/
$(".record_btn").click(function(){	
	$(this).toggleClass("on");	
	});
	

/*查看更多历史消息*/
$(".more_msg").click(function(){
	$(this).addClass("on");	
	$(".east_bottom").animate({
		height:860
		},300,function(){
			$(".down_more").show();	
			})		
	$(".chat_list").height(860-49-36);		
	$(".chat_list_w").height(860-49-5-36);	
	$(".history_msg").appendTo(".chat_list_w ul").show();
	$(".chat_list_w").perfectScrollbar('update');		
	});	

$(".down_more").click(function(){
	$(".more_msg").removeClass("on");
	$(".east_bottom").animate({
		height:222
		},300,function(){
			$(".chat_list").height(173);		
	$(".chat_list_w").height(160);	
	$(".chat_list_w").perfectScrollbar('update');	
	$(".down_more").hide();			
			})	
	});


/*电子签名*/
function Draw(arg) {
	if (arg.nodeType) {
		this.canvas = arg;
	} else if (typeof arg == 'string') {
		this.canvas = document.getElementById(arg);
	} else {
		return;
	}
	this.init();
}
Draw.prototype = {
	init: function() {
		var that = this;
		if (!this.canvas.getContext) {
			return;
		}
		this.context = this.canvas.getContext('2d');
		this.canvas.onselectstart = function () {
			return false;  //修复chrome下光标样式的问题
		};
		this.canvas.onmousedown = function(event) {
			that.drawBegin(event);
		};
	},
	drawBegin: function(e) {
		var that = this,
			stage_info = this.canvas.getBoundingClientRect();
		window.getSelection ? window.getSelection().removeAllRanges() :
								document.selection.empty();  //清除文本的选中
		this.context.moveTo(
			e.clientX - stage_info.left,
			e.clientY - stage_info.top
		);
		document.onmousemove = function(event) {
			that.drawing(event);
		};
		document.onmouseup = this.drawEnd;
	},
	drawing: function(e) {
		var stage_info = this.canvas.getBoundingClientRect();
		this.context.lineTo(
			e.clientX - stage_info.left,
			e.clientY - stage_info.top
		);
		this.context.stroke();
	},
	drawEnd: function() {
		document.onmousemove = document.onmouseup = null;
	}
};
var draw = new Draw('canvas');

		var canvas=document.getElementById("cans");
		var cx=canvas.getContext("2d");
        var img= new Image();
       img.src="images/pian.jpg";
      cx.drawImage(img,0,0);

//$('.literally').literallycanvas();	


$(".zoom_btn").click(function(){
	$whiteboard=$(".whiteboard");	
	var p=$(this).parents(".content_box");	
	if($(this).hasClass("on")){				
		$(this).removeClass("on");				
		$whiteboard.removeClass("whiteboard_b").width(633);		
		$whiteboard.appendTo(".content_box:eq(3)");		
		$(".literally").width(582).height(695);		
		$whiteboard.find("canvas").attr("width",582).attr("height",633);			
	}else{		
			$(this).addClass("on");				
			$("#body").css("position","relative");						
			$whiteboard.appendTo("#body").addClass("whiteboard_b").width($(window).width());				
			$(".literally").width($(window).width()).height(917);					
			$whiteboard.find("canvas").attr("width",$(window).width()).attr("height",917);		
		
		}	
	$(window).resize();	
	});




})