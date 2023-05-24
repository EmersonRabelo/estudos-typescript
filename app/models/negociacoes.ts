import { Negociacao } from "./negociacao.js";


export class Negociacoes {
    private negociacoes : Array <Negociacao> = [];
    // private negociacoes : Negociacao[] = [];

    add(negociacao : Negociacao) : any {
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

    list() : readonly Negociacao[] {
        return this.negociacoes;
    }
}