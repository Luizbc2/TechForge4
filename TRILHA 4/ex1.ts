export interface Produto {
  id: number
  nome: string
  preco: number
}

export default class ItemLoja implements Produto {
  id: number
  nome: string
  preco: number

  constructor(id: number, nome: string, preco: number) {
    this.id = id
    this.nome = nome
    this.preco = preco
  }
}
