import { validForm } from "./validFrom";

function deliveryAddressChange() {
    const handleInputChange = () => {
        const formMaking = document.querySelector('form.making__row')
        const deliveryAddressItem = document.querySelector('.delivery-address-item');
        const itemInputCity = document.querySelector('.item-input-city');
        const selectedInput = document.querySelector('.input-delivery:checked');

        if (selectedInput) {
            const isDeliveryAddressActive = selectedInput.classList.contains('delivery-address-active');
            const isDeliveryCityActive = selectedInput.classList.contains('delivery-city-active');

            deliveryAddressItem.classList.toggle('active', isDeliveryAddressActive);
            itemInputCity.classList.toggle('active', isDeliveryCityActive);

            // Добавление или удаление класса _req у всех input внутри блока deliveryAddressItem
            const inputsInBlock = deliveryAddressItem.querySelectorAll('input');
            inputsInBlock.forEach(input => {
                if (itemInputCity.contains(input)) {
                    // Для input внутри itemInputCity проверяем только isDeliveryCityActive
                    input.classList.toggle('_req', isDeliveryCityActive);
                } else {
                    // Для всех остальных input ориентируемся на isDeliveryAddressActive
                    input.classList.toggle('_req', isDeliveryAddressActive);
                }
            });

            validForm(formMaking)
        }
    };

    document.querySelectorAll('.input-delivery').forEach(input => {
        input.addEventListener('change', handleInputChange);
    });

    handleInputChange();
}

export default deliveryAddressChange;
