const express = require('express')
const path = require('path')
const home = require('./route/home')
const admin = require('./route/admin')
const bodyParser = require('body-parser')
const session = require('express-session')
const config = require('config')
require('./model/connect')

const app = express()
const port = 7788
//模板的位置
app.set('views',path.join(__dirname,'view'))
//模板的后缀
app.set('view engine','art')
//处理模板的引擎是什么
app.engine('art',require('express-art-template'))
//设置静态文件的路径
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({secret: 'secret key'}))
app.use('/admin',require('./middleware/loginGuard'))
app.use('/home',home)
app.use('/admin',admin)
app.listen(port, () => {
    console.log(config.get("title"))
    console.log(`Example app listening on ${port} port!`)
})