/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */


import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
import { checkFormUnlock, focusInput, inputMatch, popupRightChangeInput, validForm } from './modules/validFrom';

import cardsPayOpenTimer from './modules/cardsPayOpenTimer.js';

import searchHeader from './modules/searchHeader.js';
import syncCheckboxes from './modules/syncCheckboxes.js';
import setupAutoResizeTextareas from './modules/setupAutoResizeTextareas.js';
import cardBasketBtnActive from './modules/cardBasketBtnActive.js';
import quantityNumber from './modules/quantityNumber.js';
import estimFeedback from './modules/estimFeedback.js';
import buyClick from './modules/buyClick.js';
import buttonUp from './modules/buttonUp.js';
import select from './modules/select.js';
import linkAnchor from './modules/linkAnchor.js';
import cardBtnImgLikeCompare from './modules/cardBtnImgLikeCompare.js';
import popupBodyChange from './modules/popupBodyChange.js';
import initializeMenu from './modules/initializeMenu.js';
import catalogRowChange from './modules/catalogRowChange.js';
// import swiperInit from './modules/swiperInit.js';

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



/* Инициализация  swiper =================================================================================
*/
// swiperInit()

/* Маска для инпута tel =================================================================================
	* Добавить класс tel к нужному инпуту 
*/
import { maskTel } from './modules/index.js'
maskTel()

/* Валидация формы ======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
  Раскоментировать для использования
*/ 


function initializeValidForm() {
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
}
initializeValidForm()



//меню

function intializeAllMenu() {
	initializeMenu('.menu-list-one')
	initializeMenu('.menu-list-two')
	
	window.addEventListener('resize', () => {
		initializeMenu('.menu-list-one')
		initializeMenu('.menu-list-two')
	});
}

//переключение зарегестрироваться/войти
popupBodyChange()


//открытие-закрытие  поиска
searchHeader()


// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
import { toggleActiveClassParent } from './modules/index.js'
import loadHtmlContent from './modules/loadHtmlContent.js';

const footerItemTitle = document.querySelectorAll('.footer__item-title');
toggleActiveClassParent(footerItemTitle)
const itemFilterTitle = document.querySelectorAll('.item-filter__title');
toggleActiveClassParent(itemFilterTitle)
//окно способов оплаты
const productBtnMethods = document.querySelectorAll('.product__btn-methods');
toggleActiveClassParent(productBtnMethods)


//таймер окна добавления корзины
cardsPayOpenTimer()


//Изменение сетки каталога
catalogRowChange()


// Функция для синхронизации состояния чекбоксов по value
syncCheckboxes()



//select
select()


// Навешиваем обработчик событий на все ссылки-якоря
linkAnchor()


//добавить класс купить в клик
buyClick('.product')


//сохранить в избранное/сравнение
cardBtnImgLikeCompare()


//смена инпута телефон/email
popupRightChangeInput()


//купить в один клик в корзине
buyClick('.basket')


//автовысота textarea
const textareas = document.querySelectorAll('textarea.textarea-auto-height');
setupAutoResizeTextareas(textareas);


//выбор оценки отзыва
estimFeedback()


//добавление в number
quantityNumber()


//актиность кнопок карточки в корзине в моб версии
cardBasketBtnActive()



//добавление контента меню при наведении, или клике, или в течении 10 сек после загрузки
const iconMenu = document.querySelectorAll('.icon-menu');
const menuBlock = document.getElementById('menu');
const menuContentfilePath = 'menu-content.html';

loadHtmlContent(iconMenu, menuBlock, menuContentfilePath, intializeAllMenu);




//передача всех попапов в функцию вставки контента 
/*
файл контента модального окна должен начинать с названия data-popyp + текст "-content" 
*/  
// function findElementsWithPopupAndType() {
//     const popupElements = document.querySelectorAll('[data-popup]');

//     popupElements.forEach(popupElement => {
//         const popupName = popupElement.getAttribute('data-popup');

//         const buttonsOpenPopup = document.querySelectorAll(`[data-type="${popupName}"]`);
// 		const popupContentBlock = popupElement.querySelector('.popup-content');
// 		const popupContentFilePatch = `${popupName}-content.html`;
// 		console.log(popupContentFilePatch);

// 		loadHtmlContent(buttonsOpenPopup, popupContentBlock, popupContentFilePatch, initFunctionPopups);

// 		/*
// 		инициализация функций для контента попапов
// 		*/

// 		function initFunctionPopups() {

// 			//смена инпута телефон/email
// 			popupRightChangeInput()

// 			//купить в один клик в корзине
// 			buyClick('.basket')

// 			//автовысота textarea
// 			const textareas = document.querySelectorAll('textarea.textarea-auto-height');
// 			setupAutoResizeTextareas(textareas);


// 			//выбор оценки отзыва
// 			estimFeedback()


// 			//добавление в number
// 			quantityNumber()


// 			//актиность кнопок карточки в корзине в моб версии
// 			cardBasketBtnActive()

// 			//инициализация валидации форм
// 			initializeValidForm()

// 			maskTel()
// 		}
//     });
// }

// findElementsWithPopupAndType();



