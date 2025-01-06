function productArrange() {
	const productButtonAdd = document.querySelectorAll('.product-button-add')
	if (productButtonAdd.length > 0) {
		productButtonAdd.forEach(button => {
			button.addEventListener('click', () => {
				const product = document.querySelector('.product')
				if (product) {
					product.classList.add('_arrange')
				}
			})
		});
	}
}
export default productArrange;
