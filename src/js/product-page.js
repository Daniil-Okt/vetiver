import productArrange from './modules/productArrange.js';
import dataLinkAuto from './modules/dataLinkAuto.js';
import initToggleActive from './modules/initToggleClass.js';

//добавить класс оформить продукту
productArrange()

//автоматизация ссылок товара
dataLinkAuto()

//окно наличия продукта
initToggleActive('.avail-prod__button', '.avail-prod', '_active');

