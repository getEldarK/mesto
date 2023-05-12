import { openImgPopup, cardList, openPopup, popupOpenImage, popupPicture, titlePopupPicture } from './index.js';


export default class Card {
    constructor(data, templateSelector, openPopupImg) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopupImg = openPopupImg;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content.querySelector('.elements__items')
        .cloneNode(true);
        return cardElement;
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__image').alt = this._name;
        this._element.querySelector('.elements__title').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__like-button').addEventListener('click', () => {
            this._handleLikeButton();
        });
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
            this._handleDeleteButton();
        });
        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this._handleOpenPopupImg(this._data);
        })
    }

    _handleOpenPopupImg() {
        openPopup(popupOpenImage);
        popupPicture.src = this._link;
        popupPicture.alt = this._name;
        titlePopupPicture.textContent = this._name;
    }
    _handleLikeButton() {
        this._element.querySelector('.elements__like-button')
        .classList.toggle('elements__like-button_active');
    }

    _handleDeleteButton() {
        this._element.remove();
    }
} 



