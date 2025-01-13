function buyClick(classBlock) {
    const block = document.querySelector(`${classBlock}`);
	if (block) {
		const productBuyClick = block.querySelectorAll('.product__buy-click')
		if (productBuyClick.length > 0) {
			productBuyClick.forEach(button => {
				button.addEventListener('click', () => {
					block.classList.toggle('_buy-click-active')
				})
			});
		}
	}
}

export default buyClick;