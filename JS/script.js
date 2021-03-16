
(function() {
    const question = document.querySelectorAll('.accordion_question');
    const item = document.querySelectorAll('.accordion_item');

    question.forEach(question => {
        question.addEventListener('click', (e) => {
            const faqItem = e.currentTarget.closest('.accordion_item');
            item.forEach(item => {
                if (item != faqItem) {
                    item.classList.remove('open')
                }
            })
            faqItem.classList.toggle('open')
        })
    })
}) ()



// const accordionContent = document.querySelectorAll(`button.accordion_question`);


// function accordionTog(event) {
    
//     const x = event.target.closestElement('accordion_content');

//     if(x.style.display==="none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }

//     const y = event.target;
//     if(y.style.fontWeight ==="300"){
//         y.style.fontWeight = "700";
//         y.classList.toggle("open");
//     } else {
//         y.style.fontWeight = "300";
//     }
    
//     console.log(y);
    

// }

// accordionContent.forEach(function(accordionToggle){
//     accordionToggle.addEventListener(`click`, accordionTog);
// })


