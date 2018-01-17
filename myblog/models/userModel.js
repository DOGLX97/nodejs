var db = require('./db');

exports.queryByNamePwd = function (username, password, callback) {
    var sql = "select * from t_user where username=? and password=?";
    db.query(sql, [username, password], callback);
};

exports.save = function(email,username,password,callback){
    var sql="insert t_user(email,username,password) values(?,?,?)";
    db.query(sql,[email,username,password],callback);
};