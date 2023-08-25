// import Popup from '../components/Popup.js';
// export default class PopupWithForm extends Popup {
//     constructor(popupSelector) {
//         super(popupSelector);
//         this._handleSubmitForm = handleSubmitForm;
//         this._formElement = this._popup.querySelector('.popup__form');
//         this._inputList = Array.from(this._formElement.querySelectorAll('.popup__form-input'));
//     };
// }

import Popup from "./Popup.js";

export default class PopupConfirmDelete extends Popup {
    constructor(popupSelector, handleButtonConfirm) {
        super(popupSelector)
        this._formElement = this._popup.querySelector('.popup_delete-confirm')
        this._submitButton = this._formElement.querySelector('.popup__submit-button')
    }

    setEventListeners() {
        super.setEventListeners()
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleButtonConfirm(_element);
        })
    }

    open(card) {
        super.open()
        this._element = card;
    }
}