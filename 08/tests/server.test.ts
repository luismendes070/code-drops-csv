// ChatGPT
// server.test.ts
import request from 'supertest';
import app from './server';

describe('Express server', () => {
  it('should return CSV data with correct headers', async () => {
    const response = await request(app).get('/data.csv');
    
    expect(response.status).toEqual(200);
    expect(response.header['content-type']).toEqual('text/csv');
    expect(response.header['content-disposition']).toEqual('attachment; filename=data.csv');
  });
});
