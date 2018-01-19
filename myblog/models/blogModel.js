var db = require('./db');
exports.queryAllTypes=function (userId,callback) {
    var sql="select * from t_article_type where user_id=?";
    db.query(sql,[userId],callback);
};
exports.saveType=function(typeName,userId,callback){
    var sql="insert into t_article_type(type_name, user_id) values(?,?)";
    db.query(sql,[typeName,userId],callback);
};
exports.queryBlogs = function (userId, callback) {
    var sql = 'select blog.*, type.type_name from t_article blog, t_article_type type where blog.type_id=type.type_id and blog.user_id=?';
    db.query(sql, [userId], callback);
};
exports.saveBlog = function(title,content,typeId,userId,callback){
    var sql="insert into t_article(title,content,type_id,user_id) values(?,?,?,?)";
    db.query(sql,[title,content,typeId,userId],callback);
};
exports.deleteBlog = function (blogIds, callback) {
    var sql = 'delete from t_article where article_id in ('+blogIds+')';
    db.query(sql, [], callback);
};