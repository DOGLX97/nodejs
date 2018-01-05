var express = require('express');
var router = express.Router();


router.get('/login',function(req,res){
  res.render('login');
});

router.post('/checkLogin',function(req,res){
  var username=req.body.username;
  var password=req.body.password;
  if(username=='lx'&&password=='000'){
    res.send('success');
  }else{
    res.send('fail');
  }
});

module.exports = router;
