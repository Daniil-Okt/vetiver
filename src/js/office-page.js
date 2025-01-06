import Tabs from './modules/tabs';
import toggleOrderItemActive from './modules/toggleOrderItemActive.js';
import officeScrollTopPage from './modules/officeScrollTopPage.js';
import linkOrder from './modules/linkOrder.js';


/* ТАБЫ ================================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/

if (document.querySelector('[data-tabs="tabs-office"]')) {
	new Tabs('tabs-office', {
	    onChanged: (data) => console.log(data),
	});
}



//item мои заказы
toggleOrderItemActive();

//промотка страницы кабинета вверх
officeScrollTopPage()

//при клик на ссылку истории заказов
linkOrder()
