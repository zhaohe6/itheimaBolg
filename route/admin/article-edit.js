const {Article} = require('../../model/article')
const dateFormat = require('dateformat')
module.exports = (req,res)=>{
    if(req.query._id){
        Article.findOne({_id:req.query._id})
    .then((value)=>{
        value.publishDate = dateFormat(value.publishDate,'yyyy/mm/dd')
        res.render('admin/article-edit.art',{
            detailInfo:value,
            link: `/admin/article-editFn?_id=${value._id}`
        })
    },(rej)=>{
        console.log(rej)
    })
    }else{
        res.render('admin/article-edit.art',{
            link: `/admin/article-add`
        })
    }
    
}