'use strict'





//FAQ

const faqs = document.querySelectorAll(".question-list-faq");



faqs.forEach(faq=>{
    faq.addEventListener("click",()=> {
       
        faq.classList.toggle("active");

    })
});

