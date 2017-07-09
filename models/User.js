// 模型类， 通过操作模型类操作数据
const  mongoose = require('mongoose');
// 加密操作
const crypto = require('crypto');
const key = "secret-key";
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema  = new mongoose.Schema({
    username: {type: String, maxlength:18},
    tel:{type: String, },
    userpass: {type:String},
    role: {type: Number, default: 0},
})

// 中间件
userSchema.pre('save', function(next){
    var user = this;
    console.log(user);
    this.userpass = converPass(user.userpass, key);
    console.log(JSON.stringify(user));
    next();
})

function converPass(originalPass, secret){
   return  crypto.createHmac('sha256', secret)
                   .update(originalPass)
                   .digest('hex');
}
module.exports = mongoose.model('User', userSchema);