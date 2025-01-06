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
import { checkFormUnlock, focusInput, inputMatch, validForm } from './modules/validFrom';
import noUiSliderInit from './modules/noUiSliderInit.js';
import setupAutoResize from './modules/inputAutoResize.js';
import cardsPayOpenTimer from './modules/cardsPayOpenTimer.js';
import cardsHover from './modules/cardsHover.js';
import searchHeader from './modules/searchHeader.js';
import syncCheckboxes from './modules/syncCheckboxes.js';
import headerMarginBottom from './modules/headerMarginBottom.js';
import setupAutoResizeTextareas from './modules/setupAutoResizeTextareas.js';
import cardBasketBtnActive from './modules/cardBasketBtnActive.js';
import quantityNumber from './modules/quantityNumber.js';
import estimFeedback from './modules/estimFeedback.js';
import buyClick from './modules/buyClick.js';
import buttonUp from './modules/buttonUp.js';
import select from './modules/select.js';
import linkAnchor from './modules/linkAnchor.js';
import cardBtnLikeSave from './modules/cardBtnLikeSave.js';
import filterFunction from './modules/filterFunction.js';
import popupEntRegChange from './modules/popupEntRegChange.js';
import initializeMenu from './modules/initializeMenu.js';
import catalogRowChange from './modules/catalogRowChange.js';


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
  Раскоментировать для использования
*/ 

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
const questItem = document.querySelectorAll('.quest-item');
toggleActiveClass(questItem)



//header bottom
const about = document.querySelector('.about');
headerMarginBottom(about)
const brandAbout = document.querySelector('.brand-about');
headerMarginBottom(brandAbout)



//меню
initializeMenu('.menu-list-one')
initializeMenu('.menu-list-two')

window.addEventListener('resize', () => {
	initializeMenu('.menu-list-one')
	initializeMenu('.menu-list-two')
});


//переключение зарегестрироваться/войти
popupEntRegChange()


//открытие-закрытие  поиска
searchHeader()


//наведение на карточку товара
cardsHover()


//таймер окна добавления корзины
cardsPayOpenTimer()


//Изменение сетки каталога
catalogRowChange()


//ползунок цены
noUiSliderInit()


// Функция для автоматического изменения ширины инпутов
const inputsAutoresize = document.querySelectorAll('input.autoresize');
setupAutoResize(inputsAutoresize);


// Функция для синхронизации состояния чекбоксов по value
syncCheckboxes()


//фильтр
filterFunction()


//select
select()


// Навешиваем обработчик событий на все ссылки-якоря
linkAnchor()



//добавить класс купить в клик
buyClick('.product')
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



//сохранить в избранное
cardBtnLikeSave()

