const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));

router.use(session({
    secret:'keyboard set',
    resave: false,
    saveUninitialized: true
}))


router.get('/', function(req, res){
   console.log('get-/',req.body.username);
   console.log('重定向还有没有值：',req.session.username);
   res.sendFile('index.html', {root: 'public'}, function(err){
       console.log('error', err);
   });
});

router.get('/login', function(req, res){
  // 临时测试用
    /**
     * 
     * 1.可以根据文件名设置Content-Type
     * 2. 第一个参数必须是绝对路径， 除非第二个参数已经设置root
     * 3. 回调函数， 发送完成或者是出错调用；
     * 4. 版本之前用4.8
     * 
     */
    console.log('get-login',req.body.username);
    res.sendFile('login.html', {root: 'public'}, function(err){
        console.log('error', err);
    });
});

router.post('/login', function(req, res){
    
    req.session.username = req.body.username;
    console.log('username:',req.body.username);
     res.redirect('/');
});


router.get('/user', function(req, res, next){
    
})

module.exports = router;