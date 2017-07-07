const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
let routes = require('./controller/routes');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
/**
 * 
 * 根据不同的功能划分模块
 * 
 */
routes(app);

mongoose.connect('mongodb://localhost:27017/blog', function(err){
   if(err){
     console.log('连接数据库失败');
   }else{
     console.log('连接数据库成功');
     //监听http请求
     app.listen(8080);
   }
});