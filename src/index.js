const express = require('express')

const app = express()

app.use(express.json())
//para express enteder json precisamos usar um middleware

/**
 *   Tipos de Parametro que agente vai estudar
 *   Route params app.put('/courses/:id', (request, response) são os parametos que agente ja espera
 *   inteificar um recurso ou deletar um recurso , buscar.
 *
 *  Query Params = Paginação / filtros
 *  Body Params = Os objetos que agenta vai passar para alteração de um recurso.
 */

app.get('/courses', (request, response) => {
  const query = request.query
  console.log(query)
  return response.json(['Cursos 1', 'Cursos 2', 'Cursos 3'])
})

app.post('/courses', (request, response) => {
  const body = request.body
  console.log(body)
  return response.json(['Cursos 1', 'Cursos 2', 'Cursos 3', 'Curso 4'])
})

app.put('/courses/:id', (request, response) => {
  const { id } = request.params
  // para pegar o parametros
  console.log(id)
  return response.json(['Cursos 6', 'Cursos 2', 'Cursos 3', 'Curso 4'])
})

app.patch('/courses/:id', (request, response) => {
  return response.json(['Cursos 6', 'Cursos 7', 'Cursos 3', 'Curso 4'])
})

app.delete('/courses/:id', (request, response) => {
  return response.json(['Cursos 6', 'Cursos 7', 'Curso 4'])
})

app.listen(3333, () => console.log(` RUNNING PORT 3333 🚀🚀🚀 `))
