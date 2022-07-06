import { makeAutoObservable } from "mobx";

class books {
    data = [];
    number = 0;
    inputValue = ''
    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }

    bookData = (value) => {
        this.data = [...value];

    }
    addMoreBookData = (value) => {
        this.data = [...this.data, ...value]
    }
    setNumberOfBooks = (value) => {

        this.number = value
    }
    getInputValue = (value) => {
        this.inputValue = value
    }

}

export default new books();