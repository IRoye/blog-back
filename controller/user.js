let User = require('../models/user.js');

exports.signup = function(req, res){
   let _user = req.body;
   User.findOne({username: user.username}, function(err, user){
      if(err){
          res.json({code: '2', msg: '注册失败， 请重试', err});
      }
      if(user){
        //如果找到
        return res.json({code: '2', msg: '该用户名已经注册， 请重试'})
      }else{
        //添加
        let wrapperUser = new User(_user);
        wrapperUser.save(function(err, user){
            if(err) return res.json({code: '2', msg: '注册失败， 请重试', err})
             res.json({
                 code: '0',
                 userId: user._id,
                 username: user.username,
                 msg: '注册成功',
             })
    })
        
      }
   })
}