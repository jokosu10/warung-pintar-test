const request = require('supertest');
const app = require('../servers/Index');

describe('Message Endpoint /', () => {

	test('should return message test api', async (done) => {
		const response = await request(app).get('/api/test/message');
		expect(response.status).toEqual(200);
		expect(response.text).toContain('Testing to api message warung pintar');
		done();
	});

	test('should return all data message', async (done) => {
		const response = await request(app).get('/api/message');
		expect(response.status).toEqual(200);
		done();
	});

	test('should create a new message', async (done) => {
		const response = await request(app).post('/api/message').send({
			message: "Tested message from jest"
		});
		expect(response.status).toEqual(200);
		expect(response.body).toHaveProperty('message');
		done();
	});

});