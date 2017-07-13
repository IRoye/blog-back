let User = require('../models/user.js');
const crypto = require('crypto');
const key = "secret-key";
//注册
exports.signup = function (req, res) {
    console.log('请求消息：', req.body);
    let _user = req.body;
    User.findOne({
        username: _user.username
    }, function (err, user) {
        if (err) {
            res.json({code: '2', msg: '注册失败， 请重试', err});
        }
        if (user) {
            //如果找到
            return res.json({code: '2', msg: '该用户名已经注册， 请重试'})
        } else {
            //添加
            let wrapperUser = new User(_user);
            wrapperUser.save(function (err, user) {
                if (err) 
                    return res.json({code: '2', msg: '注册失败， 请重试', err})
                res.json({code: '0', userId: user._id, username: user.username, msg: '注册成功'})
            })
        }
    })
}
//登录
exports.signin = function (req, res) {
    console.log('登录请求消息', req.body);
    let _user = req.body;
    let resultPass = converPass(_user.userpass, key);
    console.log('加密后密码：', resultPass);
    // 加密pass
    User.findOne({
        username: _user.username,
        userpass: resultPass
    }, function (err, user) {
        console.log('user:', user);
        let _user = {
            username: user.username,
            userId : user._id,
        }
        if (err) {
            return res.json({code: '3', msg: '登录失败， 请重试', err});
        }
        if (user) {
            return res.json({code: '0', msg: '登录成功！', _user});
        } else {
            return res.json({code: '2', msg: '该用户没有注册！'});
        }
    })
}


exports.getUserById = function(req, res){
   User.findOne({_id:req.params.userId}, function(err, user){
     if(err){
         res.json({msg: '查找用户失败', err});
     }
     if(user){
         let _user = {
            username: user.username,
            userId : user._id,
         }
         return res.json({msg: '读取用户成功', _user});
     }
   })
}


function converPass(originalPass, secret){
   return  crypto.createHmac('sha256', secret)
                   .update(originalPass)
                   .digest('hex');
}