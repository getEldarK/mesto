
const forms = document.querySelectorAll('.popup__form');

// функция проверки на валидность полей формы
const checkInputValidity = (input, object) => {
  const error = document.querySelector(`#${input.id}-error`);
   if(input.validity.valid) {
    // убрать ошибку
    error.textContent = '';
    error.classList.remove(object.errorClass);
    input.classList.remove (object.inputErrorClass);
  } else {
    // показать
    error.textContent = input.validationMessage;
    error.classList.add(object.errorClass);
    input.classList.add(object.inputErrorClass);
  }
}

//  функция скрытия кнопки (задизайбдить кнопку)
const disableButton = (inputs, button, object) => {
  const isFormValid = inputs.every(input => input.validity.valid)
  if(isFormValid) {
    // раздизейблить
    button.classList.remove(object.inactiveButtonClass);
    button.disabled = '';
  } else {
    // задизейблить
    button.classList.add(object.inactiveButtonClass);
    button.disabled = 'disabled';
  }
}

const enableValidation = (object) => {
  const forms = [...document.querySelectorAll(object.formSelector)];
  
  forms.forEach(form => {
    const inputs = [...form.querySelectorAll(object.inputSelector)];
    const button = form.querySelector(object.submitButtonSelector);
  
    form.addEventListener('submit', (e) => {
      e.preventDeafult();
    })
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkInputValidity(input, object);
        disableButton(inputs, button, object)
      })
    })
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__error_visible'
});


