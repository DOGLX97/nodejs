var express = require('express');
//引入控制器（引入模块）
var user = require('../controllers/user');
var router = express.Router();
//路由做转发
router.get('/login', user.login);
router.get('/reg', user.reg);
router.post('/checkLogin',user.checkLogin);
module.exports = router;
