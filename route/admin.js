const express = require('express')
const admin = express.Router()
//登录页面渲染
admin.get('/login',require('./admin/loginPage'))
//退出登录
admin.get('/loginOut',require('./admin/loginOut'))
//登录验证
admin.post('/login',require('./admin/login'))
//用户页面渲染
admin.get('/user',require('./admin/userPage'))
//用户页面渲染
admin.get('/user-edit',require('./admin/userEdit'))
//添加用户操作
admin.post('/user-edit',require('./admin/userEditFn'))
//修改用户操作
admin.post('/user-edit-update',require('./admin/userEditUpdate'))
//删除用户
admin.get('/delete',require('./admin/userDele'))
//文章列表路由
admin.get('/article', require('./admin/article'))
//文章编辑页面路由
admin.get('/article-edit', require('./admin/article-edit'))
//修改文章详细信息
admin.post('/article-editFn', require('./admin/article-editFn'))
//添加文章
admin.post('/article-add', require('./admin/article-add'))
//删除文章
admin.get('/article-delete', require('./admin/article-delete'))
//将路由对象作为模块成员进行导出
module.exports = admin