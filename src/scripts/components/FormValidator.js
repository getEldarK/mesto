
export default class FormValidator {
    constructor(config, formElement) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass= config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._formElement = formElement;

        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }
    
    _checkInputValidity(inputItem) {
        if(inputItem.validity.valid) {
            this._hideInputErrors(inputItem);
        } else {
            this._showInputErrors(inputItem, inputItem.validationMessage);
        }
    }

    _showInputErrors (inputItem, errorMessage) {
        const error = this._formElement.querySelector(`#${inputItem.id}-error`);
        error.textContent = errorMessage;
        error.classList.add(this._errorClass);
        inputItem.classList.add(this._inputErrorClass);
    }

    _hideInputErrors (inputItem) {
        const error = this._formElement.querySelector(`#${inputItem.id}-error`);
        error.textContent = '';
        error.classList.remove(this._errorClass);
        inputItem.classList.remove(this._inputErrorClass);
    }

    _setIventListener() {
        
        this._inputList.forEach((inputItem) => {
            inputItem.addEventListener('input', () => {
                this._checkInputValidity(inputItem);
                this._toggleButtonState();
            });
        });
        this._toggleButtonState();
    }

    enableValidation () {
        this._setIventListener();
    }
    
    _toggleButtonState () {
        if (this._getInvalidInput()) {
            this.disableButton ();
        } else {
            this._enableButton ();
        }
    }

    _enableButton () {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = '';
    }
        
    disableButton () {
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.disabled = 'disabled';
    }
    
    _getInvalidInput () {
        return this._inputList.some(input => input.validity.valid === false);
    }
}