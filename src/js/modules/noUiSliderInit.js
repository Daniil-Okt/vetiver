import noUiSlider from 'nouislider';

function noUiSliderInit() {
    // Находим все элементы слайдеров, минимальных и максимальных значений
    const slidersRange = document.querySelectorAll(".slider-range");
    const minInputs = document.querySelectorAll(".range__min-input");
    const maxInputs = document.querySelectorAll(".range__max-input");
    const buttonResetForm = document.querySelectorAll(".popup-filter__clear");

    for (let index = 0; index < slidersRange.length; index++) {
        // Получаем значения min и max для каждого слайдера из соответствующих input
        const maxValue = parseInt(maxInputs[index].value, 10) || 100000; // Если значение пустое, устанавливаем 100000
        const minValue = parseInt(minInputs[index].value, 10) || 0; // Если значение пустое, устанавливаем 0
        const maxValueMax = parseInt(maxInputs[index].max, 10) || 100000; // Если значение пустое, устанавливаем 100000
        const minValueMin = parseInt(minInputs[index].min, 10) || 0; // Если значение пустое, устанавливаем 0

        // Инициализируем noUiSlider
        noUiSlider.create(slidersRange[index], {
            range: {
                'min': minValueMin,
                'max': maxValueMax
            },
            start: [minValue, maxValue], // Начальные значения
            connect: true, // Связываем бегунки
            step: 5, // Шаг
        });

        // Функция для форматирования чисел (разделение пробелами, например: "10 000")
        function numberWithSpaces(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }

        // Функция для обновления значений в инпутах (по значениям слайдера)
        function updateInputs(values) {
            minInputs[index].value = numberWithSpaces(Math.round(values[0])); // Приводим значения к целым числам
            maxInputs[index].value = numberWithSpaces(Math.round(values[1]));
        }

        // Обновляем слайдер при изменении значений в инпутах
        function updateSliderFromInputs() {
            const minValue = parseFloat(minInputs[index].value.replace(/\s/g, '')) || 0; // Убираем пробелы
            const maxValue = parseFloat(maxInputs[index].value.replace(/\s/g, '')) || maxValue;
            
            // Проверяем корректность значений
            if (minValue >= maxValue) {
                console.warn("Минимальное значение не может быть больше или равно максимальному.");
                return;
            }

            slidersRange[index].noUiSlider.set([minValue, maxValue]);
        }

        // Слушаем события и обновляем инпуты при движении ползунка
        slidersRange[index].noUiSlider.on('update', function (values) {
            updateInputs(values); // Обновляем значения инпутов
        });

        // Слушаем изменения в инпутах и обновляем значения слайдера
        minInputs[index].addEventListener('change', updateSliderFromInputs);
        maxInputs[index].addEventListener('change', updateSliderFromInputs);

        // Кнопка "Сбросить"
        buttonResetForm[index]?.addEventListener('click', () => {
            slidersRange[index].noUiSlider.set([0, maxValue]); // Устанавливаем значения на [0, max]
        });

        // Установим начальные значения инпутов
        updateInputs(slidersRange[index].noUiSlider.get());
    }
}


export default noUiSliderInit;