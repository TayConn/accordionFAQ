const accordionContent = document.querySelectorAll(`button.accordion_question`);


function accordionTog(event) {
    const x = event.target.nextElementSibling;

    if(x.style.display==="none") {
        x.style.display = "block";
       
    } else {
        x.style.display = "none";
    }
}

accordionContent.forEach(function(accordionToggle){
    accordionToggle.addEventListener(`click`, accordionTog);
})


