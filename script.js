const openPopupButton = document.querySelector('.profile__button-edit');
const closePopupButton = document.querySelector('.popup__close-button');
const popupForm = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');
const inputNameValue = document.querySelector('#name').value = profileName.textContent;
const inputJobValue = document.querySelector('#job').value = profileJob.textContent;
const submitButton = document.querySelector('#submitid');

openPopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  popupForm.classList.add('active');
  formElement.classList.add('active');
});

closePopupButton.addEventListener('click', () => { 
  popupForm.classList.remove('active'); 
  formElement.classList.remove('active'); 
});

submitButton.addEventListener('click', () => { 
  popupForm.classList.remove('active'); 
  formElement.classList.remove('active'); 
});

const formSubmitHandler = (evt) => {
  evt.preventDefault();

  const nameValue = inputName.value;
  const jobValue = inputJob.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
}

formElement.addEventListener('submit', formSubmitHandler);


