
import Popup from "./Popup.js";

export default class PopupConfirmDelete extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__form');
    }

    onSubmit(callback) {
        this.handleFormSubmit = callback;
     }

    setEventListeners() {
        super.setEventListeners()
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log('сабмит тест');
            this._handleFormSubmit();
        });
    }
}