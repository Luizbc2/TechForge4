export interface Documento {
  titulo: string
  conteudo: string
}

export default class Texto implements Documento {
  titulo: string
  conteudo: string

  constructor(titulo: string, conteudo: string) {
    this.titulo = titulo
    this.conteudo = conteudo
  }

  exibir(): string {
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`
  }
}
