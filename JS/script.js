const accordionContent = document.querySelectorAll(`button.accordion_question`);


function accordionTog(event) {
    
    const x = event.target.nextElementSibling;

    if(x.style.display==="none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }



    const y = event.target;
    if(y.style.fontWeight ==="300"){
        y.style.fontWeight = "700";
    } else {
        y.style.fontWeight = "300";
    }
    
}

accordionContent.forEach(function(accordionToggle){
    accordionToggle.addEventListener(`click`, accordionTog);
})


