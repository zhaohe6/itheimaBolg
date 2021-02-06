const { User } = require('../../model/user')
const md5 = require('md5-node')
module.exports = (req,res)=>{
    const id = req.query.id
    User.findOne({_id:id})
    .then((value)=>{
        if(md5(req.body.password) === value.password){
           return  User.updateOne({_id:id},{
               email: req.body.email,
               role: req.body.role,
               state: req.body.state,
               username:req.body.username
           })
        }
    },(reason)=>{
        
        console.log(reason)
    })
    .then((value)=>{
       if(!value){
            res.redirect(`/admin/user-edit?message=密码错误`)
       }else res.redirect(`/admin/user`)
    },(reason)=>{
        console.log(reason)
    })

    
}