import noUiSlider from 'nouislider';

function noUiSliderInit() {
    const slidersRange = document.querySelectorAll(".slider-range");
    const minInputs = document.querySelectorAll(".range__min-input");
    const maxInputs = document.querySelectorAll(".range__max-input");
    const buttonResetForm = document.querySelectorAll(".popup-filter__clear");

    for (let index = 0; index < slidersRange.length; index++) {
        const maxValue = parseInt(maxInputs[index].value, 10) || 100000; 
        const minValue = parseInt(minInputs[index].value, 10) || 0; 


        noUiSlider.create(slidersRange[index], {
            range: {
                'min': minValue,
                'max': maxValue
            },
            start: [minValue, maxValue],
            connect: true, 
            step: 5,
        });

        function numberWithSpaces(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }

        function updateInputs(values) {
            minInputs[index].value = numberWithSpaces(Math.round(values[0])); // Приводим значения к целым числам
            maxInputs[index].value = numberWithSpaces(Math.round(values[1]));
        }

        function updateSliderFromInputs() {
            const minValue = parseFloat(minInputs[index].value.replace(/\s/g, '')) || 0; // Убираем пробелы
            const maxValue = parseFloat(maxInputs[index].value.replace(/\s/g, '')) || maxValue;
            
            if (minValue >= maxValue) {
                console.warn("Минимальное значение не может быть больше или равно максимальному.");
                return;
            }

            slidersRange[index].noUiSlider.set([minValue, maxValue]);
        }

        slidersRange[index].noUiSlider.on('update', function (values) {
            updateInputs(values); 
        });

        minInputs[index].addEventListener('change', updateSliderFromInputs);
        maxInputs[index].addEventListener('change', updateSliderFromInputs);

        buttonResetForm[index]?.addEventListener('click', () => {
            slidersRange[index].noUiSlider.set([0, maxValue]); 
        });

        updateInputs(slidersRange[index].noUiSlider.get());
    }
}


export default noUiSliderInit;