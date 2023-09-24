export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number,
        public readonly valor: number
        ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }
    
    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        /* Converte a data de string para tipo data */
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));

        /* Converte quantidade de string para tipo inteiro */
        const quantidade = parseInt(quantidadeString);

        /* Converte valor para tipo float */
        const valor = parseFloat(valorString);

        return new Negociacao(date, quantidade, valor);
    }
}