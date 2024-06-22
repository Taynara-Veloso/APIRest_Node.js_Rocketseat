import fastify from 'fastify'

const app = fastify()

app.get('/home', () => {
  return 'hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
