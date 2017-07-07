// 
let Cat  = require('./cat');
module.exports = function(app){
    // 用app 来调用这个
    app.get('/cat', Cat.add);
}