var express = require('express');
var router = express.Router();
var shortUrl = require('../models/shortUrl');

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.get('/:urlToShorten(*)', function(req, res, next) {
  var urlToShorten = req.params.urlToShorten;
  var regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  if(regex.test(urlToShorten)=== true){
    var short = Math.floor(Math.random()*100000).toString();
    var data = new shortUrl(
      {
        originalUrl: urlToShorten,
        shorterUrl: short
      }
    );

    data.save(function(err){
      if(err) {
        return res.send('Error saving to database');
      }
    //return res.json({data});
    });

    return res.json(data);
  }else{
    return res.json({urlToShorten: 'Failed'});
  }
  //return res.json({urlToShorten});
});
/*
router.get('/:urlToForward', function(req, res, next){
  var shorterUrl= req.params.urlToForward;
  shortUrl.findOne({'shorterUrl': shorterUrl}, function(err, data){
    if(err){
      return res.send('error reading database');
    }else{
      var re= new RegExp("^(http|https)://", "i");
      var strToCheck = data.originalUrl;
      if(re.test(strToCheck)=== true){
        res.redirect(301, data.originalUrl);
      }else{
        res.redirect(301, 'http://' + data.originalUrl);
      }
    }
  });
});
*/
module.exports = router;
