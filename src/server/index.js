const jsonServer = require('json-server')
const user = require('./user-config.js')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.post('/login', (req, res) => {
  if (user.username === req.body.login) {
    res.header('Authorization', `Bearer dfsd`)
    res.status(200).send(user)
  } else {
    res.status(403).send(null)
  }
})

server.listen(3000, () => {
  console.log('JSON Server is running')
})
