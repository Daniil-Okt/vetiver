function cardBasketBtnActive() {
	function isScreenSize1024OrLess() {
		return window.innerWidth <= 1024;
	}

	const basket = document.querySelector('.basket');

	if (basket) {
		const cards = basket.querySelectorAll('.card');

		cards.forEach(card => {
			card.addEventListener('click', function (event) {
				if (isScreenSize1024OrLess()) {
					const isClickInsideBasketBtnRow = event.target.closest('.card__basket-btn-row');
					const isClickOnDeleteBtn = event.target.closest('.card__btn-delete');

					if (isClickOnDeleteBtn) {
						card.classList.remove('active-btn');
					} else if (!isClickInsideBasketBtnRow) {
						card.classList.toggle('active-btn');
					}
					
					if (isClickInsideBasketBtnRow && !isClickOnDeleteBtn) {
						event.stopPropagation();
					}
				}
			});
		});
	}
}

export default cardBasketBtnActive;