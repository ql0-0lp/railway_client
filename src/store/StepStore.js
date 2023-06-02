import {makeAutoObservable} from "mobx";

export class StepStore {
    constructor() {
        this._steps = [
            {id: 1, text: 'Выбрать билет'},
            {id: 2, text: 'Забронируйте и оплатите ваше место'},
            {id: 3, text: 'Зарегистрируйтесь на поезд онлайн'},
        ]
        makeAutoObservable(this)
    }

    get steps() {
        return this._steps
    }
}