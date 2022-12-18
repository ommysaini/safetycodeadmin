const mongoose = require("mongoose");
const validator = require("validator");


const addNewCustomer = new mongoose.Schema ({
    fullname : {
        type:String,
        required:true,
        
    },
    number : {
        type : Number,
        required: true,
    },
    address : {
        type : String,
        
    },

    

})

// create a new collection

const Customer = new mongoose.model('Customer', addNewCustomer);

module.exports = Customer;