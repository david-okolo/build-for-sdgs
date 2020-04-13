import request from 'supertest';
import app from './app';

const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};


describe('API test', () => {
  it('should return string type data for logs', async (done) => {
    const res = await request(app).get('/api/v1/on-covid-19/logs');

    const recieved = /^(GET|POST)\s+\/api\/v1\/on-covid-19(\/json|\/xml|\/logs)?\s+\d{3}\s+\d{2,}ms$/.test();
    expect(res.status).toEqual(200);
    expect(res.headers['content-type']).toBe('text/plain; charset=utf-8');
    expect(!recieved).toBeTruthy();
    done();
  });

  it('should return json data', async (done) => {
    const res = await request(app).post('/api/v1/on-covid-19/json').send(data).set('Accept', 'application/json');
    expect(res.status).toEqual(200);
    expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(res.body).toBeTruthy();
    done();
  });

  it('should return xml data', async (done) => {
    const res = await request(app).post('/api/v1/on-covid-19/xml').send(data).set('Accept', 'application/xml');
    expect(res.status).toEqual(200);
    expect(res.headers['content-type']).toBe('application/xml; charset=utf-8');
    expect(res.text).toBeTruthy();
    done();
  });
});
