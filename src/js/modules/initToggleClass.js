const initToggleActive = (buttonSelector, parentSelector, activeClass = '_active') => {
    const buttons = document.querySelectorAll(buttonSelector);
  
    if (buttons.length === 0) return;
  
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
  
        const parent = button.closest(parentSelector);
  
        if (parent) {
          parent.classList.toggle(activeClass);
        }
      });
    });
  
    document.addEventListener('click', (event) => {
      const activeElements = document.querySelectorAll(`${parentSelector}.${activeClass}`);
  
      activeElements.forEach((activeElement) => {
        if (!activeElement.contains(event.target)) {
          activeElement.classList.remove(activeClass);
        }
      });
    });
  };
  
export default initToggleActive;
