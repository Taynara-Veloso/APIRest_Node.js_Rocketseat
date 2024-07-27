import { app } from '../src/app'
import requestest from 'supertest'
import { execSync } from 'child_process'
import { afterAll, beforeAll, it, describe, expect, beforeEach } from 'vitest'

describe('transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })
  
  afterAll(async () => {
    await app.close()
  })
  
  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
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

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await requestest(app.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 5000,
      type: 'credit',
    })
    
    const cookies = createTransactionResponse.get('Set-Cookie');

    const listTransactionsResponse = await requestest(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'New transaction',
        amount: 5000,
      }),
    ])
  })

})
