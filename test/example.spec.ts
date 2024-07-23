import { app } from '../src/app'
import { expect, test } from 'vitest'
import requestest from 'supertest'

test('Usuário consegue criar uma nova transação', async () => {
  const responsetest = await requestest(app.server).post('/transactions').send({
    title: 'New transaction',
    amount: 5000,
    type: 'credit',
  })
  expect(responsetest.statusCode).toEqual(201)
})
