import Popup from '../components/Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupTitle = document.querySelector('.popup__img-title');
        this._popupPicture = document.querySelector('.popup__picture');
    }

    open(title, picture) {
        this._popupTitle.textContent = title;
        this._popupPicture.src = picture;
        this._popupPicture.alt = picture;
        super.open();
    }
}