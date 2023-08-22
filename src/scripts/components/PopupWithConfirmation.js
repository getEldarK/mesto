import Popup from '../components/Popup.js';
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    };

    handleConfirm(handleDeleteCard) {
        this._handleDeleteCard = handleDeleteCard;
    }

    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListeners('submit', (evt) => {
            evt.preventDefault();
            this._handleDeleteCard()
        })
    }
}