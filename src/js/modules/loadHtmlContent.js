function loadHtmlContent(triggerElements, targetElement, filePath, callback) {
    if (!triggerElements || !targetElement || triggerElements.length === 0) {
        console.error('Переданы некорректные элементы');
        return;
    }
  
    // Проверка на уже загруженное содержимое
    if (targetElement.hasAttribute('data-loaded')) {
        console.log('Содержимое уже загружено');
        return;
    }

    const fetchAndInsertHtml = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', filePath, true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                targetElement.innerHTML = xhr.responseText;
                targetElement.setAttribute('data-loaded', 'true'); // Устанавливаем признак загруженного содержимого
                if (typeof callback === 'function') {
                    // callback();
                    setTimeout(callback(), 1000);
                }
            } else {
                console.error(`Ошибка загрузки файла: ${xhr.status} ${xhr.statusText}`);
            }
        };

        xhr.onerror = function () {
            console.error('Ошибка соединения с сервером');
        };

        xhr.send();
    };

    let interactionOccurred = false;

    const markInteraction = () => {
        interactionOccurred = true;
        clearTimeout(autoLoadTimer);
    };

    triggerElements.forEach(triggerElement => {
        triggerElement.addEventListener('click', () => {
            if (!targetElement.hasAttribute('data-loaded')) {
                markInteraction();
                fetchAndInsertHtml();
            }
        });
        triggerElement.addEventListener('mouseenter', () => {
            if (!targetElement.hasAttribute('data-loaded')) {
                markInteraction();
                fetchAndInsertHtml();
            }
        });
    });

    const autoLoadTimer = setTimeout(() => {
        if (!interactionOccurred && !targetElement.hasAttribute('data-loaded')) {
            fetchAndInsertHtml();
        }
    }, 10000);
}





export default loadHtmlContent;