const pool = require('../routes/dbms');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from type"

/* exports.getAllTypes = async function getAllTypes(req) {

	// query sent to db: returns all objects from type
    const sql = "SELECT * FROM type";
	
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

exports.getAllTypes = async function getAllTypes(req) {
	// query sent to db: returns all objects from type
    const sql = "SELECT * FROM type";
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}