// 存储文章

let Post = require('../models/post.js');

// 新建文章
exports.new = function (req, res) {
   var postObj = req.body;
   var catId = req.body.cat;
   console.log(catId);
       var post = new Post(postObj);
       post.save(function (err, newPost) {
         if (err) return res.json({msg: '新增文章失败', err});
          res.json({
            msg: '新增文章成功',
            post: newPost
          })
    })
}
// 获取文章列表
exports.getPosts = function(req, res){
    Post.find({}, function(err, posts){
         if(err) return resizeBy.status(500).json({err, msg: '获取分类失败'})
         res.json({
             code: '0',
             msg: '获取文章列表成功',
             posts
         })    
    });
}