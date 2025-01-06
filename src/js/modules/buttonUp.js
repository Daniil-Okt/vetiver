function buttonUp() {
    const buttonUp = document.querySelector('.bottom-menu__button-up');
    if (buttonUp) {
        buttonUp.addEventListener('click', () => {
            window.scrollTo({
                top: 0, 
                behavior: 'smooth'
            });
        });
    }
}

export default buttonUp;