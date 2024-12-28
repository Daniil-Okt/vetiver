function syncCheckboxes() {
	// Собираем все чекбоксы
	const checkboxes = document.querySelectorAll('.item-filter__item-input input');
	
	checkboxes.forEach((checkbox) => {
	  // Добавляем обработчик события `change`
	  checkbox.addEventListener('input', () => {
		// Получаем атрибут `name` текущего чекбокса
		const checkboxName = checkbox.value;

		// Находим все чекбоксы с тем же `value` и синхронизируем их состояние
		document.querySelectorAll(`.item-filter__item-input input[value="${checkboxName}"]`).forEach((syncCheckbox) => {
		  syncCheckbox.checked = checkbox.checked;
		});
	  });
	});
  }

  export default syncCheckboxes;
