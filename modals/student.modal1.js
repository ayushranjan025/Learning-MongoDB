const mongoose = require('mongoose')

//schmea
const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    age : {
        type: Number,
        min : 19
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 15
    },
    subjects : [String],
    createdAt: {
        type : Date,
        immutable: true,
        default : () =>{
            return Date.now()
        }
    }
},{versionKey: false, timestamp : true})

module.exports = mongoose.model("Student", studentSchema)//creates a collection with name Student