function linkOrder() {
    const linkOrder = document.querySelector('.office-right__link-order');
    const menuButtonOrders = document.querySelector('.office-right__menu-button-orders');
    
    if (linkOrder && menuButtonOrders) {
        linkOrder.addEventListener('click', (event) => {
            event.preventDefault();
            menuButtonOrders.click();
        });
    }
}
export default linkOrder;