// JavaScript Document
/* Author: Yangz */
/* Time: 2013/09/22 */


$(function(){	
	
	var $chat=$(".chat_list_w");
	
	$chat.perfectScrollbar();
	
	/*点击发送消息*/		
	$(".chat_send").click(function(){		
		sendMsg();
		return false;	
	});	
	
	/*回车发送消息*/
	$(".chat_txt").keydown(function(event){		
		var event = arguments.callee.caller.arguments[0] || window.event;//消除浏览器差异
        if (event.keyCode == 13) {
            sendMsg();
        }		
	});
	
	
		
	/*发送消息函数*/
	function sendMsg(){
		var $txtInput=$(".chat_txt"),		
		msg=$txtInput.val(),
		msgHtml='<li><div class="chat_photo"><img width="34" height="34" src="images/photo17.jpg"></div><div class="chat_msg"><em></em><span>'+msg+'</span></div></li>';		
		if(msg!=""){			
			$(msgHtml).appendTo(".chat_list_w ul");		
			goBottom();		
			$txtInput.val("").focus();			
		}	
		
	}	
	
	function goBottom() {
        var h2 = $chat.find("ul").height();
        var h3 = $chat.height();
        var dif = h3 - h2;
        if (h3 < h2) {
            $chat.scrollTop(h2 - h3);
        }
        $chat.perfectScrollbar("update");        
    }	
	
})