function toggleOrderItemActive() {
	const buttons = document.querySelectorAll('.head-orders__btn-detailed');
	if (!buttons.length) return;

	buttons.forEach(button => {
		button.addEventListener('click', function () {
			const parentItem = this.closest('.office-orders__item');
			if (parentItem) {
				parentItem.classList.toggle('_active');
			}
		});
	});
}

export default toggleOrderItemActive;