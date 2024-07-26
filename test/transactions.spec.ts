import { app } from '../src/app'
import requestest from 'supertest'
import { afterAll, beforeAll, it, describe } from 'vitest'

describe('transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })
  
  afterAll(async () => {
    await app.close()
  })
  
  it('should be able to create a new transaction', async () => {
    await requestest(app.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 5000,
      type: 'credit',
    })
    .expect(201)
  })
})
