function brandFilter() {

    // переключение буквы/цифры
    const brandFilterLeft = document.querySelectorAll('.brand__filter-left');
    const brandTopCenter = document.querySelectorAll('.brand__top-center');

    brandFilterLeft.forEach((filter, index) => {
        filter.addEventListener('click', () => {
            // Убираем класс active у текущего .brand__filter-left
            filter.classList.remove('active');

            // Добавляем класс active другому .brand__filter-left
            const otherIndex = index === 0 ? 1 : 0; // Выбираем индекс другого элемента
            const otherFilter = brandFilterLeft[otherIndex];
            if (otherFilter) {
                otherFilter.classList.add('active');
            }

            // Убираем класс active у текущего .brand__top-center
            const currentTopCenter = brandTopCenter[index];
            if (currentTopCenter) {
                currentTopCenter.classList.remove('active');
            }

            // Добавляем класс active другому .brand__top-center
            const otherTopCenter = brandTopCenter[otherIndex];
            if (otherTopCenter) {
                otherTopCenter.classList.add('active');
            }
        });
    });


    

    // фильтр элементов
    const filterItems = document.querySelectorAll(".brand__filter-item");
    const brandItems = document.querySelectorAll(".item-brand");
        
    filterItems.forEach(filterItem => {
        filterItem.addEventListener("click", function () {
            console.log('asdf')
            const isActive = filterItem.classList.contains("active");
            const filterNumber = filterItem.dataset.brandFilterHead;
        
            filterItems.forEach(item => item.classList.remove("active"));
        
            brandItems.forEach(item => {
            item.style.display = "flex";
            });
        
            if (!isActive) {
            filterItem.classList.add("active");
        
            brandItems.forEach(item => {
                item.style.display = "none";
            });

            const filteredItems = document.querySelectorAll(
                `.item-brand[data-brand-filter-body="${filterNumber}"]`
            );
            filteredItems.forEach(item => {
                item.style.display = "flex";
            });
            }
        });
    });


}

export default brandFilter;