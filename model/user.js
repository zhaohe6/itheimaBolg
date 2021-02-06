const mongoose = require('mongoose')
const md5 = require('md5-node')
const schema = mongoose.Schema({
    username:{
        required:true,
        type:String,
        minlength:2,
        maxlength:20
    },
    password:{
        required: true,
        type:String
    },
    email:{
        required:true,
        type: String,
        unique: true
    },
    role:{
        required:true,
        type:String
    },
    //0代表启用，1代表禁用
    state:{
        default: 0,
        type:Number
    }
})
const User = mongoose.model('User',schema)
module.exports = {
    User
}