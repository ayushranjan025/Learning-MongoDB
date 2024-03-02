const mongoose = require('mongoose')
const studentModel = require("./modals/student.modal1")

mongoose.connect("mongodb://127.0.0.1/be_demodb")

const db = mongoose.connection

db.on("error", ()=>{
    console.log("error occured")
})

db.once("open", ()=>{
    console.log("connected to server")
    //logic to insert data in db
    init()

    //Running quries on MongoDB
    dbQueries();
})

async function init(){
    //Logic to insert data in the DB
    const student = {
        name : 'Ayush',
        age : 19,
        email: 'ayushraj2507@gmail.com',
        subjects: ["physics", "maths"]
    }

    const std_obj = await studentModel.create(student)
    console.log(std_obj)
}

async function dbQueries(){
    //reading student data
    console.log("in the db function")

    //read the student data based on id
    try{
        const student = await studentModel.findById("63e322c3b75933ab75bb5ae9")
        console.log(student)
    }catch(err){
        console.log(err)
    }

    //read based on name
    try{
        const students = await studentModel.findOne({name: "Ayush"})
        console.log(students)
    }catch(err){
        console.log(err)
    }

    /*
    Deals with multiple queries
    */
   try{
    console.log("in deals with multiple queries")
    const students = await studentModel.where("age").gt("10").where("name").equals("Ayush").limit(2)
    console.log(students)
   }catch(err){
    console.log(err)
   }

   /*
   Delete one document where name = Ayush
   */
  const students = await studentModel.deleteOne({name: "Ayush"})
  console.log(students)

}