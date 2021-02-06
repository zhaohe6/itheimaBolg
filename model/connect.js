const config = require('config')
const mongoose = require('mongoose')
mongoose.connect(`mongodb://${config.get("db.user")}:${config.get('db.pwd')}@${config.get('db.host')}/${config.get('db.name')}`,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log('数据库连接成功')
})
.catch((reason)=>{
    console.log('数据库连接失败',reason)
})