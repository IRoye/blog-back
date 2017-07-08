// 模型类， 通过操作模型类操作数据
const  mongoose = require('mongoose');
// 加密操作
const bcrypt = require('bcrypy');
const saltRounds = 10;
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema  = new mongoose.Schema({
    username: {type: String, maxlength:18},
    password: String,
    role: {type: Number, default: 0},
})

// 中间件
userSchema.pre('save', function(next){
    var user = this;

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err,salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
    //  hash ， 保存加密后的结果
      user.password = hash;
      next()
    })
  })
})

bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    // res == true
});


module.exports = mongoose.model('User', userSchema);