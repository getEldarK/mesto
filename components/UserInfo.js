export default class UserInfo {
    constructor ({userNameSelector, userInfoSelector}) {
        this._name = userNameSelector;
        this._job = userInfoSelector;
    }

    getUserInfo() {
        const userInfo = {
            name: this._name.textcontent,
            job: this._job.textcontent
        }
        return userInfo;
    }

    setUserInfo(userInfo) {
        this._name.textcontent = userInfo.name;
        this._job.textcontent = userInfo.job;
    }
}