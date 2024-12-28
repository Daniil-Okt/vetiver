function searchHeader() {
            const header = document.querySelector('header');
            const buttonSearch = document.querySelector('.button-search');
            const headerSearch = header.querySelector('.header-search');
        
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
}

export default searchHeader;