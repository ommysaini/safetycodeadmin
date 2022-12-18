const mongoose = require("mongoose");
const validator = require("validator");


const addNewItemSchema = new mongoose.Schema ({
    name : {
        type:String,
        required:true,
        
    },
    skucode : {
        type : String,
        required: true
    },
    stock : {
        type : String,
    },

    

})

// create a new collection

const Item = new mongoose.model('Item', addNewItemSchema);

module.exports = Item;