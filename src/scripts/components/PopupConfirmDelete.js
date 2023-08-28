
import Popup from "./Popup.js";

export default class PopupConfirmDelete extends Popup {
    constructor(popupSelector, handleCardSubmit = null) {
        super(popupSelector);
        this._handleCardSubmit = handleCardSubmit;
        this._formElement = this._popup.querySelector('.popup__form');
    }


    onSubmit(callback) {
        this._handleCardSubmit = callback;
    }

    setEventListeners() {
        super.setEventListeners()
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleCardSubmit();
            
            console.log('сабмит тест');
        });
    }
}