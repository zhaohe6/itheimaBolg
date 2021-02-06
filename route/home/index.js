const {Article} = require('../../model/article')
const dateFormat = require('dateformat')
const pagenation = require('mongoose-sex-page')
module.exports = (req,res)=>{
    pagenation(Article)
    .page(req.query.page || 1)
    .size(2)
    .display(5)
    .find()
    .populate("author")
    .exec((err,value)=>{
        let val = JSON.parse(JSON.stringify(value))
        val.records.forEach((value)=>{
            value.publishDate = dateFormat(value.publishDate,'yyyy-mm-dd')
        })
        res.render('./home/default.art',{
            articles:val
        })
    })
    
}