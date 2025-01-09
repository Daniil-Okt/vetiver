function cardsPayOpenTimer() {
    const cardsPay = document.querySelectorAll('.popup-basket-open')
    if (cardsPay.length > 0) {
        cardsPay.forEach(button => {
            let timeoutId;
            button.addEventListener('click', () => {
                const popupBasket = document.querySelector('.popup-basket');
                
                popupBasket.classList.add('is-open');
                
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
        
                timeoutId = setTimeout(() => {
                    popupBasket.classList.remove('is-open');
                }, 2500);
            });
        });
    }
}

export default cardsPayOpenTimer;