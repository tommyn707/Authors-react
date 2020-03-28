const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authorsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then (() =>console.log('made connection to Database'))
    .catch (err => console.log("Something went wrong", err));