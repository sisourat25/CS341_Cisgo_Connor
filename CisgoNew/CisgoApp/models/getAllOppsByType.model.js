const connection = require('../routes/dbms');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from opportunity where type = {type}"

/* exports.getAllOppsByType = async function getAllOppsByType(req) {

	// query sent to db: returns all objects from opportunity that match type
    const sql = `SELECT * FROM opportunity WHERE type='${req}' AND status <> 'Deleted'`;
	
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


exports.getAllOppsByType = async function getAllOppsByType(req) {
	// query sent to db: returns all objects from opportunity that match type
    const sql = `SELECT * FROM opportunity WHERE type='${req}' AND status <> 'Deleted'`;
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}
