// neworder.test.js

// Import required modules
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../routes/dbms'); // Import the database module
const newOrderRouter = require('../routes/adminTableEditRoute');

// Setup Express app
const app = express();
app.use(bodyParser.json());
app.use('/neworder', newOrderRouter);

// Mock the db.dbquery function
jest.mock('../routes/dbms', () => ({
  dbquery: jest.fn(),
}));

describe('POST /neworder', () => {
  test('it should handle edit submission', async () => {
    // Mock request body
    const requestBody = {
      changedID: 123,
      changedCol: 'column_name',
      changedData: 'new_data',
    };

    // Mock successful database query
    db.dbquery.mockImplementationOnce((query, callback) => {
      callback(null, 'Mocked Result');
    });

    // Perform the request
    const response = await request(app)
      .post('/neworder')
      .send(requestBody);

    // Assert the response
    expect(response.statusCode).toBe(200);
    expect(db.dbquery).toHaveBeenCalled();
  });

  test('it should handle database query error', async () => {
    // Mock request body
    const requestBody = {
      changedID: 123,
      changedCol: 'column_name',
      changedData: 'new_data',
    };

    // Mock database query error
    db.dbquery.mockImplementationOnce((query, callback) => {
      callback(new Error('Database query error'));
    });

    // Perform the request
    const response = await request(app)
      .post('/neworder')
      .send(requestBody);

    // Assert the response
    expect(response.statusCode).toBe(500); // Assuming error status code 500 for simplicity
    expect(db.dbquery).toHaveBeenCalled();
  });
});
