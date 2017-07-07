// 商品分类

/**
 * 
 * Everything in Mongoose starts with a Schema.
 * Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 * 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CatSchema = new Schema(
    {
        tagName: {type: String, unique:true, index: true},
        createTime:{type:Date, default: Date.now},       
    }
)

module.exports = mongoose.model('Cat', CatSchema);