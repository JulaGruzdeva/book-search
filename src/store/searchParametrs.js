import { makeAutoObservable } from "mobx";

class searchParametrs {
    categoria = 'all'
    sorting = 'relevance'

    constructor() { makeAutoObservable(this) }

    setCategoria(value) {
        this.categoria = value
    }
    setSorting(value) {
        this.sorting = value
    }
}

export default new searchParametrs();