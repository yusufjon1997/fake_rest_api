const mongoose = require('mongoose');

// const Schema = mongoose.Schema();

const ProductsSchema = new mongoose.Schema({
    name : String,
    // author : String,
    // tags : [String ],
    // date : {type:Date , default: Date.now()},
    // isPublished : Boolean
    category : String,
    price : { type : Number, required : true}
})

const Products = mongoose.model('Products', ProductsSchema);




module.exports = Products ;
