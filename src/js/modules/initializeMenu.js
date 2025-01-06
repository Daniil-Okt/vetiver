function initializeMenu(menuSelector) {
	const menuLists = document.querySelectorAll(menuSelector);
  
	if (menuLists.length > 0) {
	  menuLists.forEach(menuList => {
		const items = menuList.querySelectorAll(menuSelector + '__link');
	
		items.forEach((item, index) => {
		  if (window.innerWidth > 1024) {
			item.addEventListener('mouseover', () => {

			  if (!item.classList.contains('active')) {
				items.forEach(i => i.classList.remove('active'));
				item.classList.add('active');
				updateImageMenu(index, menuList);
			  }
			});
  
			item.addEventListener('mouseout', () => {
			  if (!item.classList.contains('menu__sub-link')) {
				item.classList.remove('active');
			  }
			});
		  }
  
		  item.addEventListener('click', (e) => {
			e.preventDefault(); 
			handleClick(item, items, index, menuList);
		  });
		});
	  });
  
	  function handleClick(currentItem, items, index, menuList) {
		const isActive = currentItem.classList.contains('active');
		
		items.forEach(i => i.classList.remove('active'));
		
		if (!isActive) {
		  currentItem.classList.add('active');
		  updateImageMenu(index, menuList);
		}
	  }
  
	  function updateImageMenu(index, menuList) {
		if (menuList.classList.contains('menu-list-one')) {
		  const imgMenus = document.querySelectorAll('.card-menu');
		  imgMenus.forEach(img => img.classList.remove('active'));
		  if (imgMenus[index]) {
			imgMenus[index].classList.add('active');
		  }
		}
	  }
	}
}


export default initializeMenu;