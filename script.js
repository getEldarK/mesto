const popupElement = document.querySelector('.popup');
const popupCloseElement = popupElement.querySelector('.popup__close-button');
const popupOpenElement = document.querySelector('.profile__button-edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputNameValue = document.querySelector('#inputName');
const inputJobValue = document.querySelector('#inputJob');

const openPopup = function () {
  popupElement.classList.add('popup_is-opened');
  inputNameValue.value = profileName.textContent;
  inputJobValue.value = profileJob.textContent;
}
const closePopup = function () {
  popupElement.classList.remove('popup_is-opened');
}

popupOpenElement.addEventListener('click', openPopup);
popupCloseElement.addEventListener('click', closePopup);

const formElement = document.querySelector('.popup__form');

const formSubmitHandler = (evt) => {
  evt.preventDefault();

  profileName.textContent = inputNameValue.value;
  profileJob.textContent = inputJobValue.value;

  popupElement.classList.remove('popup_is-opened');
}

formElement.addEventListener('submit', formSubmitHandler);