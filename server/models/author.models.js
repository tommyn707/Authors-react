const mongoose = require("mongoose");


const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "True"],
        minlength:[2, "not enough"]
    },
    lastName:{
        type: String,
        required:[true, "True"],
        minlength:[3, "not enough"]
    }

})
module.exports.Author = mongoose.model("Author", AuthorSchema);