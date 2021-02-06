const {Comment} = require('../../model/comment')
module.exports = (req,res)=>{
    const { content, uid, aid} = req.body

    Comment.insertMany([{
        content: content,
        uid: uid.slice(1,-1),
        aid: aid,
        time: new Date()
    }]).then((val)=>{
        res.redirect('/home/article?_id='+aid)
    },(rej)=>{
        console.log(rej)
    })
} 