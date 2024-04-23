/**
 * pointData.js
 * 
 * a location for pointSeries data to be posted and retrieved
 * used by filterAndMap.js
 * 
 * Aether Mocker
 */
console.log("HELLO FROM POINTDATA");

var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
	var promise = filterSelection("all");
	promise.then(function(resp){
		res.status(200).send(resp);
	}, function(error){
		res.status(503).send(error);
	})
});

module.exports = router;