$(function () {
  $(".brands-banner").hover(function(){
    $(this).children(".bg-contain,.para-inner,.circle-el").addClass("active");
  });



  //구글맵
  $("#googleMapBtn").click(function () {
    $(".google-map_sec").show(); //버튼이 클릭되면 구글맵 배너 블럭
  });

  $(".google-map_sec")
    .find(".close-btn")
    .click(function () {
      $(".google-map_sec").hide(); //닫기 버튼을 누를시 다시 디스플레이 none으로 변경
    });

    //공지사항 탭메뉴
    $(".list-el").on("click",function(){
      $(".list-el").removeClass("active"); //모든 탭메뉴 active제거, 기본값
      $(this).addClass("active"); //클릭된 메뉴에만 클래스추가

      var targetEl = "#" + ($(this).attr("rel")); //메뉴가 가지고 있는 rel값을 저장
      $(".banner-contain .item").removeClass("selected"); //모든 배너 숨기기
      $(targetEl).addClass("selected");//해당 rel값을 가진 아이디 요소 보여짐
    })



    //움직이는 퀵메뉴
    var defalutTop = parseInt($(".quick_btn").css("top")) //기본위치

    $(window).scroll(function(){
      var st = $(this).scrollTop(); //스크롤 이벤트 발생시 이동한 거리 계산
      $(".quick_btn").stop().animate({top:defalutTop + st},800) //기본위치에 스크롤 발생한 거리만큼 1초동안 이동
    })

});

