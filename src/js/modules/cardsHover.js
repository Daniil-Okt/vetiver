function cardsHover() {
    const cardsHover = document.querySelectorAll('.card-hover')
    if (cardsHover.length > 0) {
        cardsHover.forEach(card => {
            card.addEventListener('mouseover', () => {
                const volumCard = card.querySelector('.volum-card');
                if (volumCard) {
                    const volumHeight = volumCard.offsetHeight;
                    card.style.marginBottom = `-${volumHeight + 20}px`;
                }
            })
        
            card.addEventListener('mouseout', () => {
                card.style.marginBottom = '';
            });
        });
    }
}

export default cardsHover;