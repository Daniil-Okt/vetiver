function quantityNumber() {
    const minusButtons = document.querySelectorAll('.quantity__number-minus');
	const plusButtons = document.querySelectorAll('.quantity__number-plus');
	const inputs = document.querySelectorAll('.quantity__input');
    
	function decreaseValue(input) {
		let value = parseInt(input.value);
		if (value > 1) {
			value--;
			input.value = value;
			updateQuantityNumberText(input);
		}
	}
    
	function increaseValue(input) {
		let value = parseInt(input.value);
		value++;
		input.value = value;
		updateQuantityNumberText(input);
	}

	function updateQuantityNumberText(input) {
		// Ищем родителя card для данного input
		const card = input.closest('.card');
		if (card) {
			const quantityTextElement = card.querySelector('.quantity-number-text');
			if (quantityTextElement) {
				quantityTextElement.textContent = input.value;
			}
		}
	}

	// Обновляем text для каждого input при загрузке
	inputs.forEach(function (input) {
		updateQuantityNumberText(input);
	});
  
	minusButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			const input = button.nextElementSibling;
			decreaseValue(input);
		});
	});
  
	plusButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			const input = button.previousElementSibling;
			increaseValue(input);
		});
	});
}
export default quantityNumber;