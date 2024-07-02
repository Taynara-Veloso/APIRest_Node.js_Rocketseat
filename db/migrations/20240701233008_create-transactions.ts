import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> { //cria tabela no banco de dados
  await knex.schema.createTable('transactions', (table) => {
    // universal unique id 
    table.uuid('id').primary() //primary: indica chave primária.
    table.text('title').notNullable() // notNullable: campo não pode ficar vazio.
    // amount(quantia)
    table.decimal('amount', 10, 2).notNullable() //campo decimal com o tamanho do número que será armazenado e o número de casas decimais  
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable() // campo que armazena a data que cada registro foi criado
  }) 
}


export async function down(knex: Knex): Promise<void> { //deleta tabela no banco de dados
  await knex.schema.dropTable('transactions')
}
