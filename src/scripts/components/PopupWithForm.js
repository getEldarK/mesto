import Popup from '../components/Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__form-input'));
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
};