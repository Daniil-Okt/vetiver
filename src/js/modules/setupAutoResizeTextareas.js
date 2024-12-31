function autoresizeTextarea(textarea) {
	textarea.style.height = 'auto';
	const newHeight = textarea.scrollHeight;
	const minHeight = textarea.initialRowHeight;
	const avgCharsPerLine = Math.floor(textarea.clientWidth / textarea.charWidth);
	const isTextOnSecondLine = textarea.value.length > avgCharsPerLine;
	if (isTextOnSecondLine) {
		textarea.style.paddingBottom = '20px';
	} else {
		textarea.style.paddingBottom = '0px';
	}
	textarea.style.height = `${newHeight}px`;
}

function setupInitialRowHeight(textarea) {
	const tempSpan = document.createElement('span');
	document.body.appendChild(tempSpan);
	tempSpan.style.font = getComputedStyle(textarea).font;
	tempSpan.style.padding = '0';
	tempSpan.style.border = '0';
	tempSpan.style.visibility = 'hidden';
	tempSpan.style.whiteSpace = 'pre';
	tempSpan.textContent = 'a';
	const lineHeight = tempSpan.offsetHeight;
	const charWidth = tempSpan.offsetWidth;
	textarea.initialRowHeight = lineHeight;
	textarea.charWidth = charWidth;
	tempSpan.remove();
}

function setupAutoResizeTextareas(textareas, form = null) {
	textareas.forEach(textarea => {
		setupInitialRowHeight(textarea);
		autoresizeTextarea(textarea);
		textarea.addEventListener('input', () => autoresizeTextarea(textarea));
		const descriptor = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
		Object.defineProperty(textarea, 'value', {
			get: descriptor.get,
			set(value) {
				descriptor.set.call(textarea, value);
				autoresizeTextarea(textarea);
			}
		});
	});

	if (form) {
		form.addEventListener('reset', () => {
			setTimeout(() => {
				textareas.forEach(textarea => autoresizeTextarea(textarea));
			}, 0);
		});
	}
}


export default setupAutoResizeTextareas;