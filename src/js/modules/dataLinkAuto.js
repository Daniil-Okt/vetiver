function dataLinkAuto() {
  const blockLinks = document.querySelectorAll('[data-block-link-auto]');
  const linkItems = document.querySelectorAll('[data-link-auto]');

  // Устанавливаем первый элемент активным при загрузке
  if (linkItems.length > 0) {
    linkItems[0].classList.add('active');
  }

  const updateActiveLinkOnScroll = () => {
    const scrollPosition = window.scrollY + 160; // Учитываем смещение +120px

    let currentActiveIndex = -1;

    // Проверяем, какой блок пересекает верх экрана с учётом смещения
    blockLinks.forEach((block, index) => {
      const blockTop = block.getBoundingClientRect().top + window.scrollY; // Позиция блока относительно документа
      const blockBottom = blockTop + block.offsetHeight;
      
      if (scrollPosition >= blockTop && scrollPosition < blockBottom) {
        currentActiveIndex = index;
      }
    });

    // Обновляем активный класс для соответствующей ссылки
    if (currentActiveIndex !== -1) {
      linkItems.forEach(link => link.classList.remove('active')); // Удаляем активный класс у всех ссылок
      if (linkItems[currentActiveIndex]) {
        linkItems[currentActiveIndex].classList.add('active'); // Добавляем активный класс нужной ссылке
      }
    }
  };

  // Запускаем обработчик на событии scroll
  window.addEventListener('scroll', updateActiveLinkOnScroll);
};

export default dataLinkAuto;
