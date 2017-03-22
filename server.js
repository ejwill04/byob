const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

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

app.get('/api/v1/users/:id', (request, response) => {
  const { id } = request.params

  database('users').where('id', id).select()
  .then(users => {
    response.status(200).json(users)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/v1/companies/:id', (request, response) => {
  const { id } = request.params

  database('companies').where('id', id).select()
  .then(companies => {
    response.status(200).json(companies)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/v1/comments/:id', (request, response) => {
  const { id } = request.params

  database('comments').where('id', id).select()
  .then(comments => {
    response.status(200).json(comments)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.post('/api/v1/users', (request, response) => {
  const { name } = request.body;

  database('users').insert({name})
  .then(() => {
    database('users').select()
    .then(users => {
      response.status(200).json(users)
    })
    .catch(error => {
      console.error('error', error)
    })
  })
})

app.post('/api/v1/companies', (request, response) => {
  const { name, city, state } = request.body
  const company = { name, city, state }

  database('companies').insert(company)
  .then(() => {
    database('companies').select()
    .then(companies => {
      response.status(200).json(companies)
    })
    .catch(error => {
      console.error('error', error)
    })
  })
})

app.post('/api/v1/messages', (request, response) => {
  const { message, user_id, company_id } = request.body;
  const comment = { message, user_id, company_id, created_at: new Date }

  database('comments').insert(comment)
  .then(() => {
    database('comments').select()
    .then(comments => {
      response.status(200).json(comments)
    })
    .catch(error => {
      console.error('error', error)
    })
  })
})

app.listen(app.get('port'), () => {
  console.log(`BYOB is running on ${app.get('port')}.`)
})
