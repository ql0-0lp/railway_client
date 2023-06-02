import {makeAutoObservable} from "mobx";

export class RouteStore {
    constructor() {
        this._routes = []
        this._filter = {}
        makeAutoObservable(this)
    }

    setRoutes(routes) {
        this._routes = routes
    }
    setFilter(filter) {
        this._filter = filter
    }

    get routes() {
        return this._routes
    }
    get filter() {
        return this._filter
    }
}