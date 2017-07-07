
let Cat = require('./cat');
module.exports = function (app) {
    //添加标签
    app.post('/cat', Cat.add);
    //获取标签列表
    app.get('/catList', Cat.list);
}