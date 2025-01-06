function filterFunction() {
    const itemsFilter = document.querySelectorAll('.item-filter')
    if (itemsFilter.length > 0) {
        itemsFilter.forEach((filterBody) => {
            const btnAllList = filterBody.querySelectorAll('.btn-all');
            const btnNoAllList = filterBody.querySelectorAll('.btn-no-all');
            const title = filterBody.querySelector('.item-filter__title');
        
            btnAllList.forEach((btnAll) => {
                btnAll.addEventListener('click', () => {
                    document.querySelectorAll('.item-filter').forEach((item) => {
                        item.classList.remove('open-all');
                    });
                    
                    filterBody.classList.add('open-all');
                });
            });
        
            btnNoAllList.forEach((btnNoAll) => {
                btnNoAll.addEventListener('click', () => {
                    filterBody.classList.remove('open-all');
                });
            });
        
            if (title) {
                title.addEventListener('click', () => {
                    document.querySelectorAll('.item-filter').forEach((item) => {
                        item.classList.remove('open-all');
                    });
                });
            }
        });
    }


	const buttonBot = document.querySelector('.popup-filter__button-bot');
	// Проверки выбраны какие-то чекбоксы на странице
	function updatePinkClass() {
	  const anyChecked = document.querySelectorAll('.item-filter input[type="checkbox"]:checked').length > 0;
	  if (anyChecked) {
		buttonBot.classList.add('pink'); 
	  } else {
		buttonBot.classList.remove('pink'); 
	  }
	}
    
	document.querySelectorAll('.item-filter').forEach(itemFilter => {
	  const checkboxes = itemFilter.querySelectorAll('input[type="checkbox"]');
	  const quantityElement = itemFilter.querySelector('.item-filter__quantity');
	  const clearButton = itemFilter.querySelector('.item-filter__clear');
  
	  // Функция для обновления счетчика и класса option-selected
	  function updateSelectedOptions() {
		const selectedValues = new Set(
		  Array.from(checkboxes)
			.filter(checkbox => checkbox.checked)
			.map(checkbox => checkbox.value)
		);

  		const selectedCount = selectedValues.size;

		if (selectedCount > 0) {
		  itemFilter.classList.add('option-selected');
		} else {
		  itemFilter.classList.remove('option-selected');
		}
  
		quantityElement.textContent = selectedCount > 0 ? selectedCount.toString().padStart(2, '0') : '00';
  
		// Проверяем, надо ли добавить или убрать класс pink
		updatePinkClass();
	  }
  
	  // Обработчик на изменение состояния чекбокса
	  checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', updateSelectedOptions);
	  });
  
	  // Кнопка "Очистить"
	  clearButton.addEventListener('click', () => {
		checkboxes.forEach(checkbox => {
		  checkbox.checked = false; 
		});
  
		itemFilter.classList.remove('option-selected');
		quantityElement.textContent = '00'; 

		updatePinkClass();
	  });
	});
    
	
	const clearAllButton = document.querySelector('.popup-filter__clear-all');
    
	if (clearAllButton) {
	  clearAllButton.addEventListener('click', () => {
		document.querySelectorAll('.item-filter').forEach(itemFilter => {
		  const checkboxes = itemFilter.querySelectorAll('input[type="checkbox"]');
		  const quantityElement = itemFilter.querySelector('.item-filter__quantity');
  
		  // Сбрасываем чекбоксы
		  checkboxes.forEach(checkbox => {
			checkbox.checked = false;
		  });
  
		  // Убираем класс option-selected
		  itemFilter.classList.remove('option-selected');
  
		  // Сбрасываем счетчик
		  quantityElement.textContent = '00';
		});
  
		// Убираем класс pink у кнопки
		updatePinkClass();
	  });
	}

}

export default filterFunction;