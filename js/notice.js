$(".list-el").on("click",function(){
  $(".list-el").removeClass("active");
  $(this).addClass("active");

  var targetEl = "#" + ($(this).attr("rel"));
  $(".banner-contain .item").removeClass("selected");
  $(targetEl).addClass("selected");
})