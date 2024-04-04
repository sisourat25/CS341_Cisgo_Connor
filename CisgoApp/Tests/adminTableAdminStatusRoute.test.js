// neworder.test.js

const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../routes/dbms'); // Import the database module
const newOrderRouter = require('../routes/adminTableAdminStatusRoute');

// Setup Express app
const app = express();
app.use(bodyParser.json());
app.use('/neworder', newOrderRouter);

// Mock the db.dbquery function
jest.mock('../routes/dbms', () => ({
  dbquery: jest.fn(),
}));

describe('POST /neworder', () => {
  test('it should handle new order submission', async () => {
    // Mock request body
    const requestBody = {
      changedID: 123,
      newStatus: 'new_status',
    };

    // Mock successful database query
    db.dbquery.mockImplementationOnce((query, callback) => {
      // Assuming mock result
      const mockResult = { success: true };
      callback(null, mockResult);
    });

    // Perform the request
    const response = await request(app)
      .post('/neworder')
      .send(requestBody);

    // Assert the response
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ success: true });
    expect(db.dbquery).toHaveBeenCalled();
  });

  test('it should handle database query error', async () => {
    // Mock request body
    const requestBody = {
      changedID: 123,
      newStatus: 'new_status',
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
