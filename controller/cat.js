//  商品分类的API
let Cat  = require('../models/cat');


// 添加新的商品分类
exports.add = function(req, res){
  console.log('req', req);
  let _category = req.body;
  let category = new Cat(_category);
  category.save(function(err, category){
    if(err) {
      if(err.code == '11000'){
           return res.json({err, msg: '请勿重复添加', code: '2'})
      }
      return res.json({err, msg: '添加失败，请重试', code: '2'})
    }
      res.json({
          msg: '分类添加成功',
          category
      })  
})
}

//  查询列表
exports.list = function(req, res){
    Cat.find({}, 'tagName', function(err, cats){
         if(err) return resizeBy.status(500).json({err, msg: '获取分类失败'})
         res.json({
             code: '0',
             msg: '获取分类成功',
             cats
         })    
});
}