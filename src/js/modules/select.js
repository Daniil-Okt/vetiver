function select() {
	const selectHeads = document.querySelectorAll('.select__head');
	const selectItems = document.querySelectorAll('.select__item');
	selectHeads.forEach(function(selectHead) {
	  selectHead.addEventListener('click', function() {
		if (selectHead.classList.contains('open')) {
		  selectHead.classList.remove('open');
		  selectHead.nextElementSibling.classList.remove('open');
		} else {
		  selectHeads.forEach(function(head) {
			head.classList.remove('open');
			head.nextElementSibling.classList.remove('open');
		  });
		  selectHead.classList.add('open');
		  selectHead.nextElementSibling.classList.add('open');
		}
	  });
	});

	selectItems.forEach(function(selectItem) {
	  selectItem.addEventListener('click', function() {
		selectHeads.forEach(function(head) {
		  if (head.classList.contains('open')) {
			selectItems.forEach(item  => {
			  if (item.classList.contains('open')) {
				item.classList.remove('open')
			  }
			})
			head.classList.remove('open');
			head.nextElementSibling.classList.remove('open');
			selectItem.classList.add('open');
			selectItem.parentElement.classList.remove('open');
			selectItem.parentElement.previousElementSibling.textContent = selectItem.textContent;
			selectItem.parentElement.previousElementSibling.previousElementSibling.value = selectItem.textContent;
		  }
		  
		});
		
	  });
	});
  
	document.addEventListener('click', function(e) {
	  if (!e.target.closest('.select')) {
		selectHeads.forEach(function(head) {
		  if (head.classList.contains('open')) {
			head.classList.remove('open');
			head.nextElementSibling.classList.remove('open');
		  } else {
			// head.classList.remove('open');
			// head.nextElementSibling.classList.remove('open');
		}
		  
		});
	  }
	});
}
export default select;