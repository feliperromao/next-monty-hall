export default class Porta {

    constructor(
        private numero: number,
        private temPresente: boolean = false,
        private selecionada: boolean = false,
        private aberta: boolean = false
    ) {
        
    }

    public getNumero(): number {
        return this.numero
    }

    public getTemPresente(): boolean {
        return this.temPresente
    }

    public getSelecionada(): boolean {
        return this.selecionada
    }

    public getAberta(): boolean {
        return this.aberta
    }

    public removerSelecao(): Porta {
        const selecionada = false

        return new Porta(this.numero, this.temPresente, selecionada, this.aberta)
    }

    public alternarSelecao(): Porta {
        const selecionada = !this.selecionada

        return new Porta(this.numero, this.temPresente, selecionada, this.aberta)
    }

    public abrir(): Porta {
        const aberta = true

        return new Porta(this.numero, this.temPresente, this.selecionada, aberta)
    }
}