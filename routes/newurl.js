var express = require('express');
var router = express.Router();
var shortUrl = require('../models/shortUrl');

//antes: router.get('/:urlToForward', function(req, res, next){
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

module.exports = router;