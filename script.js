const initialCards = [
  {
    name: 'Уфа',
    link: 'https://www.avtodispetcher.ru/wp-content/gallery/ufa/3435536.jpg'
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

// СОЗДАНИЕ ПЕРЕМЕННЫХ ДЛЯ ФОРМЫ:
// -редактирования профиля
  const popupElement = document.querySelector('.popup');
  const formElement = document.querySelector('.popup__form');
  const popupCloseElement = popupElement.querySelector('.popup__close-button');
  const popupOpenElement = document.querySelector('.profile__button-edit');

  const profileName = document.querySelector('.profile__name');
  const profileJob = document.querySelector('.profile__job');
  const inputNameValue = document.querySelector('#inputName');
  const inputJobValue = document.querySelector('#inputJob');

// - добавления карточек
  const openPopupElement = document.querySelector('.profile__add-button');
  const closePopupElement = document.querySelector('.second-popup__close-button');
  const inputNamePopup = document.querySelector('#inputPlaceName');
  const inputLinkPopup = document.querySelector('#inputLink');
  const secondFormInput = document.querySelector('.second-popup__form-input');
  const secondPopupElement = document.querySelector('.second-popup');
  const secondFormElement = document.querySelector('.second-popup__form');
  const cardList = document.querySelector('.elements__list');

// - открытия и закрытия картинок
  const imgPopupElement = document.querySelector('.img-popup');
  const imgPopupCloseBtn = document.querySelector('.img-popup__close-button');
  const imgPopup = document.querySelector('.img-popup__picture');
  const titlePopup = document.querySelector('.img-popup__title');


// ОТКРЫТИЕ РЕДАКТРА ПРОФИЛЯ
  const openPopup = function () {
    popupElement.classList.add('popup_is-opened');
    inputNameValue.value = profileName.textContent;
    inputJobValue.value = profileJob.textContent;
  }
// ЗАКРЫТИЕ РЕДАКТРА ПРОФИЛЯ
  const closePopup = function () {
    popupElement.classList.remove('popup_is-opened');
  }
  popupOpenElement.addEventListener('click', openPopup);
  popupCloseElement.addEventListener('click', closePopup);

// СОХРАНЕНИЕ НОВЫХ ЗНАЧЕНИЙ В РЕДАКТОРЕ ПРОФИЛЯ
  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = inputNameValue.value;
    profileJob.textContent = inputJobValue.value;
    popupElement.classList.remove('popup_is-opened');
  }
  formElement.addEventListener('submit', formSubmitHandler);

// СОЗДАНИЕ КАРТОЧЕК С КАРТИНКАМИ
  const createElements = function(arr) { 
    for(let i=0; i < arr.length; i++) {
      const listItem = document.createElement('li');
      listItem.classList = 'elements__items';
      const listImage = document.createElement('img');
      listImage.classList = 'elements__image';
      listImage.setAttribute('src', arr[i].link);
      const titleBox = document.createElement('div');
      titleBox.classList = 'elements__item';
      const title = document.createElement('h2');
      title.classList = 'elements__title';
      title.innerText = arr[i].name;

// КНОПКА ЛАЙКА КАРТОЧКИ
      const button = document.createElement('button');
      button.classList = 'elements__like-button';
      button.setAttribute('type', 'button');
      button.addEventListener('click', () => {
        button.classList.toggle('active');
        console.log(button);
      })

// КНОПКА УДАЛЕНИЯ КАРТОЧКИ  
      const deleteButton = document.createElement('button');
      deleteButton.classList = 'elements__delete-button';
      deleteButton.setAttribute('type', 'button');
      deleteButton.addEventListener('click', () => {
        listItem.remove();
      });

// ОТКРЫТИЕ КАРТИНКИ
      listImage.addEventListener('click', () => {
        imgPopupElement.classList.add('img-popup_is-opened');
        imgPopup.setAttribute('src', arr[i].link);
        titlePopup.innerText = arr[i].name;
      })

// ЗАКРЫТИЕ КАРТИНКИ
      imgPopupCloseBtn.addEventListener('click', () => {
        imgPopupElement.classList.remove('img-popup_is-opened');
      })

      titleBox.append(title);
      titleBox.append(button);
      listItem.append(listImage);
      listItem.append(titleBox);
      listItem.append(deleteButton);
      cardList.append(listItem); 
    }
  }
  createElements(initialCards);

// ОТКРЫТИЕ ФОРМЫ ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
  const secondPopupIsOpen = function() {
    secondPopupElement.classList.add('second-popup_is-opened');
    inputNamePopup.value = '';
    inputLinkPopup.value = '';
  }
// ЗАКРЫТИЕ ФОРМЫ ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
  const secondPopupIsClose = function() {
    secondPopupElement.classList.remove('second-popup_is-opened');
    inputNamePopup.value = '';
    inputLinkPopup.value = '';
  }
  openPopupElement.addEventListener('click', secondPopupIsOpen);
  closePopupElement.addEventListener('click', secondPopupIsClose);

// ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ НА СТРАНИЦУ
  const secondFormSubmitHendler = (evt) => {
    evt.preventDefault();
    const newImputValue = {
      name: inputNamePopup.value,
      link: inputLinkPopup.value
    };
    initialCards.unshift(newImputValue);
    cardList.innerHTML ='';
    secondFormInput.value = '';
    createElements(initialCards);
    secondPopupElement.classList.remove('second-popup_is-opened');
  }  
  secondFormElement.addEventListener('submit', secondFormSubmitHendler);





// initialCards.forEach(function(card) {
//   const listItem = document.createElement('li');
//   listItem.classList = 'elements__items';
//   const listImage = document.createElement('img');
//   listImage.classList = 'elements__image';
//   listImage.setAttribute('src', card.link);
//   const titleBox = document.createElement('div');
//   titleBox.classList = 'elements__item';
//   const title = document.createElement('h2');
//   title.classList = 'elements__title';
//   title.innerText = card.name;
//   const button = document.createElement('button');
//   button.classList = 'elements__like-button';
//   button.setAttribute('type', 'button');

//   titleBox.append(title);
//   titleBox.append(button);
//   listItem.append(listImage);
//   listItem.append(titleBox);
//   cardList.append(listItem); 

// }
// )