const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputNameValue = document.querySelector('#inputName');
const inputJobValue = document.querySelector('#inputJob');

// функция для открытия попаов
const popup = document.querySelector('.popup');
function openPopup (popup) {
  popup.classList.add('popup_is-opened');
}
// событие для кнопки редактора профиля
const popupEditProfile = document.querySelector('.popup_edit-profile');
const editProfileButton = document.querySelector('.profile__button-edit');
editProfileButton.addEventListener('click', function () {
  inputNameValue.value = profileName.textContent;
  inputJobValue.value = profileJob.textContent;
  openPopup(popupEditProfile);
})
// событие для кнопки добавления новой карточки
const popupAddCard = document.querySelector('.popup_add-card');
const addCardButton = document.querySelector('.profile__add-button');
addCardButton.addEventListener('click', function () {
  openPopup(popupAddCard);
})

// функция закрытия попапов 
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
function closePopup (popup) {
  popup.classList.remove('popup_is-opened');
}
// событие для кнопок закрытия popup
popupCloseButtons.forEach((button) => {
  button.addEventListener('click', event => {
    const closestButton = event.target.closest('.popup');
    closePopup (closestButton);
  });
}) 

//СОХРАНЕНИЕ НОВЫХ ЗНАЧЕНИЙ В РЕДАКТОРЕ ПРОФИЛЯ
const popupEditForm = document.querySelector('#popupEditForm');
  const editFormSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = inputNameValue.value;
    profileJob.textContent = inputJobValue.value;
    const closestButton = event.target.closest('.popup');
    closePopup (closestButton);
  }

  popupEditForm.addEventListener('submit', editFormSubmitHandler);


// РЕНДЕР КАРТОЧЕК НА СТРАНИЦЕ
const cardList = document.querySelector('.elements__list');
const template = document.querySelector('#template').content.querySelector('.elements__items');
const listImage = document.querySelector('.elements__image');
const titlePopupPicture = document.querySelector('.popup__img-title');

function createCard(item) {
    const templateCards = template.cloneNode(true);
    const likeButton = templateCards.querySelector('.elements__like-button');
    const deleteButton = templateCards.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', handleDeleteButtonClick);
    likeButton.addEventListener('click', handleLikeButtonClick);
    const templateCardsTitle = templateCards.querySelector('.elements__title');
    templateCardsTitle.textContent = item.name;
    const templateCardsImage = templateCards.querySelector('.elements__image');
    templateCardsImage.setAttribute('src', item.link);
    templateCardsImage.addEventListener('click', () => openImgPopup(item));
    return templateCards;
 }

const handleLikeButtonClick = (e) => {
 e.target.classList.toggle('active');
}

const handleDeleteButtonClick = (e) => {
  e.target.closest('.elements__items').remove();
}

const openImgPopup = (card) => {
  const popupOpenImage = document.querySelector('.popup_open-img');
  popupOpenImage.classList.add('popup_open-img_is-opened');
  const popupPicture = document.querySelector('.popup__picture');
  popupPicture.setAttribute('src', card.link);
  titlePopupPicture.innerText = card.name;
  const imgPopupCloseBtn = document.querySelector('#closeButton');
  imgPopupCloseBtn.addEventListener('click', () => popupOpenImage.classList.remove('popup_open-img_is-opened'));
}

initialCards.forEach(function(item){
  const element = createCard(item);
  cardList.append(element);
})

// ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ НА СТРАНИЦУ
const inputNamePopup = document.querySelector('#inputPlaceName');
const inputLinkPopup = document.querySelector('#inputLink');
const addPopupForm = document.querySelector('#popupAddForm');
const addFormSubmitHendler = (evt) => {
  evt.preventDefault();
  const newImputValue = {
    name: inputNamePopup.value,
    link: inputLinkPopup.value
  };
  const element = createCard(newImputValue);
  cardList.prepend(element);
  const closestButton = evt.target.closest('.popup');
    closePopup (closestButton);
}
addPopupForm.addEventListener('submit', (e) => addFormSubmitHendler(e));










