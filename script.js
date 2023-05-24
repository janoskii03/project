'use strict'

// const btn = document.querySelector('.news-btns');
// const btnHidden = document.querySelector('.btns-hidden');
// const btnActive = document.querySelectorAll('.btn-active');



// for (let i = 0; i < btnActive.length; i++) {
//     btnActive[i].addEventListener('click', function () {
//         console.log('click');
//     })

// }
// console.log(btnActive);



//FAQ

const faqs = document.querySelectorAll(".question-list-faq");



faqs.forEach(faq=>{
    faq.addEventListener("click",()=> {
       
        faq.classList.toggle("active");

    })
});

