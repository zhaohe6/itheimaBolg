const mongoose = require('mongoose')
const {User} = require('./user')
const {Article} = require('./article')
const schema = mongoose.Schema({
    //文章id
    aid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: Article
    },
    //用户id
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: User
    },
    time:{
        type: Date
    },
    content:{
        type: String
    }
})
const Comment = mongoose.model('Comment',schema)
module.exports = {
    Comment
}