const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.json({
    message: 'Hello World - Ignite NodeJs Partiu decolar 🚀🚀🚀'
  })
})

app.listen(3333, () => console.log(` RUNNING PORT 3333 🚀🚀🚀 `))
