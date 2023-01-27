const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__error_visible'
};

// удалить текст ошибки полей формы
const hideInputErrors = (input, validationConfig) => {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = '';
  error.classList.remove(validationConfig.errorClass);
  input.classList.remove(validationConfig.inputErrorClass);
}
// показать текст ошибки полей формы
const showInputErrors = (input, validationConfig) => {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  error.classList.add(validationConfig.errorClass);
  input.classList.add(validationConfig.inputErrorClass);
}
// функция проверки на валидность полей формы
const checkInputValidity = (input, validationConfig) => {

   if(input.validity.valid) {
    hideInputErrors(input, validationConfig);
  } else {
    showInputErrors(input, validationConfig);
  }
}

//  функция скрытия кнопки (задизайбдить кнопку)
const disableButton = (inputs, button, validationConfig) => {
  const isFormValid = inputs.every(input => input.validity.valid)
  if(isFormValid) {
    // раздизейблить
    button.classList.remove(validationConfig.inactiveButtonClass);
    button.disabled = '';
  } else {
    // задизейблить
    button.classList.add(validationConfig.inactiveButtonClass);
    button.disabled = 'disabled';
  }
  
}

// функционал установки слушателей на поля ввода
const setEventListeners = (validationConfig) => {
  const forms = [...document.querySelectorAll(validationConfig.formSelector)];

  forms.forEach(form => {
    const inputs = [...form.querySelectorAll(validationConfig.inputSelector)];
    const button = form.querySelector(validationConfig.submitButtonSelector);
    // form.addEventListener('submit', (evt) => {
    //   evt.preventDeafult();
    // })
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkInputValidity(input, validationConfig);
        disableButton(inputs, button, validationConfig)
      })
    })
  })
}

const enableValidation = (validationConfig) => {
  setEventListeners(validationConfig);
}

enableValidation(validationConfig);



