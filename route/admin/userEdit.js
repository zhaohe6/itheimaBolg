const { User } = require('../../model/user')
module.exports = (req,res)=>{
    const { message , id } = req.query
    if(id){
        User.findOne({_id:id}).then((value)=>{
            //渲染用户编辑页面并且将查询的数据显示
            res.render('admin/user-edit',{
                message:message,
                user:value,
                link:`/admin/user-edit-update?id=${id}`,
                btn:'修改'
            })
        },(reason)=>{
            console.log(reason)
        })
        
    }else{
        res.render('admin/user-edit',{
            message:message,
            link:'/admin/user-edit',
            btn:'添加'
        })
    }
    
}