const server = require('../server');
const request = require('supertest');

describe('Testing sleeps endpoints', async() => {
    test('Can get all sleeps', async () => {
        return request(server)
            .get('/api/')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res => {
                expect(res.body).toBeInstanceOf(Array);
            });
    });
    test('Can add a sleep', async () => {
        const dt = new Date().toISOString();
        return request(server)
            .post('/api/')
            .send({start_time: dt})
            .set('Accept', 'application/json')
            .expect(201)
            .then(res => {
                expect(res.body.start_time).toEqual(dt);
            });
    });
});