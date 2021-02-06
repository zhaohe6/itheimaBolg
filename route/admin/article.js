const dateFormat = require('dateformat')
const pagination = require('mongoose-sex-page')
const {Article} = require('../../model/article')
module.exports = (req,res)=>{
    pagination(Article)
    .page(req.query.page).size(6).display(5)
    .find()
    .populate("author","username")
    .exec((err, value)=>{
        let str = JSON.stringify(value)
        let articles = JSON.parse(str)
        let val = articles.records
        val.forEach((value)=>{
            value.publishDate = dateFormat(value.publishDate,'yyyy-mm-dd')
        })
        
        res.render('admin/article',{
            articles
        })
        
    })
   
}