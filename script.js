'use strict'



$(function(){
    //首頁消息
    $('#topMessage').slideDown(2000).click(function(){
        $(this).slideUp(1000)
    })




})


//FAQ

const faqs = document.querySelectorAll(".question-list-faq");

faqs.forEach(faq=>{
    faq.addEventListener("click",()=> {
       
        faq.classList.toggle("active");

    })
});



