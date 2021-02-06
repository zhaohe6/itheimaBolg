const {User} = require('../../model/user')
module.exports = (req,res)=>{
    console.log(req.query.id)
    User.findOneAndDelete({_id:req.query.id})
    .then((value)=>{
        console.log('success',value)
        res.redirect(`/admin/user`)
    },(reason)=>{
        console.log('fail',reason)
    })
}