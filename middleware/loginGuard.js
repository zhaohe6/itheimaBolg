const guard = (req,res,next)=>{
    if(req.url!='/login' && !req.session.hasOwnProperty('username')){
        res.redirect('/admin/login')
    }else{
        //如果用户是登录状态，而且不是管理员，回到首页
        if(req.session.role == 'normal' && req.url!='/login'){
            res.redirect('/home')
            return;
        }
        next()
    }
}
module.exports = guard