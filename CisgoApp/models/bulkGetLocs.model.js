const connection = require('../routes/dbms');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from location"
exports.bulkGetLocs = async function bulkGetLocs(req) {
	// query sent to db: returns all objects from location
	var locIds = Object.values(req);
    const sql = "SELECT * FROM localtable";
	return new Promise((resolve, reject) =>{
		connection.dbquery(sql, [locIds], (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}