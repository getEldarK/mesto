export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const inputNameValue = document.querySelector('#inputName');
export const inputJobValue = document.querySelector('#inputJob');
export const popupProfile = document.querySelector('.popup_edit-profile');
export const popupAddNewCard = document.querySelector('.popup_add-card');
export const popupBigImage = document.querySelector('.popup_opened-big-img');
export const editProfileButton = document.querySelector('.profile__button-edit');
export const addCardButton = document.querySelector('.profile__add-button');
export const addPopupForm = document.querySelector('#popupAddForm');
export const popupAddSubmit = document.querySelector('#popupAddSubmit');
export const popupAvatar = document.querySelector('.popup_avatar-profile');
export const popupAvatarButton = document.querySelector('.profile__image-btn');
export const avatar = document.querySelector('.profile__image');
export const popupDeleteConfirm = document.querySelector('.popup_delete-confirm');
export const deleteButton = document.querySelector('.elements__delete-button');

export const options = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
      authorization: '7985b9ea-9f65-44b2-8d79-d83922b996e9',
      'Content-Type': 'application/json'
  }
}

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__error_visible'
  };