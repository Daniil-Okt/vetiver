import cardsHover from './modules/cardsHover.js';
import noUiSliderInit from './modules/noUiSliderInit.js';
import filterFunction from './modules/filterFunction.js';
import setupAutoResize from './modules/inputAutoResize.js';

//наведение на карточку товара
cardsHover()

//ползунок цены
noUiSliderInit()


//фильтр
filterFunction()

// Функция для автоматического изменения ширины инпутов
const inputsAutoresize = document.querySelectorAll('input.autoresize');
setupAutoResize(inputsAutoresize);

