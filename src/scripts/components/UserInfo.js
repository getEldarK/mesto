export default class UserInfo {
    constructor ({userNameElement, userInfoElement, userImageElement}) {
        this._nameElement = userNameElement,
        this._jobElement = userInfoElement,
        this._profileImage = userImageElement
    }

    getUserInfo() { 
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent,
            image: this._profileImage.src
        };
    }

    setUserInfo(userInfo) {
        this._nameElement.textContent = userInfo.name;
        this._jobElement.textContent = userInfo.about;
        this._profileImage.src = userInfo.avatar
    }

    // getUserId() {
    //     return this._userData._id;
    // }
}