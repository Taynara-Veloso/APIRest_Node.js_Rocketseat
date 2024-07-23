import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import { checkSessionIdExists } from "../middlewares/check-session-id-exists";

//Testes
//unitários: unidade da sua aplicação
//Integração: comunicação entre duas ou mais unidades
//e2e(ponta-a-ponta): simula um usuário operando na nossa aplicação
  //frontend: abre a página de login, digite o texto taynara...@hotmail.com no campo com id (simulando passo a passo do usuário)
  //backend: chamadas HTTP, WebSockets, 
export async function transactionsRoutes(app: FastifyInstance) {

  app.get('/', { preHandler: [checkSessionIdExists] }, async (request) => { //listar todas as transações
    const { sessionId } = request.cookies

    const transactions = await knex('transactions').where('session_id', sessionId).select()

    return { transactions }
  })

  app.get('/:id', { preHandler: [checkSessionIdExists] }, async (request) => { //busca detalhes de uma transação única
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionParamsSchema.parse(request.params)
    
    const { sessionId } = request.cookies

    const transaction = await knex('transactions').where({
      session_id: sessionId,
      id
    }).first()

    return { transaction }
  })

  app.get('/summary', { preHandler: [checkSessionIdExists] }, async (request) => { // calcula(soma) as transações e retornar o total.
    const { sessionId } = request.cookies

    const summary = await knex('transactions')
      .where('session_id', sessionId)
      .sum('amount', { as: 'amount' })
      .first()
    
    return { summary }
  })

  app.post('/', async (request, reply) => { // Cria uma nova transação
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(request.body)
    
    let sessionId = request.cookies.sessionId

    if(!sessionId){
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
    })

    return reply.status(201).send()
  })
}
