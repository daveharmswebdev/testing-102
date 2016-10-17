'use strict'

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
})