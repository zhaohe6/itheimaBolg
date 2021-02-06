const joi = require('joi')
const md5 = require('md5-node')
const {User} = require('../../model/user')
module.exports = (req,res)=>{
   const schema = {
        username: joi.string().min(2).max(12).required().error(new Error('用户名错误')),
        password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        email: joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        role: joi.string().valid('normal','admin').required().error(new Error('角色值非法')),
        state: joi.number().valid(0,1).required().error(new Error('状态值非法'))
   }
   joi.validate(req.body,schema)
   .then((value1)=>{
        return User.findOne({email:value1.email})
   },(reason1)=>{
        console.log('验证未通过',reason1)
        res.redirect(`/admin/user-edit?message=${reason1}`)
   })
   .then((value2)=>{
        if(value2===null){
            req.body.password = md5(req.body.password)
            return User.insertMany([req.body])
        }else{
            res.redirect(`/admin/user-edit?message=该邮箱已注册`)
        }
   },(reason2)=>{
       console.log(reason2)
   })
   .then((value3)=>{
        res.redirect(`/admin/user-edit?message=添加用户成功`)
   },(reason3)=>{
        console.log(reason3)
   })
}