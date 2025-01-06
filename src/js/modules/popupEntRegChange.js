function popupEntRegChange() {
    const popupEntRegChange = document.querySelectorAll('.popup-ent-reg-change')
    if (popupEntRegChange.length > 0) {
        popupEntRegChange.forEach(button => {
            button.addEventListener('click', function() {
                const currentPopup = this.closest('.popup-ent-reg-body');
        
                const popups = document.querySelectorAll('.popup-ent-reg-body');
        
                popups.forEach(popup => {
                    if (popup === currentPopup) {
                        popup.classList.remove('active');
                    } else {
                        popup.classList.add('active');
                    }
                });
            });
        });
        
    }
}

export default popupEntRegChange;