"use strict";

//小圖換大圖

function init() {
  let pic = document.querySelectorAll(".img");

  for (let i = 0; i < pic.length; i++) {
    pic[i].addEventListener("click", function (e) {
      document.getElementById("large").src = e.target.src;
    });
  }
}

window.addEventListener("load", init, false);

$(function () {
  // 線上訂房

  $("#checkIn").mouseout(function () {
    let date = new Date($("#checkIn").val()); //取得選取的日期，並產生一個日期物件

    let currentInDate =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

    console.log(currentInDate);
  });

  $("#checkOut").mouseout(function () {
    let date = new Date($("#checkOut").val());

    let currentOutDate =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

    console.log(currentOutDate);
  });

  let numAdult = Number($("#adult").val());
  let numChildren = Number($("#children").val());
  numAdult,numChildren = 0;

  $("#minus").click(function () {
    
    
    if (numAdult > 0) {
        numAdult--;
    } else if (numAdult <= 0  ) {
        numAdult = 0;
    }
    console.log(numAdult);
    $("#adult").val(numAdult)
  });

  $("#plus").click(function () {
    if (numAdult >= 0) {
        numAdult++;
    } else if (numAdult < 0  ) {
        numAdult = 0;
    }
    console.log(numAdult);
    $("#adult").val(numAdult)
  });


  $("#childMinus").click(function () {
      
      if (numChildren > 0 ) {
          numChildren--;
        } else if (numChildren <=0) {
            numChildren = 0;
        }
       
    console.log(numChildren);
    $("#children").val(numChildren)
  });

  $("#childPlus").click(function () {
    if (numChildren >= 0) {
        numChildren++;
    } else if (numChildren < 0) {
        numChildren = 0;
    }
    console.log(numChildren);
    $("#children").val(numChildren)
  });


  //最新消息

  $(".btns").click(function () {
    $(".news-all").show();
    $(".news-tour").show();
    $(".news-art").show();
    $(".news-media").show();

    if ($(this).hasClass("btn-all")) {
      $(".news-tour").hide();
      $(".news-art").hide();
      $(".news-media").hide();
    } else if ($(this).hasClass("btn-tour")) {
      $(".news-all").hide();
      $(".news-art").hide();
      $(".news-media").hide();
    } else if ($(this).hasClass("btn-art")) {
      $(".news-tour").hide();
      $(".news-all").hide();
      $(".news-media").hide();
    } else if ($(this).hasClass("btn-media")) {
      $(".news-tour").hide();
      $(".news-art").hide();
      $(".news-all").hide();
    }
  });

  //FAQ


$(".question-list-faq").click(function(){
    
$(this).toggleClass("active")

$(".question-list-faq").not(this).removeClass("active")


})




});
