const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)

app.get('/api/v1/users', (request, response) => {
  database('users').select()
  .then(users => {
    response.status(200).json(users)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/v1/comments', (request, response) => {
  database('comments').select()
  .then(comments => {
    response.status(200).json(comments)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/v1/companies', (request, response) => {
  database('companies').select()
  .then(companies => {
    response.status(200).json(companies)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/users/:id', (request, response) => {
  const { id } = request.params

  database('users').where('id', id).select()
  .then(users => {
    response.status(200).json(users)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/companies/:id', (request, response) => {
  const { id } = request.params

  database('companies').where('id', id).select()
  .then(companies => {
    response.status(200).json(companies)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/comments/:id', (request, response) => {
  const { id } = request.params

  database('comments').where('id', id).select()
  .then(comments => {
    response.status(200).json(comments)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})