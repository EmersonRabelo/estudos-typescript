export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
