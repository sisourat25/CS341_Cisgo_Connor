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
    const { name, event, emailcheck, email, city, country, coorlong, coorlat, department, type, status, startmonth, startyear, endmonth, endyear, description } = req.body;

    
    // query for inserting into database
    const query = "INSERT INTO CISGO (ADMINSTATUS, NAME, EVENT, EMAILCHECK, EMAIL, CITY, COUNTRY, COORLAT, COORLONG, DEPARTMENT, TYPE, STATUS, STARTMONTH, STARTYEAR, ENDMONTH, ENDYEAR, DESCRIPTION) VALUES ('Pending', " +

            "'" + name + "'," +
            "'" + event + "'," +
            "'" + emailcheck + "'," +
            "'" + email + "'," +
            "'" + city + "'," +
            "'" + country + "'," +
            "'" + coorlong + "'," +
            "'" + coorlat + "'," +
            "'" + department + "'," +
            "'" + type + "'," +
            "'" + status + "'," +
            "'" + startmonth + "'," +
            "'" + startyear + "'," +
            "'" + endmonth + "'," +
            "'" + endyear + "'," +
            "'" + description + "')" 



                       
    console.log("Query: ", query);

    // do the SQL query
    db.dbquery(query, function(err, results) {
        if (err) {
            console.log("Error adding new order:", err);
        } else {
            console.log("New order added successfully.");
	    //send a resonse
	    //res.send
            res.send(results);
        }
     });

});

module.exports = router;
