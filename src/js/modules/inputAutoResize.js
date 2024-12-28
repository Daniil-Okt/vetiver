function autoresize(input, isInitial = false) {
	const tempSpan = document.createElement('span');
	document.body.appendChild(tempSpan);
  
	// Скопируем основные стили инпута во временный элемент
	const inputStyles = getComputedStyle(input);
  
	// Учитываем акценты ширины:
	tempSpan.style.font = inputStyles.font;
	tempSpan.style.letterSpacing = inputStyles.letterSpacing;
	tempSpan.style.padding = '0'; // Игнорируем padding для временного элемента
	tempSpan.style.border = '0'; // Игнорируем border для временного элемента
	tempSpan.style.position = 'absolute';
	tempSpan.style.visibility = 'hidden';
	tempSpan.style.whiteSpace = 'pre'; // Важное свойство: корректно отображает пробелы и видимый текст
  
	// Установим текст, который нужно измерить
	tempSpan.textContent = input.value || input.placeholder || '';
  
	// Рассчитаем ширину
	const textWidth = tempSpan.offsetWidth;
  
	// Учитываем padding и границы из реальных стилей инпута
	const padding =
	  parseFloat(inputStyles.paddingLeft) + parseFloat(inputStyles.paddingRight);
  
	const border =
	  parseFloat(inputStyles.borderLeftWidth) + parseFloat(inputStyles.borderRightWidth);
  
	// Если используется box-sizing: border-box, компенсировать дополнительные элементы
	const boxSizing = inputStyles.boxSizing;
	let totalWidth = textWidth;
  
	if (boxSizing === 'border-box') {
	  totalWidth += border; // padding уже включён
	} else {
	  totalWidth += padding + border;
	}
  
	// Увеличиваем ширину на компенсацию для начальной ширины (по желанию)
	const compensation = isInitial ? 5 : 0;
	totalWidth += compensation;
  
	// Устанавливаем ширину
	input.style.width = `${Math.ceil(totalWidth)}px`;
  
	tempSpan.remove();
}

function setupAutoResize(inputs, form = null) {
	inputs.forEach(input => {
	  // Устанавливаем начальную ширину
	  autoresize(input, true);
  
	  // Обновляем ширину при вводе текста
	  input.addEventListener('input', () => autoresize(input));
  
	  // Обновляем ширину, если значение меняется программно
	  const descriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
	  Object.defineProperty(input, 'value', {
		get: descriptor.get,
		set(value) {
		  descriptor.set.call(input, value);
		  autoresize(input);
		}
	  });
	});
  
	if (form) {
	  // При сбросе формы дожидаемся изменения значений
	  form.addEventListener('reset', () => {
		setTimeout(() => {
		  inputs.forEach(input => autoresize(input, true));
		}, 0);
	  });
	}
}


export default setupAutoResize;