var Product = require('../models/product');
var Cat = require('../models/cat');

exports.new = function (req, res) {
   var productObj = req.body;
   var catId = req.body.cat;
   console.log(catId);
   Cat.findById(catId, function (err, cat) {
     if (err) return res.status(400).json({msg: '分类获取失败',err})
     if (!cat) {
       res.status(400).json({
         msg: '分类不存在'
       })
     }else {
       var product = new Product(productObj);
       product.save(function (err, newproduct) {
         if (err) return res.status(500).json({msg: '新增商品失败', err});
         cat.products.push(newproduct._id)
         cat.save(function (err) {
           if (err) return res.status(500).json({msg: '分类添加商品失败',err});
          res.json({
            msg: '新增商品成功',
            product: newproduct
          })
        })
      })
    }
  })
}