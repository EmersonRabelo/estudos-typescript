export class Negociacao {

    //Programação defenciva, impedindo metodos que alterem meu obj date
    private _data: Date;
    
    // Aprendendo o conceito readonly
    public readonly quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this.quantidade = quantidade;
        this._valor = valor;
    }

    get data(){
        const data = new Date(this._data.getTime())
        return data;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this.quantidade * this._valor;
    }
}