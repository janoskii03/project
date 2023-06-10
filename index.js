"use strict";

//顯示時間
const nowTime = document.getElementById("nowTime");

function showTime() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();

  nowTime.innerText = `${year}-${month}-${day} - ${hh}:${mm}:${ss}`;
}
showTime();
setInterval(showTime, 1000);


$(function () {
    //首頁消息
    $("#topMessage")
      .slideDown(2000)
      .click(function () {
        $(this).slideUp(1000);
      });
    }  )