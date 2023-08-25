import Popup from '../components/Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__form-input'));
        this._submitButton = this._formElement.querySelector('.popup__submit-button');
        this._submitButtonText = this._submitButton.textContent;
    };


    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
        return this._formValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
        });
    };

    close() {
        super.close();
        this._formElement.reset();
    };

    loading(isLoading) {
        if (isLoading) {
          this._submitButton.textContent = 'Сохранение...'
        } else {
          this._submitButton.textContent = this._submitButtonText;
        }
    };
};