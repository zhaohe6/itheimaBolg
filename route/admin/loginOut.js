module.exports = (req,res)=>{
    res.redirect('/admin/login')
    req.app.locals.userInfo = null
}