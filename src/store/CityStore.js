import {makeAutoObservable} from "mobx";

export class CityStore {
    constructor() {
        this._cities = []
        makeAutoObservable(this)
    }

    setCities(cities) {
        this._cities = cities
    }

    get cities() {
        return this._cities
    }
}