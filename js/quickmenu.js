var defalutTop = parseInt($(".quick_btn").css("top"))

$(window).scroll(function(){
  var st = $(this).scrollTop();
  $(".quick_btn").stop().animate({top:defalutTop + st},800)
})