var express = require('express');
var router = express.Router();
//引入控制器（引入模块）
var user = require('../controllers/user');
var welcome = require('../controllers/welcome');
//路由做转发

router.get('/', welcome.index);
router.get('/login', user.login);
router.get('/reg', user.reg);
router.post('/checkLogin',user.checkLogin);
router.post('/regist',user.regist);
module.exports = router;
