import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
export const initialCards = [
  {
    name: 'Уфа',
    link: 'https://ufa.dixinews.ru/upload/iblock/821/8218012bfe009c9eda0431d4a68dd9db.jpg'
  },
  {
    name: 'Йошкар-Ола',
    link: 'https://static.tonkosti.ru/tonkosti/table_img/g192/9d9d/263173325.jpg'
  },
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1570720285196-7d31a750b34c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGthemFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Самара',
    link: 'https://images.unsplash.com/photo-1617080371806-cd01d35ac4c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
  },
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1592961132324-4f09bb682ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Уфа',
    link: 'https://images.unsplash.com/photo-1631080296671-f07c60f187d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
  }
]; 

// Объявление переменных
  const popup = document.querySelector('.popup');
  const profileName = document.querySelector('.profile__name');
  const profileJob = document.querySelector('.profile__job');
  const inputNameValue = document.querySelector('#inputName');
  const inputJobValue = document.querySelector('#inputJob');
  const popupEditProfile = document.querySelector('.popup_edit-profile');
  const editProfileButton = document.querySelector('.profile__button-edit');
  const popupAddCard = document.querySelector('.popup_add-card');
  const addCardButton = document.querySelector('.profile__add-button');
  const addCardNameValue = document.querySelector('#inputPlaceName');
  const addCardLinkValue = document.querySelector('#inputLink');
  const popupCloseButtons = document.querySelectorAll('.popup__close-button');
  const popupEditForm = document.querySelector('#popupEditForm');
  export const cardList = document.querySelector('.elements__list');
  const template = document.querySelector('#template').content.querySelector('.elements__items');
  const listImage = document.querySelector('.elements__image');
  export const titlePopupPicture = document.querySelector('.popup__img-title');
  export const popupOpenImage = document.querySelector('.popup_open-img');
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

// функиця создания карточек из щаблона template
  // function createCard(item) {
  //   const templateCards = template.cloneNode(true);
  //   const likeButton = templateCards.querySelector('.elements__like-button');
  //   const deleteButton = templateCards.querySelector('.elements__delete-button');
  //   deleteButton.addEventListener('click', handleDeleteButtonClick);
  //   likeButton.addEventListener('click', handleLikeButtonClick);
  //   const templateCardsTitle = templateCards.querySelector('.elements__title');
  //   templateCardsTitle.textContent = item.name;
  //   const templateCardsImage = templateCards.querySelector('.elements__image');
  //   templateCardsImage.setAttribute('src', item.link);
  //   templateCardsImage.setAttribute('alt', 'users photo place');
  //   templateCardsImage.addEventListener('click', () => openImgPopup(item));
  //   return templateCards;
  // }  

// функция лайка карточки
  const handleLikeButtonClick = (e) => {
    e.target.classList.toggle('active');
  }

// функция удаления карточки
  const handleDeleteButtonClick = (e) => {
    e.target.closest('.elements__items').remove();
  }

  // initialCards.forEach(function(item){
  //   const element = createCard(item);
  //   cardList.append(element);
  // });

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
    popupAddSubmit.classList.add('popup__submit-button_invalid');
  })

// вешаем обработчик событий для всех кнопок закрытия формы
  popupCloseButtons.forEach((button) => {
    button.addEventListener('click', event => {
      const popup = event.target.closest('.popup');
      closePopup (popup);
    });
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