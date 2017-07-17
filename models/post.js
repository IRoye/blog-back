//  存储文章的schema 
const mongoose = require('mongoose');
let  Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var PostSchema = new Schema({
  title: String,
//这里存储的是标签的ID
  tags:{type: Array, index: true},
  content: String,
  createTime:{type:Date, default: Date.now},
  
})
module.exports = mongoose.model('Post',PostSchema);