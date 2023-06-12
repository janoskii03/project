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
    

  //訂房
  let  numAdult, numChildren;

  numAdult = Number($("#indexAdult").val());
  numChildren = Number($("#indexChild").val());

   numAdult, numChildren = 0;

  $("#indexMinus").click(function () {
    if (numAdult > 0) {
      numAdult--;
    } else if (numAdult <= 0) {
      numAdult = 0;
    }
    
    $("#indexAdult").val(numAdult);
  });

  $("#indexPlus").click(function () {
    if (numAdult >= 0) {
      numAdult++;
    } else if (numAdult < 0) {
      numAdult = 0;
    }
    
    $("#indexAdult").val(numAdult);
  });

  $("#indexChildMinus").click(function () {
    if (numChildren > 0) {
      numChildren--;
    } else if (numChildren <= 0) {
      numChildren = 0;
    }

    
    $("#indexChild").val(numChildren);
  });

  $("#indexChildPlus").click(function () {
    if (numChildren >= 0) {
      numChildren++;
    } else if (numChildren < 0) {
      numChildren = 0;
    }
    
    $("#indexChild").val(numChildren);
  });

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

if (jQuery(window).width() > 768){
  
  if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()){
    setThis.stop(true).animate({
        opacity: 1,
    },500)
  }else{
    setThis.stop(true).animate({
        opacity: 0,
    },700)
  }
  
}else{
  setThis.stop(true).animate({
    opacity: 1,
},500)
}

  })
})

//消息詳情

$('.discount').click(function(){

  $('.modal').css('opacity','1')
  $('#overlay').css('opacity','1')

})
$('.modal-close-btn').click(function(){
  
  $('.modal').css('opacity','0')
  $('#overlay').css('opacity','0')
})






    }  )