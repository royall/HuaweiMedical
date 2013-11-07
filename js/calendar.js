// JavaScript Document
/* Author: Yangz */
/* Time: 2013/09/22 */


// JavaScript Document

$(function () {
	
	
	
	/*数组随机排序*/
	function arrayRandom(array,nums){
		var arrayNew=array;
		for(var i=0;i<nums;i++){			
			var rand=parseInt(nums*Math.random());
			var temp=arrayNew[i];
			arrayNew[i]=arrayNew[rand];
			arrayNew[rand]=temp;			
			}
		return arrayNew;	
		}
			
	/*模拟数据改变*/
	function calendarChange(){				
				$(".list ul").each(function(){
				var _this=$(this)
				  var htmlArray = [];
				   _this.find("li").each(function () {        
       					 htmlArray.push($(this)); 
    				});					
				  var htmlArray2=arrayRandom(htmlArray,htmlArray.length);				  
				  for(i=0; i in htmlArray2; i++){
					  htmlArray2[i].appendTo(_this)					  
					  }						  			
				}); 				
			}
			

    $("#calendar").kendoCalendar({
        footer: false,
        change: function () { 
            $(".date_show span").text(this.value().toLocaleDateString());
            var week = this.value().getDay(); 
			calendarChange();
        }
    });

	var today = new Date();
			
	/*显示当天时间*/
	$(".date_show span").text(today.toLocaleDateString());
		
    /*返回今天*/
    $("a.return").click(function () {        
        $("#calendar").getKendoCalendar().value(today);
        $(".date_show span").text(today.toLocaleDateString());		
		//calendarChange()
        return false;
    });
			
	
  
   



   



})