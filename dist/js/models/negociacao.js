export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this.quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this.quantidade * this._valor;
    }
}
