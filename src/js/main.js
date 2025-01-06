/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
import { checkFormUnlock, focusInput, inputMatch, validForm } from './modules/validFrom';
import noUiSliderInit from './modules/noUiSliderInit.js';
import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';

BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// BaseHelpers.addLoadedClass();
/* Фиксированный header */
BaseHelpers.headerFixed(10);




/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();


//кнопка вверх 
buttonUp()

/** ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/** ===================================================================================
 * Параллакс мышей
 * */
// new MousePRLX();


/* ТАБЫ ================================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/
new Tabs('tabs-office', {
	onChange: (data) => {
		console.log(data);
	},
});

/* АККАРДЕОН ===========================================================================================
 	* Класс wrapper блока аккардеона добавить в инициализацию аккардиона
	* Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
	* Для title аккардеона добавить класс "accordion__header"
	* Для content аккардеона добавить класс "accordion__content"
*/
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив =================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()

/* Маска для инпута tel =================================================================================
	* Добавить класс tel к нужному инпуту 
*/
// import { maskTel } from './modules/index.js'
// maskTel()

/* Cкрыть меню при клике на его ссылки ==================================================================
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
//toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ========================================================================
	* Добавить к меню класс 'your-menu'
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента =========================================================
	* Передать в функцию нужный элемент и класс который нужно удалить
*/
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class'); 
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
*/
swiperInit()

