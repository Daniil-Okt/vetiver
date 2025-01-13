function cardsPayOpenTimer() {
    window.cardsPayOpenStartTimer = function() {
        const popupBasket = document.querySelector('.popup-basket');
        popupBasket.classList.add('is-open');
        let timeoutId;
    
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    
        timeoutId = setTimeout(() => {
            popupBasket.classList.remove('is-open');
        }, 2500);
    };
}

export default cardsPayOpenTimer;