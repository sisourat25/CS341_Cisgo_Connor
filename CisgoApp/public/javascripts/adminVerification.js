var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){

        // check if username and password match
        // CHANGE USERNAME and PASSWORD !!!!!!!!!!!!
        if(res.req.body.username == 'username' && res.req.body.password == 'password')
        {
                res.sendFile('/public/adminPage.html', {root: '.'});
        }
        else
        {
                res.status(403).send("Please login at /login!");
        }
});

module.exports = router;