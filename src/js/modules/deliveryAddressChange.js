function deliveryAddressChange() {
    const handleInputChange = () => {
        const deliveryAddressItem = document.querySelector('.delivery-address-item');
        const itemInputCity = document.querySelector('.item-input-city');
        const selectedInput = document.querySelector('.input-delivery:checked');
    
        if (selectedInput) {
            deliveryAddressItem.classList.toggle('active', selectedInput.classList.contains('delivery-address-active'));
            itemInputCity.classList.toggle('active', selectedInput.classList.contains('delivery-city-active'));
        }
    };
    document.querySelectorAll('.input-delivery').forEach(input => {
        input.addEventListener('change', handleInputChange);
    });
    
    handleInputChange()
}

export default deliveryAddressChange;
