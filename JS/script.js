
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