/* Валидация формы ======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
// import { validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')
// validForm(fromName, popupTranks)

const formAll = document.querySelectorAll('form')

if (formAll.length > 0) {
	formAll.forEach(form => {
		validForm(form)
		checkFormUnlock(form)
	});
}

//проверка совпадения
inputMatch()
focusInput()
// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
import { toggleActiveClassParent } from './modules/index.js'
import swiperInit from './modules/swiperInit.js';
const footerItemTitle = document.querySelectorAll('.footer__item-title');
toggleActiveClassParent(footerItemTitle)
const itemFilterTitle = document.querySelectorAll('.item-filter__title');
toggleActiveClassParent(itemFilterTitle)

//окно способов оплаты
const productBtnMethods = document.querySelectorAll('.product__btn-methods');
toggleActiveClassParent(productBtnMethods)




/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
import { toggleActiveClass } from './modules/index.js'
import setupAutoResize from './modules/inputAutoResize.js';
import cardsPayOpenTimer from './modules/cardsPayOpenTimer.js';
import cardsHover from './modules/cardsHover.js';
import searchHeader from './modules/searchHeader.js';
import syncCheckboxes from './modules/syncCheckboxes.js';
import headerMarginBottom from './modules/headerMarginBottom.js';
import dataLinkAuto from './modules/dataLinkAuto.js';
import initToggleActive from './modules/initToggleClass.js';
import setupAutoResizeTextareas from './modules/setupAutoResizeTextareas.js';
import cardBasketBtnActive from './modules/cardBasketBtnActive.js';
import quantityNumber from './modules/quantityNumber.js';
import estimFeedback from './modules/estimFeedback.js';
import buyClick from './modules/buyClick.js';
import buttonUp from './modules/buttonUp.js';
import deliveryAddressChange from './modules/deliveryAddressChange.js';

const questItem = document.querySelectorAll('.quest-item');
toggleActiveClass(questItem)



//header bottom
const about = document.querySelector('.about');
headerMarginBottom(about)
const brandAbout = document.querySelector('.brand-about');
headerMarginBottom(brandAbout)



//меню
function initializeMenu(menuSelector) {
	const menuLists = document.querySelectorAll(menuSelector);
  
	if (menuLists.length > 0) {
	  menuLists.forEach(menuList => {
		const items = menuList.querySelectorAll(menuSelector + '__link');
	
		items.forEach((item, index) => {
		  if (window.innerWidth > 1024) {
			// Используем mouseover для экранов более 1024px, без удаления существующего класса active
			item.addEventListener('mouseover', () => {
			  if (!item.classList.contains('active')) {
				// Добавляем класс, если его еще нет
				items.forEach(i => i.classList.remove('active'));
				item.classList.add('active');
				updateImageMenu(index, menuList);
			  }
			});
  
			// Убираем класс active при mouseout, если элемент не содержит класс menu__sub-link
			item.addEventListener('mouseout', () => {
			  if (!item.classList.contains('menu__sub-link')) {
				item.classList.remove('active');
			  }
			});
		  }
  
		  // Всегда добавляем обработчик клика
		  item.addEventListener('click', (e) => {
			e.preventDefault(); // Предотвращаем стандартное поведение браузера, если это нужно
			handleClick(item, items, index, menuList);
		  });
		});
	  });
  
	  function handleClick(currentItem, items, index, menuList) {
		const isActive = currentItem.classList.contains('active');
		
		// Убираем класс active у всех элементов
		items.forEach(i => i.classList.remove('active'));
		
		// Если текущий элемент не был активен, делаем его активным
		if (!isActive) {
		  currentItem.classList.add('active');
		  updateImageMenu(index, menuList);
		}
	  }
  
	  function updateImageMenu(index, menuList) {
		if (menuList.classList.contains('menu-list-one')) {
		  const imgMenus = document.querySelectorAll('.card-menu');
		  imgMenus.forEach(img => img.classList.remove('active'));
		  if (imgMenus[index]) {
			imgMenus[index].classList.add('active');
		  }
		}
	  }
	}
}

  initializeMenu('.menu-list-one')
  initializeMenu('.menu-list-two')


//переключение зарегестрироваться/войти
const popupEntRegChange = document.querySelectorAll('.popup-ent-reg-change')
if (popupEntRegChange.length > 0) {
	popupEntRegChange.forEach(button => {
		button.addEventListener('click', function() {
			// Находим текущий родительский элемент с классом popup-ent-reg-content
			const currentPopup = this.closest('.popup-ent-reg-body');
	
			// Находим все элементы popup-ent-reg-content
			const popups = document.querySelectorAll('.popup-ent-reg-body');
	
			// Проходим по всем элементам и переключаем класс active
			popups.forEach(popup => {
				if (popup === currentPopup) {
					popup.classList.remove('active');
				} else {
					popup.classList.add('active');
				}
			});
		});
	});
	
}

//открытие-закрытие  поиска
searchHeader()


//наведение на карточку товара
cardsHover()

//таймер окна добавления корзины
cardsPayOpenTimer()


//Изменение сетки каталога
const buttonsView = document.querySelectorAll('.btn-view__icon');
const catalogRow = document.querySelector('.catalog__row');

buttonsView.forEach(button => {
	button.addEventListener('click', () => {
		buttonsView.forEach(btn => btn.classList.remove('active'));

		button.classList.add('active');

		if (button.classList.contains('two')) {
			catalogRow.classList.add('row-two');
		} else {
			catalogRow.classList.remove('row-two'); 
		}
	});
});



//ползунок цены
noUiSliderInit()


// Функция для автоматического изменения ширины инпутов
const inputsAutoresize = document.querySelectorAll('input.autoresize');
setupAutoResize(inputsAutoresize);


// Функция для синхронизации состояния чекбоксов по value
syncCheckboxes()


//фильтр
// Ищем все элементы с классом .item-filter
document.querySelectorAll('.item-filter').forEach((filterBody) => {
	// Внутри каждого .item-filter ищем все кнопки
	const btnAllList = filterBody.querySelectorAll('.btn-all');
	const btnNoAllList = filterBody.querySelectorAll('.btn-no-all');
	const title = filterBody.querySelector('.item-filter__title');
  
	// Перебираем кнопки с классом .btn-all
	btnAllList.forEach((btnAll) => {
		btnAll.addEventListener('click', () => {
			// Перед добавлением класса сбрасываем его у всех .item-filter
			document.querySelectorAll('.item-filter').forEach((item) => {
				item.classList.remove('open-all');
			});
			
			// Добавляем класс open-all к текущему .item-filter
			filterBody.classList.add('open-all');
		});
	});

	// Перебираем кнопки с классом .btn-no-all
	btnNoAllList.forEach((btnNoAll) => {
		btnNoAll.addEventListener('click', () => {
			// Убираем класс open-all у текущего .item-filter
			filterBody.classList.remove('open-all');
		});
	});

	// Логика для клика на заголовок .item-filter__title
	if (title) {
		title.addEventListener('click', () => {
			// Убираем класс open-all у всех элементов .item-filter
			document.querySelectorAll('.item-filter').forEach((item) => {
				item.classList.remove('open-all');
			});
		});
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const buttonBot = document.querySelector('.popup-filter__button-bot'); // Находим кнопку
  
	// Функция для проверки, выбраны ли хоть какие-то чекбоксы на странице
	function updatePinkClass() {
	  const anyChecked = document.querySelectorAll('.item-filter input[type="checkbox"]:checked').length > 0;
	  if (anyChecked) {
		buttonBot.classList.add('pink'); // Добавляем класс pink, если есть выбранные чекбоксы
	  } else {
		buttonBot.classList.remove('pink'); // Убираем класс pink, если ничего не выбрано
	  }
	}
  
	// Перебираем все блоки item-filter
	document.querySelectorAll('.item-filter').forEach(itemFilter => {
	  const checkboxes = itemFilter.querySelectorAll('input[type="checkbox"]');
	  const quantityElement = itemFilter.querySelector('.item-filter__quantity');
	  const clearButton = itemFilter.querySelector('.item-filter__clear');
  
	  // Функция для обновления счетчика и класса option-selected
	  function updateSelectedOptions() {
		// Получить уникальные выбранные значения
		const selectedValues = new Set(
		  Array.from(checkboxes)
			.filter(checkbox => checkbox.checked)
			.map(checkbox => checkbox.value)
		);
  
		// Обновляем количество выбранных
		const selectedCount = selectedValues.size;
  
		// Добавляем или удаляем класс option-selected
		if (selectedCount > 0) {
		  itemFilter.classList.add('option-selected');
		} else {
		  itemFilter.classList.remove('option-selected');
		}
  
		// Обновляем текст в счетчике item-filter__quantity (в формате 01, 02, и т.д.)
		quantityElement.textContent = selectedCount > 0 ? selectedCount.toString().padStart(2, '0') : '00';
  
		// Проверяем, надо ли добавить или убрать класс pink у кнопки
		updatePinkClass();
	  }
  
	  // Добавляем обработчик на изменение состояния чекбокса
	  checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', updateSelectedOptions);
	  });
  
	  // Кнопка "Очистить" в рамках текущего блока
	  clearButton.addEventListener('click', () => {
		checkboxes.forEach(checkbox => {
		  checkbox.checked = false; // Сброс всех чекбоксов
		});
  
		itemFilter.classList.remove('option-selected'); // Убираем класс
		quantityElement.textContent = '00'; // Сбрасываем счетчик
  
		// Проверяем, надо ли удалить класс pink у кнопки
		updatePinkClass();
	  });
	});
  
	// Обработчик для кнопки ".popup-filter__clear-all"
	const clearAllButton = document.querySelector('.popup-filter__clear-all');
  
	if (clearAllButton) {
	  clearAllButton.addEventListener('click', () => {
		// Очищаем ВСЕ блоки item-filter
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
  
		// Убираем класс pink у кнопки после очистки всех данных
		updatePinkClass();
	  });
	}
});



//select
document.addEventListener('DOMContentLoaded', function() {
	const selectHeads = document.querySelectorAll('.select__head');
	const selectItems = document.querySelectorAll('.select__item');
	selectHeads.forEach(function(selectHead) {
	  selectHead.addEventListener('click', function() {
		if (selectHead.classList.contains('open')) {
		  selectHead.classList.remove('open');
		  selectHead.nextElementSibling.classList.remove('open');
		} else {
		  selectHeads.forEach(function(head) {
			head.classList.remove('open');
			head.nextElementSibling.classList.remove('open');
		  });
		  selectHead.classList.add('open');
		  selectHead.nextElementSibling.classList.add('open');
		}
	  });
	});

	selectItems.forEach(function(selectItem) {
	  selectItem.addEventListener('click', function() {
		selectHeads.forEach(function(head) {
		  if (head.classList.contains('open')) {
			selectItems.forEach(item  => {
			  if (item.classList.contains('open')) {
				item.classList.remove('open')
			  }
			})
			head.classList.remove('open');
			head.nextElementSibling.classList.remove('open');
			selectItem.classList.add('open');
			selectItem.parentElement.classList.remove('open');
			selectItem.parentElement.previousElementSibling.textContent = selectItem.textContent;
			selectItem.parentElement.previousElementSibling.previousElementSibling.value = selectItem.textContent;
		  }
		  
		});
		
	  });
	});
  
	document.addEventListener('click', function(e) {
	  if (!e.target.closest('.select')) {
		selectHeads.forEach(function(head) {
		  if (head.classList.contains('open')) {
			head.classList.remove('open');
			head.nextElementSibling.classList.remove('open');
		  } else {
			// head.classList.remove('open');
			// head.nextElementSibling.classList.remove('open');
		}
		  
		});
	  }
	});
});



// Навешиваем обработчик событий на все ссылки-якоря
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
  
	  // Определяем ID элемента, к которому должен произойти скролл
	  const targetId = this.getAttribute('href').substring(1);
	  const targetElement = document.getElementById(targetId);
  
	  if (targetElement) {
		// Получаем высоту шапки (меню)
		const headerHeight = document.querySelector('header').offsetHeight; // Замените 'header' на реальный ID вашей шапки
  
		// Вычисляем положение верхней границы элемента
		const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
		
		// Вычитаем высоту шапки из позиции элемента
		const offsetPosition = elementPosition - headerHeight - 30;
  
		// Исполняем плавный скролл
		window.scrollTo({
		  top: offsetPosition,
		  behavior: 'smooth'
		});
	  }
	});
});




//автоматизация ссылок товара
dataLinkAuto()


//окно наличия продукта
initToggleActive('.avail-prod__button', '.avail-prod', '_active');





//добавить класс оформить продукту
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

//добавить класс купить в клик
buyClick('.product')
buyClick('.basket')



//автовысота textarea
document.addEventListener('DOMContentLoaded', () => {
	const textareas = document.querySelectorAll('textarea.textarea-auto-height');
	setupAutoResizeTextareas(textareas);
});


//выбор оценки отзыва
estimFeedback()


//добавление в number
quantityNumber()


//актиность кнопок карточки в корзине в моб версии
cardBasketBtnActive()


//показать/скрыть адрес доставки
deliveryAddressChange()



//item мои заказы
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

toggleOrderItemActive();

//промотка страницы кабинета вверх
const officeRightMenuButton = document.querySelectorAll('.office-right__menu-button');
const makingLeft = document.querySelector('.making__left'); 

if (officeRightMenuButton.length > 0 && makingLeft) {
	officeRightMenuButton.forEach(button => {
		button.addEventListener('click', () => {
			const elementPosition = makingLeft.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({
				top: elementPosition - 160, 
				behavior: 'smooth' 
			});
		});
	});
}

//при клик на ссылку истории заказов
const linkOrder = document.querySelector('.office-right__link-order');
const menuButtonOrders = document.querySelector('.office-right__menu-button-orders');

if (linkOrder && menuButtonOrders) {
    linkOrder.addEventListener('click', (event) => {
        event.preventDefault();
        menuButtonOrders.click();
    });
}



//сохранить в избранное
const cardBtnLike = document.querySelectorAll('.card__btn-like')
if (cardBtnLike.length > 0) {
	cardBtnLike.forEach(button => {
		button.addEventListener('click', () => {
			button.classList.toggle('active')
		})
	});
}

