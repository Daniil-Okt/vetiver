function linkAnchor() {
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
}

export default linkAnchor;