const md5 = require('md5-node')
const path = require('path')
const { User } = require('../../model/user')
module.exports = async (req,res)=>{
    const {email,password} = req.body
    if(email.trim().length === 0||password.trim().length === 0){
        return res.status(400).render('admin/error',{msg:'邮件地址或者密码错误'})
    }
    let user = await User.findOne({email})
    if(!user){
        return res.status(400).render('admin/error',{msg:'邮件地址或者密码错误'})
    }
    if(md5(password) === user.password){
        req.session.username = user.username
        req.session.role = user.role
        req.app.locals.userInfo = user

        if(user.role == 'admin'){
            res.redirect('/admin/user')
        }else{
            res.redirect('/home')
        }
        
    }else{
        return res.status(400).render('admin/error',{msg:'邮件地址或者密码错误'})
    }
}