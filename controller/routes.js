
let Cat = require('./cat');
let Product = require('./product');
let User = require('./user');
module.exports = function (app) {
    //添加标签
    app.post('/cat', Cat.add);
    //获取标签列表
    app.get('/catList', Cat.list);



    // product 相关的信息
    // 新增product    
    app.post('/product/new', Product.new);


    // 注册
    app.post('/user/signup', User.signup);
}