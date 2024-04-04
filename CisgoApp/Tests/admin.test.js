const express = require('express');
const request = require('supertest');
const app = express();
const aadmin = require('../routes/html/admin');
const database = require('../routes/dbms')
const adminRouter = require('../routes/html/admin')

app.use('/admin', adminRouter);
jest.mock('../routes/dbms');

describe('verify admin login', () => {
    test('wrong password', async () => {
      
      // create fake sign in 
      const credentials = {
          username: "CISGOAdmin@up.edu",
          password: "GlobalContributions@UP"
      };
  
      // Send post request
      const response = await request(app)
        .post('/admin')
        .send(credentials);
      
      expect(response.statusCode).toBe(200);
    });

    test('right password', async () => {
      // create fake sign in 
      const credentials = {
        username: "username",
        password: "password"
      };

      // Send post request
      const response = await request(app)
        .post('/admin')
        .send(credentials);


      expect(response.statusCode).toBe(403);
    });
});