const cardElements = document.querySelectorAll('.card__fade-in');

function checkCardFade() {
    cardElements.forEach(cardElement => {
        const triggerPosition = cardElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (triggerPosition < windowHeight * 0.8) {
            cardElement.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkCardFade);
checkCardFade();
