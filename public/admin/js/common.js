function serializeToJson(arg){
    var obj = {}
    arg.forEach((value,index)=>{
        obj[value.name] = value.value
    })
    return obj
}
