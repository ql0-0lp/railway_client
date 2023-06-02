import {makeAutoObservable} from "mobx";

export class TicketStore {
    constructor() {
        this._tickets = []
        makeAutoObservable(this)
    }

    setTickets(tickets) {
        this._tickets = tickets
    }

    get tickets() {
        return this._tickets
    }
}