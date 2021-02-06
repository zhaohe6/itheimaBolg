const {Article} = require('../../model/article')
const {Comment} = require('../../model/comment')
const dateFormat = require('dateformat')
module.exports = (req,res)=>{
    
    Article
    .findOne({_id:req.query._id})
    .populate('author')
    .then((value)=>{
        let comments = ''
        let val = JSON.parse(JSON.stringify(value))
        value.publishDate = dateFormat(value.publishDate,'yyyy-mm-dd')
        Comment
        .find({aid:req.query._id})
        .populate('uid')
        .then((value)=>{
            value = JSON.parse(JSON.stringify(value))
            console.log(value)
            comments = value
        }).then((value)=>{
            res.render('home/article',{
                detail:val,
                comments:comments
            })
        })
        
    })
    
}