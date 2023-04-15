const mongoose = require('mongoose');
const dbScheme = mongoose.Schema({
    name: {
        type:String,
        required:[true, "please enter a name"],
    },
    email: {
        type:String,
        required:[true, "please enter a email"],
    },
    phone: {
        type:String,
        required:[true, "please enter a phone number"],
    },
},
    {
        timestamps:true,
    }

);

module.exports = mongoose.model("contacts",dbScheme);