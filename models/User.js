// 模型类， 通过操作模型类操作数据
var mongoose = require('mongoose');

var userSchema = require('../schemas/user');

module.exports = mongoose.model('User', userSchema);