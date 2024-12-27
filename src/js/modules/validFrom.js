// Функция отправки в яндекс метрику цели на отправку формы (расскоментировать для использования)
// function sendingYandexMetrika() {
//   yaCounter94592071.reachGoal('form')
// }
function checkFormUnlock(form) {
  let resultCheck = false;
  const inputFormRecord = form.querySelectorAll('._req');
  const inputFormRecordWithOk = form.querySelectorAll('._req._ok');
  const recaptcha = form.querySelector('.g-recaptcha');

  if (inputFormRecordWithOk.length === inputFormRecord.length) {
  if (recaptcha) {
      // console.log(recaptcha);
      var intervalId = setInterval(function () {
      var response = grecaptcha.getResponse();
      // console.log(response)
      if (response.length == 0) {
          resultCheck = false;
          // console.log("Рекапча не заполнена");
      } else {
          resultCheck = true;
          // console.log("Рекапча заполнена");
          form.querySelector('button').addEventListener('click', () => {
          clearInterval(intervalId);
          })
      }
      if (resultCheck) {
          form.classList.add('unlock');
      } else {
          form.classList.remove('unlock');
      }
      }, 1000);
  } else {
      resultCheck = true;
  }
  } else {
  resultCheck = false;
  }

  if (resultCheck) {
  form.classList.add('unlock');
  } else {
  form.classList.remove('unlock');
  }
}

function validForm(form) {
  const inputFormRecord = form.querySelectorAll('._req');

  inputFormRecord.forEach(input => {
  inputValid(input)
  // checkFormUnlock(form);
  //удаляем классы _error
  if (inputFormRecord.length > 0) {
      inputFormRecord.forEach(input => {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
      });
  }
  input.addEventListener('input', function () {
      formRemoveError(input);
      inputValid(input)
      checkFormUnlock(form); // Проверка на наличие класса unlock
  });
  });
  function inputValid(input) {
  if (input.classList.contains('_email')) {
      if (emailTest(input)) {
      formRemoveError(input);
      } else {
      formAddError(input);
      }
  } else if (input.getAttribute("type") === "checkbox") {
      if (input.checked) {
      formRemoveError(input);
      } else {
      formAddError(input);
      }
  } else if (input.classList.contains('password')) {
      if (input.value.length >= 8) {
      formRemoveError(input);
      } else {
      formAddError(input);
      }
  } else if (input.classList.contains('data')) {
      if (input.value.length >= 10) {
      formRemoveError(input);
      } else {
      formAddError(input);
      }
  } else if (input.classList.contains('tel')) {
      if (input.value.length >= 3) {
      formRemoveError(input);
      } else {
      formAddError(input);
      }
  } else if (input.classList.contains('withdrawal')) {
      if (input.value.length >= 3) {
      formRemoveError(input);
      } else {
      formAddError(input);
      }
  } else if (input.classList.contains('password-replay')) {
      if (input.value === form.querySelector('.password').value) {
      formRemoveError(input);
      } else {
      formAddError(input);
      }
  } else if (input.classList.contains('promo-code')) {
      if (input.value.length >= 4) {
      formRemoveError(input);
      } else {
      formAddError(input);
      }
  } else {
      if (input.value.trim() === '') {
      formAddError(input);
      } else {
      formRemoveError(input);
      }
  }

  }
  function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
  input.parentElement.classList.remove('_ok');
  input.classList.remove('_ok');
  }

  function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
  input.parentElement.classList.add('_ok');
  input.classList.add('_ok');
  }

  // function formAddOk(input) {
  //     input.parentElement.classList.add('_ok');
  //     input.classList.add('_ok');
  // }

  function emailTest(input) {
  return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(input.value.trim());
  }

  function telTest(input) {
  return /^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value.trim());
  }



  function syncInput() {
  // Находим все инпуты, имеющие атрибут data-match-group
  var inputs = document.querySelectorAll('input[data-sync-group]');

  // Проходим по каждому инпуту
  inputs.forEach(function(input) {
      // Добавляем обработчик события на изменение значения инпута
      input.addEventListener('input', function() {
          // Получаем значение data-match-group текущего инпута
          var matchGroup = this.getAttribute('data-sync-group');
          // Находим все инпуты с таким же значением data-match-group
          var sameGroupInputs = document.querySelectorAll('input[data-sync-group="' + matchGroup + '"]');
          // Обновляем значение всех инпутов в группе
          sameGroupInputs.forEach(function(sameGroupInput) {
              sameGroupInput.parentNode.classList.add('focus')
              sameGroupInput.value = input.value;
              inputValid(sameGroupInput)
          });
      });
  });
  }
  syncInput()
}


function checkInputsMatch() {
  // Получаем все инпуты, которые нужно проверять
  const inputs = document.querySelectorAll('.input-match');
  
  // Создаем объект для хранения групп инпутов
  const matchGroups = {};
  
  // Группируем инпуты по атрибуту data-match-group
  inputs.forEach(input => {
      const groupId = input.getAttribute('data-match-group');
      if (!matchGroups[groupId]) {
          matchGroups[groupId] = [];
      }
      matchGroups[groupId].push(input);
  });
  
  // Перебираем группы и проверяем совпадение значений внутри каждой группы
  Object.keys(matchGroups).forEach(groupId => {
    const groupInputs = matchGroups[groupId];
    const firstValue = groupInputs[0].value;
    const allMatch = groupInputs.every(input => input.value === firstValue);
    
    // Если значения не совпадают, добавляем класс _error к инпуту с классом confirm
    groupInputs.forEach(input => {
      if (input.classList.contains('confirm')) {
        // Проверяем, был ли фокус и не пустой ли инпут
        if (!allMatch && input.value !== "") {
          input.parentNode.classList.remove('_ok');
          input.parentNode.classList.add('_error');
          input.classList.remove('_ok');
          input.classList.add('_error');
        } else  {
          input.parentNode.classList.remove('_error');
          input.classList.remove('_error');
          if (input.value !== "") {
            input.parentNode.classList.add('_ok');
            input.classList.add('_ok');
          }
        }
      }
      checkFormUnlock(input.closest('form'))
    });
  });
}

function inputMatch(){
  const inputs = document.querySelectorAll('.input-match');
  inputs.forEach(input => {
  input.addEventListener('input', checkInputsMatch);
  
  input.addEventListener('focus', function() {
      this.dataset.hadFocus = "true";
  }, {once: true}); 
  });
  

  checkInputsMatch();
}


function focusInput() {
  // Находим все поля ввода текста и пароля на странице
  var textInputs = document.querySelectorAll('input[type="text"], input[type="password"]');

  // Для каждого найденного поля
  textInputs.forEach(function(input) {
      // Проверяем изначальное состояние каждого поля ввода
      // и добавляем класс 'focus', если в поле есть текст
      if (input.value.trim() !== '') {
          input.parentNode.classList.add('focus');
      }

      // Добавляем обработчик события фокусировки
      input.addEventListener('focus', function() {
          // Добавляем класс 'focus' родителю поля ввода
          this.parentNode.classList.add('focus');
      });

      // Добавляем обработчик события потери фокуса
      input.addEventListener('blur', function() {
          // Проверяем, пустое ли поле ввода
          if (this.value.trim() === '') {
              // Удаляем класс 'focus' у родителя поля ввода, если поле пустое
              this.parentNode.classList.remove('focus');
          }
          // Если в поле есть символы, класс 'focus' остается
      });
  });
}
export {
  checkFormUnlock,
  validForm,
  inputMatch,
  focusInput
}