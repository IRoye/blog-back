let Cat = require('./cat');
let Product = require('./product');
let User = require('./user');
let Post = require('./post.js');
module.exports = function (app) {
    //添加标签
    app.post('/cat', Cat.add);
    //获取标签列表
    app.get('/catList', Cat.list);

    // product 相关的信息 新增product
    app.post('/product/new', Product.new);

    // 注册
    app.post('/user/signup', User.signup);

    // 登录
    app.post('/user/signin', User.signin);

    // 这部分， 通过localStorge中保存的userId来查询用户的信息
    app.get('/user/:userId', User.getUserById);

    // 文章新增
    app.post('/post/newPost', Post.new);

    //获取文章列表
    app.get('/post/getPosts', Post.getPosts);
}