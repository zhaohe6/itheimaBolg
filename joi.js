const joi = require('joi')
const { Mongoose } = require('mongoose')
const schema = {
    username: joi.string().min(2).max(5)
}
joi.valid()

/*
返回promise的有:
express中的use
Mongoose的findOne、find
joi的validate

*/