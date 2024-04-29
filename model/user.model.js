const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required : true
    },
    lastName:{
        type : String,
        required : true
    },
    age :{
        type : Number,
        required : true,
    },
    phone:{
        type : Number,
        required : true,
        validate: {
            validator: function(v) {
              return /^[0-9]{10}$/.test(v);
            },
            message: 'Phone number must be a 10-digit number!'
          },
    }

});

const user = mongoose.model("user" , userSchema);

module.exports = user;