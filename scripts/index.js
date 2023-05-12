import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from './initialCards.js';

// Объявление переменных
  const popupElements = document.querySelector('.popup');
  const profileName = document.querySelector('.profile__name');
  const profileJob = document.querySelector('.profile__job');
  const inputNameValue = document.querySelector('#inputName');
  const inputJobValue = document.querySelector('#inputJob');
  const popupEditProfile = document.querySelector('.popup_edit-profile');
  const editProfileButton = document.querySelector('.profile__button-edit');
  const popupAddCard = document.querySelector('.popup_add-card');
  const addCardButton = document.querySelector('.profile__add-button');
  const popupCloseButtons = document.querySelectorAll('.popup__close-button');
  const popupEditForm = document.querySelector('#popupEditForm');
  export const cardList = document.querySelector('.elements__list');
  const template = document.querySelector('#template').content.querySelector('.elements__items');
  const listImage = document.querySelector('.elements__image');
  export const titlePopupPicture = document.querySelector('.popup__img-title');
  export const popupOpenImage = document.querySelector('.popup_opened-big-img');
  export const popupPicture = popupOpenImage.querySelector('.popup__picture');
  const imgPopupCloseBtn = document.querySelector('#closeButton');
  const inputNamePopup = document.querySelector('#inputPlaceName');
  const inputLinkPopup = document.querySelector('#inputLink');
  const addPopupForm = document.querySelector('#popupAddForm');
  const popupAddSubmit = document.querySelector('#popupAddSubmit');

// универсальная функция открытия попаов
  export function openPopup (popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupByEsc);
    document.addEventListener('mousedown', closePopupByOverlay);  
}

// универсальная функция закрытия попапов 
  function closePopup (popup) {
    document.removeEventListener('keydown', closePopupByEsc);
    document.removeEventListener('mousedown', closePopupByOverlay);
    popup.classList.remove('popup_is-opened');
}

// закрытие формы кликом на esc
  const closePopupByEsc = (evt) => {
    if (evt.key === "Escape") {
      const popupOpen = document.querySelector('.popup_is-opened')
      closePopup (popupOpen);
    }
  }
// закрытие формы кликом на оверлэй 
  const closePopupByOverlay = (evt) => {
    if(!evt.target.closest('.popup__container')) {
      const popupOpen = document.querySelector('.popup_is-opened')
      closePopup (popupOpen);
    }
  }
// функция меняет значения в форме редактора профиля 
  const editFormSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = inputNameValue.value;
    profileJob.textContent = inputJobValue.value;
    closePopup (popupEditProfile);
  }

// функция добавляет новую карточку на страницу
  const addFormSubmitHendler = (evt) => {
    evt.preventDefault();
    const newImputValue = [{
      name: inputNamePopup.value,
      link: inputLinkPopup.value
    }];

    newImputValue.forEach((item) => {
      const addCard = new Card(item, '#template');
      const cardElement = addCard.generateCard();
      
      cardList.prepend(cardElement);
      closePopup (popupAddCard);
    }) 
  }  

// функция лайка карточки
  const handleLikeButtonClick = (e) => {
    e.target.classList.toggle('active');
  }

// функция удаления карточки
  const handleDeleteButtonClick = (e) => {
    e.target.closest('.elements__items').remove();
  }

// функция открывает форму с увеличенным изображением карточки 
  export const openImgPopup = (data) => {
    openPopup(popupOpenImage);
    popupPicture.setAttribute('src', data.link);
    popupPicture.setAttribute('alt', data.name);
    titlePopupPicture.textContent = data.name;
  }
  
  addPopupForm.addEventListener('submit', addFormSubmitHendler);
  popupEditForm.addEventListener('submit', editFormSubmitHandler);

// открываем редактор профиля
  editProfileButton.addEventListener('click', function () {
    inputNameValue.value = profileName.textContent;
    inputJobValue.value = profileJob.textContent;
    openPopup(popupEditProfile);
  })
// открываем форму добавления новой карточки
  addCardButton.addEventListener('click', function () {
    openPopup(popupAddCard);
    addPopupForm.reset();
    popupAddSubmit.setAttribute('disabled', 'true');
    addFormValidation.disableButton()
  })

// вешаем обработчик событий для всех кнопок закрытия формы
  popupCloseButtons.forEach((button) => {
    button.addEventListener('click', event => {
      const popup = event.target.closest('.popup');
      closePopup (popup);
    });
  }) 

  initialCards.forEach((item) => {
    const card = new Card(item, '#template', openImgPopup);
    const cardElement = card.generateCard();

    cardList.append(cardElement);
})

  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__error_visible'
  };

  const profileForm = document.querySelector('.popup_edit-profile');
  const profileFormValidation = new FormValidator(config, profileForm);

  profileFormValidation.enableValidation();

  const addForm = document.querySelector('.popup_add-card');
  const addFormValidation = new FormValidator(config, addForm);

  addFormValidation.enableValidation();