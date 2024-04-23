const connection = require('../routes/dbms');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from opportunity where opportunity id = {id}"


/* exports.getOppWithID = async function getOppWithID(req) {
	
	// query sent to db: selects specific 1 object from db from matching id
	const sql = `SELECT * FROM opportunity WHERE opportunity_id=${req}`;
	
	try {
	  const connection = await pool.getConnection();
	  const [rows, fields] = await connection.execute(sql);
	  
	  // Process the results
	  console.log('Query results:', rows);
  
	  // Release the connection back to the pool
	  connection.release();
  
	  // Close the connection pool when done
	  pool.end();
	} catch (error) {
	  console.error('Error:', error);
	}
  }; */



exports.getOppWithID = async function getOppWithID(req) {
	return new Promise((resolve, reject) =>{
		connection.query(sql, function (err, data)  {
			if(err){
				reject(err);
			}
			else {
				resolve(data);
			}
		});
	});
}