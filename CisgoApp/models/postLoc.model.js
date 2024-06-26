const connection = require('../routes/dbms');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert location into location"
exports.postLoc = async function postLoc(req) {
	const sql = `INSERT INTO location (coords, city, state, country, countrycode) VALUES(Point(${req.body.ycoord}, ${req.body.xcoord}), "${req.body.city}", "${req.body.state}", "${req.body.country}", "${req.body.countryCode}")`;

	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else {
				resolve(data);
			}
		});
	});
}