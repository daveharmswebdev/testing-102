'use strict'

const { property } = require('chai').assert
const request = require('supertest')
const app = require('../server')

describe('express', () => {
	it('should respond with hello world', (done) => {
		request(app)
			.get('/')
			.expect(200)
			.expect('hello world')
			.end(done)
	})

	// should be json
	it('should respond with json', (done) => {
		request(app)
		  .get('/api/user')
		  .expect('Content-Type', /json/)
		  .expect(200)
		  .end(done)
	})

	// post to /address responds with 201 json
	it('should post to address and respons with 201 json', (done) => {
		request(app)
			.post('/api/address')
			.expect(201)
			.expect('Content-Type', /json/)
			.expect(res => property(res.body, '_id'))
			.end(done)
	})

	// delete /addressess/:id 204
	it('delete api/address/:id 204', (done) => {
		request(app)
			.delete('/api/address/100')
			.expect(204)
			.end(done)
	})
})









