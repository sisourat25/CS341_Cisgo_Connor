/* neworder.js
* handles submitting the new order to the database
*/

// Import required modules
const express = require('express');
const router = express.Router();
const db = require('./dbms'); // Import the database module

// Route handler for POST requests to /neworder
router.post('/', function(req, res) {

    // get the values from the order form 
    const { changedID, changedCol, changedData } = req.body;

    
    // query for inserting into database
    const query = `UPDATE CISGO SET ` + changedCol + " = '" + changedData + "' WHERE NUMID = " + changedID;
                       
    console.log("Query: ", query);

    // do the SQL query
    db.dbquery(query, function(err, results) {
        if (err) {
            console.log("Error adding new order:", err);
            return res.status(500).send({error: 'Error editing table'});
        } else {
            console.log("New order added successfully.");
            res.send(results);
        }
     });

});

module.exports = router;
