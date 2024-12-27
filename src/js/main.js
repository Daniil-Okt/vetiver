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
// import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';

BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();
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
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });
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
// focusInput()
// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
import { toggleActiveClassParent } from './modules/index.js'
import swiperInit from './modules/swiperInit.js';
const footerItemTitle = document.querySelectorAll('.footer__item-title');
toggleActiveClassParent(footerItemTitle)

/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
import { toggleActiveClass } from './modules/index.js'

const questItem = document.querySelectorAll('.quest-item');
toggleActiveClass(questItem)




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
document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');
	const buttonSearch = document.querySelector('.button-search');
	const headerSearch = header.querySelector('.header-search'); // Предполагается, что такой элемент существует
  
	function toggleSearch() {
	  header.classList.toggle('search-open');
	}
  
	function closeSearchOnClickOutside(event) {
	  const isClickInsideButton = buttonSearch.contains(event.target);
	  const isClickInsideHeaderSearch = headerSearch.contains(event.target);
  
	  // Если клик не по кнопке и не по элементу headerSearch, то убираем класс
	  if (header.classList.contains('search-open') && !isClickInsideButton && !isClickInsideHeaderSearch) {
		header.classList.remove('search-open');
	  }
	}
  
	buttonSearch.addEventListener('click', (event) => {
	  event.stopPropagation();
	  toggleSearch();
	});
  
	document.addEventListener('click', closeSearchOnClickOutside);
});



//квадраты инпута пароля
  window.onload = function() {
	init();
  }
  function init() {
	// Выбираем все инпуты с type="text"
	var elements = document.querySelectorAll('input[type="text"]');
  
	if (elements.length === 0) {
	  return; // Завершаем выполнение функции, если таких элементов нет
	}
  
	elements.forEach(function(element) {
	  var style = window.getComputedStyle(element);
	  if (!style.webkitTextSecurity && !style.textSecurity) {
		element.setAttribute("type", "password");
	  }
	});
  }
  

//наведение на карточку товара
const cardsHover = document.querySelectorAll('.card-hover')
if (cardsHover.length > 0) {
	cardsHover.forEach(card => {
		card.addEventListener('mouseover', () => {
			const volumCard = card.querySelector('.volum-card');
			if (volumCard) {
				const volumHeight = volumCard.offsetHeight;
				card.style.marginBottom = `-${volumHeight + 20}px`;
			}
		})
	
		card.addEventListener('mouseout', () => {
			card.style.marginBottom = '';
		});
	});
}

//таймер окна добавления корзины
const cardsPay = document.querySelectorAll('.card__pay')
if (cardsPay.length > 0) {
	cardsPay.forEach(button => {
		let timeoutId;
		button.addEventListener('click', () => {
			const popupBasket = document.querySelector('.popup-basket');
			
			popupBasket.classList.add('is-open');
			
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
	
			timeoutId = setTimeout(() => {
				popupBasket.classList.remove('is-open');
			}, 2000);
		});
	});
}



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