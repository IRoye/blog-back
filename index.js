var express = require('express');
var mongoose = require('mongoose');
var app = express();

/**
 * 
 * 根据不同的功能划分模块
 * 
 */

app.use('/', require('./routers/admin'));
app.use('/login', require('./routers/admin'));
// app.use('/api', require('./routers/api'));
// app.use('/', require('./routers/main'));

mongoose.connect('mongodb://localhost:27017/blog', function(err){
   if(err){
     console.log('连接数据库失败');
   }else{
     console.log('连接数据库成功');
     //监听http请求
     app.listen(8080);
   }
});