'use strict'

const Produto = use("App/Models/Produto")

class ProdutoController {
  async create ({ request }) {
    const data = request.only(["nome","preco","quantidade","descricao","cnpj"])

    const produto = await Produto.create(data)

    return produto
  }
}

module.exports = ProdutoController
