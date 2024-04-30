/* adminTableDeleteRoute.js
* handles deleting rows from the database, used in the admin table
*/

// Import required modules
const express = require('express');
const router = express.Router();
const db = require('./dbms'); // Import the database module

// Route handler for POST requests to /neworder
router.post('/', function(req, res) {

    const numids = req.body.numids.split(','); // Split the string back into an array
    
    var rowList = '';

    for(let i = 0; i < numids.length; i++) {
        rowList = rowList + "" + numids[i] + ", ";

        if(i == numids.length - 1) {
            rowList = rowList + "" + numids[i];
        }
        else {
            rowList = rowList + "" + numids[i] + ", ";
        }
    }

    
    // query for inserting into database
    const query = "DELETE FROM CISGO WHERE NUMID IN (" + rowList + ")";
                       
    console.log("Query: ", query);

    // do the SQL query
    db.dbquery(query, function(err, results) {
        if (err) {
            console.log("Error deleting rows", err);
            return res.status(500).send({error: 'Error deleting rows'});
        } else {
            console.log("Rows deleted successfully");
            res.send(results);
        }
     });

});

module.exports = router;
