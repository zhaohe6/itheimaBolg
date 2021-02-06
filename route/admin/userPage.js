const { User } = require('../../model/user')
module.exports = async (req,res)=>{
    //接受客户端的分页参数
    let page = req.query.page || 1
    console.log('page: '+page)
    //每一页显示的数据条数
    let pageSize = 6
    //查询数据的总条数
    let count  = await User.countDocuments({})
    //分成几页
    let total = Math.ceil(count/pageSize)
    let start = (page-1)*pageSize
    User.find({}).limit(pageSize).skip(start).then((value)=>{
        res.render('./admin/user',{
            users:value,
            pages: total
        })
    })
}