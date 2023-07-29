import Card from "../components/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import { initialCards } from '../scripts/initialCards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  profileName,
  profileJob,
  inputNameValue, 
  inputJobValue,
  popupProfile,
  popupAddNewCard,
  popupBigImage
} from '../scripts/utils/constants.js';
// Объявление переменных

  const editProfileButton = document.querySelector('.profile__button-edit');
  const addCardButton = document.querySelector('.profile__add-button');
  const addPopupForm = document.querySelector('#popupAddForm');
  const popupAddSubmit = document.querySelector('#popupAddSubmit');
  
  
// получение данных пользователя  
  const userInfo = new UserInfo({
    userNameSelector: profileName,
    userInfoSelector: profileJob 
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
  
  inputNameValue.value = userInfo.getUserInfo().name;
  inputJobValue.value = userInfo.getUserInfo().job;
  popupEditProfile.open();
})


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






// popup add card declaration
const popupAddCard = new PopupWithForm(popupAddNewCard, {
  handleSubmitForm: (formData) => {
    cards.addItem(createCard({
      name: formData.name,
      link: formData.place
    }));
    popupAddCard.close();
  }
});





// универсальная функция открытия попаов
  // export function openPopup (popup) {
  //   popup.classList.add('popup_is-opened');
  //   document.addEventListener('keydown', closePopupByEsc);
  //   document.addEventListener('mousedown', closePopupByOverlay);  
// }

// универсальная функция закрытия попапов 
  // function closePopup (popup) {
  //   document.removeEventListener('keydown', closePopupByEsc);
  //   document.removeEventListener('mousedown', closePopupByOverlay);
  //   popup.classList.remove('popup_is-opened');
// }

// закрытие формы кликом на esc
  // const closePopupByEsc = (evt) => {
  //   if (evt.key === "Escape") {
  //     const popupOpen = document.querySelector('.popup_is-opened')
  //     closePopup (popupOpen);
  //   }
  // }
// закрытие формы кликом на оверлэй 
  // const closePopupByOverlay = (evt) => {
  //   if(!evt.target.closest('.popup__container')) {
  //     const popupOpen = document.querySelector('.popup_is-opened')
  //     closePopup (popupOpen);
  //   }
  // }
// функция меняет значения в форме редактора профиля 
  // const editFormSubmitHandler = (evt) => {
  //   evt.preventDefault();
  //   profileName.textContent = inputNameValue.value;
  //   profileJob.textContent = inputJobValue.value;
  //   closePopup (popupEditProfile);
  // }

// функция добавляет новую карточку на страницу
  // const addFormSubmitHendler = (evt) => {
  //   evt.preventDefault();
  //   const newImputValue = [{
  //     name: inputNamePopup.value,
  //     link: inputLinkPopup.value
  //   }];

  //   newImputValue.forEach((item) => {
  //     const addCard = new Card(item, '#template');
  //     const cardElement = addCard.generateCard();
      
  //     cardList.prepend(cardElement);
  //     closePopup (popupAddCard);
  //   }) 
  // }  



// функция открывает форму с увеличенным изображением карточки 

  const openPopupImg = new PopupWithImage(popupBigImage);
  openPopupImg.setEventListeners();



//открываем редактор профиля
  
// открываем форму добавления новой карточки
  addCardButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupAddCard.open();
    // openPopup(popupAddCard);
    addPopupForm.reset();
    popupAddSubmit.setAttribute('disabled', 'true');
    addFormValidation.disableButton();
  })

// вешаем обработчик событий для всех кнопок закрытия формы
  // popupCloseButtons.forEach((button) => {
  //   button.addEventListener('click', event => {
  //     const popup = event.target.closest('.popup');
  //     closePopup (popup);
  //   });
  // }) 

//   initialCards.forEach((item) => {
//     const card = new Card(item, '#template', openImgPopup);
//     const cardElement = card.generateCard();

//     cardList.append(cardElement);
// })

  

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