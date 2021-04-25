import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('GET /', () => {
    it('redirect the page temporarily', async (done) => {
        const response = await request.get('/');
        expect(response.status).toBe(302);
        done()
    }
)});

describe('GET /api/images?fileName=fjord.jpg', () => {
    it('respond with status 200', async (done) => {
        const response = await request.get('/api/images?fileName=fjord.jpg');
        expect(response.status).toBe(200);
        done()
    }
)});