var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', function(req, res, next){
	
	// check if username and password match 

	if(res.req.body.username == 'CISGOAdmin@up.edu' && res.req.body.password == 'GlobalContributions@UP')

	{
		res.sendFile('/private/adminPage.html', {root: '.'});
	}
	else
	{
		res.status(403).send("Incorrect password. Please try again.");
	}
});

module.exports = router;