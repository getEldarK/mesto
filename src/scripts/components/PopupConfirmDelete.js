
import Popup from "./Popup.js";

export default class PopupConfirmDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._formElement = this._popup.querySelector('.popup__form')
    }

    setEventListeners() {
        super.setEventListeners()
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handlerSubmitForm();
        })
    }

    changeHandleSubmitForm(submitAction) {
        this._handlerSubmitForm = submitAction
    }
}