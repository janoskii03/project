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

  let currentInDate, currentOutDate, numAdult, numChildren;

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
  numAdult, numChildren = 0;

  $("#minus").click(function () {
    if (numAdult > 0) {
      numAdult--;
    } else if (numAdult <= 0) {
      numAdult = 0;
    }
    console.log(numAdult);
    $("#adult").val(numAdult);
  });

  $("#plus").click(function () {
    if (numAdult >= 0) {
      numAdult++;
    } else if (numAdult < 0) {
      numAdult = 0;
    }
    console.log(numAdult);
    $("#adult").val(numAdult);
  });

  $("#childMinus").click(function () {
    if (numChildren > 0) {
      numChildren--;
    } else if (numChildren <= 0) {
      numChildren = 0;
    }

    
    $("#children").val(numChildren);
  });

  $("#childPlus").click(function () {
    if (numChildren >= 0) {
      numChildren++;
    } else if (numChildren < 0) {
      numChildren = 0;
    }
    console.log(numChildren);
    $("#children").val(numChildren);
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

  $(".question-list-faq").click(function () {
    $(this).toggleClass("active");

    $(".question-list-faq").not(this).removeClass("active");
  });

  //預約

  $(".reserve-btn").click(function () {
    let roomInfo = $(this).parent().children().children().text().substr(0, 5);
    let moneyInfo = $(this).parent().children().children().text().substr(5, 8);
    let reservation = `<p>入住日期: ${currentInDate} ， 離開日期: ${currentOutDate}</p> 
    <p>選擇房間:${roomInfo}</p>  
    <p>人數: ${numAdult} 位大人 ，  ${numChildren} 位小孩</p>
    <p>金額: ${moneyInfo} </p>`;

    if (
      numAdult == 0 &&
      numChildren == 0 &&
      currentInDate == undefined &&
      currentOutDate == undefined
    ) {
      $("#onlinePayment").hide();
      $(".modal-body").text("請選擇入住日期、離開日期及人數，謝謝");
    } else if (currentInDate == undefined && currentOutDate == undefined) {
      $("#onlinePayment").hide();
      $(".modal-body").text("請選擇入住日期、離開日期，謝謝");
    } else if (
      currentInDate == undefined &&
      numAdult == 0 &&
      numChildren == 0
    ) {
      $("#onlinePayment").hide();
      $(".modal-body").text("請選擇入住日期及人數，謝謝");
    } else if (
      currentOutDate == undefined &&
      numAdult == 0 &&
      numChildren == 0
    ) {
      $("#onlinePayment").hide();
      $(".modal-body").text("請選擇離開日期及人數，謝謝");
    } else if (numAdult == 0 && numChildren == 0) {
      $("#onlinePayment").hide();
      $(".modal-body").text("請選擇人數，謝謝");
    } else {
      $("#onlinePayment").show();
      $(".modal-body").html(reservation);
    }

    $(".modal").css("opacity", "1");
    $(".online-overlay").css("opacity", "1");
  });

  $(".online-modal-close-btn").click(function () {
    $(".modal").css("opacity", "0");
    $(".online-overlay").css("opacity", "0");
  });

  $("#back").click(function () {
    $(".modal").css("opacity", "0");
    $(".online-overlay").css("opacity", "0");
  });

  //結帳頁面

  let nameInput,
    emailInput,
    addressInput,
    nationInput,
    townshipInput,
    postalInput,
    cardNameInput,
    cardNumberInput,
    monthInput,
    yearInput,
    validInput;

  $(".payment-name-input").on("input", function () {
    nameInput = $(".payment-name-input").val();

    if (nameInput == "") {
      $(".payment-name").text("請輸入名字");
    }
  });

  $(".payment-email-input").on("input", function () {
    emailInput = $(".payment-email-input").val();

    if (emailInput == "") {
      $(".payment-email").text("請輸入電子信箱");
    }
  });

  $(".payment-address-input").on("input ", function () {
    addressInput = $(".payment-address-input").val();

    if (addressInput == "") {
      $(".payment-address").text("請輸入地址");
    }
  });

  $(".payment-nation-input").on("input ", function () {
    nationInput = $(".payment-nation-input").val();

    if (nationInput == "") {
      $(".payment-nation").text("請輸入國家");
    }
  });

  $(".payment-township-input").on("input", function () {
    townshipInput = $(".payment-township-input").val();

    if (townshipInput == "") {
      $(".payment-township").text("請輸入鄉鎮");
    }
  });

  $(".payment-postal-input").on("input", function () {
    postalInput = $(".payment-postal-input").val();

    if (postalInput == "") {
      $(".payment-postal").text("請輸入郵遞區號");
    }
  });

  $(".payment-card-name-input").on("input", function () {
    cardNameInput = $(".payment-card-name-input").val();
    if (cardNameInput == "") {
      $(".card-name").text("請輸入姓名");
    }
  });

  $(".payment-card-number-input").on("input", function () {
    cardNumberInput = $(".payment-card-number-input").val();
    if (cardNumberInput == "") {
      $(".card-number").text("請輸入信用卡號碼");
    } else if (cardNumberInput != "" && cardNameInput.length < 12) {
      $(".card-number").text("信用卡號碼小於12碼");
    }
  });

  $(".payment-month-input").on("input", function () {
    monthInput = $(".payment-month-input").val();
    if (monthInput == "") {
      $(".card-valid-month").text("請輸入有效月份");
    } else if (monthInput !== "" && monthInput.length >= 3) {
      $(".card-valid-month").text("有效月份為兩位數");
    }
  });

  $(".payment-year-input").on("input", function () {
    yearInput = $(".payment-year-input").val();
    if (yearInput == "") {
      $(".card-valid-year").text("請輸入有效年份");
    } else if (yearInput !== "" && yearInput < 2023) {
      $(".card-valid-year").text("無效的年份");
    }
  });

  $(".payment-valid-input").on("input", function () {
    validInput = $(".payment-valid-input").val();
    if (validInput == "") {
      $(".card-valid-num").text("請輸入驗證碼");
    } else if (validInput !== "" && validInput.length > 3) {
      $(".card-valid-num").text("認證碼為三位數");
    }
  });

  $(".payment-submit").click(function (event) {
    event.preventDefault();
 $(".payment-modal").css("opacity", "1");
      $(".payment-overlay").css("opacity", "1");
      $(".modal-body").text("預約完成!");
    // if (
    //   validInput == "" &&
    //   yearInput == "" &&
    //   monthInput == "" &&
    //   cardNumberInput == "" &&
    //   cardNameInput== "" &&
    //   postalInput == "" &&
    //   townshipInput == "" &&
    //   nationInput == "" &&
    //   addressInput == "" &&
    //   emailInput == "" &&
    //   nameInput == ""
    // ) {
  
    //   $(".payment-modal").css("opacity", "1");
    //   $(".payment-overlay").css("opacity", "1");
    //   $(".modal-body").text("輸入不符合規則，請重新輸入");

    // }else{
     
    // }
  });

  $("#paymentBack").click(function () {
    $(".payment-modal").css("opacity", "0");
    $(".payment-overlay").css("opacity", "0");
  });

  $(".payment-modal-close-btn").click(function () {
    $(".payment-modal").css("opacity", "0");
    $(".payment-overlay").css("opacity", "0");
  });
});
