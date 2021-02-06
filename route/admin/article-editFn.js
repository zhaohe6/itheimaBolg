const formidable = require('formidable')
const path = require('path')
const {Article} = require('../../model/article')
module.exports = (req,res)=>{
    //创建实例对象
    const form = new formidable.IncomingForm()
    //上传文件目录
    form.uploadDir = path.join(__dirname,'../','../','public','uploads')
    //是否保留后缀
    form.keepExtensions = true

    //解析表单
    form.parse(req,(err,fields,files)=>{  
        Article.updateOne(
            {_id:req.query._id}
            ,{
            title: fields.title,
            author:fields.author,
            publishDate:fields.publishDate,
            cover:files.cover.path.split("public")[1],
            content: fields.content
        }).then((value)=>{
            res.redirect('/admin/article')
        },(reason)=>{
            console.log(reason)
        })
    })
}