export default class PortaModel {

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

    public removerSelecao(): PortaModel {
        const selecionada = false

        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    public alternarSelecao(): PortaModel {
        const selecionada = !this.selecionada

        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    public abrir(): PortaModel {
        const aberta = true

        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}