function officeScrollTopPage() {
    const officeRightMenuButton = document.querySelectorAll('.office-right__menu-button');
    const makingLeft = document.querySelector('.making__left'); 
    
    if (officeRightMenuButton.length > 0 && makingLeft) {
        officeRightMenuButton.forEach(button => {
            button.addEventListener('click', () => {
                const elementPosition = makingLeft.getBoundingClientRect().top + window.pageYOffset;
    
                window.scrollTo({
                    top: elementPosition - 160, 
                    behavior: 'smooth' 
                });
            });
        });
    }
}

export default officeScrollTopPage;