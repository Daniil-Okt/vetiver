function cardBtnImgLikeCompare() {
    const cardBtnLike = document.querySelectorAll('.card__btn-like')
    const cardBtnCompare = document.querySelectorAll('.card__btn-compare')

    cardBtnAddActive(cardBtnLike)
    cardBtnAddActive(cardBtnCompare)
}
function cardBtnAddActive(buttons) {
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active')
            })
        });
    }
}

export default cardBtnImgLikeCompare;