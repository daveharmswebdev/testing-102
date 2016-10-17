'use strict'

// const { json } = require('body-parser')

const express = require('express')
const app = express()



app.get('/', (req,res) => {
	res.send('hello world')
})

app.get('/api/user', (req, res) => {
	res.send({message: 'hello world'})
})

app.post('/api/address', (req,res) => {
	res.status(201).send({_id:'123qwe'})
})

app.delete('/api/address/:id', (req,res) => {
	res.send(204)
})

module.exports = app