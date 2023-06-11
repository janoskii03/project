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
    
  //最上面消息
    $("#topMessage")
      .slideDown(2000)
      .click(function () {
        $(this).slideUp(1000);
      });


      //淡入淡出
let showHeight =150

$(window).scroll(function(){
$('.area').each(function () {

let setThis=$(this)
let areaTop = setThis.offset().top

console.log($(window).scrollTop());  //7138
console.log($(window).height()); //937 7138-937=6201
console.log(areaTop);

if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()){
  setThis.stop(true).animate({
      opacity: 1,
  },800)
}else{
  setThis.stop(true).animate({
      opacity: 0,
  },500)
}



  })


})




    }  )