import {makeAutoObservable} from "mobx";

export class UserStore {
    constructor() {
        this._isAuth = false
        this._isAdmin = false
        this._userId = ''
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setIsAdmin(bool) {
        this._isAdmin = bool
    }
    setUserId(userId) {
        this._userId = userId
    }

    get isAuth() {
        return this._isAuth
    }
    get isAdmin() {
        return this._isAdmin
    }
    get userId() {
        return this._userId
    }
}