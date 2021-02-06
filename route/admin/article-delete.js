const {Article} = require('../../model/article')
module.exports = (req,res)=>{
Article.remove({
    _id:req.query._id
}).then(value=>{
    res.redirect('admin/article')
},rej=>{
    console.log(rej)
})
}