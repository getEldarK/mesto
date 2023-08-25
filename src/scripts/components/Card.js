
export default class Card {
    constructor({data, handleLikeCard, handleDeleteCard, handleCardClick, userId}, templateSelector) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._cardId = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeCard = handleLikeCard;
        this._handleDeleteCard = handleDeleteCard;
    }


    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.elements__items')
        .cloneNode(true);
        return cardElement;
    }


    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.elements__image');
        this._cardlikeButton = this._element.querySelector('.elements__like-button');
        this._deleteButton = this._element.querySelector('.elements__delete-button');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.elements__title').textContent = this._name;
        this._cardLikeCounter = this._element.querySelector('.elements__like-button_sum');
        this._updateLike();
        if (this._ownerId !== this._userId) {
            this._deleteButton.remove()
        }
        this._setEventListeners()

        return this._element;
    }


    _setEventListeners() {
        this._cardlikeButton.addEventListener('click', () => {
            this._handleLikeCard(this) 
        });
       
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link) 
        })

        this._deleteButton.addEventListener('click', () => {
            console.log(1)
            this._handleDeleteCard() 
        })
    }


    remove() {
        this._element.remove();
        this._element = null;
     }
    isLiked() {
        return this._data.likes.some((item) => {
            return item._id === this._userId
        })
    }   
    
    _updateLike() {
        this._cardLikeCounter.textContent = this._data.likes.length;
        

        if(this.isLiked()) {
            this._cardlikeButton.classList.add('elements__like-button_active')
        } else {
            this._cardlikeButton.classList.remove('elements__like-button_active')
        }
    }

    setLikesData(data) {
        this._data.likes = data.likes;
        this._updateLike();
    }

    
   

    // likeCard(likes) {
    //     this._likes = likes
    //     this._cardLikeCounter.textContent = likes.lenght
    //     if (this._getUserIdLikes()) {
    //         this._cardlikeButton.classList.add('elements__like-button_active')
    //     } else {
    //         this._cardlikeButton.classList.remove('elements__like-button_active')
    //     }
    // }

    // _deleteCard() {
    //     if (this._ownerId === this._userId) {
    //         this._handleDeleteCard(this._cardId);
    //     } else {
    //         this._cardlikeButton.closest('.elements__items').remove();
    //     }
        
    // }

    getUserIdLikes() {
        return this._data._id;
    }

    // delete() {
    //     this._element.remove()
    //     this._element = null
    // }

    // _handleCardClick() {
    //     this._
    // }
}   



