// JavaScript Document
/* Author: Yangz */
/* Time: 2013/09/22 */


String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

$(function () {

    $(".as_txt").keyup(function () {
        var txt = $(this).val().Trim();
        if (txt != "") {
            $(".address_list li").hide();
            $(".address_list li:contains(" + txt + ")").show()
        } else {
            $(".address_list li").show();
        }
    });

    $(".ms_txt").keyup(function () {
        var txt = $(this).val().Trim();
        if (txt != "") {
            $(".list li").hide();
            $(".list li:contains(" + txt + ")").show()
        } else {
            $(".list li").show();
        }
    });


	$(".address_list").perfectScrollbar();
	
	$("#module1 .list").perfectScrollbar();
	$("#module2 .list").perfectScrollbar();
	$("#module3 .list").perfectScrollbar();


})