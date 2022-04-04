$(function(){
  $("#searchBtn").on("click",function(){
    $("#search-item").css("display", "block");
  });

  $("#closeBtn").on("click", function(){
    $("#search-item").css("display", "none");
  });
})