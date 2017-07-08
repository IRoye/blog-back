// 商品分类

/**
 * 
 * Everything in Mongoose starts with a Schema.
 * Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 * 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CatSchema = new Schema(
    {
        tagName: {type: String, unique:true, index: true},
        createTime:{type:Date, default: Date.now},
        // 表之间的对应关系
        products:[
            {
                type: ObjectId,
                ref: 'Product'
            }
        ]      
    }
)

module.exports = mongoose.model('Cat', CatSchema);