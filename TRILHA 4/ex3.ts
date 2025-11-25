export interface ProdutoLoja {
  codigo: number
  nome: string
}

export default class Loja {
  produtos: ProdutoLoja[]

  constructor(produtos: ProdutoLoja[] = []) {
    this.produtos = produtos
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(p => p.codigo === codigo)
  }
}
