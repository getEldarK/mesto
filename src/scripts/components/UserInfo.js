export default class UserInfo {
    constructor ({userNameElement, userInfoElement}) {
        this._nameElement = userNameElement,
        this._jobElement = userInfoElement
    }

    getUserInfo() { 
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        };
    }

    setUserInfo(userInfo) {
        this._nameElement.textContent = userInfo.name;
        this._jobElement.textContent = userInfo.job;
    }
}