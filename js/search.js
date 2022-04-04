$(function () {
  $("#searchBtn").on("click", function () {
    $("#search-item").css("display", "block");
  });

  $("#closeBtn").on("click", function () {
    $("#search-item").css("display", "none");
  });

  $(".tag-item").click(function () {
    var getTag = $(this).text();
    console.log(getTag);
    $("#searchItem").val(getTag);
  });
});
