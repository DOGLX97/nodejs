var db = require('./db');
exports.queryAllTypes=function (userId,callback) {
    var sql="select * from t_article_type where user_id=?";
    db.query(sql,[userId],callback);
};
exports.saveType=function(typeName,userId,callback){
    var sql="insert into t_article_type(type_name, user_id) values(?,?)";
    db.query(sql,[typeName,userId],callback);
};