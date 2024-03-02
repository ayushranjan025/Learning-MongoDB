const mongoose = require('mongoose')

//schmea
const studentSchema = new mongoose.Schema({
    name : String,
    age : Number
})

module.exports = mongoose.model("Student", studentSchema)//creates a collection with name Student