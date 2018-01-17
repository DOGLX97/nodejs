var userModel = require('../models/userModel');
exports.login = function(req, res){
    res.render('login');
};
exports.reg = function(req, res){
    res.render('reg');
};
exports.checkLogin = function(req, res){
    //接收数据
    var username=req.body.uname;
    var password=req.body.pwd;
    //验证数据
    //...
    //连接数据库
    userModel.queryByNameAndPwd(username,password,function(result){
        if(result.length>0){
            res.send('welcome index');
        }else{
            res.render('login');
        }
    });
};