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
    userModel.queryByNamePwd(username,password,function(result){
        if(result.length>0){
            res.send('welcome index');
        }else{
            res.render('login');
        }
    });
};
exports.regist = function(req,res){
    //接收数据
    var email = req.body.email;
    var name = req.body.name;
    var pwd = req.body.pwd;
    var pwd2 = req.body.pwd2;
    //验证数据
    if(pwd==pwd2){
        //数据操作
        userModel.save(email,name,pwd,function(result){
            if(result.affectedRows>0){
                res.redirect("/login");
            }else{
                res.render("reg");
            }
        });
    }else{
        res.render("reg");
    }
};