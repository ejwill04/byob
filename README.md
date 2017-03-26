# BYOB API

## Overview
BYOB is a template for setting up a database and API endpoints using Node, Express, Knex, and PostgreSQL.  The template uses three related tables - Users, Companies, and Comments.  The general link is that a User can submit a Comment about any given Company.  The endpoints attempt to be RESTful.  

## Endpoints
 [heroku](https://build-your-own-backend.herokuapp.com/)
*****

### Users

<code>GET</code>/api/v1/users

* returns a JSON array of all users

<code>POST</code>/api/v1/users

* send user <code>name</code> to add to database.  Will respond with all users.

### Users/:id

<code>GET</code>/api/v1/users/:id

* return a JSON array of a single user

<code>PUT</code>/api/v1/users/:id

* Send an updated user name and return JSON array for single user

<code>DELETE</code>/api/v1/users/:id

* Deletes sent user ID and returns JSON array of all remaining users

***

### Companies

<code>GET</code>/api/v1/companies

* returns a JSON array of all companies

* send query of state and receive only companies located in given state (ex. '/api/v1/companies?state=KY')

<code>POST</code>/api/v1/companies

* send company <code>name</code> to add to database.  Will respond with all companies.

### Companies/:id

<code>GET</code>/api/v1/companies/:id

* return a JSON array of a single company

<code>PUT</code>/api/v1/companies/:id

* Send an updated company name and return JSON array for single user

<code>DELETE</code>/api/v1/companies/:id

* Deletes sent user ID and returns JSON array of all remaining companies

***

### Comments

<code>GET</code>/api/v1/comments

* returns a JSON array of all comments

<code>POST</code>/api/v1/comments

* send comment <code>name</code> to add to database.  Will respond with all comments.

### Comments/:id

<code>GET</code>/api/v1/comments/:id

* return a JSON array of a single comment

<code>PATCH</code>/api/v1/comments/:id

* Send an updated comment name and return JSON array for single user

<code>DELETE</code>/api/v1/comments/:id

* Deletes sent user ID and returns JSON array of all remaining comments

<code>GET</code>/api/v1/comments/total/:company_id

* Send a company ID and receive total number of associated comments

<code>GET</code>/api/v1/comments/company/:company_id

* Send a company ID and receive all associated comments

***

## Test Screenshot

![passing-tests-screenshot](http://i.imgur.com/QoMyQEz.png)
