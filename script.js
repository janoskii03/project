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

let currentInDate,currentOutDate,numAdult,numChildren;


  $("#checkIn").mouseout(function () {
    let date = new Date($("#checkIn").val()); //取得選取的日期，並產生一個日期物件
    currentInDate =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

    console.log(currentInDate);
  });

  $("#checkOut").mouseout(function () {
    let date = new Date($("#checkOut").val());

     currentOutDate =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

    console.log(currentOutDate);
  });

 numAdult = Number($("#adult").val());
   numChildren = Number($("#children").val());
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

//預約



$('.reserve-btn').click(function(){

let reservation = `入住日期: ${currentInDate} 離開日期: ${currentOutDate} 人數: ${numAdult} 位大人 ${numChildren} 位小孩`

if ( numAdult==0 && numChildren==0 && currentInDate==undefined && currentOutDate==undefined){
  $('.modal-body').text("請選擇入住日期、離開日期及人數，謝謝")
}else if (  currentInDate==undefined && currentOutDate==undefined){
  $('.modal-body').text("請選擇入住日期、離開日期，謝謝")
}else if (  currentInDate==undefined ){
  $('.modal-body').text("請選擇入住日期，謝謝")
}else if (  currentOutDate==undefined ){
  $('.modal-body').text("請選擇離開日期，謝謝")
} else if ( numAdult==0 && numChildren==0){
  $('.modal-body').text("請選擇人數，謝謝")
}
else{
  $('.modal-body').text(reservation)
}

$('.modal').css('opacity','1')
  $('.online-overlay').css('opacity','1')
console.log($(this).index());

})

$('.online-modal-close-btn').click(function(){
  $('.modal').css('opacity','0')
  $('.online-overlay').css('opacity','0')
})

$(".online-overlay").click(function(){
  console.log(123);
  $('.modal').css('opacity','0')
  
})




});
