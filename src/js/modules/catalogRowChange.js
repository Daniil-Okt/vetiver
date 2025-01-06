function catalogRowChange() {
    const buttonsView = document.querySelectorAll('.btn-view__icon');
    const catalogRow = document.querySelector('.catalog__row');
    
    buttonsView.forEach(button => {
        button.addEventListener('click', () => {
            buttonsView.forEach(btn => btn.classList.remove('active'));
    
            button.classList.add('active');
    
            if (button.classList.contains('two')) {
                catalogRow.classList.add('row-two');
            } else {
                catalogRow.classList.remove('row-two'); 
            }
        });
    });
    
}

export default catalogRowChange;