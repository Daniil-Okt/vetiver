import noUiSlider from 'nouislider';

function noUiSliderInit() {
    //инициализация
        const slidersRange = document.querySelectorAll(".slider-range");
        const minInputs = document.querySelectorAll(".range__min-input");
        const maxInputs = document.querySelectorAll(".range__max-input");
        const buttonResetForm =  document.querySelectorAll(".popup-filter__clear");
        for (let index = 0; index < slidersRange.length; index++) {
            // Создаем диапазонный слайдер с библиотекой noUiSlider
        noUiSlider.create(slidersRange[index], {
          range: {
              'min': 0,
              'max': 99999
          },
          start: [0, 99999], // Начальные значения бегунков
          connect: true, // Связываем бегунки
          step: 1000, // Шаг слайдера (только целые числа)
        });
        function numberWithSpaces(number) {
          return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }
        // Функция для обновления значений инпутов
        function updateInputs(values) {
            minInputs[index].value = numberWithSpaces(Math.round(values[0]));
            maxInputs[index].value = numberWithSpaces(Math.round(values[1]));
        }
      
        // Функция для обновления слайдера при вводе значений в инпуты
        function updateSliderFromInputs() {
            const minValue = parseFloat(minInputs[index].value);
            const maxValue = parseFloat(maxInputs[index].value);
            slidersRange[index].noUiSlider.set([minValue, maxValue]);
        }
      
        // Обновляем инпуты при изменении положения бегунков
        slidersRange[index].noUiSlider.on('update', function(values) {
            updateInputs(values);
        });
      
        // Связываем изменение инпутов с обновлением слайдера
        minInputs[index].addEventListener('change', updateSliderFromInputs);
        maxInputs[index].addEventListener('change', updateSliderFromInputs);
        buttonResetForm[index].addEventListener('click', () => {
            slidersRange[index].noUiSlider.set([0, 99999]);
        })
        // Установим начальные значения для инпутов
        updateInputs(slidersRange[index].noUiSlider.get());
          }
}

export default noUiSliderInit;