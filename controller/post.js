// 存储文章

let Post = require('../models/post.js');

// 新建文章
exports.new = function (req, res) {
   var postObj = req.body;
   var catId = req.body.cat;
   console.log(catId);
       var post = new Post(postObj);
       post.save(function (err, newPost) {
         if (err) return res.json({msg: '新增文章失败', err, code : '3'});
          res.json({
            msg: '新增文章成功',
            post: newPost
          })
    })
}
// 获取文章列表
exports.getPosts = function(req, res){
    Post.find({}, function(err, posts){
         if(err) return res.json({err, msg: '获取分类失败', code : '3'})
         res.json({
             code: '0',
             msg: '获取文章列表成功',
             posts
         })    
    });
}

// 获取单篇文章
exports.getPost = function(req, res){
   let postId = req.query.postId
   console.log('postObj:', postId);
   Post.findOne({_id: postId}, function(err, post){
        if(err) return res.json({err, msg: '获取文章失败', code: '3'})
         res.json({
             code: '0',
             msg: '获取文章成功',
             post
         })    
   });
}