'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('nome')
      table.float('preco')
      table.integer('quantidade')
      table.string('descricao')
      table.integer('cnpj').references('cnpj').inTable('User').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutosSchema
