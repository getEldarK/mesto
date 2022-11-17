const popupElement = document.querySelector('.popup');
const popupCloseElement = popupElement.querySelector('.popup__close-button');
const popupOpenElement = document.querySelector('.profile__button-edit');

const openPopup = function () {
  popupElement.classList.add('popup_is-opened');
}
const closePopup = function () {
  popupElement.classList.remove('popup_is-opened');
}

popupOpenElement.addEventListener('click', openPopup);
popupCloseElement.addEventListener('click', closePopup);

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputNameValue = document.querySelector('#inputName').value = profileName.textContent;
const inputJobValue = document.querySelector('#inputJob').value = profileJob.textContent;

const formElement = document.querySelector('.popup__form')

const formSubmitHandler = (evt) => {
  evt.preventDefault();

  const nameValue = inputName.value;
  const jobValue = inputJob.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  popupElement.classList.remove('popup_is-opened');
}

formElement.addEventListener('submit', formSubmitHandler);