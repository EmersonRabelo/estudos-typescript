export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // private negociacoes : Negociacao[] = [];
    add(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Spred operator
    // list() : Array <Negociacao> {
    //     return [...this.negociacoes];
    // }
    //ReadOnlyArray => Funciona somente em tempo de compilação
    /*list() : ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }*/
    list() {
        return this.negociacoes;
    }
}
