import './index.css'

import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import { initialCards } from '../scripts/initialCards.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {
  config,
  profileName,
  profileJob,
  inputNameValue, 
  inputJobValue,
  popupProfile,
  popupAddNewCard,
  popupBigImage,
  editProfileButton,
  addCardButton,
  popupAddSubmit,
  popupAvatar,
  popupAvatarButton,
  avatar,
  popupDeleteCard
} from '../scripts/utils/constants.js';
  


// получение данных пользователя  
  const userInfo = new UserInfo({
    userNameElement: profileName,
    userInfoElement: profileJob 
});
// popup edit profile declaration
const popupEditProfile = new PopupWithForm(popupProfile, {
  handleSubmitForm: (formData) => {
    userInfo.setUserInfo({
      name: formData.name,
      job: formData.job
    });
    popupEditProfile.close();
    }
  }
);
popupEditProfile.setEventListeners();
// обработчик событий
editProfileButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  inputNameValue.value = userData.name;
  inputJobValue.value = userData.job;
  popupEditProfile.open();
})
const profileFormValidation = new FormValidator(config, popupProfile);
  profileFormValidation.enableValidation();



// popup add card declaration
const popupAddCard = new PopupWithForm(popupAddNewCard, {
  handleSubmitForm: (formData) => {
    cards.setItem(createCard({
      name: formData.name,
      link: formData.place
    }));
    popupAddCard.close();
  }
});
popupAddCard.setEventListeners();
// обработчик событий добавления новой карточки
addCardButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupAddCard.open();
  addFormValidation.disableButton();
})
const addFormValidation = new FormValidator(config, popupAddNewCard);
  addFormValidation.enableValidation();

//создание попапа редактирование аватара профиля

const popupEditAvatar = new PopupWithForm(popupAvatar, {
  handleSubmitForm: (formData) => {
  avatar.src = formData.avatar;
  popupEditAvatar.close();
  }
});
popupEditAvatar.setEventListeners();

popupAvatarButton.addEventListener('click', () => {
  popupEditAvatar.open();
})
const avatarFormValidation = new FormValidator(config, popupAvatar);
avatarFormValidation.enableValidation();

  const handleCardClick = function (name, link) {
    openPopupImg.open(name, link);
  }
  const createCard = (item) => {
    const addCard = new Card(item, '#template', handleCardClick);
    return addCard.generateCard();
  }
  const cards = new Section ({
    items: initialCards,
    renderer: (item) => {
      // const cardElement = card.generateCard();
      cards.setItem(createCard(item));
    }
  }, '.elements__list');
  cards.renderItems();  


// popup big image card declaration
  const openPopupImg = new PopupWithImage(popupBigImage);
  openPopupImg.setEventListeners();

// Попап удаления карточки 
const deleteCardPopup = new PopupWithConfirmation(popupDeleteCard);
deleteCardPopup.setEventListeners();