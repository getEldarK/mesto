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
  const cardList = document.querySelector('.elements__list');
  const template = document.querySelector('#template').content.querySelector('.elements__items');
  const listImage = document.querySelector('.elements__image');
  const titlePopupPicture = document.querySelector('.popup__img-title');
  const popupOpenImage = document.querySelector('.popup_open-img');
  const popupPicture = popupOpenImage.querySelector('.popup__picture');
  const imgPopupCloseBtn = document.querySelector('#closeButton');
  const inputNamePopup = document.querySelector('#inputPlaceName');
  const inputLinkPopup = document.querySelector('#inputLink');
  const addPopupForm = document.querySelector('#popupAddForm');

// универсальная функция открытия попаов
  function openPopup (popup) {
    popup.classList.add('popup_is-opened');
}

// универсальная функция закрытия попапов 
  function closePopup (popup) {
    popup.classList.remove('popup_is-opened');
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
    const newImputValue = {
      name: inputNamePopup.value,
      link: inputLinkPopup.value
    };
    const element = createCard(newImputValue);
    cardList.prepend(element);
    closePopup (popupAddCard);
  }  

// функиця создания карточек из щаблона template
  function createCard(item) {
    const templateCards = template.cloneNode(true);
    const likeButton = templateCards.querySelector('.elements__like-button');
    const deleteButton = templateCards.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', handleDeleteButtonClick);
    likeButton.addEventListener('click', handleLikeButtonClick);
    const templateCardsTitle = templateCards.querySelector('.elements__title');
    templateCardsTitle.textContent = item.name;
    const templateCardsImage = templateCards.querySelector('.elements__image');
    templateCardsImage.setAttribute('src', item.link, 'alt', 'users photo place');
    templateCardsImage.addEventListener('click', () => openImgPopup(item));
    return templateCards;
  }  

// функция лайка карточки
  const handleLikeButtonClick = (e) => {
    e.target.classList.toggle('active');
  }

// функция удаления карточки
  const handleDeleteButtonClick = (e) => {
    e.target.closest('.elements__items').remove();
  }

  initialCards.forEach(function(item){
    const element = createCard(item);
    cardList.append(element);
  });

// функция открывает форму с увеличенным изображением карточки 
  const openImgPopup = (card) => {
    openPopup(popupOpenImage);
    popupPicture.setAttribute('src', card.link, 'alt', 'users photo place');
    titlePopupPicture.textContent = card.name;
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
    addCardNameValue.value = '';
    addCardLinkValue.value = '';
  })

// вешаем обработчик событий для всех кнопок закрытия формы
  popupCloseButtons.forEach((button) => {
    button.addEventListener('click', event => {
      const closestButton = event.target.closest('.popup');
      closePopup (closestButton);
    });
  }) 






