//配置数据库
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'myblog'
});
exports.query = function(sql,callback){
    connection.connect();
    connection.query(sql, function (error, rows) {
        if (error) throw error;
        callback(rows);
        connection.end();
    });
};