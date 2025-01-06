function cardBtnLikeSave() {
    const cardBtnLike = document.querySelectorAll('.card__btn-like')
    if (cardBtnLike.length > 0) {
        cardBtnLike.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active')
            })
        });
    }
}

export default cardBtnLikeSave;