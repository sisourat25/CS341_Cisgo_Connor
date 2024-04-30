// Import required modules and setup Express app
const express = require('express');
const router = express.Router();
const db = require('./dbms'); // Import the database module


// Route handler for GET requests to /orders
router.get('/', function(req, res) {
    // Construct the SQL query to fetch orders data
    var query = "SELECT * FROM CISGO WHERE ADMINSTATUS = 'Pending'"; // Modify query according to your table structure

    // Execute the SQL query using the database module
    db.dbquery(query, function(err, results) {
        if (err) {
            console.log("Error fetching orders:", err);
            res.status(500).json({ error: "Error fetching orders" });
        } else {
            // Log the results to inspect its structure and contents
            console.log("Query results:", results);

            // Send the orders as a JSON response
            res.json(results);
        }
    });
});

module.exports = router;
