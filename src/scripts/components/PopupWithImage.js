import Popup from '../components/Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupTitle = this._popup.querySelector('.popup__img-title');
        this._popupPicture = this._popup.querySelector('.popup__picture');
    }

    
    open(title, picture) {
        this._popupTitle.textContent = title;
        this._popupPicture.src = picture;
        this._popupPicture.alt = title;
        super.open();
    }
}