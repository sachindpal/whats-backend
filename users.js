var BaseModel = require('./models/BaseModel.js')
const commonModel = new BaseModel;
var Boom =  require("boom");


const userList = async(req,res,next)=>{
    console.log('lllllll',req.query)
  return await commonModel.chatHistory(req.query.user_id).then((data)=>{
    console.log('dslkfkljdsf',data)
        res.send(data)
   }).catch((err)=>{
        throw err
   })
}

const login = async(req,res,next) =>{
    if(req.body.number && req.body.password){
        return await commonModel.fetchFirstObj({mobileNumber:req.body.number,password:req.body.password},'users').then((data)=>{
            console.log(data , 'dfsdf')
            if(!data){
                const data = { "error_code": "402" };
                throw Boom.badRequest("user not validate", data);

            }
            res.send(data)
       }).catch((err)=>{
            throw err
       })
    }else{
        res.send(new Error())
    }
    
}


const messageList = async(req,res,next)=>{
    
    return await commonModel.fetchMultipleWithJoin(req.body.myId,req.body.frontUserId).then((data)=>{
          res.send(data)
     }).catch((err)=>{
          console.log('errrrrrrrrrrrrr',err)
     })
  }

module.exports.users = {userList,login,messageList}