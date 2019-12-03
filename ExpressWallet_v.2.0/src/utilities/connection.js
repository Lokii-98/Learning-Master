const {Schema} = require("mongoose");
const Mongoose = require("mongoose");
Mongoose.promise = global.promsie;
const url = "mongodb://localhost:27017/user";

let userSchema = Schema({
    userName:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },

   
},{collection : "User"})

let collection={};

collection.getUserCollection = () =>{
    return Mongoose.connect(url,{useNewUrlParser : true}).then((database)=>{
        return database.model('User', userSchema)
    }).catch(()=>{
        let err = new Error("Could not connect to database");
        err.status =500;
        throw err;
    })
}

module.exports = collection;