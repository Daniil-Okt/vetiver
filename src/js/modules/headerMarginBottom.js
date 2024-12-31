function headerMarginBottom(block) {
	if (block) {
		const header = document.querySelector('header');
		const headerHeight = header.offsetHeight; 
		block.style.marginTop = `${-headerHeight}px`;
	
		window.addEventListener('resize', () => {
			const headerHeight = header.offsetHeight;
			block.style.marginTop = `${-headerHeight}px`; 
		});
	}
}

export default headerMarginBottom;