import request from 'supertest';
import app from './app';


describe('API test', () => {
  it('should return string type data', async (done) => {
    const data = await request(app).get('/api/v1/on-covid-19/logs');
    expect(data.status).toEqual(200);
    done();
  });
});
