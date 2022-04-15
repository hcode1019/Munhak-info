$(function () {
  $("#googleMapBtn").click(function () {
    $(".google-map_sec").show();
  });

  $(".google-map_sec")
    .find(".close-btn")
    .click(function () {
      $(".google-map_sec").hide();
    });
});
