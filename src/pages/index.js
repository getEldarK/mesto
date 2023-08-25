import './index.css'
import Api from "../scripts/components/Api.js"
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import { initialCards } from '../scripts/initialCards.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupConfirmDelete from '../scripts/components/PopupConfirmDelete.js'
import UserInfo from '../scripts/components/UserInfo.js';
import {
  options,
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
  popupDeleteConfirm,
  deleteButton
} from '../scripts/utils/constants.js';

const api = new Api(options);
console.log(api);

let userId = null;

api.getAllInfo()
  .then(([userData, cardsData]) => {
    userId = userData._id;
    console.log(cardsData)
    userInfo.setUserInfo(userData)
    // cardsData.forEach(data => data.userId = userData._id)
    cards.renderItems(cardsData)
  })
  .catch((err) => console.log(err))


// получение данных пользователя  
const userInfo = new UserInfo({
  userNameElement: profileName,
  userInfoElement: profileJob,
  userImageElement: avatar
}); 


const createCard = (data) => {
  const addCard = new Card({
    data,
    handleCardClick,
    handleLikeCard,
    handleDeleteCard,
    userId
  }, '#template')
  return addCard.generateCard();
}
  
//Список карточек
const cards = new Section ({
  renderer: (item) => {
    cards.setItem(createCard(item));
  }, 
},'.elements__list');
  
  
  const handleCardClick = (title, picture) => {
    popupWithImage.open(title, picture);
  }
  const popupWithImage = new PopupWithImage(popupBigImage);
  popupWithImage.setEventListeners();


  function handleLikeCard(instance) {
    api.changeLike(instance.getUserIdLikes(), instance.isLiked())
      .then(dataCardFromServer => {
        instance.setLikesData(dataCardFromServer)
      })
    console.log(instance)
  }


// Удаление карточки
const handleDeleteCard = () => {
  popupConfirmDelete.open();
}

const handleFormSubmit = (instance) => {
  popupConfirmDelete.onSubmit(() => {
    api.deleteCard(instance.getUserIdLikes())
      .then(() => {
        instance.remove();
        popupConfirmDelete.close();
      })
      .catch((err) => console.log(err));
  })
}
const popupConfirmDelete = new PopupConfirmDelete(popupDeleteConfirm, handleFormSubmit);
popupConfirmDelete.setEventListeners();


// popup edit profile declaration
const popupEditProfile = new PopupWithForm(popupProfile, {
  handleSubmitForm: (formData) => {
    popupEditProfile.loading(true);
    api.editUserInfo(formData)
      .then((formData) => {
        userInfo.setUserInfo(formData);
        popupEditProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupEditProfile.loading(false);
      });
    }
  }
);
popupEditProfile.setEventListeners();
// обработчик кнопки редактирования профиля
editProfileButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  inputNameValue.value = userData.name;
  inputJobValue.value = userData.job;
  popupEditProfile.open();
})


// popup add card declaration
const popupAddCard = new PopupWithForm(popupAddNewCard, {
  handleSubmitForm: (formData) => {
    popupAddCard.loading(true);
    api.addNewCard(formData)
      .then((formData) => {
        cards.setItem(createCard(formData));
        popupAddCard.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAddCard.loading(false);
      });
  }
});
popupAddCard.setEventListeners();
// обработчик событий добавления новой карточки
addCardButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupAddCard.open();
  addFormValidation.disableButton();
})


//создание попапа редактирование аватара профиля

const popupEditAvatar = new PopupWithForm(popupAvatar, {
  handleSubmitForm: (formData) => {
    popupEditAvatar.loading(true);
    api.editAvatarProfile(formData)
      .then((formData) => {
        avatar.src = formData.avatar;
        popupEditAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupEditAvatar.loading(false);
      });
  }
});
popupEditAvatar.setEventListeners();



popupAvatarButton.addEventListener('click', () => {
  popupEditAvatar.open();
})



const avatarFormValidation = new FormValidator(config, popupAvatar);
avatarFormValidation.enableValidation();

const addFormValidation = new FormValidator(config, popupAddNewCard);
addFormValidation.enableValidation();

const profileFormValidation = new FormValidator(config, popupProfile);
profileFormValidation.enableValidation();