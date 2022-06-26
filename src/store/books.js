import { makeAutoObservable } from "mobx";

class books {
    data = [];
    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }

    bookData = (value) => {
        this.data = [...value];

    }
}

export default new books();