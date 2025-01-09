function popupBodyChange() {
    const popupEntRegChange = document.querySelectorAll('.popup-button-change')
    if (popupEntRegChange.length > 0) {
        popupEntRegChange.forEach(button => {
            button.addEventListener('click', function() {
                const popups = document.querySelectorAll('.popup-body-change');
                popups.forEach(popupBody => {
                    

                    if (button.classList.contains('enter') && popupBody.classList.contains('enter')
                    || button.classList.contains('reg') && popupBody.classList.contains('reg')
                    || button.classList.contains('new') && popupBody.classList.contains('new')) {
                        popupBody.classList.add('active')
                    } else {
                        popupBody.classList.remove('active')
                    }
                });
                
                
            });
        });
        
    }
}

export default popupBodyChange;