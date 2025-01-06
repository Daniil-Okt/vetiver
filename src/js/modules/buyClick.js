function buyClick(classBlock) {
    const block = document.querySelector(`${classBlock}`);
	if (block) {
		const productBuyClick = block.querySelector('.product__buy-click')
		if (productBuyClick) {
			productBuyClick.addEventListener('click', () => {
				block.classList.add('_buy-click-active')
			})
		}
	}
}

export default buyClick;